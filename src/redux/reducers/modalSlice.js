import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isNewInvestmentOpen: false,
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setIsNewInvestmentOpen(state, action) {
            state.isNewInvestmentOpen = action.isOpen;
        },
    },
})

export const selectTheme = (state) => state.modal
export const { setIsNewInvestmentOpen } = modalSlice.actions

export default modalSlice.reducer
