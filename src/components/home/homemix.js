export default {
    data() {
        return {
            enterFlag:false, //鼠标进入的标识
            username:'', // 用户名称
            power:'', // 用户权限
            menuList:[], // 左侧菜单列表
            listIcon:['el-icon-location','el-icon-menu','el-icon-edit']
        }
    },
    created() {
        this.username = sessionStorage.getItem('username')
        this.power = sessionStorage.getItem('power')
        this.initList()
    },
    methods: {
        Logout() {
            sessionStorage.removeItem('username')
            sessionStorage.removeItem('password')
            sessionStorage.removeItem('power')
            this.$router.push('/login')
        },
        // 初始化左侧列表
        async initList() {
            const {data : list} = await this.$http.get('/static/mock/menu.json')
            if(list.code !== '200') return this.$message.error('信息列表获取失败，请联系管理员')
            this.menuList = list.menuList            
        }
    },
}