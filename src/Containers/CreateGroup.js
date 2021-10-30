import React from 'react';
import AppBar from '../Components/AppBar';
import CreateGroupPage from '../Components/CreateGroup';

class CreateGroup extends React.Component {
    render() {
        return <div>
            <AppBar type='2' />
            <CreateGroupPage />
        </div>;
    }
}

export default CreateGroup;