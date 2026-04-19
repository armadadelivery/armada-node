# @armada/sdk

Official Node / TypeScript SDK for the Armada Automated Ordering API v2.

## Install

From npm (once published):

```bash
npm i @armada/sdk
```

Directly from the GitHub repo — no registry needed, works today:

```bash
# latest main
npm i github:armadadelivery/armada-node

# pinned to a release tag
npm i github:armadadelivery/armada-node#v0.1.0-beta.0

# pinned to a specific commit
npm i github:armadadelivery/armada-node#7e1a4f09
```

The SDK has a `prepare` script, so npm automatically runs `tsc` on install
when fetched from git. You end up with a compiled `dist/` ready to import.

## Quick start

```ts
import { ArmadaClient } from '@armada/sdk';

const armada = new ArmadaClient({
  apiKey: process.env.ARMADA_API_KEY!,
  apiSecret: process.env.ARMADA_API_SECRET!,
  // defaults to https://api.armadadelivery.com — use a Test-mode API key to simulate deliveries.
});

const { data: order, rateLimit } = await armada.deliveries.create({
  reference: 'order-100245',
  payment: { amount: 4.5, type: 'paid' },
  origin_format: 'branch_format',
  origin: { branch_id: '66af6f6c2f85f4b4c36f2031' },
  destination_format: 'location_format',
  destination: {
    contact_name: 'John Doe',
    contact_phone: '+96590000000',
    latitude: 29.3759,
    longitude: 47.9774,
    first_line: 'Salmiya, Block 5, Street 3',
  },
});

console.log(order.id, 'remaining:', rateLimit.remaining);
```

## What it handles for you

- HMAC-SHA256 request signing (`x-armada-timestamp` + `x-armada-signature`)
- Rate-limit headers parsed into `response.rateLimit`
- Error responses surfaced as typed `ArmadaError` with `.status`, `.code`, `.rateLimit`
- Works with Node 18+ — no browser target

## Resources

- `client.deliveries.create / get / cancel / retry / estimate / estimateStatic`
- `client.branches.list / create / get / update / delete`
- `client.wallet.get`
- `client.invoices.list / get`

## Production, Test mode, and the optional sandbox env

The default base URL is **production** (`https://api.armadadelivery.com`).
The recommended integration path is:

1. Create a key in the business app at
   [business.armadadelivery.com](https://business.armadadelivery.com) with
   **Test mode ON**.
2. Every order that key creates is simulated end-to-end — bot driver, ~30 s
   lifecycle, no real driver, no wallet charge.
3. Toggle Test mode off on the same key when you're ready to go live.

A fully-isolated sandbox deployment exists at
`https://sandbox.api.armadadelivery.com` — pass it as `baseUrl` explicitly
if you want zero overlap with your production account. For most integrations
you do not need this.
