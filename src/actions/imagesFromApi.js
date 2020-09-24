import { types } from '../types/types'

export const selectImage = (id, urls, desc) => ({
    type: types.selectImage,
    payload: {
        id,
        urls,
        desc
    }
});
export const deselectImage = () => ({
    type: types.deselectImage
});
export const loadImages = (images) => ({
    type: types.loadImages,
    payload: [...images]
})
export const cleanImages = () => ({
    type: types.cleanImages

})