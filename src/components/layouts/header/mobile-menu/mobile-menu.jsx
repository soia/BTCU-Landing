import React, { Component, Fragment } from 'react';
import { withTranslation } from 'react-i18next';
import { withRouter, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import PropTypes from 'prop-types';
import Burger from 'react-css-burger';
import SelectLangeage from '../../../language';
import { compose } from '../../../../utils';
import style from './mobile-menu.module.scss';

class MobileMenu extends Component {
    static defaultProps = {
        links: [],
        location: {},
    };

    static propTypes = {
        links: PropTypes.instanceOf(Array),
        location: PropTypes.object,
    };

    state = {
        isOpen: false,
    };

    componentDidUpdate(prevProps) {
        const { location } = this.props;
        if (location !== prevProps.location) {
            this.setState({
                isOpen: false,
            });
        }
    }

    componentWillUnmount() {
        this.setState({
            isOpen: false,
        });
    }

    toggleBurger = () => {
        const { isOpen } = this.state;
        if (isOpen) {
            return this.setState({
                isOpen: false,
            });
        }

        this.setState({
            isOpen: true,
        });
    };

    render() {
        const { links } = this.props;
        const { isOpen } = this.state;

        const drawerStyle = isOpen ? style.drawer__opened : style.drawer__closed;

        if (isOpen) {
            document.documentElement.style.overflowY = 'hidden';
        } else {
            document.documentElement.style.overflowY = 'inherit';
        }

        const drawerHeight = {
            height: `calc(${window.innerHeight}px - 19vw)`,
        };

        return (
            <Fragment>
                <div className={style.burgerMenu}>
                    <div className="burgerMenu">
                        <Burger
                            onClick={this.toggleBurger}
                            active={isOpen}
                            burger="spin"
                            color="white"
                            marginTop="0"
                            scale={0.65}
                        />
                    </div>
                </div>
                <div className={drawerStyle} style={drawerHeight}>
                    <SelectLangeage />
                    <div className={style.linksWrapper}>
                        <ul className={style.header__links}>
                            {links.map(item => {
                                const {
                                    name, path, id, link,
                                } = item;

                                return (
                                    <li key={id} className={style.links_item}>
                                        {link ? (
                                            <NavLink
                                                activeStyle={{ color: '#FF2911' }}
                                                to={path}
                                            >
                                                {name}
                                            </NavLink>
                                        ) : (
                                            <HashLink to={path}>{name}</HashLink>
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default compose(withTranslation(), withRouter)(MobileMenu);
