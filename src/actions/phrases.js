import { firebase } from "../firebase/firebase-config";
import Swal from 'sweetalert2';

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
export const activePhrase = (phrase) =>({
    type: types.phraseSelect,
    payload: phrase
})
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
}
export const cleanSelectedPhrase = () => ({
    type: types.phrasesCleanSelectedPhrase
})
export const cleanAllPhrases = () => ({
    type: types.phrasesLogoutcleanAll
})
export const deletePhrase = (id, callback=null) => {
    const phraRef = firebase.database().ref('phrases/' + id);

    Swal.fire({
        title: 'Are you sure to delete it ?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            phraRef.remove();
            callback && callback(true);
        }
    })
    return;
}