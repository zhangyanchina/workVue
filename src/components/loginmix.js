export default {
  data() {
    return {
        userForm:{
            username:'',
            password:''
        },
        userRules:{
            username: [
                { required: true, message: '请输入用户名', trigger: 'blur' },
                { min: 1, max: 12, message: '长度在 1 到 12 个字符', trigger: 'blur' }
              ],
            password: [
            { required: true, message: '请输入用户密码', trigger: 'blur' },
            { min: 2, max: 12, message: '长度在 2 到 12 个字符', trigger: 'blur' }
            ],
        }
    }
  }
}
