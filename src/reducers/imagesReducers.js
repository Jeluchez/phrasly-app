import { types } from '../types/types';

const initialState = {
    images: [],
    selected: null
};
export const imagesReducers = (state = initialState, action) => {

    switch (action.type) {
        case types.selectImage:
            return {
                ...state,
                selected: {
                    ...action.payload
                }
            }
        case types.deselectImage:
            return {
                ...state,
                selected: null
            }
        case types.loadImages:
            return {
                ...state,
                images: [...state.images, ...action.payload]
            }

        case types.cleanImages:
            return {
                ...state,
                images: []
            }
        case types.cleanAll:
            return {
                images: [],
                selected: null
            }
        default:
            return state;
    }
}
