
import ClassPrototype from '../com/ClassPrototype';
/*import Arrow from './com/Arrow';*/
import For from '../com/For';
import Jq from '../com/Jq';
import Ps from '../com/Ps';
import Pd from '../com/Pd';
import Pdd from '../com/Pdd';
import St from '../com/St';
import Set from '../com/Set';
import Force from '../com/Force';//강제렌더링
import Cclass from '../com/Cclass';
import Fcom from '../com/Fcom';
import Hook from '../com/Hook';
import Frag from '../com/Frag';
import ReturnMap from '../com/ReturnMap';
import Reactstrap from '../com/Reactstrap';
import Sweetalert2 from '../com/Sweetalert2';
import Swposition from '../com/Swposition';
import Confirm from '../com/Confirm';
import Async from '../com/Async';
import Ax from '../com/Ax';
import Promise from '../com/Promise';
import 'bootstrap/dist/css/bootstrap.css'

function Basic() {
  return (
    <div className="App">
    <Promise/>
    <Ax/>
    <Async/>
    <ClassPrototype/>
    <For/>
    <Jq/>
    <Ps props_val="this is Props"/>
    <Pd
    String="react"
    Number={925}
    Boolean={1==2}
    Array={[0,1,8]}
    ObjectJson={{react:"리액트", twohundred:"200"}}
    Function={console.log("FunctionProps:function!")}
    />
    <Pdd/>
    <St reactString={"현재시각은 ? :"}/>
    <Set/>
    <br/>
    <hr/>
    <Force/>
    <Cclass/>
    <Fcom contents="[THIS IS Function Component]"/>
    <Hook/>
    <Frag/>
    <ReturnMap/>
    <Reactstrap/>
    <Sweetalert2/>
    <Swposition/>
    <Confirm/>
    </div>
  );
}

export default Basic;
