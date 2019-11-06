import React from 'react';

class ViewBuilding extends React.Component {

	render() {
		const {data, selectedBuilding} = this.props
		const viewBuilding = data
			.filter(directory => 
				directory.id === selectedBuilding)
			.map(directory => {
				if (!directory.coordinates) directory.coordinates = {latitude: '', longitude: ''}
				return (
					<tr key={directory.id}>
						<info>Code: {' '}{directory.code} </info>
						<info>Name: {' '}{directory.name} </info>
						<info>Address: {' '}{directory.address} </info>
						<info>Latitude: {' '}{directory.coordinates.latitude} </info>
						<info>Longitude: {' '}{directory.coordinates.longitude}</info>
					</tr>
				);
			});

		return (
			<div>
				<p>
					{' '}
					<i>Click on a name to view more information</i>
					{viewBuilding}
				</p>
			</div>
		);
	}
}
export default ViewBuilding;


