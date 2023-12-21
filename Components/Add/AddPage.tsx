import { ChangeEvent, useState } from "react"
import { TAuth } from "../../Store/Slice/authSlice"
import { axiosUsers } from "../../axios"
import { useNavigate } from "react-router-dom"
import '../Add/Add.css'
export const AddPage = () => {
    const navigate = useNavigate()
    const [customer, setCustomer] = useState<TAuth>({
        name: "",
        email: "",
        phone: "",
        photo: "",
        id: ''
    })
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setCustomer(customer => ({
            ...customer,
            [name]: value
        }))
    }
    const onSave = () => {
        if(customer.name !== '' && customer.email !== '' && customer.phone !== ""){
            axiosUsers.post('users.json',customer)
            navigate('/')
        }else {
            return
        }
    }
    const onBack = () => {
        navigate('/')
    }
    return (
        <>
        <div className="ContactData">
            <div className="h2">Add new contacts</div>
                <span>Name: <input type="text" onChange={onChange} name="name" value={customer.name} /></span>
                <span>Phone: <input type="text" onChange={onChange} name="phone" value={customer.phone} /></span>
                <span>Email: <input type="text" onChange={onChange} name="email" value={customer.email} /></span>
                <span>Photo: <input type="text" onChange={onChange} name="photo" value={customer.photo} /></span>
                <div className="photo">
                    <span>Photo preview:
                        <img src={customer.photo} alt="img" />
                    </span>
                </div>
            <div className="buuttons">
                <button className="savebtn" onClick={onSave}>Save</button>
                <button onClick={onBack}>Back to Contacts</button>
            </div>
        </div>
        </>
    )
}