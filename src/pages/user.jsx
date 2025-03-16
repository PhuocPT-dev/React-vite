import UserForm from "../components/user/user.form";
import UserTable from "../components/user/user.table";
import { fetchAllUserAPI } from '../service/api.service';
import { useEffect, useState } from 'react';

const UsersPage = () => {

    const [dataUser, setDateUser] = useState([]);

    //empty array => run once
    useEffect(() => {
        console.log(">> run useEffect 111");
        loadUser();
        
    },[])

    const loadUser = async () => {
        const res = await fetchAllUserAPI()
        setDateUser(res.data)
    }
    // lift-up state

    return (
        <div style={{padding: "20px"}}>
            <UserForm loadUser={loadUser}/>
            <UserTable dataUser={dataUser}/>
        </div>
    )
}

export default UsersPage;