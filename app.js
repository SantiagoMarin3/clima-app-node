const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


const getInfo = async(ciudad) => {

    try {
        const { direccion, lat, lng } = await lugar.getLugarLatLng(ciudad);
        const climaCiudad = await clima.getClima(lat, lng);
        console.log(`El clima de ${ciudad} es de ${climaCiudad}`);
    } catch (err) {
        console.log(`No se pudo determinar el clima de ${ciudad}`);
        console.log(`El error es: ${err}`);
    }
}

getInfo(argv.direccion);