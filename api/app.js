function crear(lead) {
    // const lead = {
    //     Telefono: '(301) 254-3408',
    //     Nombre: 'Alejandra',
    //     Email: 'a34@gmail.com',
    //     Requerimientos: 'Muy amplio',
    //     Presupuesto: 5000000,
    //     Habitaciones: '3',
    //     Estado: "Nuevo",
    //     Inmueble: ["Casa", "Lote"],
    //     Perfil: 'Sea amplio por que en el que estoy siento que ya esta muy estrecho. Pude ser un poco antiguo pero con espacios amplios y buena iluminación. ',
    // }

    var Airtable = require('airtable');
    var base = new Airtable({ apiKey: 'key1ZHetmEX4XQ8SB' }).base('appMJrOiM1dP8Q6VN');

    base('Lead').select({
        filterByFormula: "NOT(Telefono = '(320) 272-8562')",
        view: "Grid view"
    }).eachPage(function page(records, fetchNextPage) {
        var cliente = records.filter(function (record) { return record.get('Telefono') === lead.Telefono });
        if (cliente.length === 0) {
            base('Lead').create(lead, function (err, record) {
                if (err) { console.error(err); return; }
                console.log('Creado correctamente')
                console.log(record.getId());
            });

            console.log('Teléfono no existe')
        } else {
            console.log('El teléfono existe')

        }
        fetchNextPage();
    }, function done(err) {
        if (err) { console.error(err); return; }
    });
}

module.exports = crear
