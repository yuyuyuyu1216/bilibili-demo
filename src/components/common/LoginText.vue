<template>
    <div>
        <van-field 
        class="logintext"
        v-model="content" 
        :label="label" 
        :type="type" 
        :placeholder="placeholder" 
        :rule="rule"
        />
        <!-- <van-field v-model="password" type="password" label="密码" /> -->
    </div>
</template>
<script>
export default {
    data() {
        return {
            content:'',
        }
    },
    props:[
    'label',
    'type',
    'placeholder',
    'rule'
    ],
    methods: {
        handlerulg(){
            const rule=new RegExp(this.rule);
            if(rule.test(this.content)){
                this.$emit('inputChange',this.content)
            }
            else{
                
            }
        }
    },
    watch: {
        content(){
            this.handlerulg();
        }
    },
}
</script>
<style lang="less">
    .logintext{
        padding-top: 3.5vw;
        padding-bottom: 3.5vw;
    }
</style>