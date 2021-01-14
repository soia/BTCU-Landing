import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import konstantinVaksin from '../../../assets/images/team/Konstantin_Vaksin.jpg';
import ivanIvanov from '../../../assets/images/team/Ivan_Ivanov.jpg';
import sergeyBelets from '../../../assets/images/team/Sergey_Belets.jpg';
import ericAlexandre from '../../../assets/images/team/Eric_Alexandre.jpg';
import luizaAve from '../../../assets/images/team/Luiza_Ave.jpg';
import nikolayShkilev from '../../../assets/images/team/Nikolay_Shkilev.jpg';
import andreiKurkin from '../../../assets/images/team/Andrei_Kurkin.jpg';
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

    const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.';

    const data = [
        {
            name: 'Konstantin Vaksin',
            img: konstantinVaksin,
            linkedIn: '/',
            facebook: '/',
            description: text,
        },
        {
            name: 'Ivan Ivanov',
            img: ivanIvanov,
            linkedIn: '/',
            facebook: '/',
            description: text,
        },
        {
            name: 'Sergey Belets',
            img: sergeyBelets,
            linkedIn: '/',
            facebook: '/',
            description: text,
        },
        {
            name: 'Eric Alexandre',
            img: ericAlexandre,
            linkedIn: '/',
            facebook: '/',
            description: text,
        },
        {
            name: 'Luiza Ave',
            img: luizaAve,
            linkedIn: '/',
            facebook: '/',
            description: text,
        },
        {
            name: 'Nikolay Shkilev',
            img: nikolayShkilev,
            linkedIn: '/',
            facebook: '/',
            description: text,
        },
        {
            name: 'Andrei Kurkin',
            img: andreiKurkin,
            linkedIn: '/',
            facebook: '/',
            description: text,
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
                                <div
                                    className={style.seeMore}
                                    onClick={() => openDescription(isActive ? '' : name)}
                                >
                                    <p>
                                        {isActive
                                            ? t('buttons.hide')
                                            : t('buttons.seeMore')}
                                    </p>
                                    {isActive ? (
                                        <img src={hideIcon} alt="hide" />
                                    ) : (
                                        <img src={moreIcon} alt="More" />
                                    )}
                                </div>
                            );

                            return (
                                <div key={name} className={itemstyle}>
                                    <img src={img} alt="logo" className={photoStyle} />
                                    <p className={style.ambassadors__content_name}>
                                        {name}
                                    </p>
                                    {socials}
                                    <div className={style.ambassadors__content_container}>
                                        <div className={descriptionWrStyle}>
                                            <p className={descroptionStyle}>
                                                {descriptionText}
                                            </p>
                                            {seemore}
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

export default Ambassadors;
