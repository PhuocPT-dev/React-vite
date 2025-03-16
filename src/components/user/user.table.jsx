import { Space, Table, Tag } from 'antd';
import { fetchAllUserAPI } from '../../service/api.service';
import { useEffect, useState } from 'react';


const UserTable = () => {
    const [dataUser, setDateUser] = useState([]);

    //empty array => run once
    useEffect(() => {
        console.log(">> run useEffect 111");
        loadUser();
        
    },[])

    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
        },
        {
            title: 'Full Name',
            dataIndex: 'fullName',

        },
        {
            title: 'Email',
            dataIndex: 'email',
        },

    ];

    const loadUser = async () => {
        // console.log(">>> run loadUser Start");
        const res = await fetchAllUserAPI()
        // console.log(">>> run loadUser End", res.data);
        setDateUser(res.data)
    }

    
    console.log(">> run render 000");


    return (
        <Table  columns={columns}
                dataSource={dataUser}
                rowKey={"_id"} />
    )
}

export default UserTable;