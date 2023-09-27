import React from 'react';

function Fcom (props) {
    let {contents} = props;
    return(
        <h2>{contents}</h2>
    )
}

const Good = () => {
    return(
        <>
        <h1>얘가 제일 편해요</h1>
        </>
    )
}


export default Good;