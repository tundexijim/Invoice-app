const { gql } = require('apollo-server-express')

exports.typeDefs = gql`
type Query {
 invoices(filter: filterInput): [invoice!]!
 invoice(id: ID!): invoice
}

type Mutation{
    addInvoice(input: addInvoiceInput!): invoice!
    updateInvoice(id: ID!, input: updateInvoiceInput): invoice!
    updateInvoiceStatus(id: ID!, input:updateStatusInput): invoice!
    deleteInvoice(id: ID!): Boolean!
}
type invoice{
    id: ID!
    createdAt: String!
    paymentDue: String!
   description: String!
  paymentTerms: Int!
    clientName: String!
    clientEmail: String!
    status: String!
    senderAddress: Address!
    clientAddress: Address!
    items: [Item!]!
    total: Float!
}
type Address{
    street: String!
    city: String!
    postCode: String!
    country: String!
}
type Item{
    name: String!
    quantity: Int!
    price: Float!
    total: Float!
}
input filterInput{
    status: String
}
input addInvoiceInput{
    createdAt: String!
    paymentDue: String!
   description: String!
  paymentTerms: Int!
    clientName: String!
    status: String!
    clientEmail: String!
    senderAddress: Addressinput!
    clientAddress: Addressinput!
    items: [ItemInput!]!
    total: Float!
}
input updateInvoiceInput{
    id: ID
    createdAt: String
    paymentDue: String
   description: String
  paymentTerms: Int
    clientName: String
    status: String
    clientEmail: String
    senderAddress: Addressinput
    clientAddress: Addressinput
    items: [ItemInput!]
    total: Float
}
input updateStatusInput{
    status: String!
}
input Addressinput{
    street: String!
    city: String!
    postCode: String!
    country: String!
}
input ItemInput{
    name: String!
    quantity: Int!
    price: Float!
    total: Float!
}
`;