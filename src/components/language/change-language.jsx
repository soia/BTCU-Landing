import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as moment from 'moment';
import 'moment/locale/ru';
import 'moment/locale/zh-cn';
import 'moment/locale/en-gb';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from '../../utils';
import i18n from '../../i18n';
import { getCurrentLocaleActions } from '../../actions/current-locale.actions';
import USICON from '../assets/images/flags/united-states.svg';
import RUCON from '../assets/images/flags/russia.svg';
import CNICON from '../assets/images/flags/china.svg';
import style from './change-language.module.scss';

class SelectLangeage extends Component {
    componentDidMount() {
        const { setLocale } = this.props;
        const currentLang = localStorage.getItem('i18nextLngBTCU');
        setLocale(currentLang);
        this.setMomentLocale(currentLang);
    }

    setMomentLocale = locale => {
        let momentLocale = '';

        if (locale === 'ru') {
            momentLocale = 'ru';
        }

        if (locale === 'en') {
            momentLocale = 'en-gb';
        }

        if (locale === 'cn') {
            momentLocale = 'zh-cn';
        }

        moment.locale(momentLocale);
    }

    onSelectLang = countryCode => {
        const { setLocale } = this.props;
        i18n.changeLanguage(countryCode);
        localStorage.setItem('i18nextLngBTCU', countryCode);
        setLocale(countryCode);
        this.setMomentLocale(countryCode);
    };

    render() {
        const {
            locale,
        } = this.props;
        let nameLocale = '';
        let flagLocale = '';
        let nextLang = '';

        if (locale === 'ru') {
            nameLocale = 'Русский';
            flagLocale = RUCON;
            nextLang = 'en';
        }

        if (locale === 'en') {
            nameLocale = 'English';
            flagLocale = USICON;
            nextLang = 'cn';
        }

        if (locale === 'cn') {
            nameLocale = '中文';
            flagLocale = CNICON;
            nextLang = 'ru';
        }

        return (
            <div
                className={style.container}
                id="selectLangeage"
                onClick={() => this.onSelectLang(nextLang)}
            >
                <img className={style.container__flagIcon} src={flagLocale} alt="flag" />
                <p className={style.container__lang}>{nameLocale}</p>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {
        currentLocale: { locale },
    } = state;

    return {
        locale,
    };
};

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        setLocale: value => getCurrentLocaleActions.getCurrentLocale(value),
    },
    dispatch,
);

SelectLangeage.defaultProps = {
    setLocale: () => {},
    locale: '',
};

SelectLangeage.propTypes = {
    setLocale: PropTypes.func,
    locale: PropTypes.string,
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
)(SelectLangeage);
