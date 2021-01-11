import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import SelectLangeage from '../../language';
import logo from '../../assets/images/logos/btcu.svg';
import style from './header.module.scss';

const Header = () => {
    const { t } = useTranslation();

    const links = [
        {
            id: '1',
            name: t('headings.aboutUsSubheading'),
            path: '#aboutUs',
        },
        {
            id: '2',
            name: t('headings.advantages'),
            path: '#advantages',
        },
        {
            id: '3',
            name: t('headings.partners'),
            path: '#partners',
        },
    ];

    return (
        <header className={style.header}>
            <div className={style.header__leftSide}>
                <div className={style.header__logo}>
                    <Link to="/">
                        <img className={style.header__logo_img} src={logo} alt="logo" />
                    </Link>
                </div>
                <div className={style.header__linksWrapper}>
                    <ul className={style.header__links}>
                        {links.map(item => {
                            const {
                                name, path, id,
                            } = item;

                            return (
                                <li key={id} className={style.header__links_item}>
                                    <AnchorLink href={path}>{name}</AnchorLink>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
            <div className={style.header__rightSide}>
                <SelectLangeage />
            </div>
        </header>
    );
};

export default Header;
