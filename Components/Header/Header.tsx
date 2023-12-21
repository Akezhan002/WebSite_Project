import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../Store/Store"
import { User } from "../User/User"
import {getData, getUser, setId, setPurchaing } from "../../Store/Slice/authSlice"
import {Modal} from '../Modal/Modal'
import {Info} from '../Info/ModalInfo'
import { useNavigate } from "react-router-dom"
import '../Header/Header.css'
export const Header = () => {
    const {authData,purchasing,userModal,editId} = useAppSelector(store => store.authSlice)
    const navigate = useNavigate();
    const dispatch = useAppDispatch()
    useEffect(()=> {
        dispatch(getData())
    })
    const showModal = () => {
        dispatch(setPurchaing(true))
    }
    const hideModal = () => {
        dispatch(setPurchaing(false))
    }
    const onAddUser = () => {
        navigate('/new')
    }
    const onClickModal = async(id: string) => {
        dispatch(setId(id))
        dispatch(getUser(id))
    }
    return (
        <>
        <div className="container">
            <div className="navbar">
                <h2>Contacts</h2>
                <button onClick={onAddUser}>Add new contact</button>
            </div>
            <div className="users">
                 {authData.map((user) => (
                    <User showModal={showModal} key={user.id} name={user.name} phone={user.phone} email={user.email} photo={user.photo} id={user.id} onClickModal={onClickModal} />
                ))}
            </div>
            <Modal show={purchasing} hide={hideModal}>
                <Info hideModal={hideModal} name={userModal.name} phone={userModal.phone} email={userModal.email} photo={userModal.photo} id={editId} />
            </Modal>
        </div>
        </>
    )
}