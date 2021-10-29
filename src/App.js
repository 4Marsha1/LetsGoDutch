import './App.css';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { URL_PREFIX } from './constants';

import LandingPage from './Containers/Landing';
import LoginPage from './Containers/Login';
import HomeScreen from './Containers/HomeScreen';

function App() {
    return (

        <BrowserRouter>
            <Switch>
                <Route
                    exact
                    path={URL_PREFIX + '/landing'}
                    component={LandingPage}
                    key='route-landing-screen'
                />
                <Route
                    exact
                    path={URL_PREFIX + '/login'}
                    component={LoginPage}
                    key='route-login-screen'
                />
                <Route
                    exact
                    path={URL_PREFIX + '/homescreen'}
                    component={HomeScreen}
                    key='route-home-screen'
                />
                <Redirect to={URL_PREFIX + '/landing'} />
            </Switch>
        </BrowserRouter>

    );
}

export default App;
