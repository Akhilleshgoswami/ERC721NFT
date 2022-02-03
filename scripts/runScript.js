const path = require('path');
const pinFileToIPFS = require('./pinFileToIPFS');

const filePath = path.join(__dirname, '../assets/kkr.png');
// const filePath = path.join(__dirname, '../data/metadata.json');

pinFileToIPFS("a33372dfcd1bd357e4a4","49e6b15d0b3f5a8fa178cef143e9d7d518d05b76adc2d2ce5222789d5e8621f8");
