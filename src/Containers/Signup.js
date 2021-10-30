import { Component } from 'react';
import { connect } from 'react-redux';

import store from '../redux/store'
import { URL_PREFIX } from '../constants';
import { signupUser } from '../redux/actions/auth';
import SignupPage from '../Components/SignupPage';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isGettingSubmitted: false,
            profile: "https://picsum.photos/200",
            name: "",
            email: "",
            password1: "",
            password2: "",
        };
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch(signupUser(this.state.profile, this.state.name, this.state.email, this.state.password1, this.state.password2));
    };

    componentDidUpdate() {
        if (this.props.auth.isSignUpSuccessful) {
            this.props.history.replace(URL_PREFIX + '/homescreen');
        }
    }

    render() {
        const { profile, name, email, password1, password2 } = this.state;
        const { signupInitiated } = this.props.auth;
        return (
            <SignupPage
                profile={profile}
                name={name}
                email={email}
                password1={password1}
                password2={password2}
                isGettingSubmitted={signupInitiated}
                handleChange={this.handleChange}
                handleFormSubmit={this.handleFormSubmit}
            />
        );
    }
}


const mapStateToProps = state => ({
    auth: state.authReducer
});

export default connect(mapStateToProps)(Signup);
