import { useEffect, useState } from "react"

import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [gifs, setGifs] = useState({
    data: [],
    loading: true
  });

  useEffect(() => {
    getGifs(category)
      .then( gifs =>
        setTimeout( () => {
          setGifs({
            data: gifs,
            loading: false
          }, 3000);
      })
    )
  }, [category])

  return gifs;
}