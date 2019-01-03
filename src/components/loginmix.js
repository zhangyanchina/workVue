export default {
  data() {
    return {
      userForm: {
        username: '',
        password: ''
      },
      userRules: {
        username: [{
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          },
          {
            min: 1,
            max: 12,
            message: '长度在 1 到 12 个字符',
            trigger: 'blur'
          }
        ],
        password: [{
            required: true,
            message: '请输入用户密码',
            trigger: 'blur'
          },
          {
            min: 2,
            max: 12,
            message: '长度在 2 到 12 个字符',
            trigger: 'blur'
          }
        ],
      },
      psw: false
    }
  },
  methods: {
    async login() {
      // 表单非空验证
      this.$refs.userFrom.validate(async (valid) => {
        if (!valid) return this.$message.error('请填写完整'); //提示错误信息
        const {
          data: result
        } = await this.$http.get('/static/mock/login.json')
        if (result.code !== 200) return this.$message.error('服务器错误')
        if (result.user != this.userForm.username || result.password != this.userForm.password) {
          return this.$message.error('用户名或密码错误')
        }
        
        this.$message.success('登录成功')

        sessionStorage.setItem('username', result.user)
        sessionStorage.setItem('password', this.userForm.password)
        sessionStorage.setItem('power',result.power)

        this.$router.push('/home')
      });
    }
  },
}
