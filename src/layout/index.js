import React from 'react'
import {Layout} from 'antd'
const {Header, Footer, Sider, Content} = Layout
import KFooter from '../components/KFooter'

class KLayout extends React.Component {
    render(){
        return <Layout>
            <Sider width={200} style={{minHeight:'100vh',color:'white'}}>菜单栏</Sider>
            <Layout>
                <Header style={{color:'white'}}>导航</Header>
                <Content style={{margin:'16px'}}>
                 {this.props.children}
                </Content>
                <KFooter></KFooter>
            </Layout>
        </Layout>
    }
}

export default KLayout