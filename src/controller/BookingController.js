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
   static delete = async (req,res)=>{
    const Booking = await Booking.deletemany()
    if(!Booking){
      return res.status(404).json({message:"Booking not found"})
    }else{
      return res.status(500).json({message:"delete Booking successfully",Booking})
    }
   }
   static getAllBooking = async (req,res)=>{
    const Booking = await BookingServices.find()
    if(!Booking){
      return res.status(404).json({message:"Booking services not found"})
    }else{
      return res.status(500).json({message:"Booking servides successfully",Booking})
    }
   }
   static chengeStatus = async (req,res)=>{
    const id = req.params.id
    if(!id){
      return res.status(404).json({message:"there are no service Booked on this"})
    }else{
      const Booking = await BookingServices.findByIdAndUpdate(id.body,{new:true})
      return res.status(201).json({message:"status successfully update",Booking})
    }
   }
}
export default BookingServicesController