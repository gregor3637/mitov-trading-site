import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isNewInvestmentOpen: false,
    isCloseInvestmentOpen: true,
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
    },
})

export const selectModalState = (state) => state.modal
export const { setIsNewInvestmentOpen, setIsCloseInvestmentOpen } =
    modalSlice.actions

export default modalSlice.reducer
