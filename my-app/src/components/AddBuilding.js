import React from 'react';

class AddBuilding extends React.Component{

	constructor(props){
		super(props)
    	this.state={
        	code: '',
        	name: '',
        	address: '',
        	lat: '',
        	lon: ''
        };
    }


    // newBuilding() {

    //     code = this.code.value
    //     name = this.name.value
    //     addr = this.addr.value
    //     lat = this.lat.value
    //     lon = this.lon.value
        
    //     this.props.newBuilding(newCode, newName, newLat, newLon, newAddr)
    // }
    
    addBuilding() {
    	//console.log(this.code.value)
        var building = {
        	code: this.code.value.toUpperCase(),
        	name: this.name.value,
        	address: this.address.value,
        	coordinates:{
        		lat: this.lat.value,
        		lon: this.lon.value
        	}
    	}
    	this.props.addBuilding(building)
    };


    render(){
        return(    
        	<div>
        		Code: <input type="text" ref={(value)=>{this.code=value}}/>
                Name: <input type="text" ref={(value)=>{this.name=value}}/>
                Address: <input type="text" ref={(value)=>{this.address=value}}/>
                Latitude: <input type="text" ref={(value)=>{this.lat=value}}/>
                Longitude: <input type="text" ref={(value)=>{this.lon=value}}/>
                <button type = 'button' onClick = {this.addBuilding.bind(this)}>
                	Submit
                </button>
        	</div>
        );
    }



}

export default AddBuilding