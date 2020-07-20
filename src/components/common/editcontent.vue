<template>
<div @click="bannerclick">
   <div class="editcontent">
     <span class="edit-name">{{left}}</span>
     <span class="edit-content"><slot name="right"></slot></span>
 </div>  
</div>
</template>
 
<script>
export default {
    props:['left'],
    methods: {
        bannerclick(){
            this.$emit('bannerclick');
        }
    },
}
</script>
 
<style lang="less">
    .editcontent{
        background-color: #fff;
        padding: 3.2vw 0;
        border-bottom: 1px solid #eee;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #505050;
        font-size: 4vw;
        .edit-name{
            margin-left: 4.167vw;
        }
        .edit-content{
            margin-right: 4.167vw;
        }
    }
</style>