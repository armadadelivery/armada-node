// @armada/sdk — public entry point.
//
// The public surface is a single `ArmadaClient` class that exposes the v2 API
// methods. Request signing, rate-limit parsing, and error normalization all
// live in here so callers never have to think about HMAC or headers.
//
// For now we ship a hand-written thin axios wrapper that covers the whole v2
// surface. Once the openapi-generator Java jar is wired into CI, the types +
// request bodies will come from `generated/` and this wrapper will shrink
// to just the signing interceptor. The public API stays the same.

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import crypto from 'node:crypto';

export interface ArmadaClientOptions {
  apiKey: string;
  apiSecret: string;
  /** Defaults to sandbox. Pass the production URL explicitly. */
  baseUrl?: string;
  /** Axios request timeout in ms. Defaults to 30000. */
  timeoutMs?: number;
}

export interface RateLimit {
  limit: number | null;
  remaining: number | null;
  resetUnix: number | null;
}

export interface ArmadaResponse<T> {
  data: T;
  status: number;
  rateLimit: RateLimit;
}

export interface ArmadaError extends Error {
  status?: number;
  code?: string;
  rateLimit?: RateLimit;
  response?: unknown;
}

const DEFAULT_BASE = 'https://sandbox.api.armadadelivery.com';

function parseRateLimit(headers: Record<string, unknown>): RateLimit {
  const get = (k: string) => {
    const v = headers[k] ?? headers[k.toLowerCase()];
    return typeof v === 'string' ? Number(v) : null;
  };
  return {
    limit: get('x-ratelimit-limit'),
    remaining: get('x-ratelimit-remaining'),
    resetUnix: get('x-ratelimit-reset'),
  };
}

export class ArmadaClient {
  private http: AxiosInstance;
  private apiSecret: string;

  readonly deliveries: DeliveriesResource;
  readonly branches: BranchesResource;
  readonly wallet: WalletResource;
  readonly invoices: InvoicesResource;

