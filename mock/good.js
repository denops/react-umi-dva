let courese = {
    data:{
  
  
      'Javascript':[
        {
          name:'ES6语法实战',
          img:'LearnES6_Final.png',
          price:'100',
          solded:'56',
        },
        {
          name:'Typescript实战',
          img:'Typescript_Plumbing_image.png',
          price:'100',
          solded:'56',
        },
        {
          name:'Javascript算法实战',
          img:'JSBasic-Algorithms_Final.png',
          price:'100',
          solded:'56',
        },
  
      ],
  
      'React':[
        {
          name:'React入门',
          img:'ReactBeginners.png',
          price:'100',
          solded:'56',
        },
        {
          name:'ReactNative开发自己的APP',
          img:'ReactNative.png',
          price:'100',
          solded:'56',
        },
        {
          name:'React服务端渲染实战',
          img:'ReactNextServer_Final.png',
          price:'100',
          solded:'56',
        },
        {
          name:'Redux Sage中间件实战',
          img:'ReduxSaga.png',
          price:'100',
          solded:'56',
        },
        {
          name:'试用react开发PWA应用',
          img:'PWAReact_Final.png',
          price:'100',
          solded:'56',
        },
        {
          name:'React Hooks实战',
          img:'SimplifyHooks_Final.png',
          price:'100',
          solded:'56',
        },
        {
          name:'React Mobx状态管理实战',
          img:'React_Mobx_TS.png',
          price:'100',
          solded:'56',
        },
      ],
      'Vuejs':[
        {
          name:'Vue进阶实战',
          img:'VueJS_Final.png',
          price:'180',
          solded:'56',
        },
        
        {
          name:'Vuejs开发pwa应用',
          img:'VuePwa.png',
          price:'100',
          solded:'56',
        },
        {
          name:'试用TS开发Vuejs应用',
          img:'TSVue_Final.png',
          price:'100',
          solded:'56',
        },
        
      ],
      'Git':[
        {
          name:'Github从入门到精通',
          img:'github.png',
          price:'99',
          solded:'10',
        },
        {
          name:'Git版本控制实战',
          img:'LearnGit.png',
          price:'49',
          solded:'180',
        },
        
      ],
      'Test':[
        {
          name:'Puppetee测试入门',
          img:'TestGooglePuppeteer_Final.png',
          price:'10',
          solded:'56',
        },
        {
          name:'使用jest测试你的React项目',
          img:'TestReactJest.png',
          price:'30',
          solded:'10',
        },
      ],
      'Python':[
        {
          name:'Python从入门到精通',
          img:'IntroPython.png',
          price:'100',
          solded:'56',
        },
      ],
      'Node.js':[
        {
          name:'使用Docker部署你的nodejs',
          img:'NodeDocker_1000.png',
          price:'100',
          solded:'56',
        },
        {
          name:'在AWS环境部署nodejs',
          img:'NodeAWSServerless_Final.png',
          price:'100',
          solded:'56',
        },
  
      ],
      'GraphQL':[
        {
          name:'GraphQL从入门到精通',
          img:'GraphQL_Final.png',
          price:'100',
          solded:'56',
        },
      ]
    },
    tags:['Javascript','React','Vuejs','Git','Test','Python','Node.js','GraphQL']
  }
  

export default {
    'get /api/goods'(req,res,next){
        setTimeout(()=>{
           res.json({
              code:0,
              data:courese
           }) 
        },1000)
    },
    'post /api/login'(req,res,next){
        const {username,password} = req.body
        setTimeout(() => {
            if (username =='kaikeba' && password == '123456') {
                return res.json({
                    code:0,
                    data:{
                        token:'kaikebaisgood',
                        role:'admin'
                    }
                })
            }
            if (username =='dasheng' && password == '123456') {
                return res.json({
                    code:0,
                    data:{
                        token:'kaikebaisgood',
                        role:'user'
                    }
                })
            }
            return res.json({
                code:-1,
                msg:'用户名或密码错误'
            })
        }, 2000);
    }
}