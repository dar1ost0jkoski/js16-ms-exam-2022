const mongoose = require('mongoose');

const Plant = mongoose.model(
    'plants',
    {
        name: String,
        likes_sun: Number,
        likes_water: Number,
        has_flower: Boolean,
        has_thorns: Boolean,
        found_on_continent: Array,
        current_location: Object,
        last_watering_date: Date,
        created: Date
    },
    'books'
)

const addPlant = async (plant) => {
    let pt = new Plant(plant);
    return await pt.save();
};

const removePlant = async (id) => {
    return await Plant.deleteOne({ _id: id });
};

const updatePlant = async (id, plant) => {
    return await Plant.updateOne({ _id: id }, plant);
};

const getOnePlant = async (id) => {
    return await Plant.findById({ _id: id });
};

const getAllPlants = async () => {
    return await Plant.find({ });
};

module.exports = {
    addPlant,
    removePlant,
    updatePlant,
    getOnePlant,
    getAllPlants
};