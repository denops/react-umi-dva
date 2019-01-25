import {GlobalFooter} from 'ant-design-pro'
import {Icon} from 'antd'

const links = [
    {
        key:'weibo',
        title:<Icon type="weibo-circle"/>,
        href:'http://weibo.com/woniuppp',
        blankTarget: true,
    },
    {
        key:'github',
        title:<Icon type="github"/>,
        href:'https://github.com/denops',
        blankTarget: true,
    },
    
];

const copyright = <div>Copyright <Icon type="copyright"/>2019 HHH</div>

export default ()=>{
    return <div style={{background:'#f5f5f5',overflow:'hidden'}}>
            <GlobalFooter links={links} copyright={copyright}/>
    </div>
}