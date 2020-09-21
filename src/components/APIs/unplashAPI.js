

const APIKEY = "6f55XJVyJ2J6nl8BLkjEojE7xe9bL_LCvlMfsTkPXtU";

export const getPhotos = async (search, page = 1) => {
    const url = `https://api.unsplash.com/search/photos?query=${encodeURI(search)}&client_id=${APIKEY}&per_page=20&page=${page}`;
    const response = await fetch(url);
    const {results} = await response.json();
  
    const images = results.map(img => {
        return {
            id: img.id,
            desc: img.alt_description,
            url: img.urls.thumb
        }
    })
    return images;
}