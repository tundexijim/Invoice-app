import { gql } from "@apollo/client";

export const UPDATE_STATUS = gql`
mutation updateStatus($id: ID!, $input: updateStatusInput){
     updateInvoiceStatus(id: $id, input: $input) {
        id
    }
}
`