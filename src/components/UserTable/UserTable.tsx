import UserBar from "../TableData/TableData";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { setAllData, setSelectedData } from "../../store/slice";
import { User } from "../../types";
import "./UserTable.css";

const UserTable = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        fetch(
            "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
        )
            .then((response) => response.json())
            .then((data) => {
                const doubleData = [...data, ...data];
                console.log("Data", doubleData);
                dispatch(setAllData(doubleData));
            })
            .catch((error) => console.error("Error fetching tasks:", error));
    }, [dispatch]);

    const pageNumber: number = useSelector(
        (state: any) => state.data.currentPage
    );

    const currentData: Array<User> = useSelector(
        (state: any) => state.data.filteredData
    ).slice((pageNumber - 1) * 10, pageNumber * 10);

    const selectDataHandler = (e: any) => {
        console.log("Select Data", e.target.checked);
        dispatch(
            setSelectedData(
                currentData.map((user: User) => ({
                    id: user.id,
                    checked: e.target.checked,
                }))
            )
        );
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
            {currentData.length ? (
                <div>
                    {currentData.map((user) => (
                        <UserBar key={user.id} user={user} />
                    ))}
                </div>
            ) : (
                <h1 className="no-data">No Data to display</h1>
            )}
        </div>
    );
};

export default UserTable;
