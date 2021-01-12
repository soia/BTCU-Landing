import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { HashLink } from 'react-router-hash-link';
import logo from '../../assets/images/logos/btcu.svg';
import companyIcon from '../../assets/images/icons/company-icon.svg';
import locationIcon from '../../assets/images/icons/location-icon.svg';
import contactIcon from '../../assets/images/icons/contact-icon.svg';
import foundationIcon from '../../assets/images/icons/foundation.svg';
import style from './footer.module.scss';

const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className={style.footer} id="footer">
            <div className={style.footer__top}>
                <Link to="/" className={style.footer__logo}>
                    <img className={style.footer__logo_img} src={logo} alt="logo" />
                </Link>
                <div className={style.linksWrapper}>
                    <ul className={style.list}>
                        <li className={style.list__title}>
                            <img src={companyIcon} alt="companyIcon" />
                            {t('headings.company')}
                        </li>
                        <li className={style.list__link}>
                            <HashLink to="/#aboutUs">{t('navigation.aboutUs')}</HashLink>
                        </li>
                        <li className={style.list__link}>
                            <HashLink to="/#advantages">{t('navigation.advantages')}</HashLink>
                        </li>
                        <li className={style.list__link}>
                            <HashLink to="/#airdrop">{t('navigation.airdrop')}</HashLink>
                        </li>
                        <li className={style.list__link}>
                            <HashLink to="/#partners">{t('navigation.partners')}</HashLink>
                        </li>
                    </ul>
                    <ul className={style.list}>
                        <li className={style.list__title}>
                            <img src={locationIcon} alt="location" />
                            {t('headings.location')}
                        </li>
                        <li className={style.list__text}>Hong Kong, China</li>
                        <li className={style.list__text}>7/F MW Tower 111</li>
                        <li className={style.list__text}>Bonham Strand</li>
                        <li className={style.list__text}>Sheung Wan</li>
                    </ul>
                    <ul className={style.list}>
                        <li className={style.list__title}>
                            <img src={foundationIcon} alt="foundation" />
                            {t('headings.foundation')}
                        </li>
                        <li className={style.list__text}>Profit Foundation</li>
                        <li className={style.list__text}>LTD. 73 Upper Paya</li>
                        <li className={style.list__text}>Lebar Road #06-01C</li>
                        <li className={style.list__text}>Centro Bianco</li>
                        <li className={style.list__text}>Singapore (534818)</li>
                    </ul>
                    <ul className={style.list}>
                        <li className={style.list__title}>
                            <img src={contactIcon} alt="contact" />
                            {t('headings.contact')}
                        </li>
                        <li className={style.list__link}>
                            <a href="mailto:support@btcu.io">support@btcu.io</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={style.footer__bottom}>
                <p>{t('rights.limited')}</p>
                <p className={style.footer__bottom__right}>
                    {t('rights.reservedText')}
                </p>
            </div>
        </footer>
    );
};

export default Footer;
