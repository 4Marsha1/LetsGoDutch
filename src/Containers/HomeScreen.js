import React from 'react';
import AppBar from '../Components/AppBar';
import GroupHeads from '../Components/GroupHeads';

class HomeScreen extends React.Component {
    render() {
        return <div>
            <AppBar type='1' />
            <GroupHeads />
        </div>;
    }
}

export default HomeScreen;
