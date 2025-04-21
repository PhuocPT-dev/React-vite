import UserForm from "../components/user/user.form";
import UserTable from "../components/user/user.table";
import { fetchAllUserAPI } from '../service/api.service';
import { useEffect, useState } from 'react';

const UsersPage = () => {

    const [dataUser, setDateUser] = useState([]);
    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const [total, setTotal] = useState(0);

    //empty array => run once
    //not empty => next value != prev value(diều kiện)
    useEffect(() => {
        loadUser();
    }, [current, pageSize]); // []  + condition(diều kiện) (mảng rộng + điều kiện)

    const loadUser = async () => {
        const res = await fetchAllUserAPI(current, pageSize)
        if (res.data) {
            setDateUser(res.data.result);
            // setCurrent(res.data.meta.current);
            // setPageSize(res.data.meta.pageSize);
            setTotal(res.data.meta.total)

        }
    }
    console.log(">>> check current", current);
    console.log(">>> check pageSize", pageSize);
    
    // lift-up state

    return (
        <div style={{ padding: "20px" }}>
            <UserForm loadUser={loadUser} />
            <UserTable
                loadUser={loadUser}
                dataUser={dataUser}
                current={current}
                pageSize={pageSize}
                total={total} 
                setCurrent={setCurrent}
                setPageSize={setPageSize}
                />
        </div>
    )
}

export default UsersPage;