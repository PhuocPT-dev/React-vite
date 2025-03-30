import { Button, Form, Input, } from "antd";

const RegisterPage = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log(">>> check value:", values);
        
    }
    return (
        <Form
            form={form}
            layout="vertical"
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        >
            <div>
                <div style={{
                    margin: "50px",
                    // display: "flex",
                    // flexDirection: "column"
                }}>
                    <Form.Item
                        label="Username"
                        name="username"
                    // rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Full Name"
                        name="fullName"
                    // rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name="email"
                    // rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                    // rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        label="Phone number"
                        name="phone"
                    // rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    {/* <button type="submit">Register</button>  thay nút bên dưới*/} 

                    <div>
                        <Button onClick={() => form.submit()} type="primary">Register</Button>
                    </div>
                </div>
            </div>
        </Form>
    )
}

export default RegisterPage;