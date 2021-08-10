import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
// import Table from './table.component';
import Button from './button.component';
import axios from 'axios'
import Create from './create.component';
import VehiclDataService from '../services/vehicle'
import '../App.css';



export default class Update extends Component{
    constructor(props){
        super(props);
        
        this.onChangeMake = this.onChangeMake.bind(this)
        this.onChangeModel = this.onChangeModel.bind(this)
        this.onChangePrice = this.onChangePrice.bind(this)
        this.onChangeYear = this.onChangeYear.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.deleteSelected = this.deleteSelected.bind(this)
        this.MarkedSold = this.MarkedSold.bind(this)
           
          this.state={
            Make: '',
            Model: '',
            Price: 0,
            Year: '',
            id:''
            
        }
    }


    componentDidMount(){

        var currentUrl = window.location.href;
        let params = (new URL(currentUrl)).searchParams
      
        VehiclDataService.get(params.get('id')).then(response=>{ 
            this.setState({Make: response.data.Make,
                           Model: response.data.Model,
                           Price: response.data.Price,
                           Year: response.data.Year,
                           id:response.data._id
                        })

            })
        .catch((err)=>{
            console.log(err)
        })
        
    }
   
    onChangeMake(e){
        this.setState({
            Make: e.target.value
        })
    }


    onChangeModel(e){
        this.setState({
            Model: e.target.value
        })
    }

    onChangeYear(e){
        this.setState({
            Year: e.target.value
        })
    }

    onChangePrice(e){
        this.setState({
            Price: e.target.value
        })
    }



    deleteSelected(val) {
             


        VehiclDataService.deleteVehicle(this.state.id).then(res=>{
            console.log(res.data)
            alert("Vehicle Deleted")
            window.location = "/" // go back to the Vehicle dashboard        

            })
            .catch( (err)=> {
                console.log(err)
            })


    }

    MarkedSold(){



        const vehicle = {
            Make: this.state.Make,
            Model: this.state.Model,
            Year: this.state.Year,
            Price: this.state.Price,
            Status: "Sold"
        }

        VehiclDataService.updateVehicle(this.state.id, vehicle).then(res=>{
            console.log(res.data)
            alert("Vehicle Marked As Sold")
            window.location = "/" // go back to the Vehicle dashboard        
            })
            .catch( (err)=> {
                console.log(err)
            })

    }
    
    onSubmit(e){
        e.preventDefault();

        const vehicle = {
            Make: this.state.Make,
            Model: this.state.Model,
            Year: this.state.Year,
            Price: this.state.Price,
            Status: "Live"
        }

        VehiclDataService.updateVehicle(this.state.id, vehicle).then(res=>{
            console.log(res.data)
            alert("Vehicle Updated")
            window.location = "/" // go back to the Vehicle dashboard        
            })
            .catch( (err)=> {
                console.log(err)
            })

    }

    render(){
        return(
            <div>
                {this.props.testvalue}
                <h3> Updating a Vehicle</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label> Make:</label>
                        <input type="text" className = "form-control"  value={this.state.Make} onChange={this.onChangeMake} required/>
                    </div>  

                    <div className="form-group">
                        <label> Model: </label>
                        <input type="text" className="form-control" value={this.state.Model} onChange={this.onChangeModel} required/>
                        
                    </div>

                    <div className="form-group">
                        <label> Year:</label>
                        <input type="text" className="form-control" value={this.state.Year} onChange={this.onChangeYear} required/>
                        
                    </div>

                    <div className="form-group">
                        <label> Price: </label>
                        <input type="text" className="form-control" value={this.state.Price} onChange={this.onChangePrice} required/>
                        
                    </div>

                    <div className="form-group">
                        <input className="Sub-button" type="submit" value="Update" />
                    </div>
                    
                </form>
                {/* <button name="sold" onClick={this.Sold.bind(this)}> Marked As Sold </button> */}
                <button name="delete" onClick={this.deleteSelected.bind(this)}> delete </button>

                <button name="Sold" onClick={this.MarkedSold.bind(this)}> Mark as Sold </button>
            </div>
        )
    }
}
