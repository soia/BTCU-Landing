import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../layouts/header';
import Footer from '../layouts/footer';
import { HomePage, PageNotFound, LoadingPage } from '../pages';
import '../assets/styles/reset.scss';
import './app.scss';
import '../assets/styles/fonts.scss';

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
                    <Route component={PageNotFound} />
                </Switch>
                <Footer />
            </Router>
        );
    }
}

export default App;
