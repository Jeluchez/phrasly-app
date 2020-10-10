import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { MessageScreen } from '../message/MessageScreen'
import { Header } from './Header'
import { PhrasesEntries } from './PhrasesEntries'
import { Sidebar } from './Sidebar'
import { setPhrases } from '../../actions/phrases';
import { firebase } from '../../firebase/firebase-config';
import { useState } from 'react';

export const PhrasesScreen = () => {

    const dispatch = useDispatch();
    const [loading, setloading] = useState(true);

    useEffect(() => {
        const phraSnap = firebase.database().ref('phrases');

        phraSnap.on('value', (snapshot) => {
            const phrases = [];
            snapshot.forEach((phrase) => {
                phrases.push({
                    id: phrase.key,
                    ...phrase.val()
                })
            });
            dispatch(setPhrases(phrases));
            setloading(false);
        })
    }, [dispatch])
    return (
        <div className="phrases__main-content">
            <Header />
            <Sidebar />

            <main className="phrases__main">
                <MessageScreen />
                <PhrasesEntries />
                {/* loading */}
                {loading &&
                    (<div className="w-100% d-flex justify-content-center">
                        <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                    </div>)
                }
            </main>

        </div>
    )
}
