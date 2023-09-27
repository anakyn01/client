import React,{Component} from 'react';
import {Routes, Route} from "react-router-dom";
import LoginForm from './LoginForm'

//css
import '../css/new.scss';

//header
import Header from './header/Header';
import Debounce from './lodash/Debounce';
import Throttle from './lodash/Throttle';
import Float from './Floating_population/Float';
import SoftwareList from './SoftwareToolsManage/SoftwareList';
import Proxy from './Proxy';
import SoftwareView from './SoftwareToolsManage/SoftwareView';


class App extends Component{
    render(){
        return(
            <>  
            <Routes>
                <Route path="/" element={<Header/>}>
                    <Route index element={<LoginForm/>}/>
                    <Route path='/Debounce' element={<Debounce/>}/>
                    <Route path='/Throttle' element={<Throttle/>}/>
                    <Route path='/float' element={<Float/>}/>
                    <Route path='/proxy' element={<Proxy/>}/>
                    <Route path='/softwarelist' element={<SoftwareList/>}/>
                    <Route path='/softwareview' element={<SoftwareView/>}/>
                </Route>
            </Routes>
            </>
        )
    }
}

export default App;