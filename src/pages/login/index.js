import { Button, Input } from "antd";
import imgLogo from './logo.png'
import './login.styl'
import { useNavigate } from "react-router-dom";

function Login() {
    // 创建路由钩子
    const navigate = useNavigate()

    // block 属性将按钮设置为宽度 100%，以填充其父容器的整个可用空间。
    return (
        <div className="P-login">
            <img src={imgLogo} alt="" className="logo"/>
            <div className="ipt-con">
                <Input placeholder="账号"></Input>
            </div>
            <div className="ipt-con">
                <Input.Password placeholder="密码"></Input.Password>
            </div>
            <div className="ipt-con">
            <Button type="primary" block={true} onClick={()=>{navigate('/home')}}>
                登录
            </Button>
            </div>
        </div>
    )
}
export default Login
