

const APIKEY = "6f55XJVyJ2J6nl8BLkjEojE7xe9bL_LCvlMfsTkPXtU";

export const getPhotos = async (search) => {
    const url = `https://api.unsplash.com/search/photos?query=${encodeURI(search)}&client_id=${APIKEY}&per_page=20`;
    const response = await fetch(url);
    const data = await response.json()
    return data;
}