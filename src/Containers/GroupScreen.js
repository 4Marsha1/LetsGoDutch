import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getGroups } from '../redux/actions/groups'
import GroupScreenComponent from '../Components/GroupScreen'
import AppBar from '../Components/AppBar'

class GroupScreen extends React.Component {
    
    constructor(props) {
        super(props)
        
        this.state = {

        }
    }

    componentDidMount() {
        this.props.dispatch(getGroups(this.props.auth.token))
    }

    render() {
        const group = this.props.groups.filter(group => group._id == this.props.location.state.id);
        return (<div>
            <AppBar type='2' />
            <GroupScreenComponent group={group} />
        </div>);
    }
}

const mapStateToProps = state => ({
    auth: state.authReducer,
    groups: state.groupsReducer.groups,
});

export default connect(mapStateToProps)(GroupScreen);