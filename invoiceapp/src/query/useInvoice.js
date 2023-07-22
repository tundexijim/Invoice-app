import { gql, useQuery } from '@apollo/client'

const GET_INVOICES = gql`
query GetInvoices($id: ID!){
    invoice (id: $id){
    id
    createdAt
    paymentDue
    description
    paymentTerms
    clientName
    clientEmail
    status
    senderAddress {
    street
    city
    postCode
    country
    }
    clientAddress {
    street
    city
    postCode
    country
    }
    items {
    name
    quantity
    price
    total
   }
   total
    } 
}
    `
   export const useInvoice = (id) => {
        const {data, error, loading} = useQuery(GET_INVOICES, {
            variables: {
                id
            },
        });
        return{
            data,
            error,
            loading,
        };
    }