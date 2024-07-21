var fs = require('fs');
var trips = JSON.parse(fs.readFileSync('./data/rooms.json', 'utf-8'));

/* Get rooms view */
const rooms = (req, res) => {
    res.render ('rooms', {title: 'Travlr Getaways', rooms});
};

module.exports = {
    rooms
};