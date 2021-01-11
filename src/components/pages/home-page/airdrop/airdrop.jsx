import React from 'react';
import { useTranslation } from 'react-i18next';
import background from './images/background.svg';
import style from './airdrop.module.scss';

const Airdrop = () => {
    const { t } = useTranslation();

    return (
        <div className={style.airdrop} id="airdrop">
            <div className={style.airdrop__wrapper}>
                <h2 className={style.airdrop__title}>{t('headings.airdrop')}</h2>
                <div className={style.airdrop__rightSide}>
                    <p className={style.airdrop__rightSide_title}>
                        {t('headings.airdropText')} <span>{t('headings.distribution')}</span>
                    </p>
                    <div className={style.airdrop__content}>
                        <p className={style.airdrop__content_text}>
                            {t('texts.airdrop')}
                        </p>
                    </div>
                </div>
            </div>
            <img
                className={style.airdrop__background}
                src={background}
                alt="background"
            />
        </div>
    );
};

export default Airdrop;
