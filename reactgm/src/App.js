import React, { Component } from "react";
// import MyFancyComponent from './component/map/Map'
import styles from "./App.module.css";
import MyFancyComponent from './component/map/mapDirections'

const gm = window.gm;

class App extends Component {
  state = {
    vin: "appending...",
    lat: 0,
    lng: 0,
    heading: 0,
    altitude: 0,
  };
  processPosition = (position) => {
    console.log("this is the position", position)
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    var heading = position.coords.heading;
    var altitude = position.coords.heading;
    // console.log(lat, lng)
    this.setState({
      lat: lat,
      lng: lng,
      heading: position.coords.heading,
      altitude: position.coords.heading
    })
  }

  componentDidMount() {
    const vin = gm.info.getVIN();
    this.setState({ vin });
    var destination = {
      address: '2058 N. Mills Ave, Claremont, California 91711'
    }
    var setDest = gm.navigation.setDestination(this.destSuccess, this.destFailure, destination, true)
    console.log(setDest)
    var id = gm.info.getCurrentPosition(this.processPosition, true)
    console.log(id)
    var connection = gm.info.getNetworkConnectivity(this.checkStatus)
    console.log(connection)

    var getDestination = gm.navigation.getDestination(this.getDestSuccess, this.getDestFailure, true)
    console.log(getDestination)
  }

  checkStatus(status) {
    if (status) {
      console.log('I am connected');
    } else {
      console.log('I have no connection');
    }
  }

  handleClose = () => {
    gm.system.closeApp();

  };
  getDestFailure(err) {
    console.log('having trouble setting destination');
  }

  getDestSuccess(destination) {
    console.log('this is my response for the set destination call: ', destination);

  }


  destFailure(err) {
    console.log('having trouble setting destination');
  }

  destSuccess(destination) {
    console.log('this is my response for the set destination call: ', destination);

  }


  render() {

    console.log(gm)
    return (
      <React.Fragment>
        <MyFancyComponent />
        {/* <MyFancyComponent />
        <div className={styles.root}>
          <div><p><small>current position:</small></p>
            <small>latitude:{this.state.lat} longitude:{this.state.lng}</small></div>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
            Launch demo modal
      </button>

          <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  ...
             </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>




          <button onClick={this.handleClose}>Close</button>
        </div > */}
      </React.Fragment>
    );
  }
}

export default App;
