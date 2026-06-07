# WalletApi

All URIs are relative to *https://sandbox.api.armadadelivery.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getWallet**](#getwallet) | **GET** /v2/wallet | Get wallet balance|

# **getWallet**
> Wallet getWallet()


### Example

```typescript
import {
    WalletApi,
    Configuration
} from '@armada/sdk-generated';

const configuration = new Configuration();
const apiInstance = new WalletApi(configuration);

const { status, data } = await apiInstance.getWallet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Wallet**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**429** | Rate limit exceeded. |  * Retry-After - Seconds until the window resets. <br>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

