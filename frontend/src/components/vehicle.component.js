import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Table from './table.component';
import Button from './button.component';
import CurrencyFormat from 'react-currency-format';
import VehiclDataService from '../services/vehicle'



const columns = [
    { name: "Serial", selector: 'Serial' },

    { name: "Make", selector: 'make' },
    { name: "Model", selector: 'model' },
    { name: "Price", selector: 'price' },
    { name: "Year", selector: 'year' },
    { name: "Status", selector: 'status' },
    { name: "Edit", selector: 'button' }

];
const options = [
    {
        label: "Make",
        value: "make",
    },
    {
        label: "Model",
        value: "model",
    },
    {
        label: "Year",
        value: "year",
    },
    {
        label: "Price",
        value: "price",
    },
    {
        label: "Status",
        value: "status",
    },
];



export default class Vehicle extends Component {

    constructor(props) {
        super(props);

        this.onChangeSearchType = this.onChangeSearchType.bind(this);
        this.onChangeSearchString = this.onChangeSearchString.bind(this);
        this.search = this.search.bind(this);
        this.vehiclesList = this.vehiclesList.bind(this);


        this.state = {
            vehicles: [],
            searchType: "make",
            searchString: ""
        }
    }


    onChangeSearchType(e) {

        this.setState({
            searchType: e.target.value
        })
      
    }
    onChangeSearchString(e) {

        this.setState({
            searchString: e.target.value
        })

    }
    search() {
         VehiclDataService.filter(this.state.searchType,this.state.searchString).then(response => {
         this.setState({ vehicles: this.vehiclesList(response.data) })
        })
         .catch((err) => {
                console.log(err)
         })
    };
    vehiclesList(responsedata) {
        var data = []
        for (var i = 0; i < responsedata.length; i++) {
            data.push({
                Serial: i + 1,

                make: responsedata[i].Make,
                model: responsedata[i].Model,
                price: <CurrencyFormat value={responsedata[i].Price} displayType={'text'} thousandSeparator={true} prefix={'$'} />,
              
                year: responsedata[i].Year,
                status: responsedata[i].Status,
                button: <Link to={"/update?id=" + responsedata[i]._id}>edit</Link>
            })
        }

        return data
    };

    componentDidMount() {
        VehiclDataService.getAll().then(response => {
            this.setState({ vehicles: this.vehiclesList(response.data) })
        })
        .catch((err) => {
            console.log(err)
        })

    }

    render() {
        return (
            <div>
                <div id="selectSearch" >
                    <div>
                        <label >Please select Search type:</label>
                        <select value={this.state.searchType} onChange={this.onChangeSearchType}>{
                            options.map((option) => (
                                <option value={option.value}>{option.label}</option>
                            ))}
                        </select>
                        <input type="text" value={this.state.searchString} onChange={this.onChangeSearchString} maxLength="50" required />
                        <button type="button" onClick={this.search} >  Search  </button>
                    </div>
                </div>
                <Button name="create" links="/create" />
                <Table data={this.state.vehicles} columns={columns} />

            </div>
        )
    }
}
