import { createSlice } from "@reduxjs/toolkit";
import { User } from "../types";

interface initialStateDatatype {
    filteredData: Array<User>;
    selectedData: Array<string>;
    allPage: number;
    currentPage: number;
}

const initialState: initialStateDatatype = {
    filteredData: [],
    selectedData: [],
    allPage: 0,
    currentPage: 1,
};

export const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        setAllData: (state, action) => {
            state.filteredData = action.payload;
            state.allPage = Math.ceil(action.payload.length / 10);
        },
        setFilteredData: (state, action) => {
            const search = action.payload.toLowerCase();
            const filteredData = state.filteredData.filter((data) => {
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
            // state.currentData = filteredData.slice(0, 10);
        },
        setDeleteData: (state, action) => {
            state.filteredData = state.filteredData.filter(
                (data) => data.id !== action.payload.id
            );
            state.allPage = Math.ceil(state.filteredData.length / 10);
        },
        setDeleteSelectedData: (state) => {
            const updatedData = [];
            let i = 0;
            let j = 0;
            while (
                i < state.filteredData.length &&
                j < state.selectedData.length
            ) {
                const currentElement = state.filteredData[i];
                const elementIdToDelete = state.selectedData[j];

                if (currentElement.id === elementIdToDelete) {
                    i++;
                    j++;
                } else if (currentElement.id < elementIdToDelete) {
                    updatedData.push(currentElement);
                    i++;
                } else {
                    j++;
                }
            }

            while (i < state.filteredData.length) {
                updatedData.push(state.filteredData[i]);
                i++;
            }

            state.filteredData = updatedData;
            state.selectedData = [];
            state.allPage = Math.ceil(state.filteredData.length / 10);
        },
        setEditData: (state, action) => {
            const updatedData = state.filteredData.map((data) => {
                if (data.id === action.payload.id) return action.payload;
                return data;
            });
            state.filteredData = updatedData;
        },
        setPage: (state, action) => {
            const pageNumber = action.payload;
            state.currentPage = pageNumber;
        },
        setSelectedData: (state, action) => {
            if (action.payload.add) {
                state.selectedData.push(action.payload.id);
            } else {
                const index = state.selectedData.indexOf(action.payload.id);
                state.selectedData.splice(index, 1);
            }
        },
    },
});

export const {
    setAllData,
    setDeleteData,
    setDeleteSelectedData,
    setFilteredData,
    setEditData,
    setPage,
    setSelectedData,
} = dataSlice.actions;
export default dataSlice.reducer;
