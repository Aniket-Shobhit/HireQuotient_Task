import UserBar from "../DataRow/DataRow";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
    setAllData,
    setDeleteSingleData,
    setEditSingleData,
    setEditSelectedData,
} from "../../store/slice";
import { User } from "../../types";
import "./TableData.css";

const TableData = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        fetch(
            "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
        )
            .then((response) => response.json())
            .then((data) => {
                data.forEach((user: User) => {
                    user.checked = false;
                });
                dispatch(setAllData(data));
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

    const selectDataHandler = (e: any) => {
        const selectedId = currentData.map((user) => user.id);
        dispatch(
            setEditSelectedData({ data: selectedId, checked: e.target.checked })
        );
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
                        checked={
                            (currentData.length &&
                                currentData.every((user) => user.checked)) ||
                            false
                        }
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

export default TableData;
