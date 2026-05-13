const ImageKit = require('@imagekit/nodejs');

const client = new ImageKit({
    privateKey: "private_/OHs42K84i4AbtMot730mc7C4SI="
});

const fileUpload = async (image) =>{

   const result = await client.files.upload({
        file : image.toString("base64"),
        fileName : "image.jpg"
    })

    return result

}

module.exports = fileUpload;