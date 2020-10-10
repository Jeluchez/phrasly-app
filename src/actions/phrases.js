import { firebase } from "../firebase/firebase-config";
import { types } from "../types/types";

export const startNewPhrase = () => {
    return (dispatch, getState) => {
        const { uid, name } = getState().auth;

        const newPhrase = {
            author: {
                id: uid,
                name: name,
                avatar: ''
            },
            title: '',
            message: '',
            date: new Date().getTime(),
            url:''
        };
        // this is a insert to normal database
        // const phraDoc = await db.collection('phrases').add(newPhrase);
        const phraRef =  firebase.database().ref('phrases');
        phraRef.push(newPhrase);
    }
}
export const setPhrases = (phrases) =>({
    type: types.phrasesLoad,
    payload: phrases
})