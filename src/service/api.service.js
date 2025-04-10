// import axios from "axios";
import axios from "./axios.customize";

const createUserAPI = (fullName, email, password, phone) => {
    const accessToken = localStorage.getItem("access_token");
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
    const accessToken = localStorage.getItem("access_token");
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

const fetchAllUserAPI = (current, pageSize) => {
    const accessToken = localStorage.getItem("access_token");
    const URL_BACKEND = `/api/v1/user?current=${current}&pageSize=${pageSize}`;

    
    return axios.get(URL_BACKEND, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json"
        }
    })
}

const deleteUserAPI = (id) => {
    const accessToken = localStorage.getItem("access_token");
    const URL_BACKEND = `/api/v1/user/${id}`; // backtick

    
    return axios.delete(URL_BACKEND, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json"
        }
    })
}

const handleUploadFile = (file, folder) => {
    const accessToken = localStorage.getItem("access_token");
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
    const accessToken = localStorage.getItem("access_token");
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

const registerUserAPI = (fullName, email, password, phone) => {
    const accessToken = localStorage.getItem("access_token");
    const URL_BACKEND = "/api/v1/user/register";

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

const loginAPI = (email, password) => {
    const accessToken = localStorage.getItem("access_token");
    const URL_BACKEND = "/api/v1/auth/login";

    const data = {
        username: email,
        password: password,
        delay: 2000
    };

    return axios.post(URL_BACKEND, data, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json"
        }
    })
};
const getAccountAPI = () => {
    // const accessToken = localStorage.getItem("access_token");
    const URL_BACKEND = "/api/v1/auth/account";
    return axios.get(URL_BACKEND)
};

const logoutAPI = () => {
    // const accessToken = localStorage.getItem("access_token");
    const URL_BACKEND = "/api/v1/auth/logout";
    return axios.post(URL_BACKEND)
};

const fetchAllBookAPI = (current, pageSize) => {
    const accessToken = localStorage.getItem("access_token");
    const URL_BACKEND = `/api/v1/book?current=${current}&pageSize=${pageSize}`;

    
    return axios.get(URL_BACKEND, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json"
        }
    })
}

const createBookAPI = (thumbnail, mainText, author, price, quantity, category, slider, sold) => {
    const accessToken = localStorage.getItem("access_token");
    const URL_BACKEND = "/api/v1/book";

    const data = {
        thumbnail: thumbnail,
        mainText: mainText,
        author: author,
        price: price,
        quantity: quantity,
        category: category,
        slider: slider,    // ✅ bổ sung
        sold: sold         // ✅ bổ sung
    };

    return axios.post(URL_BACKEND, data, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json"
        }
    });
};

const updateBookAPI = (_id, thumbnail, mainText, author, price, quantity, category, slider, sold) => {
    const accessToken = localStorage.getItem("access_token");
    const URL_BACKEND = `/api/v1/book/${_id}`;

    const data = {
        _id: _id,
        thumbnail: thumbnail,
        mainText: mainText,
        author: author,
        price: price,
        quantity: quantity,
        category: category,
        slider: slider,    // ✅ bổ sung
        sold: sold   
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
    handleUploadFile, updateUserAvatarAPI, registerUserAPI,loginAPI,
    getAccountAPI,logoutAPI,fetchAllBookAPI, createBookAPI, updateBookAPI

}