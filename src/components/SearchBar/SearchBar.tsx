import "./SearchBar.css";
import { useDispatch } from "react-redux";
import { setFilteredData } from "../../store/slice";
import { useRef } from "react";

const SearchBar = () => {
    const dispatch = useDispatch();
    const searchRef = useRef<HTMLInputElement>(null);

    const searchButtonHandler = () => {
        const search = searchRef.current?.value || "";
        dispatch(setFilteredData(search));
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search..."
                className="searchInput"
                ref={searchRef}
            />
            <button className="search-icon" onClick={searchButtonHandler}>
                Search
            </button>
        </div>
    );
};

export default SearchBar;
