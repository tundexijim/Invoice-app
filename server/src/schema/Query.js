
const { db } = require('../data');


    exports.Query = {
      invoices: (_, {filter}) => {
        let filteredInvoices = [...db.invoiceData].reverse();
            if (filter){
                if(filter.status === "Paid")
                filteredInvoices = filteredInvoices.filter(invoice => invoice.status === "Paid")
                if (filter.status === "Pending")
                filteredInvoices = filteredInvoices.filter(invoice => invoice.status === "Pending")
                if (filter.status === "Draft")
                filteredInvoices = filteredInvoices.filter(invoice => invoice.status === "Draft")
            }
        return filteredInvoices;
      },

      invoice: ( _, {id} ) =>{
         const invoice =  db.invoiceData.find(invoice=> invoice.id === id)
         return invoice
      },
    }
