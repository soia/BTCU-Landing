import React from 'react';
import { useTranslation } from 'react-i18next';
import entrepreneur from './images/entrepreneur.jpg';
import investingCom from './images/investing_com.jpg';
import forbes from './images/Forbes.jpg';
import coinspeak from './images/Coinspeak.jpg';
import CCNBTCU_S from './images/CCNBTCU_S.jpg';
import forclogBTCu from './images/ForclogBTCu.jpg';
import cointelegraphmain from './images/Cointelegraphmain.jpg';
import hackernoon from './images/Hackernoon.jpg';
import cointelegraphJP from './images/CointelegraphJP.jpg';
import flipboard from './images/Flipboard.jpg';
import AMDCRYPTO from './images/AMDCRYPTO.jpg';
import chainBTCU from './images/ChainBTCU.jpg';
import bitcoinGo from './images/BitcoinGo.jpg';
import cryptotendencia from './images/Cryptotendencia.jpg';
import bitCoinNews from './images/BitCoinNews.jpg';
import korea2 from './images/Korea2.jpg';
import letKnow from './images/LetKnow.jpg';
import korea1 from './images/Korea1.jpg';
import koinbolten from './images/Koinbolten.jpg';
import techworld from './images/Techworld.jpg';
import portodoBitcoin from './images/PortodoBitcoin.jpg';
import BTC123 from './images/BTC123.jpg';
import cryptorys from './images/Cryptorys.jpg';
import etopsaber from './images/etopsaber.jpg';
import cointelegrambtcu from './images/Cointelegrambtcu.jpg';
import webnow from './images/webnow.jpg';
import cryptobear from './images/Cryptobear.jpg';
import style from './media.module.scss';

const Media = () => {
    const { t } = useTranslation();

    const data = [
        {
            link: 'https://www.entrepreneur.com/article/347299',
            img: entrepreneur,
        },
        {
            link:
                'https://www.investing.com/analysis/bitcoin-ultimatum-is-coming-out-to-shake-crypto-industry-200509065',
            img: investingCom,
        },
        {
            link:
                'https://www.forbes.com/sites/lukefitzpatrick/2020/03/23/will-bitcoin-emerge-as-a-winner-5-things-to-expect/#69d11f2b1933',
            img: forbes,
        },
        {
            link: 'https://www.coinspeaker.com/btcu-fastest-complete-bitcoin/',
            img: coinspeak,
        },
        {
            link:
                'https://www.ccn.com/bitcoin-ultimatum-bitcoin-2-0-what-do-we-know-about-new-fork',
            img: CCNBTCU_S,
        },
        {
            link:
                'https://forklog.com/birzha-coinsbit-podderzhit-zapusk-novogo-forka-bitkoina/',
            img: forclogBTCu,
        },
        {
            link:
                'https://cointelegraph.com/press-releases/btc-ultimatum-a-new-fork-of-bitcoin',
            img: cointelegraphmain,
        },
        {
            link:
                'https://hackernoon.com/the-good-the-bad-and-the-ugly-aspects-of-video-games-xw5n3b20',
            img: hackernoon,
        },
        {
            link:
                'https://jp.cointelegraph.com/press-releases/bitcoin-ultimatum-bitcoin-20-what-do-we-know-about-new-fork',
            img: cointelegraphJP,
        },
        {
            link:
                'https://flipboard.com/article/bitcoin-ultimatum-is-coming-out-to-shake-crypto-industry/a-POjy07SxR72AI9wnX2ZS_g%3Aa%3A7780878-e480805eae%2Finvesting.com',
            img: flipboard,
        },
        {
            link:
                'https://ambcrypto.com/btc-ultimatum-a-new-fork-of-bitcoin-created-to-solve-old-problems/',
            img: AMDCRYPTO,
        },
        {
            link:
                'https://blogtienao.com/bitcoin-2-0-va-nhan-ngay-300-khi-dang-ky-mon-qua-ky-niem-lan-thu-hai-tu-coinsbit/',
            img: chainBTCU,
        },
        {
            link:
                'https://guiadobitcoin.com.br/noticias/bitcoum-ultimatum-cuidado-com-nova-fork-bitcoin/',
            img: bitcoinGo,
        },
        {
            link:
                'https://criptotendencia.com/2020/03/03/bitcoin-2-0-y-300-solo-por-registrarse-segundo-aniversario-de-coinsbit/',
            img: cryptotendencia,
        },
        {
            link:
                'https://bitcoinnews.ru/novosti/btc-ultimatum-novyy-fork-bitkoina-prizvannyy-re/',
            img: bitCoinNews,
        },
        {
            link: 'http://www.newsfreezone.co.kr/news/articleView.html?idxno=218500',
            img: korea2,
        },
        {
            link: 'https://letknow.news/th/news/36772.html',
            img: letKnow,
        },
        {
            link: 'http://www.kihoilbo.co.kr/news/articleView.html?idxno=853572',
            img: korea1,
        },
        {
            link:
                'https://koinbulteni.com/coinsbit-yeni-kullanicilara-300-dolar-para-odulu-68497.html',
            img: koinbolten,
        },
        {
            link: 'http://www.epnc.co.kr/news/articleView.html?idxno=94392',
            img: techworld,
        },
        {
            link:
                'https://portaldobitcoin.com/bitcoin-2-0-e-us-300-apenas-para-registro-presentes-de-segundo-aniversario-coinsbit',
            img: portodoBitcoin,
        },
        {
            link: 'https://www.btc123.com/news/43681',
            img: BTC123,
        },
        {
            link:
                'https://cryptopys.com/2020/02/18/btc-ultimatum-a-new-fork-of-bitcoin-created-to-solve-old-problems/',
            img: cryptorys,
        },
        {
            link:
                'https://etopsaber.com/proximo-fork-do-btc-promete-ser-mais-rapido-e-completo-que-o-bitcoin',
            img: etopsaber,
        },
        {
            link:
                'https://coinstelegram.com/2020/02/20/btc-ultimatum-a-new-fork-of-bitcoin-created-to-solve-old-problems/',
            img: cointelegrambtcu,
        },
        {
            link:
                'https://webnow.company/news/bitcoin-ultimatum-bitcoin-20-what-do-we-know-about-new-fork',
            img: webnow,
        },
        {
            link:
                'https://crypto-bear.com/platforma-coinsbit-obespechit-podderzhkoj-v-sozdanii-novejshego-forka-bitcoin/',
            img: cryptobear,
        },
    ];

    return (
        <div className={style.media} id="media">
            <div className={style.media__wrapper}>
                <h2 className={style.media__title}>{t('headings.media')}</h2>
                <div className={style.media__rightSide}>
                    <p className={style.media__rightSide_title}>
                        {t('headings.media')} <span>{t('headings.aboutUs')}</span>
                    </p>
                    <div className={style.media__content}>
                        {data.map(item => {
                            const { link, img } = item;

                            return (
                                <a
                                    className={style.media__content_link}
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

export default Media;
