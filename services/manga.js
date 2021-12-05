const mangaModel = require('../models/mangaModel');

exports.getAll = async () => {
    const manga = mangaModel.find().limit(5);
    console.log("=>",manga);
    return manga;
}
