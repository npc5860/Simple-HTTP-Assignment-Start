const fileSystem = require('fs');

const spongegar = fileSystem.readFileSync(`${__dirname}/../client/spongegar.png`);

const getDankmemes = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(spongegar);
  response.end();
};

module.exports = {
  getDankmemes,
};
