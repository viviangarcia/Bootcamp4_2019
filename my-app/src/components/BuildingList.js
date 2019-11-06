import React from 'react';

export default ({data, filterText, selectedUpdate}) => {
	
		const buildingList = data
			.filter(directory => {
				return directory.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
			})
			.map(directory => {
				return (
					<tr key={directory.id} onClick={() => selectedUpdate(directory.id)}>
						<td>{directory.code} </td>
						<td>{directory.name} </td>
					</tr>
			);
		});

		return <div>{buildingList}</div>;

}

