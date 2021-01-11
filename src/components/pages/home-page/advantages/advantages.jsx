import React from 'react';
import { useTranslation } from 'react-i18next';
import style from './advantages.module.scss';

const Advantages = () => {
    const { t } = useTranslation();

    const data = [
        {
            id: '01',
            title: t('advantages.title1'),
            text: t('advantages.text1'),
        },
        {
            id: '02',
            title: t('advantages.title2'),
            text: t('advantages.text2'),
        },
        {
            id: '03',
            title: t('advantages.title3'),
            text: t('advantages.text3'),
        },
        {
            id: '04',
            title: t('advantages.title4'),
            text: t('advantages.text4'),
        },
        {
            id: '05',
            title: t('advantages.title5'),
            text: t('advantages.text5'),
        },
    ];

    return (
        <div className={style.advantages} id="advantages">
            <div className={style.advantages__wrapper}>
                <h2 className={style.advantages__title}>{t('headings.advantages')}</h2>
                <div className={style.advantages__rightSide}>
                    <p className={style.advantages__rightSide_title}>
                        {t('texts.mainAdvantage')} <span>BTCU</span>
                    </p>
                    <div className={style.advantages__content}>
                        {data.map(item => {
                            const { id, title, text } = item;

                            return (
                                <div key={id} className={style.advantages__content_item}>
                                    <div className={style.advantages__content_top}>
                                        <p className={style.advantages__content_title}>
                                            {title}
                                        </p>
                                        <p className={style.advantages__content_number}>
                                            {id}
                                        </p>
                                    </div>
                                    <p className={style.advantages__content_text}>
                                        {text}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Advantages;
