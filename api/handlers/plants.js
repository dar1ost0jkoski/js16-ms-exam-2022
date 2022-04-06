const plants = require('../pkg/plants');
const validator = require('../pkg/plants/validate')

const getAll = async (req, res) => {
    try {
        let plt = await plants.getAllPlants();
        return res.status(200).send(plt);
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal server error.')
    }
};

const getOneById = async (req, res) => {
    try {
        let plt = await plants.getOnePlant(req.params.id);
        return res.status(200).send(plt);
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal server error.')
    }
};

const create = async (req, res) => {
    try {
        await validator.validate(req.body, validator.Plant);
        let plt = await plants.addPlant(req.body);
        return res.status(201).send(plt);
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal server error.')
    }
};

const update = async (req, res) => {
    try {
        await validator.validate(req.body, validator.Plant);
        await plants.updatePlant(req.params.id, req.body);
        return res.status(204).send('');
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal server error.')
    }
};

const updatePartial = async (req, res) => {
    try {
        await validator.validate(req.body, validator.PlantPartial);
        await plants.updatePlant(req.params.id, req.body);
        return res.status(204).send('');
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal server error.')
    }
};

const remove = async (req, res) => {
    try {
        await plants.removePlant(req.params.id);
        return res.status(204).send('');
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal server error.')
    }
};

module.exports = {
    getAll,
    getOneById,
    create,
    update,
    updatePartial,
    remove
};