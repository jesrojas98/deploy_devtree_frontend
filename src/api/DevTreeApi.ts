import { isAxiosError } from "axios"
import api from "../config/axios"
import { User, UserHandle } from "../types"


export async function getUser(){
    try {
        const {data} = await api<User>('/user')
        return data
    }catch (error){
        if(isAxiosError(error) && error.response){
            throw new Error(error.response?.data.error)
        }
    }

}

export async function updateProfile(formData: User){
    try {
        const {data} = await api.patch<string>('/user', formData)
        console.log(data)
        return data
    }catch (error){
        if(isAxiosError(error) && error.response){
            console.log(error.response.data.error)
            throw new Error(error.response?.data.error)
        }
    }

}

export async function uploadImage(file: File){
    let fromData = new FormData()
    fromData.append('file', file)
    try {
        const {data:{image}} : {data:{image:string}} = await api.post('/user/image', fromData )
        return image
    }catch (error){
        if(isAxiosError(error) && error.response){
            console.log(error.response.data.error)
            throw new Error(error.response?.data.error)
        }
    }



}
export async function getUserByHandle(handle: String){
    try {
        const {data} = await api<UserHandle>(`/${handle}`)
        return data
    }catch (error){
        if(isAxiosError(error) && error.response){
            console.log(error.response.data.error)
            throw new Error(error.response?.data.error)
        }
    }

}

export async function searchByHandle(handle: String){
    try {
        const {data} = await api.post<string>('/search',{handle})
        return data   
    }catch (error){
        if(isAxiosError(error) && error.response){
            console.log(error.response.data.error)
            throw new Error(error.response?.data.error)
        }
    }

}