import React from 'react';

class RemoveBuilding extends React.Component{
	removeBuilding(){
		this.props.removeBuilding()
	}
	render(){
		return(
		<div>
			<button type = 'button' onClick= {this.removeBuilding.bind(this)}>
				Remove Building
			</button>
		</div>
		);
	}
}
export default RemoveBuilding