import { gql } from "@apollo/client";


export const ADD_INVOICE = gql`
mutation AddNewInvoice($input: addInvoiceInput!){
    addInvoice(input: $input)
 {
    id
    createdAt
  }
  }
`