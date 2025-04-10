import { useEffect, useState } from "react";
import { handleUploadFile, updateBookAPI } from "../../service/api.service";
import { Input, InputNumber, Modal, notification, Select } from "antd";


const UpdateBookControl = (props) => {
    const {
        dataUpdate, setDataUpdate, loadBook,
        isModalUpdateOpen, setIsModalUpdateOpen
    } = props;

    const [id, setId] = useState("");
    const [mainText, setMainText] = useState("");
    const [author, setAuthor] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [category, setCategory] = useState("");

    const [selectedFile, setSelectedFile] = useState(null);
    const [preview, setPreview] = useState(null);

    useEffect(() => {
        if (dataUpdate && dataUpdate._id) {
            setId(dataUpdate._id)
            setMainText(dataUpdate.mainText)
            setAuthor(dataUpdate.author)
            setPrice(dataUpdate.price)
            setQuantity(dataUpdate.quantity)
            setCategory(dataUpdate.category)
            setPreview(`${import.meta.env.VITE_BACKEND_URL}/images/book/${dataUpdate.thumbnail}`)
        }
    }, [dataUpdate])

    const updateBook = async (newThumbnail) => {
        const resBook = await updateBookAPI(
            id, newThumbnail, mainText, author, price, quantity, category, [newThumbnail], 0
        );
        if (resBook.data) {
            resetAndCloseModal();
            await loadBook();
            notification.success({
                message: "Upload book",
                description: "Cập nhật book thành công"
            })
        } else {
            notification.error({
                message: "Eror update book",
                description: JSON.stringify(resBook.message)
            })
        }
    }

    const handleSubmitBtn = async () => {
        //không có ảnh preview + ko có file => return
        if (!selectedFile && !preview) {
            notification.error({
                message: "Error Update book",
                description: "Vui lòng upload ảnh thumbnail"
            })
            return;
        }
        let newThumbnail = "";
        // có ảnh preview và không có file => ko upload file
        if (!selectedFile && preview) {
            // do nothing
            newThumbnail = dataUpdate.thumbnail
        } else {
            // có ảnh preview và có file => uploadfile
            const resUpload = await handleUploadFile(selectedFile, "book");
            if (resUpload.data) {
                //success
                newThumbnail = resUpload.data.fileUploaded;
            } else {
                //false
                notification.error({
                    message: "Error upload file",
                    description: JSON.stringify(resUpload.message)
                });
            }
        }
        // step 2:update book
        await updateBook(newThumbnail);
    }

    const handleOnChangeFile = (event) => {
        if (!event.target.files || event.target.files.length === 0) {
            setSelectedFile(null);
            setPreview(null);
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        const file = event.target.files[0]
        if (file) {
            setSelectedFile(file);
            setPreview(URL.createObjectURL(file))
        }

    }

    const resetAndCloseModal = () => {
        setMainText("");
        setAuthor("");
        setPrice("");
        setQuantity("");
        setCategory("");
        setSelectedFile(null);
        setPreview(null);
        setId("");
        setDataUpdate(null);
        setIsModalUpdateOpen(false);

    }

    return (
        <Modal
            title="Update Book"
            open={isModalUpdateOpen}
            onOk={() => handleSubmitBtn()}
            onCancel={() => resetAndCloseModal()}
            maskClosable={false}
            okText={"UPDATE"}
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
                    <span>Tiêu đề</span>
                    <Input
                        value={mainText}
                        onChange={(event) => { setMainText(event.target.value) }}
                    />
                </div>
                <div>
                    <span>Tác giả</span>
                    <Input
                        value={author}
                        onChange={(event) => { setAuthor(event.target.value) }}
                    />
                </div>
                <div>
                    <span>Gía tiền</span>
                    <InputNumber
                        style={{ width: "100%" }}
                        value={price}
                        onChange={(event) => { setPrice(event) }}
                    />
                </div>
                <div>
                    <span>Số lượng</span>
                    <InputNumber
                        style={{ width: "100%" }}
                        value={quantity}
                        onChange={(event) => { setQuantity(event) }}
                    />
                </div>
                <div>
                    <div>Thể loại</div>
                    <Select
                        style={{ width: "100%" }}
                        value={category}
                        onChange={(value) => { setCategory(value) }}
                        options={[
                            { value: 'Arts', label: 'Arts' },
                            { value: 'Business', label: 'Business' },
                            { value: 'Comics', label: 'Comics' },
                            { value: 'Cooking', label: 'Cooking' },
                            { value: 'Entertainment', label: 'Entertainment' },
                            { value: 'History', label: 'History' },
                            { value: 'Music', label: 'Music' },
                            { value: 'Sports', label: 'Sports' },
                            { value: 'Teen', label: 'Teen' },
                            { value: 'Travel', label: 'Travel' },
                        ]}
                    />
                </div>
                <div>
                    <div>ảnh thumbnail</div>
                    <div>
                        <label htmlFor="btnUpload" style={{
                            display: "block",
                            width: "fit-content",
                            marginTop: "15px",
                            padding: "5px 10px",
                            background: "orange",
                            borderRadius: "5px",
                            cursor: "pointer"
                        }}>
                            Upload
                        </label>
                        <input type="file" hidden id='btnUpload'
                            onChange={(event) => handleOnChangeFile(event)}
                            onClick={(event) => event.target.value = null}
                        />
                    </div>
                    {preview &&
                        <>
                            <div style={{
                                marginTop: "10px",
                                marginBottom: "15px",
                                height: "100px",
                                width: "150px",

                            }}>
                                <img style={{ height: "100%", width: "100%", objectFit: "contain" }}
                                    src={preview}
                                />
                            </div>
                        </>
                    }
                </div>

            </div>
        </Modal>
    )

}

export default UpdateBookControl;