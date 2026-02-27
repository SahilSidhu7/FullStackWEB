import axios from 'axios'

const url = "http://localhost:3001/api/persons";

const getAll = () => {
    const promise = axios.get(url)
    return promise.then(res => res.data)
}

const create = (person) => {
    const promise = axios.post(url,person)
    return promise.then(res=>res.data)
}

const update = (id,data,num) => {
    const promise = axios.put(`${url}/${id}`,{...data,"number" : num})
    return promise.then(res=>res.data)
}

const remove = (id) => {
    const promise = axios.delete(`${url}/${id}`)
    return promise.then(res => res.data)
}

export default {getAll,create,remove,update}
