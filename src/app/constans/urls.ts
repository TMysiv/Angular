import {environment} from '../../environments/environment';

const {API} = environment;

export const urls = {
  movie:`${API}/discover/movie?api_key=4cccab37e6e3e72708b67cea6b17afb5`,
  genre:`${API}/genre/movie/list?api_key=4cccab37e6e3e72708b67cea6b17afb5`,
  popular:`${API}/movie/popular?api_key=4cccab37e6e3e72708b67cea6b17afb5&language=en-US&`
}
