import BookingServices from "../model/BookingModel.js";

class BookingServicesController{
   static Booking = async (req,res)=>{
  const {ServiceId,data,time,status,notes}=req.body
  const Service = await Service.findById(ServiceId)
  if(!Service){
    return res.status(401).json({message:"Service not found"})
  }else{
    const UserId = req.User?._id
    if(!UserId){
        return res.status(404).json({message:"please login"})
    }else{
        let BookingServices =await BookingServices.createConnection({
ServiceId,
cleantId:UserId,
date,
time,
status,
notes
        })
        BookingServices= await BookingServices.poplate([
           {paht:"client",select:"names email"},
    {paht:"Services",select:"title"}  
        ])
        return res.status(201).json({message:"Booking successfully",BookingServices})
    }
  } 
   } 
}
export default BookingServicesController