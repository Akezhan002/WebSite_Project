import {ReactNode} from 'react';
import React from 'react';
import '../Modal/modal.css'

interface Props {
    children: ReactNode,
    show: boolean,
    hide: () => void,
}



export const Modal = ({children, show, hide}: Props) => {
    return (
        <>
            <div
                className="Modal"
                style={{
                    transform: show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: show ? '1' : '0'
                }}
            >
                {children}
            </div>
        </>
    )
}

export default Modal
