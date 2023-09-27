import React, {useState, useEffect} from 'react';

const Hook = () => {
const [contents, setContents] = useState('[this is react]');

useEffect(() => {
console.log('useEffect');
});   

return(
        <>
        <h2>{contents}</h2>
        <button onClick={() => setContents('[THIS IS HOOK]')}>
        버튼
        </button>
        </>
    )
}

export default Hook;