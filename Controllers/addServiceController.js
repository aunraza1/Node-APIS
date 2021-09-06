
const carModel= require('../Models/carsSchema')
const hotelModel = require('../Models/hotelSchema')
const tourModel = require('../Models/tourSchema')

const addCar=async(req,res)=>{
    const checkRegistraion= await carModel.findOne({registrationNumber:req.body.registrationNumber})
    if(checkRegistraion){
        res.send({mesage:"This Car Already Exist"})
    }
    else{
    let addCar=new carModel({
        carName:req.body.carName,
        registrationNumber:req.body.registrationNumber,
        carSegment:req.body.carSegment,
        carMake:req.body.carMake,
        hourlyPrice:req.body.hourlyPrice,
        ownerID:'123',
        ownerName:'Ali Raza',
        imgUrl:req.body.imgUrl,
        location:req.body.location
    })
  
        const RegisterCar = await addCar.save()
        if(RegisterCar){
            res.status(200).send({message:"Car Added Successfully!",Result:addCar})
        }
    else{
        res.send("Car Not Registered!")
    }
}
        
    }

    const addHotels=async(req,res)=>{

        let checkHotel= await hotelModel.findOne({hotelName:req.body.hotelName ,hotelLocation:req.body.hotelLocation})

        if(checkHotel){
            res.send("Hotel Already Exist with Same Name and Location")
        }
        else{
        
            let newHotel = new hotelModel({
                hotelName:req.body.hotelName,
                hotelLocation:req.body.hotelLocation,
                hotelRatings:req.body.hotelRatings,
                ownerID:'123',
                ownerName:'Ali Hassan',
                singlePrice:req.body.singlePrice,
                doublePrice:req.body.doublePrice,
                queenPrice:req.body.queenPrice,
                kingPrice:req.body.kingPrice,
                imgUrl:req.body.imgUrl,
            })

            const hotel=await newHotel.save()

            if(hotel){
                res.send({message:"Hotel Saved Successfully!",result:newHotel}).status(200)
            }
            else{
                res.send("Hotel Creation Failed")
            }
        }

    }

    const addTours=async(req,res)=>{

        let newTours= new tourModel({
            tourName:req.body.tourName,
            tourSchema:req.body.tourSchema,
            tourStartDate:req.body.tourStartDate,
            tourStay:req.body.tourStartDate,
            imgUrl:req.body.imgUrl,
            ownerId:'123'
        })
        
        const addTour= await newTours.save()

       if(addTour){
        res.send({message:"Tour Added Successfully!",result:newTours})
      }
      else{
          res.send("Tour Not Registered!")
      }


        

    }
    





module.exports={
    addCar,
    addHotels,
    addTours
    
}

