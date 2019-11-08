import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding';
//import RemoveBuilding from './components/RemoveBuilding';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allBuildings: this.props.data,
      filterText: '',
      selectedBuilding: 0,
    };
  }

  filterUpdate(value) {
    this.setState({
      filterText: value
    })
  }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    this.setState({
      selectedBuilding: id
    })
  }

  addBuilding(building){
    
    var lastBuilding = this.state.allBuildings[this.state.allBuildings.length-1];
    building.id = lastBuilding.id+1;

    this.state.allBuildings.push(building)

    this.setState({
      selectedBuilding: building.id
    })
  }

  removeBuilding(){
    var allBuildings = this.state.allBuildings.filter(directory=>{
      return directory.id !== this.state.selectedBuilding})
    
    this.setState({
      allBuildings: allBuildings
    })
  }

  render() {
    
    return (
      <div className="bg">
        <div className="row">
          <div className="title"> UF Directory App</div>
        </div>

        <Search
          filterText={this.state.filterText}
          filterUpdate={this.filterUpdate.bind(this)}/>
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                  <BuildingList
                    data={this.state.allBuildings}
                    filterText={this.state.filterText}
                    selectedUpdate={this.selectedUpdate.bind(this)}
                  />
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding 
                data={this.state.allBuildings}
                selectedBuilding={this.state.selectedBuilding}
                removeBuilding = {this.removeBuilding.bind(this)}
              />
            </div>
            <fieldset>
              <p><h2>Add a new building</h2></p>
              <AddBuilding
                addBuilding={this.addBuilding.bind(this)}
                />
            </fieldset>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
