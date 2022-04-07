export enum ActionTypes {
  FetchCustomers = "FETCH_ITEMS",
  AddCustomers = "ADD_CUSTOMERS",
  DeleteCustomer = "DELETE_CUSTOMERS",
}
export enum MutationTypes {
  SetCustomers = "SET_ITEMS",
  AddCustomers = "ADD_CUSTOMERS",
  CustomerLoading = "LOAD_CUSTOMER",
  CustomerError = "CUSTOMER_ERROR",
  RemoveCustomer = "REMOVE_CUSTOMER",
}
export enum status {
  loading = "LOADING",
  success = "SUCCESS",
  error = "ERROR",
  idle = "IDLE",
}
export interface CustomerStatus {
  Addcustomers: status;
  GetCustomers: status;
  DeleteCustomer: status;
}
