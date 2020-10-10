import React from 'react'
import { useSelector } from 'react-redux';
import { PhrasesEntry } from './PhrasesEntry';

export const PhrasesEntries = () => {

    const { phrases } = useSelector(state => state.phrases);

    // const entries = [1, 2, 3, 4, 5];

    return (
        <div className="phrases__entries">
            {
                phrases.map(phrase => (
                    <PhrasesEntry key={phrase} />
                ))
            }
        </div>
    )
}
