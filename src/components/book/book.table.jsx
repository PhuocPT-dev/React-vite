import { Button, Popconfirm, Table } from "antd";
import { useEffect, useState } from "react";
import { fetchAllBookAPI } from "../../service/api.service";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import BookDetail from "./book.detail";


const BookTable = () => {

    const [dataBook, setDataBook] = useState([]);
    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const [total, setTotal] = useState(0);
    // xem chi tiet book
    const [dataDetail, setDataDetail] = useState(null);
    const [isDetailOpen, setIsDetailOpen] = useState(false);


    useEffect(() => {
        loadBook();
    }, [current, pageSize]);


    const loadBook = async () => {
        const res = await fetchAllBookAPI(current, pageSize)
        if (res.data) {
            setDataBook(res.data.result);
            setCurrent(res.data.meta.current);
            setPageSize(res.data.meta.pageSize);
            setTotal(res.data.meta.total)

        }
    }

    const handleDeleteBook = async (id) => {

    }

    const onChange = (pagination, filters, sorter, extra) => {
        //steCurrent, setPageSize
        // nếu thay dổi trang :current
        if (pagination && pagination.current) {
            if (+pagination.current !== +current) {
                setCurrent(+pagination.current) // "5" => 5
            }
        }

        // nếu thay dổi tổng số phần tử : pageSize
        if (pagination && pagination.pageSize) {
            if (+pagination.pageSize !== +pageSize) {
                setPageSize(+pagination.pageSize) // "5" => 5
            }
        }
        console.log(">>> check", { pagination, filters, sorter, extra });

    };



    const columns = [
        {
            title: "STT",
            render: (_, record, index) => {
                // console.log(">>> check index :" , index)
                return (
                    <>
                        {(index + 1) + (current - 1) * pageSize}
                    </>
                )
            }
        },
        {
            title: 'Id',
            dataIndex: '_id',
            render: (_, record) => {
                return (
                    <a href='#'
                        onClick={() => {
                            setDataDetail(record);
                            // console.log(">>> check :", record);
                            setIsDetailOpen(true);
                        }}
                    >{record._id}</a>
                )
            }

        },
        {
            title: 'Tiêu dề',
            dataIndex: 'mainText',
        },
        {
            title: 'Giá tiền',
            dataIndex: 'price',
            render: (text, record, index, action) => {
                if (text)
                    return new Intl.NumberFormat('vi-VN',
                        { style: 'currency', currency: 'VND' }).format(text)
            },
        },
        {
            title: 'Số lượng',
            dataIndex: 'quantity',
        },
        {
            title: 'Tác giả',
            dataIndex: 'author',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <div style={{ display: "flex", gap: "20px" }}>
                    <EditOutlined
                        onClick={() => {
                            // console.log(">>> check record:", record);
                            setDataUpdate(record)
                            setIsModalUpdateOpen(true)
                        }}
                        style={{ cursor: "pointer", color: "orange" }} />
                    <Popconfirm
                        title="Xóa người dùng"
                        description="Bạn chắc chắn xóa user này?"
                        onConfirm={() => handleDeleteBook(record._id)}
                        okText="Yes"
                        cancelText="No"
                        placement="left"
                    >
                        <DeleteOutlined style={{ cursor: "pointer", color: "red" }} />
                    </Popconfirm>

                </div>

            ),
        },

    ];
    return (
        <>
            <div style={{
                marginTop: "10px",
                display: "flex",
                justifyContent: "space-between"
            }}>
                <h3>Table Book</h3>
                <Button type="primary">Create Book</Button>

            </div>
            <Table columns={columns}
                dataSource={dataBook}
                rowKey={"_id"}
                pagination={
                    {
                        current: current,
                        pageSize: pageSize,
                        showSizeChanger: true,
                        total: total,
                        showTotal: (total, range) => { return (<div> {range[0]}-{range[1]} trên {total} rows</div>) }
                    }}
                onChange={onChange}
            />
            <BookDetail
                dataDetail={dataDetail}
                setDataDetail={setDataDetail}
                isDetailOpen={isDetailOpen}
                setIsDetailOpen={setIsDetailOpen}
            />
        </>
    )
}

export default BookTable;