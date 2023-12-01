import { createSlice } from "@reduxjs/toolkit";

interface initialStateDatatype {
    allData: any[];
    currentData: any[];
    selectedData: any[];
    allPage: number;
    currentPage: number;
}

const user = [
    {
        id: "1",
        name: "Aaron Miles",
        email: "aaron@mailinator.com",
        role: "member",
    },
    {
        id: "2",
        name: "Aishwarya Naik",
        email: "aishwarya@mailinator.com",
        role: "member",
    },
    {
        id: "3",
        name: "Arvind Kumar",
        email: "arvind@mailinator.com",
        role: "admin",
    },
    {
        id: "4",
        name: "Caterina Binotto",
        email: "caterina@mailinator.com",
        role: "member",
    },
    {
        id: "5",
        name: "Chetan Kumar",
        email: "chetan@mailinator.com",
        role: "member",
    },
    {
        id: "6",
        name: "Jim McClain",
        email: "jim@mailinator.com",
        role: "member",
    },
    {
        id: "7",
        name: "Mahaveer Singh",
        email: "mahaveer@mailinator.com",
        role: "member",
    },
    {
        id: "8",
        name: "Rahul Jain",
        email: "rahul@mailinator.com",
        role: "admin",
    },
    {
        id: "9",
        name: "Rizan Khan",
        email: "rizan@mailinator.com",
        role: "member",
    },
    {
        id: "10",
        name: "Sarah Potter",
        email: "sarah@mailinator.com",
        role: "admin",
    },
    {
        id: "11",
        name: "Keshav Muddaiah",
        email: "keshav@mailinator.com",
        role: "member",
    },
    {
        id: "12",
        name: "Nita Ramesh",
        email: "nita@mailinator.com",
        role: "member",
    },
    {
        id: "13",
        name: "Julia Hunstman",
        email: "julia@mailinator.com",
        role: "member",
    },
    {
        id: "14",
        name: "Juan Alonso",
        email: "juan@mailinator.com",
        role: "admin",
    },
    {
        id: "15",
        name: "Gabriel Montoya",
        email: "gabriel@mailinator.com",
        role: "admin",
    },
    {
        id: "16",
        name: "Beatrice Iglesias",
        email: "beatrice@mailinator.com",
        role: "admin",
    },
    {
        id: "17",
        name: "Sarah Symms",
        email: "sarah.s@mailinator.com",
        role: "admin",
    },
    {
        id: "18",
        name: "Patrick Pinheiro",
        email: "patrick@mailinator.com",
        role: "admin",
    },
    {
        id: "19",
        name: "Anand Patel",
        email: "anand@mailinator.com",
        role: "member",
    },
    {
        id: "20",
        name: "Kishore Kalburgi",
        email: "kishore@mailinator.com",
        role: "member",
    },
    {
        id: "21",
        name: "Rebecca Norris",
        email: "rebecca@mailinator.com",
        role: "member",
    },
    {
        id: "22",
        name: "Özgür Başak",
        email: "ozgur@mailinator.com",
        role: "member",
    },
    {
        id: "23",
        name: "Robin Andersen",
        email: "robin@mailinator.com",
        role: "member",
    },
    {
        id: "24",
        name: "Nandini Kumar",
        email: "nandini@mailinator.com",
        role: "member",
    },
    {
        id: "25",
        name: "Nikita Smith",
        email: "nikita@mailinator.com",
        role: "member",
    },
    {
        id: "26",
        name: "Colton Doe",
        email: "colton@mailinator.com",
        role: "member",
    },
    {
        id: "27",
        name: "Alain Senna",
        email: "alain@mailinator.com",
        role: "member",
    },
    {
        id: "28",
        name: "Ashwin Jain",
        email: "ashwin@mailinator.com",
        role: "member",
    },
    {
        id: "29",
        name: "Seema Bhatt",
        email: "seema@mailinator.com",
        role: "member",
    },
    {
        id: "30",
        name: "Kayla Scarpinski",
        email: "kayla@mailinator.com",
        role: "member",
    },
    {
        id: "31",
        name: "Ajay Ghosh",
        email: "ajay@mailinator.com",
        role: "member",
    },
    {
        id: "32",
        name: "Chris Lindberg",
        email: "chris@mailinator.com",
        role: "member",
    },
    {
        id: "33",
        name: "Christina Mourujärvi",
        email: "christina@mailinator.com",
        role: "member",
    },
    {
        id: "34",
        name: "Mikhail Bill",
        email: "mikhail@mailinator.com",
        role: "member",
    },
    {
        id: "35",
        name: "Eino Göregen",
        email: "eino@mailinator.com",
        role: "member",
    },
    {
        id: "36",
        name: "Zachariah Johansson",
        email: "zacharaiah@mailinator.com",
        role: "member",
    },
    {
        id: "37",
        name: "Aimaan Mohammed",
        email: "aimaan@mailinator.com",
        role: "admin",
    },
    {
        id: "38",
        name: "Aika Tsunoda",
        email: "aika@mailinator.com",
        role: "member",
    },
    {
        id: "39",
        name: "Kimiko Minamoto",
        email: "kimiko@mailinator.com",
        role: "member",
    },
    {
        id: "40",
        name: "Alyona Baginskaite",
        email: "alyona@mailinator.com",
        role: "member",
    },
    {
        id: "41",
        name: "Anirudh Mukherjee",
        email: "anirudh@mailinator.com",
        role: "member",
    },
    {
        id: "42",
        name: "Alyona Gov",
        email: "alyonagov@mailinator.com",
        role: "member",
    },
    {
        id: "43",
        name: "Robin Singh",
        email: "robin@mailinator.com",
        role: "member",
    },
    {
        id: "44",
        name: "Vijay Vasudevan",
        email: "vijayv@mailinator.com",
        role: "member",
    },
    {
        id: "45",
        name: "Steve Smith",
        email: "steve@mailinator.com",
        role: "member",
    },
    {
        id: "46",
        name: "Anirudh Banerjee",
        email: "anirudhb@mailinator.com",
        role: "member",
    },
];

