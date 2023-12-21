import React from "react"
import { axiosUsers } from "../../axios";
import { useAppDispatch } from "../../Store/Store";
import { useNavigate } from "react-router-dom";
import '../Info/Info.css'
interface TAuth {
    name:string,
    phone: string,
    email: string,
    photo: string,
    id: string,
    hideModal: () => void
}
export const Info = ({name,email,phone,photo,id,hideModal}: TAuth) => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate();
    const onDelete = async() => {
        axiosUsers.delete(`users/${id}.json`)
        hideModal()
    }
    const onClick = () => {
        hideModal()
    }
    const onEdit = () => {
        navigate('/edit')
    }
    return (
        <>
        <div className="container-info">
            <div onClick={hideModal} className="p">X</div>
            <div className="box">
                <img src={photo} alt="user" />
                <div className="user-info">
                    <span className="sp"><p className="sp">{name}</p></span>
                    <span className="sp"><p className="sp">{phone}</p></span>
                    <span className="sp"><p>{email}</p></span>
                </div>
            </div>
            <div className="buttons">
                <button className="editbtn" onClick={onEdit}>Edit</button>
                <button onClick={onDelete}>Delete</button>
            </div>
        </div>
        </>
    )
}