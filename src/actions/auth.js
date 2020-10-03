import { types } from "../types/types";
import Swal from 'sweetalert2';

import { googleAppProvider, firebase } from "../firebase/firebase-config";
import { finishLoading, startLoading } from "./ui";


export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        // this action is for disable login button
        dispatch(startLoading())
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName));
            })
            .catch((e) => {
                console.log(e);
                Swal.fire('Error', e.message, 'error');
            })
            .finally(() => {
                // this action is for enable login button
                dispatch(finishLoading());
            })
    }
}
export const startGoogleLogin = () => {
    return (dispatch) => {
        dispatch(startLoading())
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
        // this action is for disable login button
        dispatch(startLoading())
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
            .finally(() => {
                // this action is for enable login button
                dispatch(finishLoading());
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
export const startLogout = () => {
    return async (dispatch) => {
        await firebase.auth().signOut();
        dispatch(logout());
    }
}
export const logout = () => ({
    type: types.logout
})