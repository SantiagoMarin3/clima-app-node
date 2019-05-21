const axios = require('axios');

const getLugarLatLng = async(ciudad) => {

    const encodeUrl = encodeURI(ciudad);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: { 'X-RapidAPI-Key': 'ffd01ba56emsh02651cb4ae5aae2p1f5090jsnb6ab27aadb19' }
    });

    const respuesta = await instance.get();

    if (respuesta.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${ciudad}`);
    }

    const data = respuesta.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}