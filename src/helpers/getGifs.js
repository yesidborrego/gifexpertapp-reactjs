export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=1ns9wSjqk4oEa2CnUyaKj412kIpGz0y7&q=${category}&limit=20`;
  const response = await fetch(url);
  const { data = []} = await response.json()

  const gifs = data.map( (gif) => ({
    id: gif.id,
    title: gif.title,
    imgUrl: gif.images.downsized_medium.url,
  }));

  return gifs;
}