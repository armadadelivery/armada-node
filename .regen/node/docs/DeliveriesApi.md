# DeliveriesApi

All URIs are relative to *https://sandbox.api.armadadelivery.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**cancelDelivery**](#canceldelivery) | **POST** /v2/deliveries/{id}/cancel | Cancel a delivery|
|[**createDelivery**](#createdelivery) | **POST** /v2/deliveries | Create a delivery|
|[**estimateDelivery**](#estimatedelivery) | **POST** /v2/deliveries/estimate | Estimate a delivery fee|
|[**estimateDeliveryStatic**](#estimatedeliverystatic) | **POST** /v2/deliveries/estimate/static | Estimate a delivery fee using static pricing (no live traffic).|
|[**getDelivery**](#getdelivery) | **GET** /v2/deliveries/{id} | Retrieve a delivery|
|[**retryDelivery**](#retrydelivery) | **POST** /v2/deliveries/{id}/retry | Retry a failed delivery|

# **cancelDelivery**
> Delivery cancelDelivery()


### Example

```typescript
import {
    DeliveriesApi,
    Configuration,
    CancelDeliveryRequest
} from '@armada/sdk-generated';

const configuration = new Configuration();
const apiInstance = new DeliveriesApi(configuration);

let id: string; // (default to undefined)
let cancelDeliveryRequest: CancelDeliveryRequest; // (optional)

const { status, data } = await apiInstance.cancelDelivery(
    id,
    cancelDeliveryRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cancelDeliveryRequest** | **CancelDeliveryRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**Delivery**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Canceled |  -  |
|**404** | Resource not found or not owned by this merchant. |  -  |
|**409** | Delivery is not in a cancellable state. |  -  |
|**429** | Rate limit exceeded. |  * Retry-After - Seconds until the window resets. <br>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createDelivery**
> Delivery createDelivery(deliveryRequest)


### Example

```typescript
import {
    DeliveriesApi,
    Configuration,
    DeliveryRequest
} from '@armada/sdk-generated';

const configuration = new Configuration();
const apiInstance = new DeliveriesApi(configuration);

let deliveryRequest: DeliveryRequest; //

const { status, data } = await apiInstance.createDelivery(
    deliveryRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deliveryRequest** | **DeliveryRequest**|  | |


### Return type

**Delivery**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Delivery created. |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**400** | Validation error. |  -  |
|**401** | Missing or invalid credentials / signature. |  -  |
|**403** | API key lacks the required permission. |  -  |
|**429** | Rate limit exceeded. |  * Retry-After - Seconds until the window resets. <br>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **estimateDelivery**
> Estimate estimateDelivery(estimateRequest)


### Example

```typescript
import {
    DeliveriesApi,
    Configuration,
    EstimateRequest
} from '@armada/sdk-generated';

const configuration = new Configuration();
const apiInstance = new DeliveriesApi(configuration);

let estimateRequest: EstimateRequest; //

const { status, data } = await apiInstance.estimateDelivery(
    estimateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **estimateRequest** | **EstimateRequest**|  | |


### Return type

**Estimate**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Estimate returned. |  -  |
|**400** | Validation error. |  -  |
|**429** | Rate limit exceeded. |  * Retry-After - Seconds until the window resets. <br>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **estimateDeliveryStatic**
> Estimate estimateDeliveryStatic(estimateRequest)


### Example

```typescript
import {
    DeliveriesApi,
    Configuration,
    EstimateRequest
} from '@armada/sdk-generated';

const configuration = new Configuration();
const apiInstance = new DeliveriesApi(configuration);

let estimateRequest: EstimateRequest; //

const { status, data } = await apiInstance.estimateDeliveryStatic(
    estimateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **estimateRequest** | **EstimateRequest**|  | |


### Return type

**Estimate**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Estimate returned. |  -  |
|**429** | Rate limit exceeded. |  * Retry-After - Seconds until the window resets. <br>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getDelivery**
> Delivery getDelivery()


### Example

```typescript
import {
    DeliveriesApi,
    Configuration
} from '@armada/sdk-generated';

const configuration = new Configuration();
const apiInstance = new DeliveriesApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getDelivery(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**Delivery**

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
|**429** | Rate limit exceeded. |  * Retry-After - Seconds until the window resets. <br>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retryDelivery**
> Delivery retryDelivery()

Retries a delivery that reached the `failed` terminal state. Resets the dispatcher trial counter and re-enqueues the order. 

### Example

```typescript
import {
    DeliveriesApi,
    Configuration
} from '@armada/sdk-generated';

const configuration = new Configuration();
const apiInstance = new DeliveriesApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.retryDelivery(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**Delivery**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Retry queued. |  -  |
|**404** | Resource not found or not owned by this merchant. |  -  |
|**409** | Delivery is not in a retryable state (only &#x60;failed&#x60; is retryable). |  -  |
|**429** | Rate limit exceeded. |  * Retry-After - Seconds until the window resets. <br>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

