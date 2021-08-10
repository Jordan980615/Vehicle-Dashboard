import React, {Component} from 'react';
import VehiclDataService from '../services/vehicle'
import '../App.css';
export default class create extends Component{

    constructor(props){
        super(props);
        this.onChangeMake = this.onChangeMake.bind(this)
        this.onChangeModel = this.onChangeModel.bind(this)
        this.onChangePrice = this.onChangePrice.bind(this)
        this.onChangeYear = this.onChangeYear.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state={
            Make: '',
            Model: '',
            Price: 0,
            Year: '',
        }
    }

    componentDidMount(){
        this.setState({
            users: ['test'],
            username: 'test'
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

    onSubmit(e){
        e.preventDefault();

        const vehicle = {
            Make: this.state.Make,
            Model: this.state.Model,
            Year: this.state.Year,
            Price: this.state.Price,
            Status: "Live"
        }

        console.log(vehicle)

        VehiclDataService.createVehicle(vehicle).then(res=>{
            console.log(res.data)
            alert("Vehicle created")

            window.location = "/" // go back to the Vehicle dashboard

        })
        .catch( (err)=> {
            console.log(err)
        })
    }

    render(){
        return(
            <div>
                <h3> Create a new Vehicle</h3>
                <form onSubmit={this.onSubmit }>
                    <div className="form-group">
                        <label> Make </label>
                        <input type="text" className = "form-control"  value={this.state.Make} onChange={this.onChangeMake} required/>
                    </div>  

                    <div className="form-group">
                        <label> Model </label>
                        <input type="text" className="form-control" value={this.state.Model} onChange={this.onChangeModel} maxLength="30" required/>
                        
                    </div>

                    <div className="form-group">
                        <label> Year </label>
                        <input type="text" className="form-control" value={this.state.Year} onChange={this.onChangeYear} required/>
                        
                    </div>

                    <div className="form-group">
                        <label> Price </label>
                        <input type="number" step="0.01" className="form-control" value={this.state.Price} onChange={this.onChangePrice} required/>
                        
                    </div>

                    <div className="form-group">
                        <input className="Sub-button" type="submit" value="create New Vehicle" />
                    </div>
                    
                </form>    
            </div>
        )
    }
}
