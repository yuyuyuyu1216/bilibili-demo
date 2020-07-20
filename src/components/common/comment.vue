<template>
  <div class="commentParent">
    <div class="comment-container" v-for="(item,index) in commentList" :key="index">
      <div class="parent-container">
        <div class="user-face">
          <img v-if="item.userinfo.user_img" :src="item.userinfo.user_img" alt />
          <img v-else src="../../assets/user.jpg" alt />
        </div>
        <div class="comment-content">
          <p>
            <span v-if="item.userinfo.name">{{item.userinfo.name}}</span>
            <span v-else>匿名用户</span>
            <span>{{item.comment_date}}</span>
          </p>
          <div>
            <p>{{item.comment_content}}</p>
            <span class="publishs" @click="publishClick(item.comment_id)">回复</span>
          </div>
        </div>
      </div>
      <div style="padding-left:8.333vw;">
        <commentItem @postPublish="publishClick" :commentChild="item.child"></commentItem>
      </div>
    </div>
  </div>
</template>
 
<script>
import commentItem from "./commentItem";
export default {
  data() {
    return {
      commentList: null
    };
  },
  methods: {
    async commentData() {
      const res = await this.$http.get("/comment/" + this.$route.params.id);
      if(res.data){
          this.$emit('lengthselect',res.data.length);
      }
      this.commentList = this.changeCommentData(res.data);
    },
    changeCommentData(data) {
      function fu(temp) {
        let arr1 = [];
        for (var i = 0; i < data.length; i++) {
          if (data[i].parent_id == temp) {
            arr1.push(data[i]);
            data[i].child = fu(data[i].comment_id);
          }
        }
        return arr1;
      }
      return fu(null);
    },
    publishClick(id){
        this.$emit('publishClick',id);
          console.log(`我是第0个${id}`);
        
    }
  },
  components: {
    commentItem
  },
  created() {
    this.commentData();
  }
};
</script>
 
<style lang="less">
.commentParent {
  padding: 1.389vw 2.778vw;
  .comment-container {
    border-bottom: 1px solid #e7e7e7;
    padding: 2.778vw 0;

    .parent-container {
      display: flex;
      padding: 2.778vw 0;
      .user-face {
        margin-right: 2.778vw;
        img {
          width: 9.722vw;
          height: 9.722vw;
          border-radius: 50%;
          margin: 0 1.389vw 2.778vw 0;
        }
      }
      .comment-content {
        flex: 1;
        p {
          display: flex;
          justify-content: space-between;
          font-size: 3.611vw;
          color: #555;
          margin-bottom: 4.167vw;
        }
        div {
          font-size: 3.611vw;
          position: relative;
          p{
              width: 85%;
          }
          .publishs {
            position: absolute;
            right: 2vw;
            top: 0;
            color: #db8199;
          }
        }
      }
    }
  }
}
</style>