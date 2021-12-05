const mongoose = require('mongoose');
const schema = mongoose.Schema;
const ObjectId = schema.ObjectId;

const mangaUpdate = new schema({
    id: { type: ObjectId },
    name: { type: String },
    dateReleased: { type: Date },
    statusManga: { type: String },
    teamId: { type: schema.Types.ObjectId, ref:"team" },
    amount: { type: Number },
    views: { type: Number },
    author:{type:String},
    description: { type: String },
    thumbnail: { type: String },
    tagsArr:[],
    chaps:[
        {
            nameManga:{ type:String },
            numberChap:{ type:Number },
            pictureChap:{ type:String },
            contentBody:[{url:{type:String}}],
            dateChapRelease: { type: Date },
        }],
})

module.exports = mongoose.model('manga', mangaUpdate)