import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Table from './table.component';



export default class deletes extends Component{

    constructor(props){
        super(props);

        this.state={
            No: 0,
            Make: '',
            Model: '',
            Price: 0,
            Status: ''
        }
    }

    render(){
        return(
            <div>
                Hello From delete
            </div>
        )
    }
}
