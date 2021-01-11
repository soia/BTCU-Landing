import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import notification from '../../../../helpers/notifications';
import { compose } from '../../../../utils';
import style from './subscribe.module.scss';

class Subscribe extends Component {
    static defaultProps = {
        t: () => {},
    };

    static propTypes = {
        t: PropTypes.func,
    };

    state = {
        email: '',
    };

    send = event => {
        event.preventDefault();
        const { t } = this.props;

        notification('', t('successNotification'), 'success');
        this.setState({
            email: '',
        });

        const form = new FormData();
        form.append('email', this.address);

        fetch('https://btcu.cc/email.php', {
            method: 'post',
            body: form,
        })
            .then(res => res.json())
            .then(() => {

            })
            .catch(error => {
                console.log(error);
            });
    };

    inputOnChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    };

    render() {
        const { email } = this.state;
        const { t } = this.props;

        const btnStyle = {
            opacity: '0.5',
            userSelect: 'none',
            pointerEvents: 'none',
        };

        return (
            <div className={style.subscribe}>
                <h2 className={style.subscribe__title}>{t('headings.subscribe')}</h2>
                <form className={style.subscribe__rightSide} onSubmit={this.send}>
                    <p className={style.subscribe__rightSide_title}>
                        {t('headings.stayTuned')} <span>{t('headings.tuned')}</span>
                    </p>
                    <div className={style.subscribe__bottom}>
                        <p className={style.subscribe__bottom_text}>
                            {t('texts.subscribeToNewsletter')}
                        </p>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={this.inputOnChange}
                            placeholder={t('forms.enterYourEmail')}
                            className={style.subscribe__bottom_input}
                        />
                        <button
                            style={!email.length ? btnStyle : {}}
                            type="submit"
                            className={style.subscribe__bottom_button}
                            disabled={!email.length}
                        >
                            {t('buttons.send')}
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default compose(withTranslation())(Subscribe);
