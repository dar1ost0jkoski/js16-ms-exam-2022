const fs = require('fs');

let CONFIG_SOURCE = `${__dirname}/../../config.json`

let config = null;

if(config === null) {
    let file = fs.readFileSync(CONFIG_SOURCE, 'utf8');
    config = JSON.parse(file);
}

const get = (section) => {
    if(!config[section]) {
        throw `Configuration section "${section}" does not exist!`
    }
    return config[section];
};

module.exports = {
    get
};