import React from 'react';
import { useTranslation } from 'react-i18next';
import konstantinVaksin from '../../../assets/images/team/Konstantin_Vaksin.jpg';
import ivanIvanov from '../../../assets/images/team/Ivan_Ivanov.jpg';
import sergeyBelets from '../../../assets/images/team/Sergey_Belets.jpg';
import ericAlexandre from '../../../assets/images/team/Eric_Alexandre.jpg';
import luizaAve from '../../../assets/images/team/Luiza_Ave.jpg';
import nikolayShkilev from '../../../assets/images/team/Nikolay_Shkilev.jpg';
import andreiKurkin from '../../../assets/images/team/Andrei_Kurkin.jpg';
import style from './ambassadors.module.scss';

const Ambassadors = () => {
    const { t } = useTranslation();

    const data = [
        {
            name: 'Konstantin Vaksin',
            img: konstantinVaksin,
        },
        {
            name: 'Ivan Ivanov',
            img: ivanIvanov,
        },
        {
            name: 'Sergey Belets',
            img: sergeyBelets,
        },
        {
            name: 'Eric Alexandre',
            img: ericAlexandre,
        },
        {
            name: 'Luiza Ave',
            img: luizaAve,
        },
        {
            name: 'Nikolay Shkilev',
            img: nikolayShkilev,
        },
        {
            name: 'Andrei Kurkin',
            img: andreiKurkin,
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
                            const { name, img } = item;

                            return (
                                <div
                                    key={name}
                                    className={style.ambassadors__content_item}
                                >
                                    <img src={img} alt="logo" />
                                    <p>{name}</p>
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
