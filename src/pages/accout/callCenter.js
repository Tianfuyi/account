import {Form} from "antd";
import React, { Component } from 'react';
// class Content extends React.Component {
//     render() {
//         return  <div>
//             <input type="text" value={this.props.myDataProp} onChange={this.props.updateStateProp} />
//             <h4>{this.props.myDataProp}</h4>
//         </div>;
//     }
// }
class HelloMessage extends React.Component {

    render() {

        return <div>知测试
        </div>;
    }
}

const call = Form.create()(HelloMessage);
export default call;