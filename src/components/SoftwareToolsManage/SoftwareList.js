import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";

class SoftwareList extends Component{

    constructor(props){
        super(props);

        this.state = {//초기값
            responseSwtoolList:'',
            append_SwtoolList:'',
        }
    }

    componentDidMount(){
        this.callSwToolListApi()
    }

    callSwToolListApi = async () => {

        //SW Tool List 호출
        axios.post('/api/Swtool?type=list',{

        }).then(response => {
            try{
                this.setState({responseSwtoolList:response});
                this.setState({append_SwtoolList:this.SwToolListAppend()})
            } catch (error) {
                alert('작업중 오류가 발생하였습니다')
            }
        })
        .catch(error => {alert('작업중 오류가 발생하였습니다');return false;});
    }

    //sw tool 리스트 append
    SwToolListAppend = () => {
        let result = []
        let SwToolList = this.state.responseSwtoolList.data

        for(let i=0; i < SwToolList.json.length; i++){
            let data = SwToolList.json[i]

            let date = data.reg_date
            let year = date.substr(0,4)
            let month = date.substr(4,2)
            let day = date.substr(6,2)
            let reg_date = year + '.' + month + '.' + day

            result.push(
                <tr className='hidden_type'>
                    <td>{data.swt_toolname}</td>
                    <td>{data.swt_function}</td>
                    <td>{reg_date}</td>
                    <td>
                        <Link to={'/AdminSoftwareView/'+data.swt_code} className='bt_c1 bt_c2 w50_b'>
                            수정
                        </Link>
                        <a href="#" className='bt_c1 250_b' id={data.swt_code}>삭제</a>
                    </td>
                </tr>
            )
        }
        return result
    }
    render () {
        return(
        <>
        <section className='sub_wrap'>
            <article className='s_cnt mp_pro_li ct1 mp_pro_li_admin'>
                <div className='li_top'>
                    <h2 className='s_tit1'>
                        Software Tools 목록
                    </h2>
                    <div className='li_top_sch af'>
                        <Link to={'/softwareview'} className='sch_bt2 wi_au'>
                            Tool 등록
                        </Link>
                    </div>
                </div>

                <div className='list_cont list_cont_admin'>
                    <table className='table_ty1 ad_tlist'>
                        <tr>
                            <th>툴 이름</th>
                            <th>기능</th>
                            <th>등록일</th>
                            <th>기능</th>
                        </tr>
                    </table>
                    <table className='table_ty2 ad_tlist'>
                        {this.state.append_SwtoolList}
                    </table>
                </div>
            </article>
        </section>
        </>
        );
    }
    
}
export default SoftwareList;