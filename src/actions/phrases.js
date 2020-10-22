import { firebase } from "../firebase/firebase-config";
import Swal from 'sweetalert2';

import { types } from "../types/types";

export const loadPhrases = () => {
    const phraSnap = firebase.database().ref('phrases');
    const phrases = [];
    phraSnap.on("value", snapshot => {

        snapshot.forEach((phrase) => {
            phrases.push({
                id: phrase.key,
                ...phrase.val()
            })
        });
        // order by date
        phrases.sort((a, b) => (new Date(b.date) - new Date(a.date)));
    });
    return phrases;
}
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
export const activePhrase = (phrase) => ({
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
export const deletePhrase = (id, callback = null) => {
    const phraRef = firebase.database().ref('phrases/' + id);

    Swal.fire({
        text: "Are you sure to delete it ?",
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#eee',
        confirmButtonText: 'delete'
    }).then((result) => {
        if (result.isConfirmed) {
            phraRef.remove();
            callback && callback(true);
        }
    })
    return;
}
export const searchPhrases = (search) => {


    const curPhrases = loadPhrases();
    const phrases = curPhrases.filter(phrase => Object.values(phrase).some(val => val.toString().includes(search)));

    // console.log(phrases);
    return {
        type: types.phrasesSearch,
        payload: phrases
    }
}
export const closeSearch = () => {
    const phrases = loadPhrases();
    return {
        type: types.phrasesLoad,
        payload: phrases
    }
}