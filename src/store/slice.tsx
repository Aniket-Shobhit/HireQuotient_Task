import { createSlice } from "@reduxjs/toolkit";
import { User } from "../types";

interface initialStateDatatype {
    allData: Array<User>;
    filteredData: Array<User>;
    allPage: number;
    currentPage: number;
}

const initialState: initialStateDatatype = {
    allData: [],
    filteredData: [],
    allPage: 0,
    currentPage: 1,
};

export const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        setInitialData: (state, action) => {
            state.allData = action.payload;
            state.filteredData = action.payload;
            state.allPage = Math.ceil(action.payload.length / 10);
        },
        setAllData: (state, action) => {
            state.filteredData = action.payload;
            state.allData = action.payload;
            state.allPage = Math.ceil(action.payload.length / 10);
        },
        setFilteredData: (state, action) => {
            console.log(state.allData);
            const search = action.payload.toLowerCase();
            const filteredData = state.allData.filter((data) => {
                const name = data.name.toLowerCase();
                const email = data.email.toLowerCase();
                const role = data.role.toLowerCase();
                return (
                    name.includes(search) ||
                    email.includes(search) ||
                    role.includes(search)
                );
            });
            state.filteredData = filteredData;
            state.allPage = Math.ceil(filteredData.length / 10);
            state.currentPage = Math.min(state.currentPage, state.allPage);
        },
        setDeleteSingleData: (state, action) => {
            state.filteredData = state.filteredData.filter(
                (data) => data.id !== action.payload
            );
            state.allData = state.allData.filter(
                (data) => data.id !== action.payload
            );
            state.allPage = Math.ceil(state.filteredData.length / 10);
            state.currentPage = Math.min(state.currentPage, state.allPage);
        },
        setDeleteSelectedData: (state, action) => {
            const updatedFilteredData = state.filteredData.filter((data) => {
                if (action.payload.includes(data.id)) {
                    return false;
                }
                return true;
            });
            const updatedAllData = state.allData.filter((data) => {
                if (action.payload.includes(data.id)) {
                    return false;
                }
                return true;
            });
            state.filteredData = updatedFilteredData;
            state.allData = updatedAllData;
        },
        setEditData: (state, action) => {
            const updatedFilteredData = state.filteredData.map((data) => {
                if (action.payload.includes(data.id)) {
                    return { ...data, checked: !data.checked };
                }
                return data;
            });
            const updatedAllData = state.allData.map((data) => {
                if (action.payload.includes(data.id)) {
                    return { ...data, checked: !data.checked };
                }
                return data;
            });
            state.filteredData = updatedFilteredData;
            state.allData = updatedAllData;
        },
        setEditSingleData: (state, action) => {
            const updatedFilteredData = state.filteredData.map((data) => {
                if (data.id === action.payload.id) return action.payload;
                return data;
            });
            const updatedAllData = state.allData.map((data) => {
                if (data.id === action.payload.id) return action.payload;
                return data;
            });
            state.filteredData = updatedFilteredData;
            state.allData = updatedAllData;
        },
        setPage: (state, action) => {
            const pageNumber = action.payload;
            state.currentPage = pageNumber;
        },
    },
});

export const {
    setInitialData,
    setAllData,
    setDeleteSingleData,
    setDeleteSelectedData,
    setFilteredData,
    setEditData,
    setEditSingleData,
    setPage,
} = dataSlice.actions;
export default dataSlice.reducer;
