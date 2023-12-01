import "./TableData.css";

interface User {
    id: string;
    name: string;
    email: string;
    role: string;
}

interface UserBarProps {
    user: User;
}

const UserBar: React.FC<UserBarProps> = ({ user }) => {
    return (
        <div className="user-bar">
            <div>
                <input className="checkbox" type="checkbox" />
            </div>
            <div>{user.name}</div>
            <div>{user.email}</div>
            <div>{user.role}</div>
            <div className="icons">
                <button className="edit-icon">Edit</button>
                <button className="delete-icon">Delete</button>
            </div>
        </div>
    );
};

export default UserBar;
