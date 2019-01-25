export default {
    plugins: [
        ['umi-plugin-react', {antd: true,dva:true}]
    ],
    routes: [
        {path: "/login", component: "./login"},
        {
            path: '/',
            component: '../layout',
            routes: [
                {path: '/', component: './App'},
                {path: 'about', component: './About'},
                {component: './404'},
            ]
        }
    ]
}