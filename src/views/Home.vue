<template>
  <div class="home">
    <navbar toUrl="userinfo"></navbar>
    <van-tabs v-model="active" sticky>
      <van-tab v-for="(item,index) in category" :key="index" :title="item.title">
        <van-list
          v-model="item.loading"
          :finished="item.finished"
          :immediate-check="false"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <div class="detail-container">
            <detail
              class="detailitem"
              :detailitem="categoryitem"
              v-for="(categoryitem,categoryindex) in item.list"
              :key="categoryindex"
            ></detail>
          </div>
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>
 
<script>
import navbar from "@/components/common/Navbar";
import detail from "./Detail";
export default {
  data() {
    return {
      category: [],
      active: 0
    };
  },
  components: {
    navbar,
    detail
  },
  methods: {
    async selectCategory() {
      const res = await this.$http.get("/category");
      this.changeCategory(res.data);
      this.selectArticle();
    },
    changeCategory(data) {
      const newcategory = data.map((item, index) => {
        item.list = [];
        item.page = 0;
        item.pagesize = 10;
        item.finished = false;
        item.loadng = false;
        return item;
      });
      this.category = newcategory;
    },
    async selectArticle() {
      const categoryitem = this.categoryItem();
      const res = await this.$http.get("/detail/" + categoryitem._id, {
        params: {
          page: categoryitem.page,
          pagesize: categoryitem.pagesize
        }
      });
      // categoryitem.list=categoryitem.list.concat(res.data);
      categoryitem.list.push(...res.data);
      categoryitem.loading = false;
      
      if(res.data.length<categoryitem.pagesize){
        categoryitem.finished = true;
      }
    },
    categoryItem() {
      const categoryitem = this.category[this.active];
      return categoryitem;
    },
    onLoad() {
      const categoryitem = this.categoryItem();
      setTimeout(() => {
        categoryitem.page += 1;
        this.selectArticle();
      }, 1000);
    }
  },
  watch: {
    active() {
      this.selectArticle();
    }
  },
  created() {
    this.selectCategory();
  }
};
</script>
 
<style lang="less">
.home {
  background-color: #fff;
  .detail-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 1.6vw;
    .detailitem {
      margin: 0 2.5vw 0 2.5vw;
      width: 45%;
      margin-top: 1.6vw;
    }
  }
}
</style>