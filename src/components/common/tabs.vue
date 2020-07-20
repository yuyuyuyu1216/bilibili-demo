<template>
 <div class="tabsContainer">
     <div class="tabscontent">
        <span 
        class="tab" 
        v-for="(item,i) in tabsMsg" 
        :key="i" 
        :class="ison==i?'on':''"
        @click="tabactive(i,item.Url)"
        >
        {{item.name}}
     </span>
     </div>
 </div>
</template>
 
<script>
export default {
    data() {
        return {
            ison:0,
        }
    },
    props:[
        'tabsMsg'
    ],
    methods: {
        tabactive(index,url){
            this.ison=index;
        }
    },
}
</script>
<style lang="less">
.tabsContainer{
    height: 8vw;
    // overflow: hidden;
    .tabscontent{
    height: 10.66667vw;
     background-color: #fff;
     border-bottom: 1px solid #e7e7e7;
     display: flex;
     align-items: center;
     overflow: scroll;
     padding-left: 3.2vw;
    .tab{
        flex-shrink: 0;
        width: 8vw;
        display: inline-block;
        height: 100%;
        line-height:10.66667vw;
        color: #757575;
        font-size: 3.46667vw;
        margin-right: 8.53333vw;
        text-align: center;
        
    }
    .on{
           color: #fb7299;
        }
 }
}
</style>