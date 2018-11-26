import React, { Component } from "react";
import styles from "./App.module.css";
import SerachPage from './component/SerachPage'

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
      <div className={styles.root} style={{ backgroundImage: `url(https://wallpapercave.com/wp/HKBJSDe.jpg)`, height: "100vh" }}>
        {/* <div><p><small>current position:</small></p>
          <small>latitude:{this.state.lat} longitude:{this.state.lng}</small></div> */}
        <SerachPage />
        {/* <button onClick={this.handleClose}>Close</button> */}
      </div>
    );
  }
}

export default App;
