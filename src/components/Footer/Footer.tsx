import "./Footer.css";

const Footer = () => {
    const selectedRows = 0;
    const totalRows = 46;
    const currentPage = 1;
    const totalPage = 5;

    return (
        <div className="footer">
            <div className="left-footer">
                <div>
                    <button className="delete-selected">Delete Selected</button>
                </div>
                <div>
                    {selectedRows} of {totalRows} selected
                </div>
            </div>
            <div className="pages">
                <div className="page-number">
                    Page {currentPage} of {totalPage}
                </div>
                <div className="page-list">
                    <button className="first-page">&lt;&lt;</button>
                    <button className="previous-page">&lt;</button>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>4</button>
                    <button>5</button>
                    <button className="next-page">&gt;</button>
                    <button className="last-page">&gt;&gt;</button>
                </div>
            </div>
        </div>
    );
};

export default Footer;
