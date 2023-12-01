import "./SearchBar.css";

const SearchBar = () => {
    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search..."
                className="searchInput"
            />
            <button className="search-icon">Search</button>
        </div>
    );
};

export default SearchBar;
