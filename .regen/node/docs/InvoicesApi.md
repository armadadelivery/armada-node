# InvoicesApi

All URIs are relative to *https://sandbox.api.armadadelivery.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getInvoice**](#getinvoice) | **GET** /v2/invoices/{id} | Get an invoice|
|[**listInvoices**](#listinvoices) | **GET** /v2/invoices | List invoices|

# **getInvoice**
> Invoice getInvoice()


### Example

```typescript
import {
    InvoicesApi,
    Configuration
} from '@armada/sdk-generated';

const configuration = new Configuration();
const apiInstance = new InvoicesApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getInvoice(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**Invoice**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**404** | Resource not found or not owned by this merchant. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listInvoices**
> ListInvoices200Response listInvoices()


### Example

```typescript
import {
    InvoicesApi,
    Configuration
} from '@armada/sdk-generated';

const configuration = new Configuration();
const apiInstance = new InvoicesApi(configuration);

let page: number; // (optional) (default to 1)
let perPage: number; // (optional) (default to 20)
let status: 'unpaid' | 'paid' | 'topup' | 'all'; // (optional) (default to 'all')
let periodBegin: string; // (optional) (default to undefined)
let periodEnd: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.listInvoices(
    page,
    perPage,
    status,
    periodBegin,
    periodEnd
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] |  | (optional) defaults to 1|
| **perPage** | [**number**] |  | (optional) defaults to 20|
| **status** | [**&#39;unpaid&#39; | &#39;paid&#39; | &#39;topup&#39; | &#39;all&#39;**]**Array<&#39;unpaid&#39; &#124; &#39;paid&#39; &#124; &#39;topup&#39; &#124; &#39;all&#39;>** |  | (optional) defaults to 'all'|
| **periodBegin** | [**string**] |  | (optional) defaults to undefined|
| **periodEnd** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ListInvoices200Response**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**403** | API key lacks the required permission. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

