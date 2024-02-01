import React from 'react'
import ReactDOM from 'react-dom'
import Backdrop from '../Backdrop'
import CloseInvestment from './CloseInvestment'

const CloseInvestmentModal = ({ onClose, ...rest }) => {
    return (
        <>
            {ReactDOM.createPortal(
                <Backdrop onClose={onClose} />,
                document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <CloseInvestment onClose={onClose} {...rest} />,
                document.getElementById('overlay-root')
            )}
        </>
    )
}

export default CloseInvestmentModal

