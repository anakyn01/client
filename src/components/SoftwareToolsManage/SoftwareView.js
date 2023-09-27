import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";
import $ from 'jquery';
import Swal from 'sweetalert2';

class SoftwareView extends Component {
    /*constructor(props){
        super(props);
        this.state = {
            before_swtcode:props.match.params.swt_code,
            selectedFile:null,
        }
    }
    componentDidMount () {
        if(this.state.before_swtcode == 'register'){
            $('.modifyclass').hide()
        }else{
            this.callSwToolInfoApi()
            $('.saveclass').hide()
        }
    }*/
    callSwToolInfoApi = async () => {
        axios.post('./api/Swtool?type=list',{
            is_Swtcode:this.state.before_swtcode,
        })
        .then(response => {
            try{
                let data = response.data.json[0]
                $('#is_Swt_toolname').val(data.swt_toolname)
                $('#is_Swt_demo_site').val(data.swt_demo_site)
                $('#is_Giturl').val(data.swt_github_url)
                $('#is_Comments').val(data.swt_comments)
                $('#is_Swt_function').val(data.swt_function)
                let manualName = data.swt_manual_path.replace('/swmanual/','')
                let fileName = data.swt_big_imgpath.replace('/image/','')
                let fileName2 = data.swt_imgpath.replace('/image/','')
                $('#upload_img').prepend('<img id="uploadimg" src="'+data.swt_big_imgpath+'"/>')
                $('#upload_img2').prepend('<img id="uploadimg2" src="'+data.swt_big_imgpath+'"/>')
                $('#imagefile').val(fileName)
                $('#imagefile2').val(fileName2)
                $('#manualfile').val(manualName)

                if($('#uploadimg').attr('src').indexOf("null") > -1){
                    $('#uploadimg').hide()
                }
                if($('#uploadimg2').attr('src').indexOf("null") > -1){
                    $('#uploadimg2').hide()
                }
            }catch (error) {
                alert('작업중 오류가 발생하였습니다')
            }
        })
        .catch(error => {alert('작업중 오류가 발생하였습니다.');return false;});
    }

