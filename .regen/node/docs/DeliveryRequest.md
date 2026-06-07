# DeliveryRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reference** | **string** | Partner-supplied unique id used for de-duplication. | [default to undefined]
**scheduled_date** | **string** |  | [optional] [default to undefined]
**payment** | [**Payment**](Payment.md) |  | [default to undefined]
**origin_format** | **string** |  | [default to undefined]
**origin** | [**DeliveryRequestOrigin**](DeliveryRequestOrigin.md) |  | [default to undefined]
**destination_format** | **string** |  | [default to undefined]
**destination** | [**DeliveryRequestDestination**](DeliveryRequestDestination.md) |  | [default to undefined]

## Example

```typescript
import { DeliveryRequest } from '@armada/sdk-generated';

const instance: DeliveryRequest = {
    reference,
    scheduled_date,
    payment,
    origin_format,
    origin,
    destination_format,
    destination,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
