import React from 'react'
import ReactDOM from 'react-dom'
import Backdrop from '../Backdrop'
import NewInvestment from './NewInvestment'

const NewInvestmentModal = ({ onClose, data, ...rest }) => {
    return (
        <>
            {ReactDOM.createPortal(
                <Backdrop onClose={onClose} />,
                document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <NewInvestment
                    onClose={onClose}
                    investmentData={data}
                    {...rest}
                />,
                document.getElementById('overlay-root')
            )}
        </>
    )
}

export default NewInvestmentModal
