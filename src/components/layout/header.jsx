import { Link, NavLink } from 'react-router-dom';
import { Menu } from "antd";
import {HomeOutlined, UserOutlined, BookOutlined, SettingOutlined } from '@ant-design/icons';
import {  useState } from 'react';

const Header = () => {
    const [current, setCurrent] = useState('');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    const items = [
        {
            label: <Link to={"/"}>Home</Link>,
            key: 'home',
            icon: <HomeOutlined />,
        },
        {
            label: <Link to={"/users"}>Users</Link>,
            key: 'users',
            icon: <UserOutlined />,
           
        },
        {
            label: <Link to={"/books"}>Books</Link>,
            key: 'books',
            icon: <BookOutlined />,
            
        },
        {
            label: 'cài đặt',
            key :'setting',
            icon :<SettingOutlined/>,
            children: [
                {
                    label: <Link>Đăng nhập</Link>,
                    key:'login',
                },
                {
                    label:'đăng xuất',
                    key:'logout',
                }
            ]

        }
    ];

    return (
        <Menu onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items} />
    )
}

export default Header;