  constructor(opts: ArmadaClientOptions) {
    if (!opts.apiKey) throw new Error('ArmadaClient: apiKey is required');
    if (!opts.apiSecret) throw new Error('ArmadaClient: apiSecret is required');
    this.apiSecret = opts.apiSecret;

    this.http = axios.create({
      baseURL: opts.baseUrl ?? DEFAULT_BASE,
      timeout: opts.timeoutMs ?? 30000,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Key ${opts.apiKey}`,
        'User-Agent': '@armada/sdk (node)',
      },
      validateStatus: () => true,
    });

    this.http.interceptors.request.use((config) => {
      const timestamp = Date.now().toString();
      const method = (config.method || 'GET').toUpperCase();
      // Sign the path *with* query string — that's what the server sees as
      // req.originalUrl. Drop undefined/null params before serializing so the
      // signed URL matches what axios actually puts on the wire.
      const cleanParams: Record<string, string> = {};
      if (config.params && typeof config.params === 'object') {
        for (const [k, v] of Object.entries(config.params)) {
          if (v !== undefined && v !== null) cleanParams[k] = String(v);
        }
      }
      config.params = cleanParams;
      const queryString = new URLSearchParams(cleanParams).toString();
      const basePath = config.url || '/';
      const path = queryString ? `${basePath}?${queryString}` : basePath;
      const body = config.data ? (typeof config.data === 'string' ? config.data : JSON.stringify(config.data)) : '';
      const payload = `${timestamp}.${method}.${path}.${body}`;
      const signature = crypto.createHmac('sha256', this.apiSecret).update(payload).digest('hex');
      config.headers.set('x-armada-timestamp', timestamp);
      config.headers.set('x-armada-signature', signature);
      if (typeof config.data === 'object' && config.data !== null) {
        config.data = body; // serialize once; matches what we signed.
      }
      return config;
    });

    this.deliveries = new DeliveriesResource(this);
    this.branches = new BranchesResource(this);
    this.wallet = new WalletResource(this);
    this.invoices = new InvoicesResource(this);
  }

  /** Internal — resources use this. */
  async request<T>(config: AxiosRequestConfig): Promise<ArmadaResponse<T>> {
    const res = await this.http.request<T>(config);
    const rateLimit = parseRateLimit(res.headers as Record<string, unknown>);
    if (res.status >= 400) {
      const err = new Error(`Armada API error ${res.status}`) as ArmadaError;
      err.status = res.status;
      err.rateLimit = rateLimit;
      err.response = res.data;
      const body = res.data as Record<string, unknown> | undefined;
      if (body && typeof body.error === 'string') err.code = body.error;
      throw err;
    }
    return { data: res.data, status: res.status, rateLimit };
  }
}

// -------- Resources (hand-authored; will be generated later) --------

export interface DeliveryInput {
  reference: string;
  scheduled_date?: string;
  payment: { amount: number; type: 'paid' | 'cash' };
  origin_format: 'location_format' | 'branch_format';
  origin: BranchOrigin | LocationAddress;
  destination_format:
    | 'location_format'
    | 'kuwait_format'
    | 'bahrain_format'
    | 'ksa_format'
    | 'ksa_short_format';
  destination: LocationAddress | KuwaitAddress | BahrainAddress | KsaAddress | KsaShortAddress;
}

export interface BranchOrigin { branch_id: string; }
export interface LocationAddress { contact_name: string; contact_phone: string; latitude: number; longitude: number; first_line?: string; floor?: string; apartment?: string; instructions?: string; }
export interface KuwaitAddress { contact_name: string; contact_phone: string; area: string; block: string; street: string; building: string; floor?: string; apartment?: string; instructions?: string; }
export type BahrainAddress = KuwaitAddress;
export interface KsaAddress { contact_name: string; contact_phone: string; city: string; street: string; district: string; building: string; floor?: string; apartment?: string; instructions?: string; }
export interface KsaShortAddress { contact_name: string; contact_phone: string; short_address: string; instructions?: string; }

export interface Delivery {
  id: string;
  reference?: string;
  status: 'pending' | 'accepted' | 'dispatched' | 'en_route' | 'completed' | 'canceled' | 'failed';
  code?: string;
  amount?: number;
  currency?: string;
  deliveryFee?: number;
  distance?: number;
  duration?: number;
  driverId?: string | null;
  driverName?: string | null;
  trackingLink?: string;
  testMode?: boolean;
  createdAt?: string;
  [key: string]: unknown;
}

export interface EstimateInput {
  origin_format: DeliveryInput['origin_format'];
  origin: DeliveryInput['origin'];
  destination_format: DeliveryInput['destination_format'];
  destination: DeliveryInput['destination'];
}

export interface Estimate { fee?: number; currency?: string; distance?: number; duration?: number; }

export interface Branch { id: string; name: string; phone?: string; address?: string; latitude?: number; longitude?: number; created_at?: string; }
export interface BranchInput { name: string; phone: string; address: string; location?: { lat: number; lng: number }; }

export interface Wallet { balance: number; currency: string; warningBalanceLevel?: number | null; }

export interface Invoice {
  id: string;
  invoiceNo?: string;
  type?: string;
  status?: string;
  amount?: number;
  currency?: string;
  ordersCount?: number;
  deliveryTripsCount?: number;
  periodBegin?: string;
  periodEnd?: string;
  dueOn?: string;
  createdAt?: string;
}

export interface InvoiceListQuery {
  page?: number;
  perPage?: number;
  status?: 'unpaid' | 'paid' | 'topup' | 'all';
  periodBegin?: string;
  periodEnd?: string;
}
export interface InvoiceListResult { page: number; perPage: number; total: number; invoices: Invoice[]; }

class DeliveriesResource {
  constructor(private client: ArmadaClient) {}
  create(body: DeliveryInput) { return this.client.request<Delivery>({ method: 'POST', url: '/v2/deliveries', data: body }); }
  get(id: string)              { return this.client.request<Delivery>({ method: 'GET',  url: `/v2/deliveries/${id}` }); }
  cancel(id: string, reason?: string) { return this.client.request<Delivery>({ method: 'POST', url: `/v2/deliveries/${id}/cancel`, data: reason ? { reason } : {} }); }
  retry(id: string)            { return this.client.request<Delivery>({ method: 'POST', url: `/v2/deliveries/${id}/retry` }); }
  estimate(body: EstimateInput) { return this.client.request<Estimate>({ method: 'POST', url: '/v2/deliveries/estimate', data: body }); }
  estimateStatic(body: EstimateInput) { return this.client.request<Estimate>({ method: 'POST', url: '/v2/deliveries/estimate/static', data: body }); }
}

class BranchesResource {
  constructor(private client: ArmadaClient) {}
  list()                       { return this.client.request<{ branches: Branch[] }>({ method: 'GET', url: '/v2/branches' }); }
  create(body: BranchInput)    { return this.client.request<Branch>({ method: 'POST', url: '/v2/branches', data: body }); }
  get(id: string)              { return this.client.request<Branch>({ method: 'GET',  url: `/v2/branches/${id}` }); }
  update(id: string, body: Partial<BranchInput>) { return this.client.request<Branch>({ method: 'PUT', url: `/v2/branches/${id}`, data: body }); }
  delete(id: string)           { return this.client.request<void>({ method: 'DELETE', url: `/v2/branches/${id}` }); }
}

class WalletResource {
  constructor(private client: ArmadaClient) {}
  get() { return this.client.request<Wallet>({ method: 'GET', url: '/v2/wallet' }); }
}

class InvoicesResource {
  constructor(private client: ArmadaClient) {}
  list(query: InvoiceListQuery = {}) {
    return this.client.request<InvoiceListResult>({ method: 'GET', url: '/v2/invoices', params: query });
  }
  get(id: string) { return this.client.request<Invoice>({ method: 'GET', url: `/v2/invoices/${id}` }); }
}
