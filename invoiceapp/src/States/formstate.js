import { hookstate, useHookstate } from '@hookstate/core';
import dayjs from 'dayjs';

//form open/close state
const formState = hookstate(false)
const wrapFormState = (state) => ({
    get: () => state.value,
    open: () => state.set(true),
    close: () => state.set(false),
})

export const accessFormState = () => wrapFormState(formState)
export const useFormState = () => wrapFormState(useHookstate(formState))

//delete modal open/close state
const modalState = hookstate(false)
const wrapModalState = (state) => ({
    get: () => state.value,
    open: () => state.set(true),
    close: () => state.set(false)
})

export const accessModalState = () => wrapModalState(modalState)
export const useModalState = () => wrapModalState(useHookstate(modalState))

//Payment Term State
const paymentTermState = hookstate(30)
const wrapTermState = (state) => ({
    get: () => state.value,
    change: (term) => state.set(term)
})

export const accessPaymentState = () => wrapTermState(paymentTermState)
export const usePaymentState = () => wrapTermState(useHookstate(paymentTermState))

//Issue Date Term State
const issueDateState = hookstate(dayjs().format('YYYY-MM-DD'))
const wrapDateState = (state) => ({
    get: () => state.value,
    change: (date) => state.set(date)
})

export const accessIssueState = () => wrapDateState(issueDateState)
export const useIssueState = () => wrapDateState(useHookstate(issueDateState))