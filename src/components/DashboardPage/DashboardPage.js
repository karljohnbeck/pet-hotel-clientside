import React, { Component } from 'react';
import { connect } from 'react-redux';


class DashboardPage extends Component {

  componentDidMount = () => {
    // fetch pets for dom
    this.props.dispatch({
      type: 'FETCH_PETS'
    })
  }

  render() {
    return (
      // Show Pets here
      <div>
        <p>Dashboard Page</p>
        <table>
          <tr>
            <th>Owner</th>
            <th>Pet</th>
            <th>Breed</th>
            <th>Color</th>
            <th>Checked In</th>
            <th>Actions</th>
          </tr>
          <tr>
            {this.props.pets.map(pet => {
              return (
                <PetListItems key={pet.id} pet={pet} /> // Component for pets 
              )
            })}
          </tr>
        </table>
      </div>
    );
  };
};

const mapStateToProps = (reduxState) => {
  return {
    reduxState
  }
}
export default connect(mapStateToProps)(DashboardPage);