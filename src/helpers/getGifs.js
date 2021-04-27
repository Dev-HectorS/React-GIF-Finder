export const getGifs = async (category) => {
  const apiKey = 'OxQzdf54WiDesj7GX4P0DQtDEkeS5F9e';
  const url = `http://api.giphy.com/v1/gifs/search?api_key=${ apiKey }&q=${ encodeURI(category) }&limit=10`;
  
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });

  return gifs;
};
