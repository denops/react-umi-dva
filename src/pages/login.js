import {Form, Input, Button, Icon} from 'antd'
import styles from './login.less'
import Logo from '../assets/logo.png'
import KForm from '../components/KForm'


import {connect} from 'dva'

@connect()
@KForm

export default class Login extends React.Component{
    constructor(props){
        super(props)
    }
    handleSubmit=()=>{
        if (this.props.kvalidate()) {
            const {username,password} = this.props.form
            this.props.dispatch({
                type:'user/login',
                payload:{username,password}
            })
            // nprogress.start()
            // nprogress.set(0.4)
            // setTimeout(() => {
            //   nprogress.done()
      
            // }, 3000)
        }
    }
    render(){
        return (
          <div className={styles.Login}>
            <div className={styles['login-container']}>
                <img src={Logo}/>
                {this.props.krules(
                    'username',
                    [{ required:true, message:'请输入用户名'},{min:6,message:'用户名长度不得少于6'}],
                    <Input placeholder='your username' prefix={<Icon type="user" />}/>
                )}
                {this.props.krules(
                    'password',
                    [{ required:true, message:'请输入密码'},{min:6,message:'密码长度不得少于6'}],
                    <Input placeholder='your password' prefix={<Icon type="lock" />}/>
                )}
                <div className={styles.submit}>
                    <Button type='primary' block onClick={this.handleSubmit}>Login</Button>
                </div>
            </div>
          </div>
        );
    }
}