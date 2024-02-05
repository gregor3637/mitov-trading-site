import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isDarkMode: false
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleColorTheme(state) {
            state.isDarkMode = !state.isDarkMode
        }
    },
})

export const selectTheme = (state) => state.theme
export const { toggleColorTheme } = themeSlice.actions

export default themeSlice.reducer
