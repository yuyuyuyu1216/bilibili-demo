<template>
  <div class="commentitem">
    <div class="parent-container" v-for="(item,index) in commentChild" :key="index">
      <div class="user-face">
        <img v-if="item.userinfo.user_img" :src="item.userinfo.user_img" alt />
        <img v-else src="../../assets/user.jpg" alt />
        <p>
          <span v-if="item.userinfo.name">{{item.userinfo.name}}</span>
          <span v-else>匿名用户</span>
          <span>{{item.comment_date}}</span>
        </p>
      </div>
      <div class="comment-content">
        <div v-if="!temp">
          {{item.comment_content}}
          <span class="publish" @click="PostItemComment(item.comment_id)">回复</span>
        </div>
        <div v-else>
          回复
          <span style="color:#6089b4;">{{item.parent_user_info.name}}</span>
          : {{item.comment_content}}
          <span class="publish" @click="PostItemComment(item.comment_id)">回复</span>
        </div>
      </div>
      <commentchildItem :commentChild="item.child" @postPublish="PostItemComment" :temp="true"></commentchildItem>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "commentchildItem",
  props: ["commentChild", "temp"],
  methods: {
      PostItemComment(id){
          // this.$emit('postChild',id );
          this.$emit('postPublish',id);
          // console.log(`我是第一个${id}`);
      },
      // postChild(id){
      //     this.PostItemComment(id);
      //     console.log(`我是第二个${id}`);
      //     // this.$emit('postPublish',id);
      // }
  },
};
</script>
 
<style lang="less">
.commentitem {
  .parent-container {
    display: flex;
    flex-direction: column;
    .user-face {
      display: flex;
      align-items: center;
      img {
        margin: 0 1.389vw 2.778vw 0;
      }
      p {
        flex: 1;
        display: flex;
        justify-content: space-between;
        font-size: 3.611vw;
        color: #555;
        margin-bottom: 1.389vw;
      }
    }
    .comment-content {
      position: relative;
      margin-bottom: 2.778vw;
      .publish {
        position: absolute;
        right: 6.944vw;
        color: #db8199;
      }
    }
  }
}
</style>