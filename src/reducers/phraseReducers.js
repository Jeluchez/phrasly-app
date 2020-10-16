import { types } from "../types/types";

/*
{
    phrases: []
    active:null
    active:{
        title:''
        message:'',
        date:'',
        updateDate:'',
        observations:[
            {
                userName:'',
                comment:''
                date:'',
                update:'',
                obsertacionState: pending || accept || reject
                like: 
                weird
                imageUrl:
                tag
            }
        ]
    }
}
*/
const initialState = {
    phrases: [],
    selected: null
}
export const phrasesReducers = (state = initialState, action) => {

    switch (action.type) {
        case types.phrasesLoad:
            return {
                ...state,
                phrases: action.payload
            }
        default:
            return state;
    }
}