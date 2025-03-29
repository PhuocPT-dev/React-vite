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
    const URL_BACKEND = "/api/v1/user?current=1&pageSize=1";

    
    return axios.get(URL_BACKEND, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json"
        }
    })
}

const deleteUserAPI = (id) => {
    const accessToken = localStorage.getItem("accessToken");
    const URL_BACKEND = `/api/v1/user/${id}`; // backtick

    
    return axios.delete(URL_BACKEND, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json"
        }
    })
}

const handleUploadFile = (file, folder) => {
    const accessToken = localStorage.getItem("accessToken");
    const URL_BACKEND = `/api/v1/file/upload`;

    let config = {
        headers: {
            Authorization: `Bearer ${accessToken}`,
            "upload-type": folder,
            "Content-Type": "multipart/form-data"
        }
    };

    const bodyFormData = new FormData();
    bodyFormData.append("fileImg", file);

    return axios.post(URL_BACKEND, bodyFormData, config);
};

const updateUserAvatarAPI = (avatar ,_id, fullName, phone) => {
    const accessToken = localStorage.getItem("accessToken");
    const URL_BACKEND = "/api/v1/user";

    const data = {
        _id: _id,
        avatar: avatar,
        fullName : fullName,
        phone: phone
    };

    return axios.put(URL_BACKEND, data, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json"
        }
    })
}


export {
    createUserAPI, updateUserAPI, fetchAllUserAPI, deleteUserAPI,
    handleUploadFile, updateUserAvatarAPI

}