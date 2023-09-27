import React,{Component} from 'react';
import axios from 'axios'

class FloatingPopulationList extends Component{
    constructor(props){
        super(props);
        this.state = {
            responseFPList:'',
            append_FPList:'',
        }
    }
    componentDidMount(){
        this.callFloatPopulListApi()
    }
    callFloatPopulListApi = async () => {
        axios.get('https://api.bigdatahub.co.kr/v1/datahub/datasets/search.json?pid=1002277&'+
        'TDCAccessKey=f7c857088da5680d9cbbaf992adb71d391250f415151f4fcc7bd0801bb0d7fa4&$count=30',{            
        })
        .then(response => {
            try{
                this.setState({responseFPList:response});
                this.setState({append_FPList:this.FloatingPopulListAppend()});
            }catch(error){
                alert(error)
            }            
        })
        .catch(error => {alert(error);return false;});
    }
    FloatingPopulListAppend = () => {
        let result = []
        let FPList = this.state.responseFPList.data
        let jsonString = JSON.stringify(FPList)
        jsonString = jsonString.replace(/\(1시간단위\)/g, '')
        jsonString = jsonString.replace(/\(10세단위\)/g, '')
        let json = JSON.parse(jsonString) 
    }


    render() {
        return(
            <>
            <section className='sub_wrap'>
                <article className='s_cnt mp_pro_li ct1 mp_pro_li_admin'>
                    <div className='li_top'>
                        <h2 className='s_tit1'>
                            서울시 유동 인구데이터
                        </h2>
                    </div>
                    <div className='list_cont list_cont_admin'>
                        <table className='table_ty1 fp_tlist'>
                            <tr>
                                <th>Row</th>
                                <th>일자</th>
                                <th>시간</th>
                                <th>연령대</th>
                                <th>성별</th>
                                <th>시</th>
                                <th>군구</th>
                                <th>유동인구수</th>
                            </tr>
                        </table>
                        <table className='table_ty2 fp_tlist'>
                            <tr className='hidden_type'>
                                <th>1</th>
                                <th>20230913</th>
                                <th>00</th>
                                <th>40</th>
                                <th>여성</th>
                                <th>서울</th>
                                <th>영등포구</th>
                                <th>32670</th>
                            </tr>
                            <tr className='hidden_type'>
                                <th>1</th>
                                <th>20230913</th>
                                <th>00</th>
                                <th>50</th>
                                <th>남성</th>
                                <th>서울</th>
                                <th>구로구</th>
                                <th>27888</th>
                            </tr>
                        </table>
                    </div>
                </article>
            </section>
            </>
        )
    }
}
export default FloatingPopulationList;