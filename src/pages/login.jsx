import { ArrowRightOutlined } from "@ant-design/icons";
import { Button, Col, Row, Form, Divider, Input } from "antd";
import { Link } from "react-router-dom";

const LoginPage = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log(">>> check values", values);
    }
    return (
        <Row justify={"center"} style={{ marginTop: "30px" }}>
            <Col xs={24} md={16} lg={8}>
                <fieldset style={{
                    padding: "15px",
                    margin: "5px",
                    border: "1px solid #ccc",
                    borderRadius: "5px"
                }}>
                    <legend>Đăng nhập</legend>
                    <Form
                        form={form}
                        layout="vertical"
                        onFinish={onFinish}
                    >

                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Email không dược để trống!'
                                },
                                {
                                    type: "email",
                                    message: 'Email không đúng định dang!'
                                }
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!'
                                }]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item>
                            <div style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center"
                            }}>

                                <Button type="primary" onClick={() => form.submit()}>
                                    Login
                                </Button>
                                <Link to="/">Go to homepage <ArrowRightOutlined /></Link>
                            </div>
                        </Form.Item>

                    </Form>
                    <Divider />
                    <div style={{ textAlign: "center" }}>
                        Chưa có tài khoản?<Link to={"/register"}>Đăng ký tại đây</Link></div>
                </fieldset>
            </Col>
        </Row>
    )
}

export default LoginPage;