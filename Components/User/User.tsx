import React from "react";
import '../User/User.css'
export interface IAuth  {
    name:string,
    phone: string,
    email: string,
    photo: string,
    id: string,
    onClickModal: (id: string) => void,
    showModal: () => void
}

export const User = ({name,photo,id,onClickModal,showModal}:IAuth) => {
    const onclick1 = () => {
        onClickModal(id)
        showModal()
    }
    return (
        <>
        <div className="container-user">
            <div className="item" onClick={onclick1}>
                <img className="image" src={photo} alt="user" />
                <h2>{name}</h2>
            </div>
        </div>
        </>
    )
}
