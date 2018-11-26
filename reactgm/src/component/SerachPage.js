import React from 'react'
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

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
    }
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
    render() {
        return (
            <React.Fragment>
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
                        <div className="col-sm-8 text-dark" style={{ fontSize: 20 }}>
                            <div className="form-group mt-1">
                                <input
                                    className='form-control'
                                    name='serach'
                                    type='text'
                                    style={this.inputStyle}
                                    value={this.state.input}
                                    placeholder='Search...'
                                    onChange={this.onChange}
                                />
                                <div className="align-items-flex-end" style={{ height: "80vh", alignItems: "flex-end" }}>
                                    <Keyboard
                                        style={{ fontSize: 20 }}
                                        ref={r => (this.keyboard = r)}
                                        layoutName={this.state.layoutName}
                                        onChange={input => this.onChangeInput(input)}
                                        onKeyPress={button => this.onKeyPress(button)}
                                    />
                                </div>
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
                                        <a className="text-dark mr-2"><strong>Panada Express</strong></a>
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
                                        <a className="text-dark mr-2"><strong>Panada Express</strong></a>
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
                                        <a className="text-dark mr-2"><strong>Panada Express</strong></a>
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
                                        <a className="text-dark mr-2"><strong>Panada Express</strong></a>
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
                                        <a className="text-dark mr-2"><strong>Panada Express</strong></a>
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