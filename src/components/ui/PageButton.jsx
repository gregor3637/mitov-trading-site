import React from 'react'
import { cn } from '../../utils/styles'

const PageButton = ({ label, isPrimary = true, className, ...props }) => {
    return (
        <button
            className={cn(
                'max-w-max rounded-lg border-2  px-4 py-2 text-xl font-semibold sm:text-4xl',
                {
                    'page-primary-button': isPrimary,
                    'page-secondary-button': !isPrimary,
                },
                className
            )}
            {...props}
        >
            {label}
        </button>
    )
}

export default PageButton
