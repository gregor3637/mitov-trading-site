import { useReducer } from 'react'

const initializer = (providedState) => {
    return {
        firstName: {
            initial: providedState.firstName || 'first name',
            value: providedState.firstName || 'first name',
        },
        lastName: {
            initial: providedState.lastName || 'last name',
            value: providedState.lastName || 'last name',
        },
        age: { initial: providedState.age || 0, value: providedState.age || 0 },
        isChanged: false,
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'updateValue':
            return {
                ...state,
                isChanged: true,
                [action.field]: { ...state[action.field], value: action.value },
            }

        case 'resetValue':
            const newState = {
                ...state,
                [action.field]: {
                    ...state[action.field],
                    value: state[action.field].initial,
                },
            }

            // Check if all fields are set to their initial state
            const allFieldsReset = Object.keys(newState).every(
                (key) => newState[key].value === newState[key].initial
            )

            return {
                ...newState,
                isChanged: !allFieldsReset,
            }
        default:
            throw new Error(
                `usePersonalInfoForm | Unsupported action type: >${action.type}<`
            )
    }
}

const usePersonalInfoForm = (providedState) => {
    const [state, dispatch] = useReducer(reducer, providedState, initializer)
    return [state, dispatch]
}

export default usePersonalInfoForm
