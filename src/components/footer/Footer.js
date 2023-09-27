const Footer = () => {
    return(
<>
<footer className="footer">
    <ul>
        <li className="priv">
            <a href="#">개인정보처리방침</a>
        </li>
        <li className="em_bt">
            <a href="#">
                이메일주소무단수집거부
            </a>
        </li>        
    </ul>
    <div className="ft_p">
        <span>주소 : 서울시 특별시 노원구</span>
        <span>Tel : 02-458-0421</span>
    </div>
    <p>Copyright &copy; ALL RIGHTS RESERVED.{/*{this.props.name}*/}</p>
</footer>
</>
    )
}
export default Footer;