import React from 'react';
import { connect } from 'react-redux';
import { createGroup } from '../redux/actions/createGroup';
import AppBar from '../Components/AppBar';
import CreateGroupPage from '../Components/CreateGroup';
import { URL_PREFIX } from '../constants';

class CreateGroup extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            id: 10,
            group_name: '',
            group_title: '',
            friends: [
                { name: 'Abhishek', id: 1 },
                { name: 'Bha', id: 2 },
                { name: 'Rad', id: 3 },
                { name: 'Waz', id: 4 },
            ],
            expenses: {
                travel: null,
                food: null,
                others: null,
                total: 0
            }
        }
    }

    componentDidUpdate() {
        if (this.props.createGroupReducer.isCreateGroupSuccess) {
            this.props.history.replace({
                pathname: URL_PREFIX + "/homescreen",
            })
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ ...this.state, [name]: value });
    };


    handleSubmitClick = (e) => {
        e.preventDefault();
        if (this.state.group_name) {
            this.props.dispatch(createGroup(this.state, this.props.token));
        }
    };

    render() {
        return <div>
            <AppBar type='2' />
            <CreateGroupPage
                state={this.state}
                handleChange={this.handleChange}
                handleSubmitClick={this.handleSubmitClick}
            />
        </div>;
    }
}

const mapStateToProps = (state) => ({
    token: state.authReducer.token,
    createGroupReducer: state.createGroupReducer
});
export default connect(mapStateToProps)(CreateGroup);