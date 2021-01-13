import React, { Component, Fragment } from 'react';
import { withTranslation } from 'react-i18next';
import { withRouter, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import PropTypes from 'prop-types';
import Burger from 'react-css-burger';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SelectLangeage from '../../../language';
import { compose } from '../../../../utils';
import { openMenu, closeMenu } from '../../../../actions/drawer.actions';
import style from './mobile-menu.module.scss';

class MobileMenu extends Component {
    static defaultProps = {
        closeDrawerMenu: () => {},
        openDrawerMenu: () => {},
        isOpen: false,
        links: [],
        location: {},
    };

    static propTypes = {
        closeDrawerMenu: PropTypes.func,
        openDrawerMenu: PropTypes.func,
        isOpen: PropTypes.bool,
        links: PropTypes.instanceOf(Array),
        location: PropTypes.object,
    };

    componentDidUpdate(prevProps) {
        const { closeDrawerMenu, location } = this.props;
        if (location !== prevProps.location) {
            closeDrawerMenu();
        }
    }

    componentWillUnmount() {
        const { closeDrawerMenu } = this.props;
        closeDrawerMenu();
    }

    toggleBurger = () => {
        const { isOpen, closeDrawerMenu, openDrawerMenu } = this.props;
        if (isOpen) {
            return closeDrawerMenu();
        }

        openDrawerMenu();
    };

    render() {
        const { links, isOpen } = this.props;

        const drawerStyle = isOpen ? style.drawer__opened : style.drawer__closed;

        if (isOpen) {
            document.documentElement.style.overflowY = 'hidden';
        } else {
            document.documentElement.style.overflowY = 'inherit';
        }

        const drawerHeight = {
            height: `${window.innerHeight}px`,
        };

        const burgerMenuStyle = isOpen ? 'burgerMenu burgerMenuActive' : 'burgerMenu';

        return (
            <Fragment>
                <div className={style.burgerMenu}>
                    <div className={burgerMenuStyle}>
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
                    <div
                        className={style.linksWrapper}
                        style={{ height: `${window.innerHeight}px` }}
                    >
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

const mapStateToProps = state => {
    const {
        drawer: { isOpen },
    } = state;

    return {
        isOpen,
    };
};

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        openDrawerMenu: () => openMenu(),
        closeDrawerMenu: () => closeMenu(),
    },
    dispatch,
);

export default compose(
    withTranslation(),
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
)(MobileMenu);
