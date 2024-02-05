import React, { useContext } from 'react'
import PageButton from '../PageButton'
import { EditContext } from './InfoFormTypeWrapper'

function InputView({ value, isDisabled }) {
    const { setIsEditing } = useContext(EditContext)

    const handleClick = (ev) => {
        ev.preventDefault()
        setIsEditing(true)
    }

    return (
        <div className="flex w-full items-center  justify-between ">
            <span className="mr-4 max-w-max rounded-lg border-2 border-[--edge] p-2">
                {value}
            </span>
            <PageButton
                className="sm:text-sm"
                label={'Edit'}
                onClick={handleClick}
                disabled={isDisabled}
            />
        </div>
    )
}

export default InputView
