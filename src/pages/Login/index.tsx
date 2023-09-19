import { Card } from 'antd'
import logo from '@/assets/react.svg'

const Login = () => {
  return (
    <div className="login">
      <Card className='login-containter'>
        <img className='login-logo' src={logo} alt="" />
      </Card>
    </div>
  )
}
export default Login