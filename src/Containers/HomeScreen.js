import React from 'react';
import { connect } from 'react-redux';
import { loadUser } from '../redux/actions/auth'
import { getGroups } from '../redux/actions/groups';
import AppBar from '../Components/AppBar';
import GroupHeads from '../Components/GroupHeads';

class HomeScreen extends React.Component {

    componentDidMount() {
        this.props.dispatch(loadUser(this.props.auth.token));
        this.props.dispatch(getGroups(this.props.auth.token))
    }

    render() {
        return <div>
            <AppBar type='1' user={this.props.auth.user} />
            <GroupHeads groups={this.props.groups} />
        </div>;
    }
}

const mapStateToProps = state => ({
    auth: state.authReducer,
    groups: state.groupsReducer.groups,
    check: state.groupsReducer.isGetGroupsSuccessfull
});

export default connect(mapStateToProps)(HomeScreen);
