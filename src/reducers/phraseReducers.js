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
    selectedPhrase: null
}
export const phrasesReducers = (state = initialState, action) => {

    switch (action.type) {
        case types.phrasesLoad:
            return {
                ...state,
                phrases: action.payload
            }
        case types.phraseSelect:
            return {
                ...state,
                selectedPhrase: { ...action.payload }
            }
        case types.phrasesSearch:
            return {
                ...state,
                phrases: [...action.payload],
            }
        case types.phrasesCleanSelectedPhrase:
            // console.log(action.payload);
            return {
                ...state,
                selectedPhrase: null
            }
        case types.phrasesLogoutcleanAll:
            // console.log(action.payload);
            return {
                phrases: [],
                selectedPhrase: null
            }
        default:
            return state;
    }
}