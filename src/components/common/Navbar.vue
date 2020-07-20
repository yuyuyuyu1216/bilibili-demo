<template>
  <div class="navbar">
    <div class="logo" @click="$router.push('/home',onComplete=>{},onAbort=>{})">
      <img class="logoimg" src="../../assets/logo.png" alt />
    </div> 
    <div class="search">
      <p>
        <van-icon class="ipt-icon" name="search" />
      </p>
    </div>
    <div>
      <img :src="model.user_img" alt @click="$router.push(`/${toUrl}`)" v-if="model.user_img" />
      <img src="../../assets/user.jpg" alt @click="$router.push(`/${toUrl}`)" v-else/>
      <p>下载 App</p>
    </div>
  </div>
</template>
<script>
export default {
    data() {
        return {
            model:{}
        }
    },
  props: ["toUrl", "faceUrl"],
  methods: {
     async  updataData(){
       if(localStorage.getItem('id') && localStorage.getItem('token')){
         const res= await this.$http.get('/user/'+localStorage.getItem('id'));
         this.model=res.data[0];
         
       }

      }
  },
  watch:{
    model(){
this.updataData();
    }
  },
  created(){
      this.updataData();
  }
};
</script>
<style  lang="less">
.navbar {
  background-color: #fff;
  display: flex;
  height: 12.5vw;
  .logo {
    width: 22.222vw;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .logoimg {
      height: 9vw;
      width: 18vw;
    }
  }
  .search {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      height: 6.4vw;
      width: 80%;
      border-radius: 2vw;
      margin: 0;
      background-color: #f6f6f6;
      .ipt-icon {
        margin-top: 0.6vw;
        margin-left: 1vw;
        font-size: 5.556vw;
        color: #aaaaaa;
      }
    }
  }
  div:nth-child(3) {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 6.944vw;
      height: 6.944vw;
      border-radius: 100%;
    }
    p {
      margin-left: 3.2vw;
      margin-right: 3.2vw;
      width: 21.3vw;
      height: 6.4vw;
      line-height: 6.4vw;
      border-radius: 0.53333vw;
      background-color: #ea7b99;
      color: #ffffff;
      text-align: center;
      font-size: 3.467vw;
    }
  }
}
</style>