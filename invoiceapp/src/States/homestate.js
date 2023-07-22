import { hookstate, useHookstate } from '@hookstate/core';

const filterState = hookstate("")
const wrapFilterState = (state) => ({
    get: () => state.value,
    change: (filter) => state.set(filter),
})

export const accessFilterState = () => wrapFilterState(filterState)
export const useFilterState = () => wrapFilterState(useHookstate(filterState))