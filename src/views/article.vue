<template>
  <div class="article"> 
    <navbar toUrl="userinfo"></navbar>
    <div class="video-container" v-if="model">
      <video class="video" :src="model.content" controls="controls"></video>
      <div class="title-container">
        <span class="category">{{model.category.title}}</span>
        <span>{{model.name}}</span>
      </div>
      <div class="userinfo-container">
        <span>{{model.userinfo.name}}</span>
        <span>{{model.date}}</span>
      </div>
    </div>
    <div class="commend-container">
      <detail class="commend" :detailitem="item" v-for="(item,index) in list" :key="index"></detail>
    </div>
    <comment-title :dataLength="lens" @Postcomment="Postsuccess" ref="commentIpt"></comment-title>
    <comment @lengthselect=" len => lens=len" @publishClick="PostChildClick" ref="commentPublish"></comment>
  </div>
</template>
 
<script>
import navbar from "@/components/common/Navbar";
import commentTitle from "@/components/common/commentTitle";
import comment from "@/components/common/comment";

import detail from "./Detail";
export default {
  data() {
    return {
      model: null,
      list: null,
      myuser:null,
      lens:null,
      postcomment:{
        comment_content:'',
        comment_date:'',
        parent_id:null,
        article_id:null
      }
    };
  },
  components: {
    navbar,
    detail,
    commentTitle,
    comment
  },
  methods: {
    async articleitemData() {
      const res = await this.$http.get('/article/' + this.$route.params.id);
      this.model = res.data[0];
    },
    async commendData() {
      const res = await this.$http.get('/commend');
      this.list = res.data;
    },
    async myUserinfo(){
        const res=await this.$http.get('/user/' +localStorage.getItem('id'));
        this.myuser=res.data[0];
    },
    async Postsuccess(res){
      const date=new Date();
      let m=date.getMonth()+1;
      let d=date.getDate();
      if(m<10){
        m='0'+m;
      }
      if(d<10){
        d='0'+d;
      }
      let datestr=`${m}-${d}`
      this.postcomment.comment_content=res;
      this.postcomment.comment_date=datestr;
      this.postcomment.article_id=this.$route.params.id;
      const result=await this.$http.post('/comment_post/'+localStorage.getItem('id'),this.postcomment);
      this.$refs.commentPublish.commentData();
      this.postcomment.parent_id=null;
    },
    PostChildClick(id){
      this.postcomment.parent_id=id;
      this.$refs.commentIpt.focusIpt();
    }
  },
  watch: {
    $route() {
      window.scroll(0, 0);
      this.articleitemData();
      this.commendData();
      this.$refs.commentPublish.commentData();
    }
  },
  created() {
    this.articleitemData();
    this.commendData();
  }
};
</script>
 
<style lang="less">
.article{
    background-color: #fff;
.video-container {
  margin-top: 2.778vw;
  .video {
    width: 100%;
  }
  .title-container{
    margin: 2.778vw 0;
    display: flex;
    align-items: center;
    span{
      margin-left: 2.778vw;
    }
    span.category{
      padding: 2px 4px;
      color: #ea7b99;
      background-color: #f4f4f4;
      border-radius: 15%;
    }
  }
  .userinfo-container{
    margin: 2.778vw 0;
    span{
      margin-left: 2.778vw;
      font-size: 3.611vw;
      color: #999999;
    }
  }
}
.commend-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  .commend {
    width: 45%;
    margin: 0 2.5vw 0 2.5vw;
  }
}
}

</style>