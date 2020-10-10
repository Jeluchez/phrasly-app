import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
} from "react-router-dom";
import { firebase } from "../firebase/firebase-config";
import { useDispatch } from 'react-redux';
import { AuthRouter } from './AuthRouter';
import { PhrasesScreen } from '../components/phrases/PhrasesScreen';
import { login } from '../actions/auth';
import { Checking } from './Checking';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { PhrasesImagesScreen } from '../components/images/PhrasesImagesScreen';
import { setPhrases, startLoadingPhrases } from '../actions/phrases';


export const AppRouter = () => {

    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user?.uid) {
                const phraSnap = firebase.database().ref('phrases');

                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
            // setTimeout(() => {
            setChecking(false);
            // }, 500);

        })
    }, [dispatch, setChecking, isLoggedIn]);

    if (checking) {

        return (
            <Checking />
        );

    }
    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute path="/auth" component={AuthRouter} isLoggedIn={isLoggedIn} />
                    <PrivateRoute exact path="/" component={PhrasesScreen} isLoggedIn={isLoggedIn} />
                    <PrivateRoute exact path="/home/photo" component={PhrasesImagesScreen} isLoggedIn={isLoggedIn} />
                </Switch>
            </div>
        </Router>
    )
}
