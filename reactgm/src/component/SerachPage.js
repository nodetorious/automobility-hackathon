import React from 'react'
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import VisaServices from '../services/VisaServices'

const gm = window.gm;
class SerachPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPosition: {
                lat: 0,
                lng: 0
            },
            input: '',
            layoutName: "default",
            data: {
                "searchAttrList": {
                    "merchantName": "STARBUCKS",
                    "merchantCity": "SAN FRANCISCO",
                    "merchantState": "CA",
                    "merchantPostalCode": "94127",
                    "merchantCountryCode": "840"
                },
                "responseAttrList": [
                    "GNSTANDARD"
                ],
                "searchOptions": {
                    "wildCard": [
                        "merchantName"
                    ],
                    "maxRecords": "5",
                    "matchIndicators": "true",
                    "matchScore": "true",
                    "proximity": [
                        "merchantName"
                    ]
                },
                "header": {
                    "requestMessageId": "Request_001",
                    "startIndex": "0",
                    "messageDateTime": "2018-11-25T18:55:46.903"
                }
            },
            results: {
                address: []
            }
        }
    }
    onChange = evt => {
        const key = evt.target.name
        const val = evt.target.value
        this.setState({
            [key]: val
        })
    }
    componentDidMount() {
        console.log(window)
        var id = gm.info.getCurrentPosition(this.processPosition, true)
        console.log(id)
        // var connected = gm.networkManager.getNetworkAvailability();

        // gm.networkManager.getNetworkAvailability(this.networkManager)
    }

    // networkManager = (connected) => {
    //     if (connected) {
    //         console.log("connected")
    //     }
    // }
    processPosition = (position) => {
        console.log("this is the position", position)
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        console.log(lat, lng)
        this.setState({
            currentPosition: {
                lat: lat,
                lng: lng
            }
        })
    }
    onKeyPress = button => {
        console.log("Button pressed", button);
        if (button === "{shift}" || button === "{lock}") this.handleShift();
    };

    handleShift = () => {
        let layoutName = this.state.layoutName;

        this.setState({
            layoutName: layoutName === "default" ? "shift" : "default"
        });
    };

    onChangeInput = input => {
        this.setState({
            input: input
        });
        console.log("Input changed", input);
    };
    inputStyle = {
        width: "100%",
        height: "40px",
        padding: "30px",
        fontSize: 30,
        border: 0
    };
    onSearchClick = data => {
        VisaServices.MerchantSearch(data, this.onSearchClickSuccess, this.onSearchClickError)
    }
    onSearchClickSuccess = response => {
        console.log(response.data.merchantSearchServiceResponse.response)
        this.setState({
            ...this.state,
            results: {
                address: [
                    "1251 S Grand Ave, Los Angeles, CA 90015",
                    "800 W Olympic Blvd #102, Los Angeles, CA 90015",
                    "1111 S Grand Ave, Los Angeles, CA 90015",
                    "600 W 9th St, Los Angeles, CA 90015",
                    "600 W 9th St, Los Angeles, CA 90015",
                    "400 W Olympic Blvd, Los Angeles, CA 90015"
                ]
            }
        })
    }

    onSearchClickError = error => {
        console.log(error)
    }
    render() {
        return (
            <React.Fragment>
                {/* <button onClick={() => { this.onSearchClick(this.state.data) }}>search</button> */}
                {/* <div className="modal mt-5" id="myModal">
                    <div className="modal-dialog">
                        <div className="modal-content" >
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div className="modal-body">
                                <p>haha</p>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div>
                    <div>
                        {/* <small>latitude:{this.state.currentPosition.lat} longitude:{this.state.currentPosition.lng}</small> */}
                    </div>
                    <div className="row">
                        <div className="col-sm-8 text-dark mt-2" style={{ fontSize: 20 }}>
                            <div className="form-row">
                                <div className="form-group col-sm-10">
                                    <input
                                        className='form-control'
                                        name='serach'
                                        type='text'
                                        style={this.inputStyle}
                                        value={this.state.input}
                                        placeholder='Search...'
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="form-group col-sm-2">
                                    <button className='form-control' style={{ height: "9vh", backgroundColor: "rgba(0,0,0,0.7)", color: "white", fontSize: 25 }} onClick={() => { this.onSearchClick(this.state.data) }}><strong>go!</strong></button>
                                </div>
                            </div>
                            <div>
                                {this.state.results.address && this.state.results.address.map((add, idx) => {
                                    return (<p key={idx} style={{ zIndex: 1 }}>{add}</p>)
                                })}
                            </div>
                            <div className="align-items-flex-end" style={{ position: "relative", top: 320 }}>
                                <Keyboard
                                    style={{ fontSize: 20 }}
                                    ref={r => (this.keyboard = r)}
                                    layoutName={this.state.layoutName}
                                    onChange={input => this.onChangeInput(input)}
                                    onKeyPress={button => this.onKeyPress(button)}
                                />
                            </div>

                        </div>
                        <div className="col-sm-4" style={{ fontSize: 30 }}>
                            <li className="list-group-item" style={{ backgroundColor: 'rgba(255,255,255,0.5)' }}>
                                <div className="media align-items-center">
                                    <img src="http://blogs-images.forbes.com/elainewong/files/2011/01/0106_starbucks-logo_400x400.jpg"
                                        style={{ width: 30, height: 30 }}
                                        className="d-block rounded-circle" alt=""
                                        onClick={() => { }} />
                                    <div className="media-body px-2">
                                        <a className="text-dark mr-2"><strong>Starbucks</strong></a>
                                        <span className={"badge badge-dot badge-success"}></span>&nbsp;<span className="text-muted"></span>
                                    </div>
                                    <a className="d-block text-muted text-large font-weight-light" onClick={() => { }}>&times;</a>
                                </div>
                            </li>
                            <li className="list-group-item" style={{ backgroundColor: 'rgba(255,255,255,0.5)' }}>
                                <div className="media align-items-center">
                                    <img src="https://static.seekingalpha.com/uploads/2018/7/24/saupload_3000px-McDonald_27s_SVG_logo.svg.png"
                                        style={{ width: 30, height: 30 }}
                                        className="d-block rounded-circle" alt=""
                                        onClick={() => { }} />
                                    <div className="media-body px-2">
                                        <a className="text-dark mr-2"><strong>McDonald</strong></a>
                                        <span className={"badge badge-dot badge-success"}></span>&nbsp;<span className="text-muted"></span>
                                    </div>
                                    <a className="d-block text-light text-large font-weight-light" onClick={() => { }}>&times;</a>
                                </div>
                            </li>
                            <li className="list-group-item" style={{ backgroundColor: 'rgba(255,255,255,0.5)' }}>
                                <div className="media align-items-center">
                                    <img src="https://adc3ef35f321fe6e725a-fb8aac3b3bf42afe824f73b606f0aa4c.ssl.cf1.rackcdn.com/tenantlogos/5922.png"
                                        style={{ width: 30, height: 30 }}
                                        className="d-block rounded-circle" alt=""
                                        onClick={() => { }} />
                                    <div className="media-body px-2">
                                        <a className="text-dark mr-2"><strong>Taco Bell</strong></a>
                                        <span className={"badge badge-dot badge-success"}></span>&nbsp;<span className="text-muted"></span>
                                    </div>
                                    <a className="d-block text-light text-large font-weight-light" onClick={() => { }}>&times;</a>
                                </div>
                            </li>
                            <li className="list-group-item" style={{ backgroundColor: 'rgba(255,255,255,0.5)' }}>
                                <div className="media align-items-center">
                                    <img src="https://media.glassdoor.com/sqll/323970/boiling-crab-squarelogo-1470862944482.png"
                                        style={{ width: 30, height: 30 }}
                                        className="d-block rounded-circle" alt=""
                                        onClick={() => { }} />
                                    <div className="media-body px-2">
                                        <a className="text-dark mr-2"><strong>Boiling Crab</strong></a>
                                        <span className={"badge badge-dot badge-success"}></span>&nbsp;<span className="text-muted"></span>
                                    </div>
                                    <a className="d-block text-light text-large font-weight-light" onClick={() => { }}>&times;</a>
                                </div>
                            </li>
                            <li className="list-group-item" style={{ backgroundColor: 'rgba(255,255,255,0.5)' }}>
                                <div className="media align-items-center">
                                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/85/Panda_Express_logo.svg/220px-Panda_Express_logo.svg.png"
                                        style={{ width: 30, height: 30 }}
                                        className="d-block rounded-circle" alt=""
                                        onClick={() => { }} />
                                    <div className="media-body px-2">
                                        <a className="text-dark mr-2"><strong>Panda Express</strong></a>
                                        <span className={"badge badge-dot badge-success"}></span>&nbsp;<span className="text-muted"></span>
                                    </div>
                                    <a className="d-block text-light text-large font-weight-light" onClick={() => { }}>&times;</a>
                                </div>
                            </li>
                            <li className="list-group-item" style={{ backgroundColor: 'rgba(255,255,255,0.5)' }}>
                                <div className="media align-items-center">
                                    <img src="https://therockbury.com/wp-content/uploads/2014/03/burgerking-logo.jpg"
                                        style={{ width: 30, height: 30 }}
                                        className="d-block rounded-circle" alt=""
                                        onClick={() => { }} />
                                    <div className="media-body px-2">
                                        <a className="text-dark mr-2"><strong>Buger King</strong></a>
                                        <span className={"badge badge-dot badge-success"}></span>&nbsp;<span className="text-muted"></span>
                                    </div>
                                    <a className="d-block text-light text-large font-weight-light" onClick={() => { }}>&times;</a>
                                </div>
                            </li>
                            <li className="list-group-item" style={{ backgroundColor: 'rgba(255,255,255,0.5)' }}>
                                <div className="media align-items-center">
                                    <img src="http://www.logosvectorfree.com/wp-content/uploads/2018/07/Pizza-Hut-Logo-Vectors.jpg"
                                        style={{ width: 30, height: 30 }}
                                        className="d-block rounded-circle" alt=""
                                        onClick={() => { }} />
                                    <div className="media-body px-2">
                                        <a className="text-dark mr-2"><strong>Pizza Hut</strong></a>
                                        <span className={"badge badge-dot badge-success"}></span>&nbsp;<span className="text-muted"></span>
                                    </div>
                                    <a className="d-block text-light text-large font-weight-light" onClick={() => { }}>&times;</a>
                                </div>
                            </li>
                            <li className="list-group-item" style={{ backgroundColor: 'rgba(255,255,255,0.5)' }}>
                                <div className="media align-items-center">
                                    <img src="https://media-cdn.tripadvisor.com/media/photo-s/11/83/01/ee/logo.jpg"
                                        style={{ width: 30, height: 30 }}
                                        className="d-block rounded-circle" alt=""
                                        onClick={() => { }} />
                                    <div className="media-body px-2">
                                        <a className="text-dark mr-2"><strong>In n Out</strong></a>
                                        <span className={"badge badge-dot badge-success"}></span>&nbsp;<span className="text-muted"></span>
                                    </div>
                                    <a className="d-block text-light text-large font-weight-light" onClick={() => { }}>&times;</a>
                                </div>
                            </li>
                            <li className="list-group-item" style={{ backgroundColor: 'rgba(255,255,255,0.5)' }}>
                                <div className="media align-items-center">
                                    <img src="https://cdn.worldvectorlogo.com/logos/chipotle-1.svg"
                                        style={{ width: 30, height: 30 }}
                                        className="d-block rounded-circle" alt=""
                                        onClick={() => { }} />
                                    <div className="media-body px-2">
                                        <a className="text-dark mr-2"><strong>Chipotle</strong></a>
                                        <span className={"badge badge-dot badge-success"}></span>&nbsp;<span className="text-muted"></span>
                                    </div>
                                    <a className="d-block text-light text-large font-weight-light" onClick={() => { }}>&times;</a>
                                </div>
                            </li>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default SerachPage