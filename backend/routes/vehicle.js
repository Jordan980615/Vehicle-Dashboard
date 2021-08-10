const router = require('express').Router();
let Vehicle = require('../models/vehicle.model');

router.route('/').get((req,res)=>{
    
    Vehicle.find( )
        .then(vehicle => res.json(vehicle))
        .catch(err=> res.status(400).json('Error: '+err))
})
router.route('/filter/:searchType/:searchString').get((req,res)=>{
   
   
        var query=[]
        switch (req.params.searchType) {
            case "make":
              
                query = { Make: req.params.searchString }
                break;
            case "model":           
                    query = { Model: req.params.searchString }
                    break;
            case "year":
                query = { Year: req.params.searchString }
                break;
            case "price":
                query = { Price: req.params.searchString }
                break;
            case "status":
                query = { Status: req.params.searchString }
               break;
            default:
               
           
        }
       
    Vehicle.find(query)
    .then(vehicle => res.json(vehicle))
    .catch(err=> res.status(400).json('Error: '+err))
})

router.route('/add').post((req,res)=>{
    
    const Make = req.body.Make;
    const Model = req.body.Model;
    const Price = Number(req.body.Price);
    const Year = Number(req.body.Year);
    const Status = (req.body.Status);

    const newVehicle = new Vehicle({
      
        Make,
        Model,
        Year,
        Price,
        Status
    });

    newVehicle.save()
        .then(()=> res.json('Vehicle added!'))
        .catch(err => res.status(400).json('Error ' + err))
})

router.route('/:id').get((req, res) =>{
    Vehicle.findById(req.params.id)
        .then(vehicle => res.json(vehicle))
        .catch(err=> res.status(400).json('Error: '+err))})


router.route('/:id').delete((req, res) =>{
    Vehicle.findByIdAndDelete(req.params.id)
        .then(() => res.json("Vehicle Deleted"))
        .catch(err=> res.status(400).json('Error: '+err))})


router.route('/update/:id').post((req, res) =>{
    Vehicle.findById(req.params.id)
        .then(vehicle => {

           
            vehicle.Make = req.body.Make;
            vehicle.Model = req.body.Model;
            vehicle.Price = Number(req.body.Price);
            vehicle.Status = (req.body.Status);
            vehicle.Year = Number(req.body.Year);
        
            vehicle.save()
            .then(()=> res.json('Vehicle Updated!'))
            .catch(err => res.status(400).json('Error ' + err))
        })
        .catch(err => res.status(400).json('Error ' + err))

    
    })

module.exports = router;