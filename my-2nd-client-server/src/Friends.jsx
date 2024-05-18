import { Link, useLoaderData } from "react-router-dom";

const Friends = () => {
    const friends = useLoaderData();
    return (
        <div>
            <h1>Friends Number: {friends.length}</h1>
            <p>Friends Name:</p>
            {
                friends.map(friend => <li key={friend.id}><Link to={`/friends/${friend.id}`}>{friend.name}</Link></li>)
            }
        </div>
    );
};

export default Friends;