import React, { useContext } from 'react'
import PageButton from '../PageButton'
import { EditContext } from './InfoFormTypeWrapper'

function InputText({ formFieldName, value, onChange, onCancel }) {
    const { setIsEditing } = useContext(EditContext)

    const handleCancelClick = (ev) => {
        ev.preventDefault()
        setIsEditing(false);
        onCancel();
    }

    return (
        <div className="flex w-full flex-col gap-2 ">
            <input
                name={formFieldName}
                value={value}
                onChange={(e) => {
                    e.preventDefault()
                    onChange(e.target.value)
                }}
                className="text-center"
            />
            <div className="flex justify-between gap-2  ">
                <PageButton
                    className="p-1 sm:text-sm"
                    label="Cancel"
                    onClick={handleCancelClick}
                />
            </div>
        </div>
    )
}

export default InputText
