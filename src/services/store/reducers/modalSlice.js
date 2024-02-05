import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isNewInvestmentOpen: false,
    isCloseInvestmentOpen: false,
    closingInvestment: null,
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setIsNewInvestmentOpen(state, action) {
            state.isNewInvestmentOpen = action.payload
        },
        setIsCloseInvestmentOpen(state, action) {
            state.isCloseInvestmentOpen = action.payload
        },
        setClosingInvestment(state, action) {
            state.closingInvestment = action.payload
        },
    },
})

export const selectModalState = (state) => state.modal
export const {
    setIsNewInvestmentOpen,
    setIsCloseInvestmentOpen,
    setClosingInvestment,
} = modalSlice.actions

export default modalSlice.reducer
