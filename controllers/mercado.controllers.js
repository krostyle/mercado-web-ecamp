const fs = require('fs');
const path = require('path');

const renderDashboard = (req, res) => {
    const catalogo = JSON.parse(fs.readFileSync(path.join(`${__dirname}/../db/catalogo.json`), 'utf8'));
    res.render('partials/dashboard', {
        catalogo
    });
}
module.exports = {
    renderDashboard
}