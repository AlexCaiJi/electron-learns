import { Button } from "antd";
import './home.styl'
// import { useNavigate } from "react-router-dom";
import { goto } from "../../api";

function Home() {

    // 创建路由钩子
    // const navigate = useNavigate()
    return (
        <div className="P-home">
            <h1>Home Page</h1>
            <div className="ipt-con">
                   <Button onClick={()=>{goto('/login')}}>组件外跳转</Button>
          </div>
            <div className="ipt-con">
            <Button>返回登录</Button>
            </div>
        </div>
    )
}

export default Home