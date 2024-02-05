import React, { createContext } from 'react'
import InputView from './InputView'
import InputText from './InputText'
import useShowEditOptions from '../../../hooks/useShowEditOptions'

export const EditContext = createContext(null)

function InfoFormTypeWrapper({ show, edit, displayLabel, isReset }) {
    const [isEditing, setIsEditing] = useShowEditOptions(isReset)

    return (
        <EditContext.Provider value={{ isEditing, setIsEditing }}>
            <div className="flex w-full flex-col items-center justify-center">
                {displayLabel}: {isEditing ? edit : show}
            </div>
        </EditContext.Provider>
    )
}

InfoFormTypeWrapper.View = InputView
InfoFormTypeWrapper.InputText = InputText

export default InfoFormTypeWrapper
