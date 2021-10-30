import React from 'react';
import { connect } from 'react-redux';
import { loadUser } from '../redux/actions/auth'
import AppBar from '../Components/AppBar';
import GroupHeads from '../Components/GroupHeads';

class HomeScreen extends React.Component {

    componentDidUpdate() {
        this.props.dispatch(loadUser(this.props.auth.token));
    }

    render() {
        console.log(this.props.auth.user);
        return <div>
            <AppBar type='1' user={this.props.auth.user} />
            <GroupHeads groups={this.props.auth.user.groups} />
        </div>;
    }
}

const mapStateToProps = state => ({
    auth: state.authReducer
});

export default connect(mapStateToProps)(HomeScreen);
