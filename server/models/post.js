var mongoose=require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema(
  {
    title:String,
    category:String,
    content:String
  }
)



module.exports = mongoose.model('Post', PostSchema);
