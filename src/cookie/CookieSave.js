/*
npm install cookies
npm install react-cookies

웹사이트가 사용자 정보를 저장하기 위해서 사용자의 
pc나 스마트폰 태블릿과 같은 디바이스에 저장하는 파일을
의미 합니다
*/
import React, {Component} from 'react';
import cookie from 'react-cookies';

class CookieSave extends Component{

    componentDidMount() {
        const expires = new Date()
        expires.setMinutes(expires.getMinutes() + 60)
        cookie.save('userid',"anakyn",{
            path:'/',
            expires,
        }
      );
    }

    render() {
        return(
            <>
            <h3 className='my-3'>react-cookies Save</h3>
            </>
        )
    }
}
export default CookieSave;