    submitClick = async (type, e) => {
        this.Swt_toolname_checker = $('#is_Swt_toolname').val();
        this.Swt_demo_site_checker = $('#is_Swt_demo_site').val();
        this.Giturl_checker = $('#is_Giturl').val();
        this.Comments_checker = $('#is_Comments').val();
        this.Swt_function_checker = $('#is_Swt_function').val();

        this.fnValidate = (e) => {
            
            if(this.Swt_toolname_checker === ''){
                $('#is_Swt_toolname').addClass('border_validate_err');
                alert('툴 이름을 다시 확인해 주세요')
                return false;
            }
            $('#is_Swt_toolname').removeClass('border_validate_err');


            if(this.Swt_demo_site_checker === ''){
                $('#is_Swt_demo_site').addClass('border_validate_err');
                alert('데모 url을 다시 확인해 주세요')
                return false;
            }
            $('#is_Swt_demo_site').removeClass('border_validate_err');

            if(this.Giturl_checker === ''){
                $('#is_Giturl').addClass('border_validate_err');
                alert('Github URL을 다시 확인해 주세요')
                return false;
            }
            $('#is_Giturl').removeClass('border_validate_err');

            if(this.Comments_checker === ''){
                $('#is_Comments').addClass('border_validate_err');
                alert('설명을 다시 확인해 주세요')
                return false;
            }
            $('#is_Comments').removeClass('border_validate_err');

            if(this.Swt_function_checker === ''){
                $('#is_Swt_function').addClass('border_validate_err');
                alert('상세기능을 다시 확인해 주세요')
                return false;
            }
            $('#is_Swt_function').removeClass('border_validate_err');
            return true;
        }

        if(this.fnValidate()){
            let jsonstr = $("form[name='frm']").serialize();
            //form안에 값들을 한번에 전송가능한 데이터로 만들수 있어서 많은 데이터를 보낼때 유용하다
            jsonstr = decodeURIComponent(jsonstr);
            let Json_form = JSON.stringify(jsonstr).replace(/\"/gi,'')
            Json_form = "{\"" + Json_form.replace(/\&/g, '\",\"').replace(/=/gi, '\":"')+"\"}";

            try{
                const response = await fetch('/api/Swtool?type='+type,{
                    method:'POST',
                    headers:{
                        'Content-Type':'application/json',
                    },
                    body:Json_form,
                });
                const body = await response.text();
                if(body == "succ"){
                    if(type='save'){
                        this.sweetalertSucc('Software Tools등록이 완료되었습니다', false)
                    }else if (type == "modify") {
                        this.sweetalertSucc('Software Tools수정이 완료되었습니다', false)
                    }
                    setTimeout(function(){
                        this.props.history.push('/softwarelist')
                    }.bind(this),1500
                    );
            }else{
                alert('작업중 오류가 발생 하였습니다')
            }
        }  catch (error){
            alert('작업중 오류가 발생 하였습니다')
        }
    }
};
    
sweetalertSucc = (title, showConfirmButton) => {
    Swal.fire({
        position:'bottom-end',
        icon:'success',
        title:title,
        showConfirmButton:showConfirmButton,
        timer:1000
    })
}
    
handleFileInput(type, e) {
    if(type=='file'){
        $('#imagefile').val(e.target.files[0].name)
    } else if (type == 'file2') {
        $('#imagefile2').val(e.target.files[0].name)
    } else if (type == 'manual') { 
    $('#manualfile').val(e.target.files[0].name)
    }
    this.setState({
        selectedFile : e.target.files[0],
    })
    setTimeout(function(){
        if(type == 'manual'){
            this.handlePostMenual()
        }
    }.bind(this),1
    );
}
handlePostMenual() {
    const formData = new FormData();
    formData.append('file',this.state.selectedFile);
    return axios.post("/api/upload?type=uploads/swmanual/", formData).then(res => {
        this.setState({menualName:res.data.filename})
        $('#is_MenualName').remove()
        $('#upload_menual').prepend('<input ud="is_MenualName" type="hidden"'+'name="is_MenualName" value="/swmanual/'+this.state.menualName+'"}/>')
    }).catch(error => {
        alert('작업중 오류가 발생되었습니다',error, 'error','닫기')
    })
}

handlePostImage(type){
    const formData = new FormData();
    formData.append('file', this.state.selectedFile);
    return axios.post("/api/upload?type=uploads/image/", formData).then(res => {
        if(type =='file'){
            this.setState({fileName : res.data.filename})
            $('#is_MainImg').remove()
            $('#uploadimg').remove()
            $('#upload_img').prepend('<img id="uploadimg" src="/image/'
            +this.state.fileName+'"/>')
            $('#upload_img').prepend('<input id="is_MainImg" type="hidden"'
            +'name="is_MainImg" value="/image/'+this.state.fileName+'"}/>')
        }else if(type =='file2'){
            this.setState({fileName2 : res.data.filename})
            $('#is_LabelImg').remove()
            $('#uploadimg2').remove()
            $('#upload_img2').prepend('<img id="uploadimg2" src="/image/'
            +this.state.fileName2+'"/>')
            $('#upload_img2').prepend('<input id="is_LabelImg" type="hidden"'
            +'name="is_LabelImg" value="/image/'+this.state.fileName2+'"}/>')
        }
    }).catch(error => {
        alert('작업중 오류가 발생하였습니다.')            
    })
}



    render () {
        return(
            <>
            <section className='sub_wrap'>
                <article className='s_cnt mp_pro_li ct1'>
                    <div className='li_top'>
                        <h2 className='s_tit1'>
                            Software Tools 등록 / 수정
                        </h2>
                    </div>

                    <div className='bo_w re1_wrap re1_wrap_writer'>
                        <form name="frm" id="frm" action="" onSubmit="" method="post">
                            <input id="is_Swtcode" type="hidden" name="is_Swtcode"/>
                            <input id="is_Email" type="hidden" name="is_Email" value="quest"/>
                            <input id="is_beforeSwtcode" 
                            type="hidden" 
                            name="is_beforeSwtcode" 
                            /*value={this.state.before_swtcode}*/
                            />
                            <article className='res_w'>
                                <p className='ment' style={{"text-align":"right"}}>
                                    <span className='red'>
                                        (*)
                                    </span>표시는 필수 입력사항입니다
                                </p>
                                <div className='tb_outline'>
                                    <table className='table_ty1'>
                                        
                                        <tr>
                                            <th>
                                                <label for="is_Swt_toolname">
                                                    툴 이름
                                                    <span className='red'>
                                                        (*)
                                                    </span>
                                                </label>
                                            </th>
                                            <td>
                                                <input type="text" name="is_Swt_toolname" id="is_Swt_toolname"/>
                                            </td>
                                        </tr>

                                        <tr>
                                            <th>
                                                <label for="is_Swt_demo_site">
                                                    데모 URL
                                                    <span className='red'>
                                                        (*)
                                                    </span>
                                                </label>
                                            </th>
                                            <td>
                                                <input type="text" name="is_Swt_demo_site" id="is_Swt_demo_site"/>
                                            </td>
                                        </tr>

                                        <tr>
                                            <th>
                                                <label for="is_Giturl">
                                                    Github URL
                                                    <span className='red'>
                                                        (*)
                                                    </span>
                                                </label>
                                            </th>
                                            <td>
                                                <input type="text" name="is_Giturl" id="is_Giturl"/>
                                            </td>
                                        </tr>

                                        <tr>
                                            <th>
                                                <label for="is_Comment">
                                                    설명
                                                    <span className='red'>
                                                        (*)
                                                    </span>
                                                </label>
                                            </th>
                                            <td>
                                                <textarea name="is_Comments" id="is_Comments"/>
                                            </td>
                                        </tr>

                                        <tr className='div_tb_tr fileb'>
                                            <th>매뉴얼 파일 #1</th>
                                            <td className='fileBox fileBox_w1'>    
                                                <label htmlfor="uploadBtn1" className='btn_file'>파일선택</label>
                                                <input type="text" 
                                                id="manualfile" 
                                                className='filename filename1' 
                                                placeholder='선택된 파일 없음'
                                                readOnly="readonly"
                                                />
                                                <input 
                                                type="file" 
                                                id="uploadBtn1" 
                                                className='uploadBtn uploadBtn1' 
                                                placeholder='선택된 파일 없음'
                                                onChange={e => this.handleFileInput('manual',e)}
                                                />
                                                <div id="upload_menual">
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <th>메인 이미지</th>
                                            <td className='fileBox fileBox1'>    
                                                <label htmlfor="imageSelect" className='btn_file'>파일선택</label>
                                                <input type="text" 
                                                id="imagefile" 
                                                className='filename filename1' 
                                                placeholder='선택된 파일 없음'
                                                readOnly="readonly"
                                                />
                                                <input 
                                                type="file" 
                                                id="imageSelect" 
                                                className='uploadBtn uploadBtn1' 
                                                placeholder='선택된 파일 없음'
                                                onChange={e => this.handleFileInput('file',e)}
                                                />
                                                <div id="upload_img">
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <th>라벨 이미지</th>
                                            <td className='fileBox fileBox2'>    
                                                <label htmlfor="imageSelect2" className='btn_file'>파일선택</label>
                                                <input type="text" 
                                                id="imagefile2" 
                                                className='filename filename1' 
                                                placeholder='선택된 파일 없음'
                                                readOnly="readonly"
                                                />
                                                <input 
                                                type="file" 
                                                id="imageSelect2" 
                                                className='uploadBtn uploadBtn1' 
                                                placeholder='선택된 파일 없음'
                                                onChange={e => this.handleFileInput('file2',e)}
                                                />
                                                <div id="upload_img2">
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <th>
                                                <label for="is_Swt_function">
                                                    상세기능 
                                                    <span className='red'>
                                                    (*)
                                                    </span>    
                                                </label>
                                            </th>
                                            <td>
                                                <textarea name="is_Swt_function" id="is_Swt_function"/>
                                            </td>
                                        </tr>
                                    </table>

                                    <div className='btn_confirm mt20' style={{"margin-bottom":"44px"}}>
                                        <Link to={'./softwarelist'} className='bt_ty bt_ty1 cancel_ty1'>
                                        취소
                                        </Link>
                                        <a href="javascript:" className='bt_ty bt_ty2 submit_ty1 saveclass'
                                        onClick={(e) => this.submitClick('save',e)}>저장</a>
                                        <a href="javascript:" className='bt_ty bt_ty2 submit_ty1 modifyclass'
                                        onClick={(e) => this.submitClick('modify',e)}>수정</a>
                                    </div>
                                </div>
                            </article>
                        </form>
                    </div>
                </article>
            </section>
            </>
        )
    }
}
export default SoftwareView;