/* eslint-disable react/no-danger */
import React, { Component, Fragment } from 'react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { compose } from '../../../utils';
import notification from '../../../helpers/notifications';
import Facebook from '../../assets/images/icons/facebook';
import Instagram from '../../assets/images/icons/instagram';
import Telegram from '../../assets/images/icons/telegram';
import Twitter from '../../assets/images/icons/twitter';
import background from './images/firstScreenBg.svg';
import mainPic from './images/mainPic.png';
import mainPicMobile from './images/mainPicMobile.png';
import style from './explorer-page.module.scss';

class ExplorerPage extends Component {
    static defaultProps = {
        t: () => {},
    };

    static propTypes = {
        t: PropTypes.func,
    };

    state = {
        email: '',
    };

    send = event => {
        event.preventDefault();
        const { t } = this.props;

        notification('', t('successNotification'), 'success');
        this.setState({
            email: '',
        });

        const form = new FormData();
        form.append('email', this.address);

        fetch('https://btcu.cc/email.php', {
            method: 'post',
            body: form,
        })
            .then(res => res.json())
            .then(() => {})
            .catch(error => {
                console.log(error);
            });
    };

    inputOnChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    };

    render() {
        const { email } = this.state;
        const { t } = this.props;

        const btnStyle = {
            opacity: '0.5',
            userSelect: 'none',
            pointerEvents: 'none',
        };

        const socialData = [
            {
                img: <Facebook />,
                link: 'https://www.facebook.com/bitcoinultimatum/',
            },
            {
                img: <Instagram />,
                link: 'https://www.instagram.com/btcu.io/?igshid=iuv430l5fxu9',
            },
            {
                img: <Twitter />,
                link: 'https://twitter.com/btcu_io',
            },
            {
                img: <Telegram />,
                link: 'https://t.me/BitcoinUltimatum',
            },
        ];

        return (
            <Fragment>
                <div className={style.firstScreen}>
                    <img
                        className={style.firstScreen__backgroundImg}
                        src={background}
                        alt="background"
                    />
                    <h1
                        className={style.firstScreen__title}
                        dangerouslySetInnerHTML={{ __html: t('headings.BTCUExplorer') }}
                    />
                    <h3 className={style.firstScreen__subTitle}>
                        {t('texts.explorerConstruction')}
                    </h3>
                    <div className={style.firstScreen__bottom}>
                        <p className={style.firstScreen__bottom_title}>
                            {t('actions.subscribeText')}
                        </p>
                        <form className={style.firstScreen__form} onSubmit={this.send}>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={this.inputOnChange}
                                placeholder={t('forms.enterYourEmail')}
                                className={style.firstScreen__form_input}
                            />
                            <button
                                style={!email.length ? btnStyle : {}}
                                type="submit"
                                className={style.firstScreen__form_button}
                                disabled={!email.length}
                            >
                                {t('buttons.send')}
                            </button>
                        </form>
                    </div>
                    <div className={style.socialIcons}>
                        {socialData.map(item => {
                            const { img, link } = item;

                            return (
                                <a
                                    key={link}
                                    className={style.socialIcons__link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={link}
                                >
                                    {img}
                                </a>
                            );
                        })}
                    </div>
                </div>
                <div className={style.container}>
                    <div className={style.container__wrapper}>
                        <h2 className={style.container__title}>{t('headings.explorer')}</h2>
                        <div className={style.container__rightSide}>
                            <p
                                className={style.container__rightSide_title}
                                dangerouslySetInnerHTML={{
                                    __html: t('headings.BTCUExplorer'),
                                }}
                            />
                            <div className={style.container__content}>
                                <p className={style.container__content_text}>
                                    {t('texts.BTCUExplorerText')}
                                </p>
                            </div>
                            <div className={style.mainPic}>
                                <img
                                    className={style.mainPic__img}
                                    src={mainPic}
                                    alt="mainPic"
                                />
                                <img
                                    className={style.mainPic__imgMobile}
                                    src={mainPicMobile}
                                    alt="mainPic"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default compose(withTranslation())(ExplorerPage);
