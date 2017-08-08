const mongoose = require('mongoose');
const { Schema } = mongoose;

const bicycleSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  desc:{
    type:String,
    required: true,
    trim: true,
  },
  price:{
    type:Number,
    required: true,
    trim: true,
  },
  location:{
    type: String,
    required: true,
  },
  user:{
    type:Schema.Types.ObjectId,
    ref:'User'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Bicycle',bicycleSchema);



/**
 * title:string;
  desc:string;
  price:number;
  location:string;
  user: User;
 */
