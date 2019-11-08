import React from 'react';
import RemoveBuilding from './RemoveBuilding';

class ViewBuilding extends React.Component {

	render() {
		const {data, selectedBuilding, removeBuilding} = this.props

		const viewBuilding = data
			.filter(directory => 
				directory.id === selectedBuilding)
			.map(directory => {
				if (!directory.coordinates) 
					directory.coordinates = {latitude: '', longitude: ''}
				return (
					<div>
						<tr key={directory.id}>
							<info> {directory.name} </info>
							<p> Code: {' '}{directory.code} </p>
							<p> Address: {' '}{directory.address} </p>
							<p> Latitude: {' '}{directory.coordinates.latitude} </p>
							<p> Longitude: {' '}{directory.coordinates.longitude}</p>
						</tr>
						<RemoveBuilding 
              				removeBuilding = {removeBuilding}
            			/>
            		</div>
				);
			});

		return (
			<div>
				<p>
					{' '}
					<h2><i>Click on a name to view more information</i></h2>
					<p></p>
					{viewBuilding}
				</p>
			</div>
		);
	}
}
export default ViewBuilding;


