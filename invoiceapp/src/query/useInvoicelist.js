import { gql, useQuery } from '@apollo/client'

const GET_INVOICES = gql`
query GetInvoices($filter: filterInput){
    invoices (filter: $filter){
        id
      paymentDue
      clientName
      status
      total
    } 
}
    `
   export const useInvoicelist = (filter) => {
        const {data, error, loading} = useQuery(GET_INVOICES, {
            variables: {
                filter
                
            },
        });
        return{
            data,
            error,
            loading,
        };
    }