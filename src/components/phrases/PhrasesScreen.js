import React from 'react'
import { MessageScreen } from '../message/MessageScreen'
import { Header } from './Header'
import { NietherPhrase } from './NietherPhrase'
import { PhrasesEntries } from './PhrasesEntries'
import { Sidebar } from './Sidebar'

export const PhrasesScreen = () => {
    return (
        <div className="phrases__main-content">
            <Header />
            <Sidebar />
            <main className="phrases__main">
                <MessageScreen/>
                {/* <NietherPhrase /> */}
                <PhrasesEntries/>
            </main>

        </div>
    )
}
