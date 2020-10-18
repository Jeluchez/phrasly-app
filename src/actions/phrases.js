import { firebase } from "../firebase/firebase-config";
import { types } from "../types/types";

export const startNewPhrase = ({ title, message, url }) => {
    return (dispatch, getState) => {
        const { uid, name } = getState().auth;

        const newPhrase = {
            author: {
                id: uid,
                name: name,
                avatar: ''
            },
            title: title,
            message: message,
            date: new Date().getTime(),
            url: {
                ...url
            }
        };
        // this is a insert to normal database
        // const phraDoc = await db.collection('phrases').add(newPhrase);
        const phraRef = firebase.database().ref('phrases');
        phraRef.push(newPhrase);
    }
}
export const setPhrases = (phrases) => ({
    type: types.phrasesLoad,
    payload: phrases
})
export const setPhrase = (phrase) => ({
    type: types.phraseSelect,
    payload: phrase
})
export const updatePhrase = (phrase) => {

    return (dispatch, getState) => {

        const { id, message, title, author, url } = phrase;
        firebase.database().ref('phrases/' + id).set({
            author: author,
            date: new Date().getTime(),
            message: message,
            title: title,
            url: {
                ...url
            }
        }).catch((err) => {
            console.log('error: ', err);
        });

    }
    // type: types.phraseSelect,
    //     payload: phrase
}