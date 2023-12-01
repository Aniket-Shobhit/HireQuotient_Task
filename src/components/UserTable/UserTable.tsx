import UserBar from "../TableData/TableData";
import { useSelector } from "react-redux";
import { User } from "../../types";
import "./UserTable.css";

const UserTable = () => {
    const currentData: Array<User> = useSelector(
        (state: any) => state.data.currentData
    );

    const deleteData = () => {};

    const selectDataHandler = (e: any) => {
        console.log("Select Data", e.target.checked);
    };

    return (
        <div className="user-table">
            <div className="table-header">
                <div>
                    <input
                        className="checkbox"
                        type="checkbox"
                        onChange={selectDataHandler}
                    />
                </div>
                <div>Name</div>
                <div>Email</div>
                <div>Role</div>
                <div>Actions</div>
            </div>
            <div>
                {currentData.map((user) => (
                    <UserBar key={user.id} user={user} />
                ))}
            </div>
        </div>
    );
};

export default UserTable;
