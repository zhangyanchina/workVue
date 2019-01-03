export default {
    data() {
        return {
            enterFlag:false,
            username:'',
            power:''
        }
    },
    created() {
        this.username = sessionStorage.getItem('username')
        this.power = sessionStorage.getItem('power')
    },
    methods: {
        Logout() {
            sessionStorage.removeItem('username')
            sessionStorage.removeItem('password')
            sessionStorage.removeItem('power')
            this.$router.push('/login')
        }
    },
}