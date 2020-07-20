<template>
  <div class="detail" @click="pathPush">
    <img class="detailimg" :src="detailitem.img" style="width:100%" />
    <p class="detailtitle">{{detailitem.name}}</p>
    <cover class="cover"></cover>
  </div>
</template>
 
<script>
import cover from "@/components/common/detailCover";
export default {
  props: ["detailitem"],
  components: {
    cover
  },
  methods: {
    pathPush() {
      if (this.$route.path != `/article/${this.detailitem.id}`) {
        this.$router.push(`/article/${this.detailitem.id}`);
      }
    }
  }
};
</script>
 
<style lang="less">
.detail {
  position: relative;
  .detailimg {
    width: 100%;
    height: 28vw;
    border-radius: 0.53333vw;
    box-shadow: 0.417vw 0.139vw 1.111vw rgb(170, 170, 170);
    overflow: hidden;
  }
  .detailtitle {
    font-size: 3.2vw;
    color: #212121;
    margin: 1.6vw 0 0 0;
  }
  .cover {
    position: absolute;
    top: 20.7vw;
    z-index: 10;
  }
}
</style>