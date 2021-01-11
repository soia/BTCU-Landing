import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReactNotification from 'react-notifications-component';
import Header from '../layouts/header';
import Footer from '../layouts/footer';
import {
    HomePage, PageNotFound, LoadingPage, WalletPage,
} from '../pages';
import { walletPath } from '../../constants';
import '../assets/styles/reset.scss';
import './app.scss';
import '../assets/styles/fonts.scss';
import 'react-notifications-component/dist/theme.css';

class App extends Component {
    state = {
        loading: true,
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                loading: false,
            });
        }, 2000);
    }

    render() {
        const { loading } = this.state;
        document.documentElement.style.overflowY = `${loading ? 'hidden' : 'visible'}`;

        return (
            <Router>
                <LoadingPage loading={loading} />
                <Header />
                <Switch>
                    <Route path="/" component={HomePage} exact />
                    <Route path={walletPath} component={WalletPage} exact />
                    <Route component={PageNotFound} />
                </Switch>
                <Footer />
                <ReactNotification />
            </Router>
        );
    }
}

export default App;
