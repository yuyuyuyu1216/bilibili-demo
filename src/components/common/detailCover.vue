<template>
  <div class="detailcover">
    <p class="cover-count">
      <van-icon class="detail-icon" name="play-circle-o" />666
    </p>
    <p class="cover-count">
      <van-icon class="detail-icon" name="comment-o" />888
    </p>
  </div>
</template>
 
<script>
export default {};
</script>
 
<style lang="less">
.detailcover {
  width: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.85), transparent);
  justify-content: space-between;
  align-items: center;
  padding: 1.667vw 0;
  .cover-count {
    color: #fff;
    font-size: 3.2vw;
    display: flex;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
    .detail-icon {
      margin-right: 2vw;
      font-size: 4vw;
    }
  }
}
</style>