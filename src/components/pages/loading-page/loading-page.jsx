import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import logo from '../../assets/images/logos/btcu.svg';
import style from './loading-page.module.scss';

const LoadingPage = ({ loading }) => {
    const containerStyle = loading
        ? style.loading
        : classNames(style.loading, style.loaded);

    return (
        <div className={containerStyle}>
            <img src={logo} alt="logo" />
            <div className={style.spinner}>
                <div className={style.dot1} />
                <div className={style.dot2} />
            </div>
        </div>
    );
};

LoadingPage.defaultProps = {
    loading: true,
};

LoadingPage.propTypes = {
    loading: PropTypes.bool,
};

export default LoadingPage;
