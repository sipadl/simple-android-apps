import { ADD, DELETE } from "../actions/type";


const initialState = {
    datas: []
}

const data = (state=initialState, action) => {
    switch (action.type) {
        case ADD: 
        console.log("TAMBAH", action)
        return {
            ...state,
            datas:action.data,
        }
        case DELETE: 
        return {
            datas:[],
        }
        default:
            return state;
    }
}

export default data;