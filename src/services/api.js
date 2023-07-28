import axios from "axios";

//  const ap = 'https://api.themoviedb.org/3/movie/157336?api_key=ed6f4a6bc18632ea47caae1b478ca5c0&append_to_response=videos,images'
export const key = 'ed6f4a6bc18632ea47caae1b478ca5c0';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
});

export default api;