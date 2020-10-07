import { useState, useEffect } from "react";
import youtube from "../apis/youtube";

const useVideos = defaultSearchTerm => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async term => {
    const KEY = "AIzaSyBYgNNNwOtBmH1nchOMSA-B1EuBpxTny3E";

    const response = await youtube.get("/search", {
      params: {
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: KEY,
        q: term
      }
    });

    setVideos(response.data.items);
  };

  return [videos, search];
};

export default useVideos;
