import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosUsers } from "../../axios";
export type TAuth = {
    name:string,
    phone: string,
    email: string,
    photo: string
    id: string
}

type TAuth2  ={
    authData: TAuth[],
    purchasing: boolean,
    userModal: TAuth,
    editId: string
}

const initialState: TAuth2 = {
    authData: [
        {name: 'Akezhan',
        phone: '+7 775 585 6353',
        email: 'timurovakt@mail.ru',
        photo: '',
        id: '12',
    }],
    purchasing: false,
    userModal: {
        name: "",
        phone: "",
        email: "",
        photo: "",
        id: ""
    },
    editId: ''
}

export const getData = createAsyncThunk(
    'getUsers',
    async() => {
        try{
            const {data} = await axiosUsers.get('users.json')
            const fetchedOrders: TAuth[] = Object.keys(data).map(id => {
                return {...data[id], id}
            })
            return fetchedOrders
        }catch(e){

        }
    }
)
export const getUser = createAsyncThunk(
    'getUser',
    async(id: string) => {
        try{
            const {data} = await axiosUsers.get(`users/${id}.json`)
            return data
        }catch(e){

        }
    }
)
export const authSlice = createSlice({
    name: 'authData',
    initialState,
    reducers: {
        setPurchaing: (state,action) => {
            state.purchasing = action.payload
        },
        setId: (state,action) => {
            state.editId = action.payload     
        }
    },
    extraReducers: builder => builder
    .addCase(getData.fulfilled, (state,action) => {
        state.authData = action.payload
    })
    .addCase(getUser.fulfilled,(state,action) => {
        state.userModal = action.payload      
    })
})

export const {setPurchaing,setId} = authSlice.actions