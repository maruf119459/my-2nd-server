import { useLoaderData } from "react-router-dom";

const Friend = () => {
    const friend  = useLoaderData();
    return (
        <div>
            <h3>Name: {friend.name}</h3>
            <p>Age: {friend.age}</p>
        </div>
    );
};

export default Friend;