import {userRequest} from "./axios.js";

export const addItem = async (ProductInfo) => {
    try {
        const res = await userRequest.post('/api/user/items/additem', ProductInfo)

    } catch (error) {
        console.error(error.response)
        throw error
    }
}
export const deleteItem = async (id) => {
    try {
        const res = await userRequest.delete(`/api/user/items/deleteitem/${id}`)

    } catch (error) {
        console.error(error.response)
        throw error
    }
}
export const updateItem = async (id,ProductInfo) => {
    try {
        const res = await userRequest.put(`/api/user/items/updateitem/${id}`, ProductInfo)

    } catch (error) {
        console.error(error.response)
        throw error
    }
}
export const getItem = async () => {
    try {
        const res = await userRequest.get('/api/user/items/getitem', )

    } catch (error) {
        console.error(error.response)
        throw error
    }
}

export const getAllProductInfo = async () => {
    try {
        const res = await userRequest.get(`/api/user/items/getAllProductInfo` )
        console.log(res.data, "first check333333333333333")
        return res.data
    } catch (error) {
        console.error(error.response)
        throw error
    }
}