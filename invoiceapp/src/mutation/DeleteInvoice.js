import { gql } from "@apollo/client";

export const DELETE_INVOICE = gql`
mutation DeleteInvoice($id: ID!){
    deleteInvoice(id: $id)
  }
  `