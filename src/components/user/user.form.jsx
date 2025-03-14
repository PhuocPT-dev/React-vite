import { Button, Input, notification } from "antd";
import { useState } from "react";

import { createUserAPI } from "../../service/api.service";

const UserForm = () => {
    const [fullName, setFullName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const handleClickBtn = async () => {
        const res = await createUserAPI(fullName, email, password, phone);
        // console.log(">>>check res:" ,res);
        // debugger
        if (res.data) {
            notification.success ({
                message:"Create user",
                description:"Tạo user thành công"
            })
        } else {
            notification.error({
                message:"Eror create user",
                description:JSON.stringify(res.message)
            })
        }

        // console.log(">> Check res:", res.data);
    };



    return (
        <div className="user-form" style={{ margin: '20px 0' }}>
            <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
                <div>
                    <span>Full Name</span>
                    <Input
                        value={fullName}
                        onChange={(event) => { setFullName(event.target.value) }}
                    />
                </div>
                <div>
                    <span>Password</span>
                    <Input.Password
                        value={password}
                        onChange={(event) => { setPassword(event.target.value) }}
                    />

                </div>
                <div>
                    <span>Email</span>
                    <Input
                        value={email}
                        onChange={(event) => { setEmail(event.target.value) }}
                    />
                </div>
                <div>
                    <span>Phone number</span>
                    <Input
                        value={phone}
                        onChange={(event) => { setPhone(event.target.value) }}
                    />
                </div>
                <div>
                    <Button
                        // onClick={() => handleClickBtn()}
                        onClick={handleClickBtn}
                        type="primary">Create User</Button>
                </div>
            </div>
        </div>
    )
}

export default UserForm;