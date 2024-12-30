import React from 'react';

type SpPackIconProps = {
  className?: string;
};

const SpPackIcon: React.FC<SpPackIconProps> = (props) => {
    return (
        <svg className={props.className} viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M8.75 4.5A4.25 4.25 0 0 0 4.5 8.75v1.1H10a3.25 3.25 0 0 0 3.25-3.25V4.5zm0-1.5A5.75 5.75 0 0 0 3 8.75v6.5A5.75 5.75 0 0 0 8.75 21h6.5A5.75 5.75 0 0 0 21 15.25v-6.5A5.75 5.75 0 0 0 15.25 3zm6 1.5v2.1A4.75 4.75 0 0 1 10 11.35H4.5v3.9a4.25 4.25 0 0 0 4.25 4.25h.5v-2.1A4.75 4.75 0 0 1 14 12.65h5.5v-3.9a4.25 4.25 0 0 0-4.25-4.25zm4.75 9.65H14a3.25 3.25 0 0 0-3.25 3.25v2.1h4.5a4.25 4.25 0 0 0 4.25-4.25z" clipRule="evenodd"></path></svg>
    )
}

export default SpPackIcon;