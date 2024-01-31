import React from 'react'

const Widget = ({title, info, children}) => {
    return (
        <div className="flex-1 relative flex h-[200px] max-w-[500px]  flex-col items-center justify-between rounded-xl border-2 border-[--widget-border] bg-[--widget-bg] p-2">
            <div className="h-[50px] w-full ">
                <h2>{title}</h2>
            </div>
            {children}
            <div className="flex h-[50px]  w-full items-end ">
                <small className="text-2sm ml-auto font-medium">{info}</small>
            </div>
        </div>
    )
}

export default Widget
