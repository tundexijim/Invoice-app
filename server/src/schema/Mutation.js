const { db } = require('../data');
const  { generateRandomId }  = require('../getid')

exports.Mutation = {
addInvoice: (_, {input}) => {
    const {
         createdAt,
        paymentDue,
       description,
      paymentTerms,
        clientName,
        clientEmail,
        status,
        senderAddress,
        clientAddress,
        items,
        total
            } = input;
        const newInvoice = {
            id: generateRandomId(),
            createdAt,
            paymentDue,
           description,
          paymentTerms,
            clientName,
            clientEmail,
            status,
            senderAddress,
            clientAddress,
            items,
            total
        }
        db.invoiceData.push(newInvoice);
        return newInvoice;
},
updateInvoice: (_, {id, input}) =>{
    const index = db.invoiceData.findIndex(invoice => invoice.id === id)
    db.invoiceData[index] = { ...db.invoiceData[index], ...input,}
    return db.invoiceData[index]
},
updateInvoiceStatus: (_, { id, input }) =>{
    const index = db.invoiceData.findIndex(invoice => invoice.id === id)
    if (db.invoiceData[index].status === "Pending"){
        db.invoiceData[index] = {...db.invoiceData[index], ...input}   
    }
    return  db.invoiceData[index]
},
deleteInvoice: (_, {id}) => {
    db.invoiceData = db.invoiceData.filter(invoice => invoice.id !== id)
return true;
}
}