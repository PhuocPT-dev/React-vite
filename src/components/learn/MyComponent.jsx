//() => { }
//JSX
//fragment(mảnh vỡ)
import './style.css';

const MyComponent = () => {
    return (
        <>
            <div>Phan Thanh Phước</div>
            <div className="child"
                style={
                    { borderRadius: "10px" }
                }

            >child</div>
        </>
    );
}
export default MyComponent;