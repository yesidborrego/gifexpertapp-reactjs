import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //* option 1
  /*
    useEffect(() => {
      getGifs(category)
        .then( gif => {
          console.log(gif)
        })
    }, [category]);
  */

    //* option 2
    const getImgGifs = async () => {
      const gifs = await getGifs(category);
      setGifs(gifs);
      setIsLoading(false);
    }

    useEffect(() => {
      getImgGifs();
    }, []);

  return { gifs, isLoading }
}
