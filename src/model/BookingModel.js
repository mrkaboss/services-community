import mongoose from "mongoose";
const bookingSchema = new mongoose.Schema({
  clientId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
  },
  ServicesId:{
type:mongoose.Schema.Types.ObjectId,
ref:"Services",
  },
  data:{
type:Date,
required:[true,"please sepecty date your wont your htis Services"]
  },
  time:{
    type:String,
    required:[true,"please sepecty date your wont your htis Services"]
  },
  status:{
    type:String,
    enum:["pending","accepted","completed","cancelled"]
  },
  notes:{
    type:String,
    required:false
  },
  creatdAt:{
    type:Date,
    default:new Date(Date.now())

    
  } 
});
bookingSchema.pre(/^find/,function (next){
   this.populate([
    {paht:"client",select:"names email"},
    {paht:"Services",select:"title"}
   ]) 
})
const BookimgServices=mongoose.model("BookingServices",bookingSchema)
export default BookimgServices