import { types } from "../types/types";
import Swal from 'sweetalert2';

import { googleAppProvider, firebase } from "../firebase/firebase-config";


export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                console.log(user);
                dispatch(login(user.uid, user.displayName));
            })
            .catch((e) => {
                console.log(e);
                Swal.fire('Error', e.message, 'error');
            })
            .finally(() => {
                
            })
    }
}
export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAppProvider)
            .then(({ user }) => {
                console.log(user);
                dispatch(login(user.uid, user.displayName))
            })
            .catch((e) => {
                console.log(e);
            })
    }
}
export const startRegEmailPassName = (email, password, name) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async ({ user }) => {
                await user.updateProfile({
                    displayName: name,
                })
                console.log(user);
                dispatch(login(user.uid, user.displayName))
            })
            .catch((e) => {
                console.log(e);
                Swal.fire('Error', e.message, 'error');
            })
    }
}
export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
});