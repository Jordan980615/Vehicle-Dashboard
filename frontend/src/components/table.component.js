import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import DataTable from 'react-data-table-component'



const customStyle = {
    title:{
        style:{
            textAlign:"right"
        }
    }
}



export default class table extends Component{
    render(){
        return(
            <div>
                <DataTable 
                    title="Vehicle Dashboard"
                    columns={this.props.columns}
                    data={this.props.data}

                    />
            </div>
        )
    }
}

