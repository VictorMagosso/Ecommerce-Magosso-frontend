import axios from 'axios'
export const productsApi = () => {
    return (
        axios.create({
            baseURL: 'http://localhost:8080/api/products/',
            headers: {
                'Access-Control-Allow-Origin': true,
                'Content-Type': 'application.json'
            }
        })
    )
}

export const clientsApi = () => {
    return (
        axios.create({
            baseURL: `${window.location.href}/api/clients/`,
            timeout: 1000,
            headers: {
                'Content-Type': 'application.json'
            }
        })
    )
}
