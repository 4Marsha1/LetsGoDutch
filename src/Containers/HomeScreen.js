import React from 'react';
import { connect } from 'react-redux';
import { loadUser, logoutUser } from '../redux/actions/auth'
import { getGroups } from '../redux/actions/groups';
import AppBar from '../Components/AppBar';
import GroupHeads from '../Components/GroupHeads';
import { URL_PREFIX } from '../constants';

class HomeScreen extends React.Component {

    componentDidMount() {
        this.props.dispatch(loadUser(this.props.auth.token));
        this.props.dispatch(getGroups(this.props.auth.token))

    }
    componentDidUpdate(){
        if (!this.props.logoutInitiated && !this.props.isAuthenticated) {
            this.props.history.replace(URL_PREFIX + '/landing');
        }
    }

    handleLogout = () => {
        this.props.dispatch(logoutUser(this.props.auth.token))
    }

    render() {
        return <div>
            <AppBar type='1' handleLogout={this.handleLogout} />
            <GroupHeads groups={this.props.groups} />
        </div>;
    }
}

const mapStateToProps = state => ({
    auth: state.authReducer,
    isAuthenticated: state.authReducer.isAuthenticated,
    logoutInitiated: state.authReducer.logoutInitiated,
    groups: state.groupsReducer.groups,
});

export default connect(mapStateToProps)(HomeScreen);
