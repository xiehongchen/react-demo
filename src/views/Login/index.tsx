import { Card, Form, Input, Checkbox, Button, message } from 'antd'
import logo from '@/assets/react.svg'
import './index.scss'
import { useStore } from '../../store'
import { useNavigate } from 'react-router-dom'

interface loginType {
  mobile: string
  code: string
}

const Login = () => {
  const navigate = useNavigate()
  const { loginStore } = useStore()
  const onFinish = async (values: loginType) => {
    console.log(values)
    const { mobile, code } = values
    try {
      console.log('123')
      await loginStore.login({ mobile, code })
      navigate('/')
    } catch (e) {
      console.log('e', e)
      message.error('登录失败')
    }
  }

  return (
    <div className="login">
      <Card className='login-containter'>
        <img className='login-logo' src={logo} alt="" />
        <Form validateTrigger={['onBlur', 'onChange']} onFinish={onFinish}
          initialValues={{
            mobile: '13800000000',
            code: '123456',
            remember: true
          }}
        >
          <Form.Item name='mobile' rules={[
            {
              pattern: /^1[3-9]\d{9}$/,
              message: '手机号格式不对',
              validateTrigger: 'onBlur'
            },
            {
              required: true, message: '请输入手机号'
            }
          ]}>
            <Input size='large' placeholder='请输入手机号' />
          </Form.Item>
          <Form.Item name='code' rules={[
            {
              len: 6, message: '验证码为6个字符', validateTrigger: 'onBlur'
            },
            {
              required: true, message: '请输入验证码'
            }
          ]}>
            <Input size='large' placeholder='请输入验证码' maxLength={6} />
          </Form.Item>
          <Form.Item name='remember' valuePropName='checked'>
            <Checkbox className='login-checkbox-label'>
              我已阅读并同意【用户协议】和【隐私条款】
            </Checkbox>
          </Form.Item>
          <Form.Item>
            <Button type='primary' htmlType='submit' size='large' block>登录</Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}
export default Login