import React from "react";
import styles from "./Page2.css";

const Page2 = props => {
    return (
        <div class='root'>
            <table>
                <tr onClick={props.handleClose}>
                    <th></th>
                    <th>Marketplace</th>
                    <th>Distance</th>
                    <th>City</th>
                    <th>Operating Hours</th>
                    <th>Queue Time</th>
                    <th>Total Time</th>
                    <th></th>
                </tr>
                <tr onClick={props.handleClose} style={{ background: "yellow", color: "black" }}>
                    <td></td>
                    <td>Starbucks</td>
                    <td>0.9 Mile</td>
                    <td>Los Angeles</td>
                    <td>6 AM - 12 PM</td>
                    <td>0:04</td>
                    <td>0:15</td>
                    <td>*</td>
                </tr>
                <tr onClick={props.handleClose}>
                    <td></td>
                    <td>Starbucks</td>
                    <td>1.2 Miles</td>
                    <td>Los Angeles</td>
                    <td>7 AM - 10 PM</td>
                    <td>0:04</td>
                    <td>0:17</td>
                    <td>*</td>
                </tr>
                <tr onClick={props.handleClose}>
                    <td></td>
                    <td>Starbucks</td>
                    <td>1.0 Miles</td>
                    <td>Los Angeles</td>
                    <td>5 AM - 11 PM</td>
                    <td>0:07</td>
                    <td>0:18</td>
                    <td>*</td>
                </tr>
                <tr onClick={props.handleClose}>
                    <td></td>
                    <td>Starbucks</td>
                    <td>2.0 Miles</td>
                    <td>Los Angeles</td>
                    <td>6 AM - 12 PM</td>
                    <td>0:04</td>
                    <td>0:18</td>
                    <td>*</td>
                </tr>
                <tr onClick={props.handleClose}>
                    <td></td>
                    <td>Starbucks</td>
                    <td>1.8 Miles</td>
                    <td>Los Angeles</td>
                    <td>8 AM - 10 PM</td>
                    <td>0:09</td>
                    <td>0:19</td>
                    <td>*</td>
                </tr>
                <tr >
                    <td onClick={props.handleClose}>*</td>
                    <td onClick={props.handleClose}>Starbucks</td>
                    <td onClick={props.handleClose}>1.5 Miles</td>
                    <td onClick={props.handleClose}>Los Angeles</td>
                    <td onClick={props.handleClose}>9 AM - 9 PM</td>
                    <td onClick={props.handleClose}>0:10</td>
                    <td onClick={props.handleClose}>0:23</td>
                    <td onClick={props.hi}>*</td>
                </tr>
                <tr onClick={props.handleClose}>
                    <td></td>
                    <td>Starbucks</td>
                    <td>0.8 Mile</td>
                    <td>Los Angeles</td>
                    <td>8 AM - 9 PM</td>
                    <td>0:15</td>
                    <td>0:25</td>
                    <td>*</td>
                </tr>
            </table>
            <br />
            <button class="btn btn-danger" onClick={props.handleClose}>Close</button>
        </div>
    )
}

export default Page2;
