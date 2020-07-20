<template>
    <div class="btnparent" @click="registerClick">
        <div class="loginbtn">{{btnName}}</div>
    </div>
</template>
<script>
export default {
    props:['btnName'],
    methods: {
        registerClick(){
            this.$emit('registerSubmit')
        }
    },
}
</script>
<style lang="less">
    .btnparent{
        padding: 4.167vw 2.778vw;
        .loginbtn{
        height: 12.5vw;
        background-color: #ff9db5;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 4.444vw;
        border-radius: 6.111vw;
    }
    }
</style>