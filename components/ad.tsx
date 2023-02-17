import React from 'react';

type AdProps = {
    height: 'sm' | 'md' | 'lg';
};

export function Ad(props: AdProps) {
    const { height } = props;

    let aspectRatio = '';
    switch (height) {
        case 'sm':
        aspectRatio = '4/1';
        break;
    case 'md':
        aspectRatio = '1/1';
        break;
    case 'lg':
        aspectRatio = '1/2';
        break;
    default:
        break;
    }

    const style = {
        marginBlock: '1em',
        inlineSize: '100%',
        objectFit: 'cover',
        aspectRatio: `${aspectRatio}`,
        backgroundColor: 'lightgrey',
    };

    return <div style={style}></div>;
}