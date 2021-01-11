import React from 'react';
import { useTranslation } from 'react-i18next';
import background from './images/background.svg';
import style from './about-us.module.scss';

const AboutUs = () => {
    const { t } = useTranslation();

    return (
        <div className={style.aboutUs}>
            <div className={style.aboutUs__wrapper}>
                <h2 className={style.aboutUs__title}>{t('headings.aboutUsSubheading')}</h2>
                <div className={style.aboutUs__rightSide}>
                    <p className={style.aboutUs__rightSide_title}>
                        {t('headings.aboutUsMain')} <span>{t('headings.blockchain')}</span>
                    </p>
                    <div className={style.aboutUs__content}>
                        <p className={style.aboutUs__content_text}>
                            {t('texts.aboutUs')}
                        </p>
                        <p className={style.aboutUs__content_text}>
                            {t('texts.aboutUs2')}
                        </p>
                    </div>
                </div>
            </div>
            <img
                className={style.aboutUs__background}
                src={background}
                alt="background"
            />
        </div>
    );
};

export default AboutUs;
