import React from "react";
import styles from "./Page2.css";

const Page2 = props => {
    return (
        <div class='root'>
            <table>
                <tr onclick={props.handleClose}>
                    <th></th>
                    <th>Marketplace</th>
                    <th>Queue Time</th>
                    <th>Total Time</th>
                </tr>
                <tr onclick={props.handleClose}>
                    <td>*</td>
                    <td>McDonalds</td>
                    <td>0:08</td>
                    <td>0:22</td>
                </tr>
                <tr onclick={props.handleClose}>
                    <td></td>
                    <td>Starbucks</td>
                    <td>0:04</td>
                    <td>0:15</td>
                </tr>
                <tr onclick={props.handleClose}>
                    <td></td>
                    <td>Taco Bell</td>
                    <td>0:09</td>
                    <td>0:35</td>
                </tr>
                <tr onclick={props.handleClose}>
                    <td>*</td>
                    <td>Dairy Queen</td>
                    <td>0:06</td>
                    <td>0:25</td>

                </tr>

            </table>
            <br />
            <button class="btn btn-danger" onClick={props.handleClose}>Close</button>
        </div>
    )
}

export default Page2;
