/*global google */
import React from 'react'
import { compose, withProps, lifecycle } from "recompose"
import {
    Marker,
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    DirectionsRenderer,
    TrafficLayer,

} from "react-google-maps"

const MapWithADirectionsRenderer = compose(
    withProps({

        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAhwUwsAZK-d7sDJpOmlUbP3ckRzkhqrUc&v=3.exp&libraries=geometry,drawing,places,traffic-model",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `400px` }} />,
    }),
    withScriptjs,
    withGoogleMap,
    lifecycle({
        componentDidMount() {
            const DirectionsService = new google.maps.DirectionsService();
            console.log(MapWithADirectionsRenderer)
            DirectionsService.route({
                origin: new google.maps.LatLng(34.118626335469514, -117.850341796875),
                destination: new google.maps.LatLng(
                    34.052659166666665, -118.25683583333333),
                travelMode: google.maps.TravelMode.DRIVING,
            }, (result, status) => {
                if (status === google.maps.DirectionsStatus.OK) {
                    this.setState({
                        directions: result,
                    });
                } else {
                    console.error(`error fetching directions ${result}`);
                }
            });
        }
    })
)(props =>
    <GoogleMap
        defaultZoom={7}
        defaultCenter={new google.maps.LatLng(34.118626335469514, -117.850341796875)}
    >
        <TrafficLayer autoUpdate />

        {props.directions && <DirectionsRenderer directions={props.directions} />}
        {props.isMarkerShown && <Marker position={{ lat: 34.052659166666665, lng: -118.25683588573333 }} onClick={props.onMarkerClick} />}
        {props.isMarkerShown && <Marker position={{ lat: 34.052659178666665, lng: -118.25685583333333 }} onClick={props.onMarkerClick} />}
        {props.isMarkerShown && <Marker position={{ lat: 34.057659165556665, lng: -118.25683583999333 }} onClick={props.onMarkerClick} />}
        {props.isMarkerShown && <Marker position={{ lat: 34.052659166666665, lng: -118.25683583336333 }} onClick={props.onMarkerClick} />}
        {props.isMarkerShown && <Marker position={{ lat: 34.052659166666665, lng: -118.25683583333333 }} onClick={props.onMarkerClick} />}
        {props.isMarkerShown && <Marker position={{ lat: 34.052659776666665, lng: -118.25683583333333 }} onClick={props.onMarkerClick} />}
        {props.isMarkerShown && <Marker position={{ lat: 34.052659166666665, lng: -118.25683583333333 }} onClick={props.onMarkerClick} />}
        {props.isMarkerShown && <Marker position={{ lat: 34.052659166666665, lng: -118.25683583378933 }} onClick={props.onMarkerClick} />}
        {props.isMarkerShown && <Marker position={{ lat: 34.052659162365665, lng: -118.25683583333333 }} onClick={props.onMarkerClick} />}
        {props.isMarkerShown && <Marker position={{ lat: 34.052658955566665, lng: -118.25683583333333 }} onClick={props.onMarkerClick} />}
        {props.isMarkerShown && <Marker position={{ lat: 34.052659167899965, lng: -118.12358974888888 }} onClick={props.onMarkerClick} />}
        {props.isMarkerShown && <Marker position={{ lat: 34.052659166963665, lng: -118.25683583333333 }} onClick={props.onMarkerClick} />}

    </GoogleMap>
);

class MyFancyComponent extends React.PureComponent {
    state = {
        isMarkerShown: false,
    }

    componentDidMount() {
        this.delayedShowMarker()


    }

    delayedShowMarker = () => {
        setTimeout(() => {
            this.setState({ isMarkerShown: true })
        }, 100)
    }

    handleMarkerClick = () => {
        this.setState({ isMarkerShown: false })
        this.delayedShowMarker()
    }

    render() {
        return (
            <MapWithADirectionsRenderer
                isMarkerShown={this.state.isMarkerShown}
                onMarkerClick={this.handleMarkerClick}

            />
        )
    }
}
export default MyFancyComponent





