import axios from 'axios';

export const GetExchange=(from,to)=>axios.get(`https://free.currconv.com/api/v7/convert?q=${from}_${to}&compact=ultra&apiKey=${process.env.REACT_APP_API_KEY}`)