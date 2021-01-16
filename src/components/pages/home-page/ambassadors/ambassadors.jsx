/* eslint-disable react/no-danger */
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import OutsideClickHandler from 'react-outside-click-handler';
import konstantinVaksin from '../../../assets/images/team/Konstantin_Vaksin.jpg';
import ivanIvanov from '../../../assets/images/team/Ivan_Ivanov.jpg';
import sergeyBelets from '../../../assets/images/team/Sergey_Belets.jpg';
import ericAlexandre from '../../../assets/images/team/Eric_Alexandre.jpg';
import luizaAve from '../../../assets/images/team/Luiza_Ave.jpg';
import nikolayShkilev from '../../../assets/images/team/Nikolay_Shkilev.jpg';
import andreiKurkin from '../../../assets/images/team/Andrei_Kurkin.jpg';
import julietSu from '../../../assets/images/team/juliet_Su.jpg';
import ericMa from '../../../assets/images/team/eric_Ma.jpg';
import dinisGuarda from '../../../assets/images/team/dinis_Guarda.jpg';
import linkedInIcon from '../../../assets/images/icons/linkedIn-icon.svg';
import facebookIcon from '../../../assets/images/icons/facebook-icon.svg';
import moreIcon from '../../../assets/images/icons/more-icon.svg';
import hideIcon from '../../../assets/images/icons/hide-icon.svg';
import style from './ambassadors.module.scss';

const Ambassadors = () => {
    const { t } = useTranslation();
    const [activeSeeMore, setSeeMore] = useState('');

    const openDescription = value => {
        setSeeMore(value);
    };

    const closeBlur = () => {
        setSeeMore('');
    };

    const data = [
        {
            name: 'Nikolay Shkilev',
            img: nikolayShkilev,
            linkedIn: 'https://ru.linkedin.com/in/vipmentor',
            facebook: '',
            description: t('ambassadors.nikolayShkilev'),
        },
        {
            name: 'Ivan Ivanov',
            img: ivanIvanov,
            linkedIn: 'https://hk.linkedin.com/in/ivanvalerevich',
            facebook: '',
            description: t('ambassadors.ivanIvanov'),
        },
        {
            name: 'Dinis Guarda',
            img: dinisGuarda,
            linkedIn: 'https://www.linkedin.com/in/dinisguarda/',
            facebook: '',
            description: t('ambassadors.dinisGuarda'),
        },
        {
            name: 'Eric Alexandre',
            img: ericAlexandre,
            linkedIn: 'https://sg.linkedin.com/in/eric-alexandre-2184315',
            facebook: '',
            description: t('ambassadors.ericAlexandre'),
        },
        {
            name: 'Konstantin Vaksin',
            img: konstantinVaksin,
            linkedIn:
                'https://www.linkedin.com/in/konstantin-vaksin-57ba2b3/?originalSubdomain=be',
            facebook: '',
            description: t('ambassadors.konstantinVaksin'),
        },
        {
            name: 'Sergey Belets',
            img: sergeyBelets,
            linkedIn: 'https://ru.linkedin.com/in/sergey-belets-181b4a46',
            facebook: '',
            description: t('ambassadors.sergeyBelets'),
        },
        {
            name: 'Luiza Ave',
            img: luizaAve,
            linkedIn: '',
            facebook: 'https://www.facebook.com/louisa.avye',
            description: t('ambassadors.luizaAve'),
        },
        {
            name: 'Juliet  Su',
            img: julietSu,
            linkedIn: 'https://www.linkedin.com/in/juliet-su-苏丽-438b3725',
            facebook: '',
            description: t('ambassadors.julietSu'),
        },
        {
            name: 'Eric Ma',
            img: ericMa,
            linkedIn: 'https://www.linkedin.com/in/ericmacmc',
            facebook: '',
            description: t('ambassadors.ericMa'),
        },
        {
            name: 'Andrei Kurkin',
            img: andreiKurkin,
            linkedIn: 'https://www.linkedin.com/in/andrei-kurkin-19856273',
            facebook: '',
            description: t('ambassadors.andreiKurkin'),
        },
    ];

    return (
        <div className={style.ambassadors} id="ambassadors">
            <div className={style.ambassadors__wrapper}>
                <h2 className={style.ambassadors__title}>
                    {t('headings.ambassadorsSubheading')}
                </h2>
                <div className={style.ambassadors__rightSide}>
                    <p className={style.ambassadors__rightSide_title}>
                        BTCU <span>{t('headings.ambassadorsSubheading')}</span>
                    </p>
                    <div className={style.ambassadors__content}>
                        {data.map(item => {
                            const {
                                name, img, linkedIn, facebook, description,
                            } = item;

                            const isActive = activeSeeMore === name;

                            const photoStyle = isActive
                                ? style.ambassadors__content_photoActive
                                : style.ambassadors__content_photo;

                            const descriptionWrStyle = isActive
                                ? style.ambassadors__content_descriptionWr
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
                                descroptionStyle = style.ambassadors__content_description;
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
                                        <div className={style.seeMoreHide}>
                                            <p>{t('buttons.hide')}</p>
                                            <img src={hideIcon} alt="hide" />
                                        </div>
                                    ) : (
                                        <div
                                            className={style.seeMore}
                                            onClick={() => openDescription(name)}
                                        >
                                            <p>{t('buttons.seeMore')}</p>
                                            <img src={moreIcon} alt="More" />
                                        </div>
                                    )}
                                </div>
                            );

                            return (
                                <div key={name} className={itemstyle}>
                                    <OutsideClickHandler onOutsideClick={closeBlur}>
                                        <img
                                            src={img}
                                            alt="logo"
                                            className={photoStyle}
                                        />
                                        <p className={style.ambassadors__content_name}>
                                            {name}
                                        </p>
                                        {socials}
                                        <div
                                            className={
                                                style.ambassadors__content_container
                                            }
                                        >
                                            <div className={descriptionWrStyle}>
                                                <p
                                                    className={descroptionStyle}
                                                    dangerouslySetInnerHTML={{
                                                        __html: descriptionText,
                                                    }}
                                                />
                                                {description.length > 170
                                                    ? seemore
                                                    : null}
                                            </div>
                                        </div>
                                    </OutsideClickHandler>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ambassadors;
