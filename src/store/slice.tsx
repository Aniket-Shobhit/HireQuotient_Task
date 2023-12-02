import { createSlice } from "@reduxjs/toolkit";
import { User } from "../types";

interface initialStateDatatype {
    allData: Array<User>;
    filteredData: Array<User>;
    currentPage: number;
}

const initialState: initialStateDatatype = {
    allData: [],
    filteredData: [],
    currentPage: 1,
};

export const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        setAllData: (state, action) => {
            state.filteredData = action.payload;
            state.allData = action.payload;
        },
        setFilteredData: (state, action) => {
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
            state.currentPage = Math.min(
                Math.max(1, state.currentPage),
                Math.ceil(filteredData.length / 10)
            );
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
        setEditSelectedData: (state, action) => {
            const updatedFilteredData = state.filteredData.map((data) => {
                if (action.payload.data.includes(data.id)) {
                    return { ...data, checked: action.payload.checked };
                }
                return data;
            });
            const updatedAllData = state.allData.map((data) => {
                if (action.payload.data.includes(data.id)) {
                    return { ...data, checked: action.payload.checked };
                }
                return data;
            });
            state.filteredData = updatedFilteredData;
            state.allData = updatedAllData;
        },
        setDeleteSingleData: (state, action) => {
            state.filteredData = state.filteredData.filter(
                (data) => data.id !== action.payload
            );
            state.allData = state.allData.filter(
                (data) => data.id !== action.payload
            );
            state.currentPage = Math.min(
                state.currentPage,
                Math.ceil(state.filteredData.length / 10)
            );
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
            state.currentPage = Math.min(
                state.currentPage,
                Math.ceil(state.filteredData.length / 10)
            );
        },
        setPage: (state, action) => {
            const pageNumber = action.payload;
            state.currentPage = pageNumber;
        },
    },
});

export const {
    setAllData,
    setDeleteSingleData,
    setDeleteSelectedData,
    setFilteredData,
    setEditSelectedData,
    setEditSingleData,
    setPage,
} = dataSlice.actions;
export default dataSlice.reducer;
