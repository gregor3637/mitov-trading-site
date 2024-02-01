import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './reducers/themeSlice'
import modalReducer from './reducers/modalSlice'

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        modal: modalReducer,
    },
})
