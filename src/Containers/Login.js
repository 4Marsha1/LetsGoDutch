import React from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../redux/actions/auth';
import LoginPage from '../Components/LoginPage';
import { URL_PREFIX } from '../constants';

class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isGettingSubmitted: false,
            email: props.auth.lastUsedEmail || "",
            password: "",
        }
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };
    handleFormSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch(loginUser(this.state.email, this.state.password));
    };
    componentDidUpdate() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.replace(URL_PREFIX + '/homescreen');
        }
    }

    render() {
        const { email, password } = this.state;
        const { loginInitiated } = this.props.auth;
        return (
            <LoginPage
                email={email}
                password={password}
                isGettingSubmitted={loginInitiated}
                handleChange={this.handleChange}
                handleFormSubmit={this.handleFormSubmit}
            />
        );
    }
}

const mapStateToProps = state => ({
    auth: state.authReducer
});

export default connect(mapStateToProps)(Login);
