import React from 'react';
import AppBar from '../Components/AppBar';
import GroupHeads from '../Components/GroupHeads';

class HomeScreen extends React.Component {
    render() {
        return <div>
            <AppBar />
            <GroupHeads />
        </div>;
    }
}

export default HomeScreen;
