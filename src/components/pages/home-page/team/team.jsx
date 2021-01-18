/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable react/no-danger */
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import mykolaUdianskyi from '../../../assets/images/team/Mykola_Udianskyi.jpg';
import ericMa from '../../../assets/images/team/eric_Ma.jpg';
import bogdanPrilepa from '../../../assets/images/team/bogdan_prilepa.jpg';
import andriiSaranenko from '../../../assets/images/team/andrii_saranenko.jpg';
import julietSu from '../../../assets/images/team/juliet_Su.jpg';
import dinisGuarda from '../../../assets/images/team/dinis_Guarda.jpg';
import vadimYarmak from '../../../assets/images/team/vadim_Yarmak.jpg';
import linkedInIcon from '../../../assets/images/icons/linkedIn-icon.svg';
import facebookIcon from '../../../assets/images/icons/facebook-icon.svg';
import moreIcon from '../../../assets/images/icons/more-icon.svg';
import hideIcon from '../../../assets/images/icons/hide-icon.svg';
import style from '../ambassadors/ambassadors.module.scss';

const Team = () => {
    const { t } = useTranslation();
    const [activeSeeMore, setSeeMore] = useState('');

    const expand = name => {
        setSeeMore(name);
    };

    const collapse = () => {
        setSeeMore('');
    };

    const data = [
        {
            name: 'Eric Ma',
            img: ericMa,
            linkedIn: 'https://www.linkedin.com/in/ericmacmc',
            facebook: '',
            description: t('ambassadors.ericMa'),
            position: 'Chief Executive Officer',
        },
        {
            name: 'Nikolai Udianskiy',
            img: mykolaUdianskyi,
            linkedIn: '',
            facebook: 'https://www.facebook.com/nikolay.aleksandrovich.311',
            description: t('team.mykolaUdianskyi'),
            position: 'Co-founder',
        },
        {
            name: 'Bohdan Prilepa',
            img: bogdanPrilepa,
            linkedIn: 'https://www.linkedin.com/in/prilepab/',
            facebook: '',
            description: t('team.bogdanPrilepa'),
            position: 'Chief Operating Officer',
        },
        {
            name: 'Dinis Guarda',
            img: dinisGuarda,
            linkedIn: 'https://www.linkedin.com/in/dinisguarda/',
            facebook: '',
            description: t('team.dinisGuarda'),
            position: 'Strategic Development Officer',
        },
        {
            name: 'Juliet  Su',
            img: julietSu,
            linkedIn: 'https://www.linkedin.com/in/juliet-su-苏丽-438b3725',
            facebook: '',
            description: t('team.julietSu'),
            position: 'Business Development Officer',
        },
        {
            name: 'Andriy Saranenko',
            img: andriiSaranenko,
            linkedIn: 'https://www.linkedin.com/in/andriy-s-a1ba9912a/',
            facebook: '',
            description: t('team.andriiSaranenko'),
            position: 'Chief Technology Officer',
        },
        {
            name: 'Vadim Yarmak',
            img: vadimYarmak,
            linkedIn: 'https://www.linkedin.com/in/vadim-yarmak-5a0492117/',
            facebook: '',
            description: t('team.vadimYarmak'),
            position: 'Chief Marketing Officer',
        },
    ];

    return (
        <div className={style.ambassadors} id="team" style={{ background: '#fff' }}>
            <div className={style.ambassadors__wrapper}>
                <h2 className={style.ambassadors__title}>{t('headings.team')}</h2>
                <div className={style.ambassadors__rightSide}>
                    <p className={style.ambassadors__rightSide_title}>
                        BTCU <span>{t('headings.team')}</span>
                    </p>
                    <div className={style.ambassadors__content}>
                        {data.map(item => {
                            const {
                                name,
                                img,
                                linkedIn,
                                facebook,
                                description,
                                position,
                            } = item;

                            const isActive = activeSeeMore === name;

                            const photoStyle = isActive
                                ? style.ambassadors__content_photoActive
                                : style.ambassadors__content_photo;

                            const descriptionWrStyle = isActive
                                ? style.ambassadors__content_descriptionWrWhite
                                : '';

                            let itemstyle = style.ambassadors__content_item;

                            if (activeSeeMore && !isActive && window.innerWidth > 499) {
                                itemstyle = classNames(
                                    style.ambassadors__content_item,
                                    style.ambassadors__content_itemBlur,
                                );
                            }

                            let descroptionStyle = style.ambassadors__content_descriptionActive;
                            let descriptionText = description;

                            if (description.length > 170 && !isActive) {
                                descroptionStyle = style.ambassadors__content_descriptionWhite;
                            }

                            if (description.length > 170) {
                                descriptionText = `${description.slice(0, 170)}...`;
                            }

                            if (isActive) {
                                descriptionText = description;
                            }

                            const socials = (
                                <div className={style.ambassadors__socials}>
                                    {linkedIn ? (
                                        <a
                                            href={linkedIn}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={
                                                style.ambassadors__socials_linkedIn
                                            }
                                        >
                                            <img src={linkedInIcon} alt="linkedIn" />
                                        </a>
                                    ) : null}

                                    {facebook ? (
                                        <a
                                            href={facebook}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={
                                                style.ambassadors__socials_facebook
                                            }
                                        >
                                            <img src={facebookIcon} alt="facebook" />
                                        </a>
                                    ) : null}
                                </div>
                            );

                            const seemore = (
                                <div style={{ cursor: 'pointer' }}>
                                    {isActive ? (
                                        <div className={style.seeMore} onClick={collapse}>
                                            <p>{t('buttons.hide')}</p>
                                            <img src={hideIcon} alt="hide" />
                                        </div>
                                    ) : (
                                        <div
                                            className={style.seeMore}
                                            onClick={() => expand(name)}
                                        >
                                            <p>{t('buttons.seeMore')}</p>
                                            <img src={moreIcon} alt="More" />
                                        </div>
                                    )}
                                </div>
                            );

                            return (
                                <div
                                    key={name}
                                    className={itemstyle}
                                    tabIndex="0"
                                    onBlur={collapse}
                                >
                                    <div>
                                        <img src={img} alt="logo" className={photoStyle} />
                                        <p className={style.ambassadors__content_position}>
                                            {position}
                                        </p>
                                    </div>
                                    <p className={style.ambassadors__content_name}>
                                        {name}
                                    </p>
                                    {socials}
                                    <div className={style.ambassadors__content_container}>
                                        <div className={descriptionWrStyle}>
                                            <p
                                                className={descroptionStyle}
                                                dangerouslySetInnerHTML={{
                                                    __html: descriptionText,
                                                }}
                                            />
                                            {description.length > 170 ? seemore : null}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;
