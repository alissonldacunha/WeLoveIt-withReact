import axios from 'axios';

export const urlImage = "https://raw.githack.com/alissonldacunha/api-movie-crud/master/uploads/";

const api = axios.create({
  baseURL: 'http://localhost:3333/'
});

export default api;