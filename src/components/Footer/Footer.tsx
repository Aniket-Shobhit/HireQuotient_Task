import { setPage } from "../../store/slice";
import "./Footer.css";
import { useSelector, useDispatch } from "react-redux";
import { setDeleteSelectedData } from "../../store/slice";

const Footer = () => {
    const filteredData = useSelector((state: any) => state.data.filteredData);
    const currentPage = useSelector((state: any) => state.data.currentPage);
    const totalPage = useSelector((state: any) => state.data.allPage);

    const dispatch = useDispatch();

    const selectedRows = filteredData.filter(
        (data: any) => data.checked
    ).length;
    const totalRows = filteredData.length;

    const buttonArray = [];

    const startPage = Math.min(currentPage, Math.max(1, totalPage - 5));
    const endPage = Math.min(totalPage, currentPage + 5);

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

    const deleteSelectedHandler = () => {
        const selectedData = filteredData.filter((data: any) => data.checked);
        const selectedId = selectedData.map((data: any) => data.id);
        dispatch(setDeleteSelectedData(selectedId));
    };

    const isButtonRed = (pageNumber: number) => pageNumber === currentPage;

    return (
        <div className="footer">
            <div className="footer-content">
                <div className="left-footer">
                    <div>
                        <button
                            className="delete-selected"
                            onClick={deleteSelectedHandler}
                        >
                            Delete Selected
                        </button>
                    </div>
                    <div>
                        {selectedRows} of {totalRows} selected
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
                                    isButtonRed(pageNumber) ? "red-button" : ""
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
