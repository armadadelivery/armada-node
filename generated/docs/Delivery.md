# Delivery


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **string** |  | [optional] [default to undefined]
**code** | **string** |  | [optional] [default to undefined]
**test_mode** | **boolean** |  | [optional] [default to undefined]
**amount** | **number** |  | [optional] [default to undefined]
**created_at** | **string** |  | [optional] [default to undefined]
**currency** | **string** |  | [optional] [default to undefined]
**delivery_fee** | **number** |  | [optional] [default to undefined]
**customer** | [**DeliveryCustomer**](DeliveryCustomer.md) |  | [optional] [default to undefined]
**driver** | [**DeliveryDriver**](DeliveryDriver.md) |  | [optional] [default to undefined]
**logistics** | [**DeliveryLogistics**](DeliveryLogistics.md) |  | [optional] [default to undefined]

## Example

```typescript
import { Delivery } from '@armada/sdk-generated';

const instance: Delivery = {
    status,
    code,
    test_mode,
    amount,
    created_at,
    currency,
    delivery_fee,
    customer,
    driver,
    logistics,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
