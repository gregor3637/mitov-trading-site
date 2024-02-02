import React from 'react'

const PageButton = ({ label, isPrimary = true, ...props }) => {
    return (
        <button
            className={`${isPrimary ? "page-primary-button" : "page-secondary-button" }   max-w-max rounded-lg border-2  px-4 py-2 text-xl font-semibold 
            sm:text-4xl`}
            {...props}
        >
            {label}
        </button>
    )
}

export default PageButton
