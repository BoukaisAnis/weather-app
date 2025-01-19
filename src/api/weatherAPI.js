import axios from 'axios';

const API_KEY = 'c0e748771997456a35101ef2bdb52d1f';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const getWeather = async (city) => {
  try {
    // Use the API_KEY variable instead of hardcoding the key in the URL
    const response = await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    return response.data;
  } catch (error) {
    throw new Error('City not found :(')
  }
};
