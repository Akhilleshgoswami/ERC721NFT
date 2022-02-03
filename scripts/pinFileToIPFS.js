const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data");

const pinFileToIPFS = (pinataApiKey, pinataSecretApiKey) => {
  const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;
  let data = new FormData();

  data.append("file", fs.createReadStream("../assest/kkr.png"));

  return axios.post(url, data, {
      headers: {
        "Content-Type": `multipart/form-data; boundary= ${data._boundary}`,
        pinata_api_key: pinataApiKey,
        pinata_secret_api_key: pinataSecretApiKey,
      },
    })
    .then(function (response) {
      console.log(repsonse.IpfsHash);
    })
    .catch(function (error) {
      console.log(error)
    });
};

module.exports = pinFileToIPFS;
