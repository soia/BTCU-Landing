import React from 'react';
import { useTranslation } from 'react-i18next';
import coinsbitIcon from '../../../assets/images/logos/coinsbit.svg';
import profItIcon from '../../../assets/images/logos/prof-it.svg';
import pmIcon from '../../../assets/images/logos/pm.svg';
import openBusiness from '../../../assets/images/logos/openBusiness.svg';
import intelligent from '../../../assets/images/logos/intelligent.svg';
import citiesabc from '../../../assets/images/logos/citiesabc.svg';
import fashionabc from '../../../assets/images/logos/fashionabc.svg';
import investorMedia from '../../../assets/images/logos/investorMedia.svg';
import hedgethink from '../../../assets/images/logos/hedgethink.svg';
import tradersdna from '../../../assets/images/logos/tradersdna.svg';
import unic from '../../../assets/images/logos/unic.png';
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
            link: 'https://www.unic.ac.cy/iff/dlrc/',
            img: unic,
        },
        {
            link: 'https://prmr.com/',
            img: pmIcon,
        },
        {
            link: 'https://www.openbusinesscouncil.org',
            img: openBusiness,
        },
        {
            link: 'https://www.intelligenthq.com',
            img: intelligent,
        },
        {
            link: 'https://www.citiesabc.com',
            img: citiesabc,
        },
        {
            link: 'https://www.fashionabc.org ',
            img: fashionabc,
        },
        {
            link: 'https://www.tradersdna.com',
            img: tradersdna,
        },
        {
            link: 'https://www.hedgethink.com',
            img: hedgethink,
        },
        {
            link: 'https://www.investor-media.com/',
            img: investorMedia,
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
