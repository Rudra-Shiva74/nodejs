import axios from 'axios';
var config = {
    cUrl: 'https://api.countrystatecity.in/v1/countries',
    ckey: 'NHhvOEcyWk50N2Vna3VFTE00bFp3MjFKR0ZEOUhkZlg4RTk1MlJlaA=='
}

export const country = async () => {
    const res = (await axios.get(config.cUrl, { headers: { "X-CSCAPI-KEY": config.ckey } })).data
    return res;
}
export const state = async (code) => {
    const res = (await axios.get(`${config.cUrl}/${code}/states`, { headers: { "X-CSCAPI-KEY": config.ckey } })).data
    return res;
}
export const city = async (s, c) => {
    const res = (await axios.get(`${config.cUrl}/${c}/states/${s}/cities`, { headers: { "X-CSCAPI-KEY": config.ckey } })).data
    return res;
}