import React from 'react';
import { useTranslation } from 'react-i18next';
import style from './community.module.scss';


const Community = () => {
    const { t } = useTranslation();

    return (
        <div className={style.community}>
            <h2 className={style.community__title}>
                {t('headings.communitySubheading')}
            </h2>
            <div className={style.community__rightSide}>
                <p className={style.community__rightSide_title}>
                    {t('headings.community')} <span>{t('headings.member')}</span>
                </p>
                <div className={style.community__bottom}>
                    <p className={style.community__bottom_text}>
                        {t('texts.community')}
                    </p>
                    <a
                        href="https://t.me/BTCUgroup"
                        className={style.community__bottom_button}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {t('buttons.joinUs')}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Community;
