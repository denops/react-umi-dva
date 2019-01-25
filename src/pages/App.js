import React from 'react'
import {Button, Card,List, Row, Col} from 'antd'
import {TagSelect} from 'ant-design-pro'
import {connect} from 'dva'

@connect(
    state=>{
        console.log(state)
        return {
            tags:state.goods.tags,
            all:state.goods.all,
            courses:state.goods.courses,
        }
    }
)

export default class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            tags:[],
            displayCourses:[],
            courses:[]
        }
    }
    componentDidMount(){
        this.setState({
            tags:this.props.tags,
            displayCourses:this.props.all
        })
       this.getList()
    }
    getList(){
        this.props.dispatch({
            type: 'goods/getList'
        })
    }
    handleAdd = ()=>{
        const title = "测试" + new Date().getTime();
        this.props.dispatch({
            type:'goods/add',
            payload: {title}
        })
    }
    handleTagSubmit = (tags) =>{
        let newCourses = []
        tags.forEach(tag => {
            newCourses= [...newCourses,...this.props.courses[tag]]
        });
        this.setState({
            tags,
            displayCourses:newCourses
        })
    }
    render(){
        return <div>
            <h2>首页</h2>
            <TagSelect onChange={this.handleTagSubmit} expandable>
                {this.props.tags.map(tag=>{
                    return <TagSelect.Option key={tag} value={tag}>{tag}</TagSelect.Option>
                })}
            </TagSelect>
            <hr/>
            <Row type="flex" justify="start">
                {this.state.displayCourses.map(item=>{
                   return <Col style={{padding:10}} span={4} key={item.name}>
                               <Card title={item.name} cover={<img src={'/course/'+item.img} />} >
                                <div>{item.price}</div>
                                <div>{item.solded}</div>
                               </Card> 
                          </Col>
                })}
            </Row>

            <Button onClick={this.handleAdd}>添加课程</Button>
        </div>
    }
}