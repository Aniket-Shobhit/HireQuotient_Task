import { setPage } from "../../store/slice";
import "./Footer.css";
import { useSelector, useDispatch } from "react-redux";

const Footer = () => {
    const dispatch = useDispatch();

    const filteredData = useSelector((state: any) => state.data.filteredData);
    const currentPage = useSelector((state: any) => state.data.currentPage);

    const totalPage = Math.ceil(filteredData.length / 10);
    const selectedRows = filteredData.filter(
        (data: any) => data.checked
    ).length;
    const totalRows = filteredData.length;

    const startPage = Math.min(
        Math.max(1, currentPage),
        Math.max(1, totalPage - 4)
    );
    const endPage = Math.min(totalPage, currentPage + 4);

    const buttonArray = [];
    for (let i = startPage; i <= endPage; i++) {
        if (i <= totalPage) {
            buttonArray.push(i);
        }
    }

    const changePageHandler = (pageNumber: number) => {
        if (pageNumber < 1 || pageNumber > totalPage) {
            return;
        }
        dispatch(setPage(pageNumber));
    };

    return (
        <div className="footer">
            <div className="footer-content">
                <div className="left-footer">
                    <div>
                        {selectedRows} of {totalRows} row(s) selected
                    </div>
                </div>
                <div className="right-footer">
                    <div className="page-number">
                        Page {currentPage} of {totalPage}
                    </div>
                    <div className="page-list">
                        <button
                            className="first-page"
                            onClick={() => changePageHandler(1)}
                        >
                            &lt;&lt;
                        </button>
                        <button
                            className="previous-page"
                            onClick={() => changePageHandler(currentPage - 1)}
                        >
                            &lt;
                        </button>

                        {buttonArray.map((pageNumber) => (
                            <button
                                key={pageNumber}
                                className={
                                    pageNumber === currentPage
                                        ? "red-button"
                                        : ""
                                }
                                onClick={() => changePageHandler(pageNumber)}
                            >
                                {pageNumber}
                            </button>
                        ))}

                        <button
                            className="next-page"
                            onClick={() => changePageHandler(currentPage + 1)}
                        >
                            &gt;
                        </button>
                        <button
                            className="last-page"
                            onClick={() => changePageHandler(totalPage)}
                        >
                            &gt;&gt;
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
