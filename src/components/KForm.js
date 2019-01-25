import React from 'react'
import {Icon} from 'antd'


export default function KForm(Comp) {
    return class NewComp extends React.Component{
        constructor(props){
            super(props)
            this.state = {}
            this.rules = {}
        }
        handleChange=(e)=>{
            let {name,value} = e.target
            this.setState({
                [name]:value
            },()=>{
                this.validateInput(name)
            })
        }
        validateInput(key){
            let rule = this.rules[key]
            rule = Array.isArray(rule) ? rule :[rule]
            let ret = rule.some(r=>{
                if (r.required) {
                    if (!this.state[key]) {
                        this.setState({
                            [key+'Message']:r.message
                        })
                        return true
                    } else {
                        this.setState({
                            [key+'Message']:''
                        })
                    }
                }
                if (r.min) {
                    if (this.state[key].length<r.min) {
                        this.setState({
                            [key+'Message']:r.message
                        })
                        return true
                    } else {
                        this.setState({
                            [key+'Message']:''
                        })
                    }
                }
            })
            return ret
        }
        emitEmpty=(key)=>{
            this.setState({
                [key]:''
            })
        }
        setRule = (key,rule,Inputcomp)=>{
            this.rules[key] = rule
            const suffix = this.state[key] ? <Icon type="close-circle" onClick={()=>this.emitEmpty(key)} /> : null;
            return <div>
                <p style={{color:'red'}}>{this.state[key+'Message']}</p>
                {React.cloneElement(Inputcomp,
                    {   
                        suffix,
                        name:key,onChange:this.handleChange,
                        value:this.state[key]
                    })}

            </div>
        }   
        validate = () => {
            const result = Object.keys(this.rules).map(key=>{
                return this.validateInput(key)
            })
            return result.every(v=>!v)
        }
        render(){
            return <Comp {...this.props} kvalidate={this.validate} krules={this.setRule} form={this.state}></Comp>
        }
    }
}