# TempApi.ContactApi

All URIs are relative to *https://83.212.100.226:6071/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createcontact**](ContactApi.md#createcontact) | **POST** /contact | Creates the data
[**deletecontact**](ContactApi.md#deletecontact) | **DELETE** /contact/{contactId} | Delete the element
[**getAllcontact**](ContactApi.md#getAllcontact) | **GET** /contact/getAll | Get all the data
[**getByParamscontact**](ContactApi.md#getByParamscontact) | **GET** /contact/getByParams | Get all the data based on user query
[**getcontact**](ContactApi.md#getcontact) | **GET** /contact/{contactId} | Get the element
[**updatecontact**](ContactApi.md#updatecontact) | **PUT** /contact/{contactId} | Updates the element



## createcontact

> Contact createcontact(contact)

Creates the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.ContactApi();
let contact = new TempApi.Contact(); // Contact | data to be created
apiInstance.createcontact(contact, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contact** | [**Contact**](Contact.md)| data to be created | 

### Return type

[**Contact**](Contact.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deletecontact

> deletecontact(contactId)

Delete the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.ContactApi();
let contactId = "contactId_example"; // String | the Id parameter
apiInstance.deletecontact(contactId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactId** | **String**| the Id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAllcontact

> [Contact] getAllcontact()

Get all the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.ContactApi();
apiInstance.getAllcontact((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Contact]**](Contact.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getByParamscontact

> [Contact] getByParamscontact(filter)

Get all the data based on user query

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.ContactApi();
let filter = "filter_example"; // String | the query based on which the search is performed
apiInstance.getByParamscontact(filter, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| the query based on which the search is performed | 

### Return type

[**[Contact]**](Contact.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getcontact

> Contact getcontact(contactId)

Get the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.ContactApi();
let contactId = "contactId_example"; // String | the Id parameter
apiInstance.getcontact(contactId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactId** | **String**| the Id parameter | 

### Return type

[**Contact**](Contact.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updatecontact

> Contact updatecontact(contactId, opts)

Updates the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.ContactApi();
let contactId = "contactId_example"; // String | the Id parameter
let opts = {
  'contact': new TempApi.Contact() // Contact | data to be updated
};
apiInstance.updatecontact(contactId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactId** | **String**| the Id parameter | 
 **contact** | [**Contact**](Contact.md)| data to be updated | [optional] 

### Return type

[**Contact**](Contact.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

