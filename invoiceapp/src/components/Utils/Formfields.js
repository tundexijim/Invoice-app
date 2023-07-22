import { accessIssueState, accessPaymentState} from '../../States/formstate'
export const initialValues = {
    status: "Draft",
    senderAddress: {
        street: "",
        city: "",
        postCode: "",
        country: ""
    },
    clientName: "",
    clientEmail: "",
    clientAddress: {
        street: "",
        city: "",
        postCode: "",
        country: ""
    },
    createdAt: accessIssueState().get(),
    paymentTerms: accessPaymentState().get(),
    paymentDue: "",
    description: "",
    items: [],
    total: 0.00
}