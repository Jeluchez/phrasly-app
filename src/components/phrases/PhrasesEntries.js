import React from 'react'
import { useSelector } from 'react-redux';
import { PhrasesEntry } from './PhrasesEntry';

export const PhrasesEntries = () => {
    const { phrases } = useSelector(state => state.phrases);

    return (
        <div className="phrases__entries">
            {
                phrases.map(phrase => (
                    <PhrasesEntry key={phrase.id} {...phrase} />
                ))
            }

        </div>
    )
}
