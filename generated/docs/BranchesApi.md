# BranchesApi

All URIs are relative to *https://sandbox.api.armadadelivery.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createBranch**](#createbranch) | **POST** /v2/branches | Create a branch|
|[**deleteBranch**](#deletebranch) | **DELETE** /v2/branches/{id} | Delete a branch|
|[**getBranch**](#getbranch) | **GET** /v2/branches/{id} | Get a branch|
|[**listBranches**](#listbranches) | **GET** /v2/branches | List branches|
|[**updateBranch**](#updatebranch) | **PUT** /v2/branches/{id} | Update a branch|

# **createBranch**
> Branch createBranch(branchInput)


### Example

```typescript
import {
    BranchesApi,
    Configuration,
    BranchInput
} from '@armada/sdk-generated';

const configuration = new Configuration();
const apiInstance = new BranchesApi(configuration);

let branchInput: BranchInput; //

const { status, data } = await apiInstance.createBranch(
    branchInput
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **branchInput** | **BranchInput**|  | |


### Return type

**Branch**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Branch created. |  -  |
|**400** | Validation error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteBranch**
> deleteBranch()


### Example

```typescript
import {
    BranchesApi,
    Configuration
} from '@armada/sdk-generated';

const configuration = new Configuration();
const apiInstance = new BranchesApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.deleteBranch(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Deleted |  -  |
|**404** | Resource not found or not owned by this merchant. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getBranch**
> Branch getBranch()


### Example

```typescript
import {
    BranchesApi,
    Configuration
} from '@armada/sdk-generated';

const configuration = new Configuration();
const apiInstance = new BranchesApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getBranch(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**Branch**

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

# **listBranches**
> ListBranches200Response listBranches()


### Example

```typescript
import {
    BranchesApi,
    Configuration
} from '@armada/sdk-generated';

const configuration = new Configuration();
const apiInstance = new BranchesApi(configuration);

const { status, data } = await apiInstance.listBranches();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ListBranches200Response**

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

# **updateBranch**
> Branch updateBranch(branchInput)


### Example

```typescript
import {
    BranchesApi,
    Configuration,
    BranchInput
} from '@armada/sdk-generated';

const configuration = new Configuration();
const apiInstance = new BranchesApi(configuration);

let id: string; // (default to undefined)
let branchInput: BranchInput; //

const { status, data } = await apiInstance.updateBranch(
    id,
    branchInput
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **branchInput** | **BranchInput**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**Branch**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**404** | Resource not found or not owned by this merchant. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

