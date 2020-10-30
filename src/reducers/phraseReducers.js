import { types } from "../types/types";
// const phrase = {
    //     title: 'algo',
    //     message: 'bien',
    //     date: 'date',
    //     updateDate: 'aja',
    //     author: {
    //         name: 'jose',
    //         id: 2,

    //     },
    //     observations:
    //     {
    //         userName: 'lusia',
    //         weird: 2,
    //         imageUrl: {
    //             regula: 'hashdhasdh',
    //             thumb: 'asdasdasd'
    //         },
    //         tag: ['sin', 'peace']
    //     }
    // }
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