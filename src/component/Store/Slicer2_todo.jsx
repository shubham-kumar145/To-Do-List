import { createSlice, nanoid } from "@reduxjs/toolkit";

const saved = localStorage.getItem("todo_data");

const initialState = {
    data: saved ? JSON.parse(saved) : [],
};


const reactslicer = createSlice({
    name: "todo",
    initialState,
    reducers: {
        add_data: (state, action) => {
            const { title, start, end, important } = action.payload;
            const new_data = {
                id: nanoid(),
                title,
                start,
                end,
                important,
                done: false,
            };
            state.data.push(new_data);
            localStorage.setItem("todo_data", JSON.stringify(state.data));
        },
        remove_data: (state, action) => {
            const idtoremove = action.payload
            state.data = state.data.filter(item => item.id !== idtoremove);
            localStorage.setItem("todo_data", JSON.stringify(state.data));
        },
        update_data: (state, action) => {
            const { id, title, start, end } = action.payload;
            const updatedData = state.data.map((value) =>
                value.id === id ? { ...value, title, start, end } : value
            );
            state.data = updatedData;
            localStorage.setItem("todo_data", JSON.stringify(updatedData));
        },

        important_data: (state, action) => {
            const idToUpdate = action.payload;

            const updatedData = state.data.map((value) => {
                if (value.id === idToUpdate) {
                    return { ...value, important: !value.important };
                }
                return value;
            });

            state.data = updatedData;
            localStorage.setItem("todo_data", JSON.stringify(updatedData));
        },

        complete_task_data: (state, action) => {
            const idofcomplete = action.payload;
            const updatedData = state.data.map((value) => {
                if (value.id === idofcomplete) {
                    return { ...value, done: !value.done };
                }
                return value;
            });
            state.data = updatedData;
            localStorage.setItem("todo_data", JSON.stringify(updatedData));
        },
        update_task: (state, action) => {
            const { idtoupdatetitle, updatedtitle } = action.payload;

            const updatedData = state.data.map((value) => {
                if (value.id === idtoupdatetitle) {
                    return { ...value, title: updatedtitle };
                }
                return value;
            });
            state.data = updatedData;
            localStorage.setItem("todo_data", JSON.stringify(updatedData))
        }
    },
});

export const { add_data, remove_data, update_data, important_data, complete_task_data, update_task } = reactslicer.actions;
export default reactslicer.reducer;