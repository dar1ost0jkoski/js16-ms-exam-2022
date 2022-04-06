const { Validator } = require('node-input-validator');

const Plant = {

};

const PlantPartial = {

};

const validate = async (data, schema) => {
    let v = new Validator(data, schema);
    let e = await v.check();
    if(!e) {
        throw v.errors;
    }
};

module.exports = {
    Plant,
    PlantPartial,
    validate
};