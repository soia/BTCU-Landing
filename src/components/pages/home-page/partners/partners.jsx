import React from 'react';
import { useTranslation } from 'react-i18next';
import coinsbitIcon from '../../../assets/images/logos/coinsbit.svg';
import profItIcon from '../../../assets/images/logos/prof-it.svg';
import pmIcon from '../../../assets/images/logos/pm.svg';
import style from './partners.module.scss';

const Partners = () => {
    const { t } = useTranslation();

    const data = [
        {
            link: 'https://coinsbit.io/',
            img: coinsbitIcon,
        },
        {
            link: 'https://prof-it.bz/',
            img: profItIcon,
        },
        {
            link: 'https://prmr.com/',
            img: pmIcon,
        },
    ];

    return (
        <div className={style.partners} id="partners">
            <div className={style.partners__wrapper}>
                <h2 className={style.partners__title}>{t('headings.partners')}</h2>
                <div className={style.partners__rightSide}>
                    <p className={style.partners__rightSide_title}>
                        {t('texts.collaboration')}
                    </p>
                    <div className={style.partners__content}>
                        {data.map(item => {
                            const { link, img } = item;

                            return (
                                <a
                                    className={style.partners__content_link}
                                    key={link}
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img src={img} alt="logo" />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partners;
