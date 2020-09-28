import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { AuthRouter } from './AuthRouter';
import { PhrasesScreen } from '../components/phrases/PhrasesScreen';
import { PhrasesImagesScreen } from '../components/images/PhrasesImagesScreen';


export const AppRouter = () => {

    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" component={AuthRouter}/>
                    {/* <Route path="/auth" component={AuthRouter}/> */}
                    {/* <Route exact path="/" component={PhrasesScreen}/> */}
                    <Route exact path="/home/photo" component={PhrasesImagesScreen}/>
                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </Router>
    )
}
