<template>
    <div>
        <LoginTop middleTop='注册bilibili'>
            <div slot="right" @click="$router.push('/login')">登陆</div>
        </LoginTop>
        <LoginText 
        label='姓名' 
        placeholder='请输入姓名'
        rule="^.{6,15}$"
        style="margin:4.444vw 0"
        @inputChange="res=>model.name=res">
        </LoginText>
        <LoginText 
        label='账号' 
        placeholder='请输入账号'
        rule="^[a-zA-Z][a-zA-Z0-9_]{4,15}$"
        @inputChange="res=>model.username=res">
        </LoginText>
        <LoginText 
        label='密码' 
        type='password' 
        placeholder='请输入密码'
        rule="^[a-zA-Z]\w{5,17}$"
        @inputChange="res=>model.password=res">
        </LoginText>
        <login-btn btnName='注册' @registerSubmit="registerSubmit"></login-btn>
    </div>
</template>
<script>
import LoginTop from '@/components/common/LoginTop'
import LoginText from '@/components/common/LoginText'
import LoginBtn from '@/components/common/LoginBtn'
export default {
    data() {
        return {
            model:{
                name:'',
                username:'',
                password:''
            }
        }
    },
    components:{
        LoginTop,
        LoginText,
        LoginBtn
    },
    methods: {
        async registerSubmit(){
            let rulg=/^.{6,15}$/;
            if(rulg.test(this.model.name)&&rulg.test(this.model.username)&&rulg.test(this.model.password)){
                this.$http.post('/register',this.model).then(res=>{
                    this.$msg.success(res.data.msg)
                    // id:3941
                    // objtoken:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Mzk0MSwiaWF0IjoxNTk0MTM5MTQwfQ.R4pJbD4ZWKAmWHUvr8Rq0ncOPF6yb9YNMANtqP07H1M"
                    localStorage.setItem('id',res.data.id);
                    localStorage.setItem('token',res.data.objtoken);
                    setTimeout(() => {
                        this.$router.push('/userinfo');
                    }, 1000);
                })
            }
            else{
                this.$msg.fail('格式不正确,请重新输入');
            }
        }
    },
}
</script>
<style>
    
</style>