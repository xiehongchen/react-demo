/*
 * @Author: liaozhaozhou liaozhaozhou@ecyao.com
 * @Date: 2024-01-22 14:09:03
 * @LastEditors: xiehongchen 1754581057@qq.com
 * @LastEditTime: 2024-01-23 11:37:55
 * @FilePath: /react-demo/src/pages/Login/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Form, Input, Checkbox, Button, message } from 'antd'
// import hui from '@/assets/hui.png'
import { useStore } from '@/store'
import { useNavigate } from 'react-router'
import './index.scss'

interface loginType {
  code: string
  mobile: string
  remember: boolean
}
const Login = () => {
  const navigate = useNavigate()
  const { loginStore } = useStore()
  const onFinish = async (values: loginType) => {
    console.log('values', values)
    const { mobile, code } = values
    try {
      await loginStore.login({ mobile, code })
      navigate('/')
    } catch (e: any) {
      message.error(e?.response?.data?.message || '登录失败')
    }
  }
  return (
    <Form
      onFinish={onFinish}
      initialValues={{
        mobile: '13911111111',
        code: '246810',
        remember: true
      }}
      validateTrigger={['onBlur', 'onChange']}>
      <Form.Item
        name="mobile"
        rules={[
          {
            pattern: /^1[3-9]\d{9}$/,
            message: '手机号码格式不对',
            validateTrigger: 'onBlur'
          },
          { required: true, message: '请输入手机号' }
        ]}
      >
        <Input size="large" placeholder="请输入手机号" />
      </Form.Item>
      <Form.Item
        name="code"
        rules={[
          { len: 6, message: '验证码6个字符', validateTrigger: 'onBlur' },
          { required: true, message: '请输入验证码' }
        ]}
      >
        <Input size="large" placeholder="请输入验证码" maxLength={6} />
      </Form.Item>
      <Form.Item name="remember" valuePropName="checked">
        <Checkbox className="login-checkbox-label">
          我已阅读并同意「用户协议」和「隐私条款」
        </Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" size="large" block>
          登录
        </Button>
      </Form.Item>
    </Form>
  )
}

export default Login