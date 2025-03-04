//() => { }
//JSX
//fragment(mảnh vỡ)
import './style.css';

const MyComponent = () => {
    // const Ho = "Phan"; // string
    // const Ho = 25; // number
    // const Ho = true; // boolean
    // const Ho = undefined; 
    // const Ho = null; 
    const Ho = [1, 2, 3]
    // const Ho = {
    //     name:"PTP",
    //     age: 25
    // }
    return (
        <>
            <div>{JSON.stringify(Ho)} Thanh Phước</div>
            <div>{console.log("PTP")}</div>
            <div className="child"
                style={
                    { borderRadius: "10px" }
                }

            >child</div>
        </>
    );
}
export default MyComponent;