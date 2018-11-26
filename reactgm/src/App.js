import React, { Component } from "react";
import styles from "./App.module.css";

const gm = window.gm;

class App extends Component {
  state = {
    vin: "appending...",
    lat: 0,
    lng: 0
  };
  processPosition = (position) => {
    console.log("this is the position", position)
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    console.log(lat, lng)
    this.setState({
      lat: lat,
      lng: lng
    })
  }

  componentDidMount() {
    console.log(window)
    const vin = gm.info.getVIN();
    this.setState({ vin });
    var id = gm.info.getCurrentPosition(this.processPosition, true)
    console.log(id)
  }

  handleClose = () => {
    gm.system.closeApp();

  };

  render() {
    console.log(gm)
    return (
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
      </div>
    );
  }
}

export default App;
