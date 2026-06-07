## @armada/sdk-generated@0.1.0

This generator creates TypeScript/JavaScript client that utilizes [axios](https://github.com/axios/axios). The generated Node module can be used in the following environments:

Environment
* Node.js
* Webpack
* Browserify

Language level
* ES5 - you must have a Promises/A+ library installed
* ES6

Module system
* CommonJS
* ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition will be automatically resolved via `package.json`. ([Reference](https://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html))

### Building

To build and compile the typescript sources to javascript use:
```
npm install
npm run build
```

### Publishing

First build the package then run `npm publish`

### Consuming

navigate to the folder of your consuming project and run one of the following commands.

_published:_

```
npm install @armada/sdk-generated@0.1.0 --save
```

_unPublished (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE --save
```

### Documentation for API Endpoints

All URIs are relative to *https://sandbox.api.armadadelivery.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*BranchesApi* | [**createBranch**](docs/BranchesApi.md#createbranch) | **POST** /v2/branches | Create a branch
*BranchesApi* | [**deleteBranch**](docs/BranchesApi.md#deletebranch) | **DELETE** /v2/branches/{id} | Delete a branch
*BranchesApi* | [**getBranch**](docs/BranchesApi.md#getbranch) | **GET** /v2/branches/{id} | Get a branch
*BranchesApi* | [**listBranches**](docs/BranchesApi.md#listbranches) | **GET** /v2/branches | List branches
*BranchesApi* | [**updateBranch**](docs/BranchesApi.md#updatebranch) | **PUT** /v2/branches/{id} | Update a branch
*DeliveriesApi* | [**cancelDelivery**](docs/DeliveriesApi.md#canceldelivery) | **POST** /v2/deliveries/{id}/cancel | Cancel a delivery
*DeliveriesApi* | [**createDelivery**](docs/DeliveriesApi.md#createdelivery) | **POST** /v2/deliveries | Create a delivery
*DeliveriesApi* | [**estimateDelivery**](docs/DeliveriesApi.md#estimatedelivery) | **POST** /v2/deliveries/estimate | Estimate a delivery fee
*DeliveriesApi* | [**estimateDeliveryStatic**](docs/DeliveriesApi.md#estimatedeliverystatic) | **POST** /v2/deliveries/estimate/static | Estimate a delivery fee using static pricing (no live traffic).
*DeliveriesApi* | [**getDelivery**](docs/DeliveriesApi.md#getdelivery) | **GET** /v2/deliveries/{id} | Retrieve a delivery
*DeliveriesApi* | [**retryDelivery**](docs/DeliveriesApi.md#retrydelivery) | **POST** /v2/deliveries/{id}/retry | Retry a failed delivery
*InvoicesApi* | [**getInvoice**](docs/InvoicesApi.md#getinvoice) | **GET** /v2/invoices/{id} | Get an invoice
*InvoicesApi* | [**listInvoices**](docs/InvoicesApi.md#listinvoices) | **GET** /v2/invoices | List invoices
*WalletApi* | [**getWallet**](docs/WalletApi.md#getwallet) | **GET** /v2/wallet | Get wallet balance


### Documentation For Models

 - [Branch](docs/Branch.md)
 - [BranchInput](docs/BranchInput.md)
 - [BranchInputLocation](docs/BranchInputLocation.md)
 - [BranchOrigin](docs/BranchOrigin.md)
 - [CancelDeliveryRequest](docs/CancelDeliveryRequest.md)
 - [Delivery](docs/Delivery.md)
 - [DeliveryCustomer](docs/DeliveryCustomer.md)
 - [DeliveryDriver](docs/DeliveryDriver.md)
 - [DeliveryLogistics](docs/DeliveryLogistics.md)
 - [DeliveryRequest](docs/DeliveryRequest.md)
 - [DeliveryRequestDestination](docs/DeliveryRequestDestination.md)
 - [DeliveryRequestOrigin](docs/DeliveryRequestOrigin.md)
 - [Estimate](docs/Estimate.md)
 - [EstimateRequest](docs/EstimateRequest.md)
 - [Invoice](docs/Invoice.md)
 - [KsaAddress](docs/KsaAddress.md)
 - [KsaShortAddress](docs/KsaShortAddress.md)
 - [KuwaitAddress](docs/KuwaitAddress.md)
 - [ListBranches200Response](docs/ListBranches200Response.md)
 - [ListInvoices200Response](docs/ListInvoices200Response.md)
 - [LocationAddress](docs/LocationAddress.md)
 - [ModelError](docs/ModelError.md)
 - [Payment](docs/Payment.md)
 - [Wallet](docs/Wallet.md)


<a id="documentation-for-authorization"></a>
## Documentation For Authorization


Authentication schemes defined for the API:
<a id="ApiKeyAuth"></a>
### ApiKeyAuth

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

