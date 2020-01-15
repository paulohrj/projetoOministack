const Dev = require('../models/Dev');
const parseStringArray = require('../utils/parseStringAsArray');

module.exports = {
    async index (request, response){
        
        const {latitude, longitude, techs} =  request.query;
        
        const techsArray = parseStringArray(techs);
        
        const devs = await Dev.find({
            techs: {
              $in: techsArray,
            },
        });
        
        
        4//console.log(techsArray);
        return response.json(devs);
    }
}