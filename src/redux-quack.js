import { createStore } from "redux";

const initialState = {
    data: ['Curso 0']
}

const courses = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_COURSE':
            return { ...state, data: [...state.data, action.payload] }

        default:
            return state;
    }
}

export const addAction = (courseName) => {
    return {
        type: 'ADD_COURSE',
        payload: courseName
    }
}

export const Store = createStore(courses)
