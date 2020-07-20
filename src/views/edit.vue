<template>
  <div class="edit-container">
    <div style="margin-bottom:2.778vw">
      <navbar toUrl="userinfo"></navbar>
    </div>
    <div class="uploadface">
      <van-uploader class="uploadimg" :after-read="afterRead" preview-size="100vw" />
      <editcontent class="facebanner" left="头像">
        <img class="userimg" :src="model.user_img" alt slot="right" v-if="model.user_img" />
        <img class="userimg" src="@/assets/user.jpg" alt slot="right" v-else />
      </editcontent>
    </div>
    <editcontent left="昵称" @bannerclick="show=true">
      <a href="javascript:;" slot="right">{{model.name}}</a>
    </editcontent>
    <editcontent left="UID">
      <a href="javascript:;" slot="right">{{model.id}}</a>
    </editcontent>
    <editcontent left="性别" @bannerclick="gendershow=true">
      <a href="javascript:;" slot="right">{{model.gender ==1? '女':'男'}}</a>
    </editcontent>
    <editcontent left="出生日期">
      <a href="javascript:;" slot="right">1999/9/9</a>
    </editcontent>
    <editcontent left="个性签名" @bannerclick="textshow=true">
      <a href="javascript:;" slot="right">{{model.user_desc}}</a>
    </editcontent>

    <van-dialog
      v-model="show"
      title="昵称"
      show-cancel-button
      @confirm="confirmClick"
      @cancel="content='';"
    >
      <van-field v-model="content" autofocus />
    </van-dialog>

    <van-dialog
      v-model="textshow"
      title="个性签名"
      show-cancel-button
      @confirm="textareaClick"
      @cancel="content='';"
    >
      <van-field v-model="content" type="textarea" autofocus />
    </van-dialog>

    <van-action-sheet
      v-model="gendershow"
      :actions="genderactions"
      cancel-text="取消"
      @select="onSelect"
      close-on-click-action
    />

    <div class="editback" @click="editback">返回个人中心</div>
  </div>
</template>
 
<script>
import navbar from "@/components/common/Navbar";
import editcontent from "@/components/common/editcontent";
export default {
  data() {
    return {
      model: {},
      show: false,
      textshow: false,
      gendershow: false,
      content: "",
      genderactions: [
        { name: "男", val: 0 },
        { name: "女", val: 1 }
      ]
    };
  },
  components: {
    navbar,
    editcontent
  },
  methods: {
    async selectUser() {
      const res = await this.$http.get("/user/" + localStorage.getItem("id"));
      this.model = res.data[0];
    },
    async afterRead(file) {
      const fromdata = new FormData();
      fromdata.append("file", file.file);
      const res = await this.$http.post("/upload", fromdata);
      this.model.user_img = res.data.url;
      this.UserUpdata();
    },
    async UserUpdata() {
      const res = await this.$http.post(
        "/update/" + localStorage.getItem("id"),
        this.model
      );
    },
    confirmClick() {
      this.model.name = this.content;
      this.UserUpdata();
      this.content = "";
    },
    textareaClick() {
      this.model.user_desc = this.content;
      this.UserUpdata();
      this.content = "";
    },
    onSelect(data) {
      this.model.gender = data.val;
      this.UserUpdata();
    },
    editback() {
      this.$router.push("/userinfo");
    }
  },
  created() {
    this.selectUser();
  }
};
</script>
 
<style  lang="less">
.edit-container {
  a {
    color: #999;
    font-size: 4vw;
  }
  .userimg {
    border-radius: 100%;
    width: 12.26667vw;
    height: 12.26667vw;
  }
  .uploadface {
    position: relative;
    overflow: hidden;
    .uploadimg {
      position: absolute;
      opacity: 0;
    }
  }
  .editback {
    margin-top: 20px;
    background-color: #fff;
    padding: 2.66667vw 0;
    border-bottom: 1px solid #eee;
    color: #999;
    font-size: 4vw;
    text-align: center;
    border-bottom: 1px solid #eee;
  }
}
</style>