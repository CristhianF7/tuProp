var Airtable = require('airtable');
var base = new Airtable({apiKey: 'key1ZHetmEX4XQ8SB'}).base('appMJrOiM1dP8Q6VN');

base('Lead').select({
    filterByFormula: "NOT(Telefono = '(320) 272-8562')",
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
    records.forEach(function(record) {
        console.log('Retrieved', record.get('Telefono'));
    });

    fetchNextPage();
}, function done(err) {
    if (err) { console.error(err); return; }
});