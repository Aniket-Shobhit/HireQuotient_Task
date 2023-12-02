import UserBar from "../TableData/TableData";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
    setInitialData,
    setDeleteSingleData,
    setEditSingleData,
    setEditData,
} from "../../store/slice";
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
                // all property of checked to data
                data.forEach((user: User) => {
                    user.checked = false;
                });
                dispatch(setInitialData(data));
            })
            .catch((error) => console.error("Error fetching tasks:", error));
    }, [dispatch]);

    const pageNumber: number = useSelector(
        (state: any) => state.data.currentPage
    );

    const filteredData: Array<User> = useSelector(
        (state: any) => state.data.filteredData
    );

    const currentData = filteredData.slice(
        (pageNumber - 1) * 10,
        pageNumber * 10
    );

    const selectDataHandler = () => {
        const selectedId = currentData.map((user) => user.id);
        dispatch(setEditData(selectedId));
    };

    const selectOneDataHandler = (id: string) => {
        const selectedData = filteredData.find((user) => user.id === id);
        if (selectedData) {
            const updatedData = {
                ...selectedData,
                checked: !selectedData.checked,
            };
            dispatch(setEditSingleData(updatedData));
        }
    };

    const deleteOneDataHandler = (id: string) => {
        dispatch(setDeleteSingleData(id));
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
                        <UserBar
                            key={user.id}
                            user={user}
                            selectOneDataHandler={selectOneDataHandler}
                            deleteOneDataHandler={deleteOneDataHandler}
                        />
                    ))}
                </div>
            ) : (
                <h1 className="no-data">No Data to display</h1>
            )}
        </div>
    );
};

export default UserTable;
