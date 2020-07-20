<template>
  <div class="comment">
    <div class="comment-title">
      <span>评论</span>
      <span>({{dataLength}})</span>
    </div>
    <div class="comment-input">
      <img :src="myuser.user_img" v-if="myuser&&myuser.user_img" />
      <img src="../../assets/user.jpg" @click="$router.push('/login')" v-else />
      <input type="text" ref="Postipt" placeholder="说点什么吧" v-model="comment" />
      <button @click="commentPublish">发表</button>
    </div>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      myuser: null,
      comment:"",
    };
  },
  props:['dataLength'],
  methods: {
    async myUserinfo() {

      const res = await this.$http.get("/user/" + localStorage.getItem("id"));
      this.myuser = res.data[0];
    },
    commentPublish(){
        if(!this.myuser&&!localStorage.getItem('id')&&!localStorage.getItem('token')){
            this.$msg.fail("请先登陆");
        }
        this.$emit('Postcomment',this.comment);
        this.comment='';
        
    },
    focusIpt(){
      this.$refs.Postipt.focus();
    }
  },
  created() {
      if(localStorage.getItem('token')){
    this.myUserinfo();
      }
  }
};
</script>
 
<style lang="less">
.comment-title{
  margin: 5vw 0 2.778vw 2.5vw;
}
.comment-input {
  display: flex;
  align-items: center;
  img {
    width: 7.944vw;
    height: 7.944vw;
    border-radius: 100%;
    margin-left: 2.5vw;
  }
  input {
    outline: none;
    border: 0;
    background-color: #f6f6f6;
    font-size: 3.333vw;
    border-radius: 3.6vw;
    padding: 0.833vw 5.556vw 0.833vw 4.167vw;
    margin: 2.778vw;
  }
  button{
      outline: none;
      border: none;
      border-radius: 3.333vw;
      background-color: #e97b99;
      font-size: 3.333vw;
      color: #fff;
      padding: 0.833vw 2.778vw;
  }
}
</style>