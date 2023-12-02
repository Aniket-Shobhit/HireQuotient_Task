import "./TableData.css";
import { useState, useRef } from "react";
import { User } from "../../types";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdDownloadDone } from "react-icons/md";
import { useDispatch } from "react-redux";
import { setEditSingleData } from "../../store/slice";

interface UserBarProps {
    user: User;
    selectOneDataHandler: (id: string) => void;
    deleteOneDataHandler: (id: string) => void;
}

const UserBar: React.FC<UserBarProps> = ({
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

    const doneDataHandler = () => {
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
                        ref={nameRef}
                    ></input>
                    <input
                        type="text"
                        defaultValue={user.email}
                        ref={emailRef}
                    ></input>
                    <input
                        type="text"
                        defaultValue={user.role}
                        ref={roleRef}
                    ></input>
                </>
            )}
            <div className="icons">
                {!editable ? (
                    <button className="edit-icon" onClick={editDataHandler}>
                        <MdEdit />
                    </button>
                ) : (
                    <button className="edit-icon" onClick={doneDataHandler}>
                        <MdDownloadDone />
                    </button>
                )}
                <button
                    className="delete-icon"
                    onClick={() => deleteOneDataHandler(user.id)}
                >
                    <MdDelete />
                </button>
            </div>
        </div>
    );
};

export default UserBar;
