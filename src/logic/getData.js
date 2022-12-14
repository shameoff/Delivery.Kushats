import axios from "axios";
import {useNavigate} from "react-router-dom";

export function getData(URI, params = {}) {
    let URL = process.env.REACT_APP_API_URL
    return axios.get(`${URL}/api${URI}`, {
            params: params,
            paramsSerializer: {
                indexes: null
            }
        }
    )
        .catch(error => {
            return new Promise((resolve, reject) => {
                reject(error.response)
            })
        })
}

export function getPrivateData(URI) {
    let URL = process.env.REACT_APP_API_URL
    let token = localStorage.getItem("token")
    return axios.get(`${URL}/api${URI}`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .catch((err) => {
            return new Promise((resolve, reject) => {
                reject (err.response)
            })
        })
}