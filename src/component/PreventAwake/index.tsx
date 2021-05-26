import React, { Component } from 'react'
import { activateKeepAwake, deactivateKeepAwake } from 'expo-keep-awake';

export default class PreventAwake extends Component {
    componentDidMount(){
        activateKeepAwake();
    }

    componentWillUnmount(){
        deactivateKeepAwake();
    }

    render() {
        return (
            <React.Fragment>
                {this.props.children}
            </React.Fragment>
        )
    }
};
