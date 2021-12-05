const mangaService = require("../services/manga");

exports.getAll = async () =>{
    const manga = await mangaService.getAll();
    return manga;
}