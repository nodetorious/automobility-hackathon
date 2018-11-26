import React, { Component } from "react";
import Page2HTML from "./Page2Component";
import { withRouter } from 'react-router-dom';

const gm = window.gm;

class Page2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            vin: "appending...",
            lat: 0,
            lng: 0
        }
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
        // const vin = gm.info.getVIN();
        // this.setState({ vin });
        // var id = gm.info.getCurrentPosition(this.processPosition, true)
        // console.log(id)
    }

    handleClose = () => {
        // gm.system.closeApp();
        this.props.history.push('/map');
    };

    hi = () => {
        console.log('hi')
    }

    render() {
        return (
            <Page2HTML
                lat={this.state.lat}
                lng={this.state.lng}
                handleClose={this.handleClose}
            />
        );
    }
}

export default withRouter(Page2);
