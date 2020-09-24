import { types } from '../types/types'

// export const selectImage = (id, urls, desc) => {

//     console.log(urls);
// }
export const selectImage = (id, urls, desc) => ({
    type: types.selectImage,
    payload: {
        id,
        urls,
        desc
    }
});
export const loadImages = (images) => {
    return {
        type: types.loadImages,
        payload: [...images]
    };
}
export const cleanImages = () => {
    return {
        type: types.cleanImages
    };
}