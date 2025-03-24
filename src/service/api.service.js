// import axios from "axios";
import axios from "./axios.customize";

const createUserAPI = (fullName, email, password, phone) => {
    const accessToken = localStorage.getItem("accessToken");
    const URL_BACKEND = "/api/v1/user";

    const data = {
        fullName: fullName,
        email: email,
        password: password,
        phone: phone
    };

    return axios.post(URL_BACKEND, data, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json"
        }
    })
};


const updateUserAPI = (_id, fullName, phone) => {
    const accessToken = localStorage.getItem("accessToken");
    const URL_BACKEND = "/api/v1/user";

    const data = {
        _id: _id,
        fullName: fullName,
        phone: phone
    };

    return axios.put(URL_BACKEND, data, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json"
        }
    })
}

const fetchAllUserAPI = () => {
    const accessToken = localStorage.getItem("accessToken");
    const URL_BACKEND = "/api/v1/user";

    
    return axios.get(URL_BACKEND, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json"
        }
    })
}

export {
    createUserAPI, updateUserAPI, fetchAllUserAPI
}