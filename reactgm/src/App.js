import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
// import MyFancyComponent from './component/map/Map'
// import SerachPage from './component/SerachPage'
// import MyFancyComponent from './component/map/mapDirections'
import Navigation from './component/Navigation';
// import Page2 from './component/page2/Page2';

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
    console.log(this.props.location);
    return (
      // <div className={styles.root} style={{ backgroundImage: `url(https://wallpapercave.com/wp/HKBJSDe.jpg)`, height: "100vh" }}>
      <>
        <div><small>latitude:{this.state.lat} longitude:{this.state.lng}</small></div>
        <Navigation />
      </>
      // </div>

      // {/* <h1 onClick={() => this.props.history.push('/page2')}>Click me if you dare</h1> */ }
      // <React.Fragment>
      //   <div className={styles.root} style={{ backgroundImage: `url(https://wallpapercave.com/wp/HKBJSDe.jpg)`, height: "100vh" }}>
      //     <div><small>latitude:{this.state.lat} longitude:{this.state.lng}</small></div>
      //     <SerachPage />
      //   </div>
      //   <MyFancyComponent />
      // </React.Fragment>
    );
  }
}

export default withRouter(App);
