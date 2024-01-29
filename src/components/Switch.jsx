import classNames from 'classnames'
import React from 'react'

export const Switch = ({ isSwitched }) => {
    return (
        <div
            // onClick={switchHandle}
            className={classNames(
                'flex h-[30px] w-[50px] items-center rounded-full bg-[--toggle-track] transition-all duration-500'
            )}
        >
            <span
                className={classNames(
                    'h-[20px] w-[20px] rounded-full  bg-[--toggle-head] transition-all duration-500',
                    {
                        'ml-[25px]': isSwitched,
                        'ml-[5px]': !isSwitched,
                    }
                )}
            />
        </div>
    )
}
