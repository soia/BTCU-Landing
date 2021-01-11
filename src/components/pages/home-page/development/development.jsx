import React from 'react';
import { useTranslation } from 'react-i18next';
import notification from '../../../../helpers/notifications';
import copyToClipboard from '../../../../helpers/copy-to-clipboard';
import copyIcon from '../../../assets/images/icons/copy-icon.svg';
import style from './development.module.scss';

const Development = () => {
    const { t } = useTranslation();

    const copied = address => {
        copyToClipboard(address);
        notification(t('successNotification'), t('сopiedToClipboard'), 'success');
    };

    const link = 'https://github.com/bitcoin-ultimatum/btcu';

    return (
        <div className={style.development}>
            <h2 className={style.development__title}>{t('headings.sourceCodeSub')}</h2>
            <div className={style.development__rightSide}>
                <p className={style.development__rightSide_title}>
                    {t('headings.sourceCode')} <span>{t('headings.code')}</span>
                </p>
                <div className={style.development__bottom}>
                    <a
                        className={style.development__bottom_link}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {link}
                    </a>
                    <div onClick={() => copied(link)}>
                        <img
                            className={style.development__bottom_copy}
                            src={copyIcon}
                            alt="copyIcon"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Development;
