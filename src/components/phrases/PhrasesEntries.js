import React from 'react'
import { PhrasesEntry } from './PhrasesEntry';

export const PhrasesEntries = () => {

    const entries = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // const entries = [1, 2, 3, 4, 5];

    return (
        <div className="phrases__entries">
            {
                entries.map(note => (
                    <PhrasesEntry key={note} />
                ))
            }
        </div>
    )
}
