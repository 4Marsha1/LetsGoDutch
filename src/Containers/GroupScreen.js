import React, { Component } from 'react'
import GroupScreenComponent from '../Components/GroupScreen'

class GroupScreen extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }


    render() {
        console.log(this.props.location.state.id);
        return (<div>
            <GroupScreenComponent />
        </div>);
    }
}

export default GroupScreen;