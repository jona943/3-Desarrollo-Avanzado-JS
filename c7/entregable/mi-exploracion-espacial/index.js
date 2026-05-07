const planetas = require('./planetas');

planetas.forEach(planeta => {
    console.log(`Planeta ${planeta.nombre} descubierto..!`);
    console.log(`Descripcion: ${planeta.descripcion}`);
    console.log(`Descubierto en ${planeta.descubiertoEn}`);
    console.log("--------------------------");
})