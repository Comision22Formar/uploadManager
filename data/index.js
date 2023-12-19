const {readFileSync, writeFileSync} = require('fs');
const path = require('path');

module.exports = {
    readJSON : (json) => {
        return JSON.parse(readFileSync(path.resolve(__dirname,json)))
    },
    writeJSON : (array,json) => {
        writeFileSync(path.resolve(__dirname, json), JSON.stringify(array, null, 3),'utf-8');
        return null
    }
}