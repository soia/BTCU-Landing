import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { HashLink } from 'react-router-hash-link';
import MobileMenu from './mobile-menu';
import { compose } from '../../../utils';
import SelectLangeage from '../../language';
import { walletPath, storePath, explorerPath } from '../../../constants';
import logo from '../../assets/images/logos/btcu.svg';
import style from './header.module.scss';

const Header = () => {
    const { t } = useTranslation();

    const links = [
        {
            id: '1',
            name: t('headings.aboutUsSubheading'),
            path: '/#aboutUs',
            link: false,
        },
        {
            id: '2',
            name: t('headings.advantages'),
            path: '/#advantages',
            link: false,
        },
        {
            id: '3',
            name: t('headings.partners'),
            path: '/#partners',
            link: false,
        },
        {
            id: '4',
            name: t('headings.wallet'),
            path: walletPath,
            link: true,
        },
        {
            id: '5',
            name: t('headings.store'),
            path: storePath,
            link: true,
        },
        {
            id: '6',
            name: t('headings.explorer'),
            path: explorerPath,
            link: true,
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
                                name, path, id, link,
                            } = item;

                            return (
                                <li key={id} className={style.header__links_item}>
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
            <div className={style.header__rightSide}>
                <SelectLangeage />
            </div>
            <MobileMenu links={links} />
        </header>
    );
};

export default compose(withRouter)(Header);