const initialState: initialStateDatatype = {
    allData: user,
    currentData: user.splice(0, 10),
    allPage: Math.ceil(user.length / 10),
    currentPage: 1,
    selectedData: [],
};

export const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        setDeleteData: (state, action) => {
            state.allData = state.allData.filter(
                (data) => data.id !== action.payload.id
            );
            state.allPage = Math.ceil(state.allData.length / 10);
        },
        setDeleteSelectedData: (state) => {
            const updatedData = [];
            let i = 0;
            let j = 0;
            while (i < state.allData.length && j < state.selectedData.length) {
                const currentElement = state.allData[i];
                const elementToDelete = state.selectedData[j];

                if (currentElement.id === elementToDelete.id) {
                    i++;
                    j++;
                } else if (currentElement.id < elementToDelete.id) {
                    updatedData.push(currentElement);
                    i++;
                } else {
                    j++;
                }
            }

            while (i < state.allData.length) {
                updatedData.push(state.allData[i]);
                i++;
            }

            state.allData = updatedData;
            state.selectedData = [];
            state.allPage = Math.ceil(state.allData.length / 10);
        },
        setEditData: (state, action) => {
            const updatedData = state.allData.map((data) => {
                if (data.id === action.payload.id) return action.payload;
                return data;
            });
            state.allData = updatedData;
        },
        setPage: (state, action) => {
            const pageNumber = action.payload;
            state.currentPage = pageNumber;
            state.currentData = state.allData.splice(
                (pageNumber - 1) * 10 + 1,
                pageNumber * 10
            );
        },
    },
});

export const { setDeleteData, setDeleteSelectedData, setEditData, setPage } =
    dataSlice.actions;
export default dataSlice.reducer;
