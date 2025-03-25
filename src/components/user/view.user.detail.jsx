import { Drawer } from 'antd';

const ViewUserDetail = (props) => {
    const {
        dataDetail,
        setDataDetail,
        isDetailOpen,
        setIsDetailOpen
    } = props
    return (
        <>
            <Drawer title="Chi tiết User"
                onClose={() => {
                    setDataDetail(null);
                    setIsDetailOpen(false);
                }}
                open={isDetailOpen}>
                {dataDetail ? <>
                    <p>Id: {dataDetail._id}</p>
                    <br />
                    <p>Full name: {dataDetail.fullName}</p>
                    <br />
                    <p>Phone number: {dataDetail.phone}</p>
                </> :
                    <>
                        <p>
                            Không có dữ liệu
                        </p>
                    </>
                    }
            </Drawer>
        </>
    );
};
export default ViewUserDetail;