import { useEffect, useState } from "react";
import { Input, notification, Modal } from "antd";
import { createUserAPI } from "../../service/api.service";

const UpdateUserModal = (props) => {
    const [id, setId] = useState("");
    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");

    const { isModalUpdateOpen, setIsModalUpdateOpen, dataUpdate, setDataUpdate } = props;

    // next dataUpdate != prev dataUpdate
    useEffect(() => {
        console.log(">> check dataUpdate props:", dataUpdate);
        if (dataUpdate) {
            setId(dataUpdate._id);
            setFullName(dataUpdate.fullName);
            setPhone(dataUpdate.phone);
        }

    })

    const handleSubmitBtn = async () => {
        const res = await createUserAPI(fullName, email, password, phone);
        // console.log(">>>check res:" ,res);
        // debugger

        if (res.data) {
            notification.success({
                message: "Create user",
                description: "Tạo user thành công"
            })
            resetAndCloseModal();
            // await loadUser();
        } else {
            notification.error({
                message: "Eror create user",
                description: JSON.stringify(res.message)
            })
        }


        console.log(">> Check res:", res.data);
    };

    const resetAndCloseModal = () => {
        setIsModalUpdateOpen(false);
        setId("");
        setFullName("");
        setPhone("");
        setDataUpdate(null);
    }


    return (
        <Modal
            title="Update a User"
            open={isModalUpdateOpen}
            onOk={() => handleSubmitBtn()}
            onCancel={() => resetAndCloseModal()}
            maskClosable={false}
            okText={"SAVE"}
        >
            <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
                <div>
                    <span>Id</span>
                    <Input
                        value={id}
                        disabled
                    />
                </div>
                <div>
                    <span>Full Name</span>
                    <Input
                        value={fullName}
                        onChange={(event) => { setFullName(event.target.value) }}
                    />
                </div>
                <div>
                    <span>Phone number</span>
                    <Input
                        value={phone}
                        onChange={(event) => { setPhone(event.target.value) }}
                    />
                </div>

            </div>
        </Modal>
    )
}

export default UpdateUserModal;