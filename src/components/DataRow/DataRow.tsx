import "./DataRow.css";
import { useState, useRef } from "react";
import { User } from "../../types";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdDownloadDone } from "react-icons/md";
import { useDispatch } from "react-redux";
import { setEditSingleData } from "../../store/slice";

interface DataRowProps {
    user: User;
    selectOneDataHandler: (id: string) => void;
    deleteOneDataHandler: (id: string) => void;
}

const DataRow: React.FC<DataRowProps> = ({
    user,
    selectOneDataHandler,
    deleteOneDataHandler,
}) => {
    const [editable, setEditable] = useState<boolean>(false);
    const [currentUser, setCurrentUser] = useState<User>(user);

    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const roleRef = useRef<HTMLInputElement>(null);

    const dispatch = useDispatch();

    const editDataHandler = () => {
        setEditable(true);
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            saveDataHandler();
        }
    };

    const saveDataHandler = () => {
        const name = nameRef.current?.value || user.name;
        const email = emailRef.current?.value || user.email;
        const role = roleRef.current?.value || user.role;
        const newUser = { ...currentUser, name, email, role };
        setCurrentUser(newUser);
        dispatch(setEditSingleData(newUser));
        setEditable(false);
    };

    return (
        <div className={user.checked ? "user-bar gray-data" : "user-bar"}>
            <div>
                <input
                    className="checkbox"
                    type="checkbox"
                    onChange={() => selectOneDataHandler(user.id)}
                    checked={user.checked}
                />
            </div>
            {!editable ? (
                <>
                    <div>{currentUser.name}</div>
                    <div>{currentUser.email}</div>
                    <div>{currentUser.role}</div>
                </>
            ) : (
                <>
                    <input
                        type="text"
                        defaultValue={user.name}
                        onKeyDown={handleKeyPress}
                        ref={nameRef}
                    ></input>
                    <input
                        type="text"
                        defaultValue={user.email}
                        onKeyDown={handleKeyPress}
                        ref={emailRef}
                    ></input>
                    <input
                        type="text"
                        defaultValue={user.role}
                        onKeyDown={handleKeyPress}
                        ref={roleRef}
                    ></input>
                </>
            )}
            <div className="icons-container">
                {!editable ? (
                    <button className="edit" onClick={editDataHandler}>
                        <MdEdit size="1.2rem" />
                    </button>
                ) : (
                    <button className="save" onClick={saveDataHandler}>
                        <MdDownloadDone size="1.2rem" />
                    </button>
                )}
                <button
                    className="delete"
                    onClick={() => deleteOneDataHandler(user.id)}
                >
                    <MdDelete size="1.2rem" color="red" />
                </button>
            </div>
        </div>
    );
};

export default DataRow;
