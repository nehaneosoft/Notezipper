import {Spinner} from "react-bootstrap";

const Loading = () => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
            }}
        >

        <Spinner
        animation ="border"
            style={{
                width:100,
                height:100,
            }}
            role="status"
            ><img src="https://ak.picdn.net/shutterstock/videos/1034400866/thumb/5.jpg?ip=x480" width="200px" height="100px"></img></Spinner>
        </div>
    );
};

export default Loading ;