import { gql } from "@apollo/client";

export const UPDATE_INVOICE = gql`
mutation UpdateInvoice($id: ID!, $input: updateInvoiceInput){
    updateInvoice(id: $id, input: $input){
        id
        createdAt
    }
}`