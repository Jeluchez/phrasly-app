import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { PhrasesEntry } from './PhrasesEntry';
import { SelectedPhrase } from './SelectedPhrase';

export const PhrasesEntries = () => {
    const { phrases } = useSelector(state => state.phrases);
    // useEffect(() => {
    //     window.addEventListener('click', togglePhrase);
    //     return () => {
    //         window.removeEventListener('click', togglePhrase);
    //     };
    // }, []);

    // function togglePhrase(e) {
    //     const ele = e.target;
    //     console.log(ele.id); 
    // }
    return (
        <div>
            {/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#selected-phrase">
                Launch demo modal
            </button> */}
            <div className="phrases__entries">
                {
                    phrases.map(phrase => (
                        <PhrasesEntry key={phrase.id} {...phrase}/>
                    ))
                }
               
            </div>
            {/* <SelectedPhrase/> */}
        </div>
    )
}
