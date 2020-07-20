<template>
    <div>
        <Navbar toUrl='edit'></Navbar>
        <userContent :userinfo="model"></userContent>
        <tabs :tabsMsg=tabsMsg></tabs>
        <!-- <appfooter></appfooter> -->
    </div>
</template>
<script>
import Navbar from '@/components/common/Navbar';
import userContent from '@/components/common/userContent';
import tabs from '@/components/common/tabs';
import appfooter from '@/components/common/appfooter';
export default {
    data() {
        return {
            tabsMsg:[
                {name:'动态',Url:'/app'},
                {name:'视频',Url:'/ppa'},

            ],
            model:{},
        }
    },
    components:{
        Navbar,
        userContent,
        tabs,
        appfooter
    },
    methods: {
        async UserinfoData(){
            const res=await this.$http.get('/user/'+localStorage.getItem('id'));
            this.model=res.data[0];
            
            // {
            //     headers:{
            //         'Authorization':'Bearer '+ localStorage.getItem('objtoken')
            //     }
            // }
            
        }
    },
    created() {
        this.UserinfoData()
    },
}
</script>
<style lang="less">
    
</style>