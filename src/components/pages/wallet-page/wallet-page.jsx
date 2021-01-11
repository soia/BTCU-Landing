import React from 'react';
import { useTranslation } from 'react-i18next';
import background from './images/firstScreenBg.svg';
import Facebook from '../../assets/images/icons/facebook';
import Instagram from '../../assets/images/icons/instagram';
import Telegram from '../../assets/images/icons/telegram';
import Twitter from '../../assets/images/icons/twitter';
import style from './wallet-page.module.scss';


const WalletPage = () => {
    const { t } = useTranslation();

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
        <div className={style.firstScreen}>
            <h1 className={style.firstScreen__title}>
                BTC<span className="red">U</span>
                <br />
                Ultimatum
            </h1>
            <h3 className={style.firstScreen__subTitle}>
                {t('texts.btcuShort')}
            </h3>
            <img
                className={style.firstScreen__backgroundImg}
                src={background}
                alt="background"
            />
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
    );
};

export default WalletPage;
