import React from 'react';
import PropTypes from 'prop-types';

const Facebook = ({ className }) => (
    <svg
        className={className}
        width="8"
        height="13"
        viewBox="0 0 8 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.185181 7.69409V5.21393H1.27882V3.91025C1.27882 2.87154 1.56148 2.05278 2.12679 1.45393C2.69211 0.855083 3.46082 0.555664 4.43296 0.555664C5.62699 0.555664 6.63081 0.974321 7.44444 1.81165L5.8119 3.4015C5.6217 3.15772 5.38395 3.03583 5.09865 3.03583C4.66542 3.03583 4.44881 3.3167 4.44881 3.87845V5.21393H6.23985V7.69409H4.44881V12.6544H1.27882V7.69409H0.185181Z"
            fill="white"
        />
    </svg>
);

Facebook.defaultProps = {
    className: '',
};

Facebook.propTypes = {
    className: PropTypes.string,
};

export default Facebook;
