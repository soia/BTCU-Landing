import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReactNotification from 'react-notifications-component';
import { BackTop } from 'antd';
import Header from '../layouts/header';
import Footer from '../layouts/footer';
import {
    HomePage,
    PageNotFound,
    LoadingPage,
    WalletPage,
    StorePage,
    ExplorerPage,
} from '../pages';
import { walletPath, storePath, explorerPath } from '../../constants';
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
                    <Route path={storePath} component={StorePage} exact />
                    <Route path={explorerPath} component={ExplorerPage} exact />
                    <Route component={PageNotFound} />
                </Switch>
                <Footer />
                <ReactNotification />
                <BackTop />
            </Router>
        );
    }
}

export default App;
