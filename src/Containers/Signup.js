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
            profile_pic: "https://picsum.photos/200",
            name: "",
            email: "",
            phone_no:"",
            password: "",
            password2: "",
        };
    }

    handleChange = (event) => {
        
        this.setState({ [event.target.name]: event.target.value });
    };

    handleFormSubmit =async (event) => {
        event.preventDefault();
        this.props.dispatch(await signupUser(this.state.profile_pic, this.state.name, this.state.email, this.state.phone_no,this.state.password, this.state.password2));
    };

    componentDidUpdate() {
        if (this.props.auth.isSignUpSuccessful) {
            this.props.history.replace(URL_PREFIX + '/homescreen');
        }
    }

    render() {
        const { profile_pic, name, email, password, password2,phone_no } = this.state;
        const { signupInitiated } = this.props.auth;
        return (
            <SignupPage
                profile_pic={profile_pic}
                name={name}
                email={email}
                phone_no={phone_no}
                password={password}
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
