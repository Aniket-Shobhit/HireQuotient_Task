import "./Header.css";
import { MdDelete } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { setFilteredData, setDeleteSelectedData } from "../../store/slice";
import { useRef } from "react";

const Header = () => {
    const dispatch = useDispatch();

    const filteredData = useSelector((state: any) => state.data.filteredData);
    const searchRef = useRef<HTMLInputElement>(null);

    const searchButtonHandler = () => {
        const search = searchRef.current?.value || "";
        dispatch(setFilteredData(search));
    };

    const deleteSelectedHandler = () => {
        const selectedData = filteredData.filter((data: any) => data.checked);
        const selectedId = selectedData.map((data: any) => data.id);
        dispatch(setDeleteSelectedData(selectedId));
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            searchButtonHandler();
        }
    };

    return (
        <div className="header">
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search..."
                    className="searchInput"
                    onKeyDown={handleKeyPress}
                    ref={searchRef}
                />
                <button className="search-icon" onClick={searchButtonHandler}>
                    Search
                </button>
            </div>
            <div>
                <button
                    className="delete-selected"
                    onClick={deleteSelectedHandler}
                >
                    <MdDelete size="1rem" />
                </button>
            </div>
        </div>
    );
};

export default Header;
