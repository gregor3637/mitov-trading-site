import React from 'react'

import { getDotInvestments} from '../services/server/api'

export async function loader() {
    // const investments = await getInvestments()
    const investments = await getDotInvestments()
    return investments
}

const Investments = () => {
 

    return (
        <>
            <div className="bg-[--sidebar-color] px-10 pb-10">
               @@@@@@@@@
            </div>
        </>
    )
}

export default Investments
