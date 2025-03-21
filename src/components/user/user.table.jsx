import { Space, Table, Tag } from 'antd';

const UserTable = (props) => {
    const {dataUser} = props;

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


    console.log(">> run render 000");


    return (
        <Table columns={columns}
            dataSource={dataUser}
            rowKey={"_id"} />
    )
}

export default UserTable;