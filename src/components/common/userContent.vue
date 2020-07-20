<template>
 <div class="usercontent">
     <!-- 用户中心banner -->
     <div class="banner">
        <!-- <img src="../../assets/bannerTop_new.png" alt=""> -->
     </div>
     <!-- 用户中心头像以及计数区域 -->
     <div class="userimg">
         <div class="face">
         <img :src="userinfo.user_img" v-if="userinfo.user_img">
         <img src="../../assets/user.jpg" v-else>
         </div>
         <div class="relation">
            <div class="count">
                <span class="count-wripper">
                    <div>
                    <span class="num">0</span>
                    <br>
                    <span class="type">粉丝</span>
                    </div>
                </span>
                <span class="border"></span>
                <span class="count-wripper">
                    <div>
                    <span class="num">0</span>
                    <br>
                    <span class="type">关注</span>
                    </div>
                </span>
                <span class="border"></span>
                <span class="count-wripper">
                    <div>
                    <span class="num">0</span>
                    <br>
                    <span class="type">获赞</span>
                    </div>
                </span>
            </div>
            <button class="editbtn" @click="$router.push('/edit')">编辑资料</button>
         </div>
     </div>
     <!-- 用户中心用户信息 -->
     <div class="usermsg">
         <div class="username" v-if="userinfo.name">
             <span>{{userinfo.name}}</span>
             <i>lv8</i>
             </div>
             <div class="username" v-else>
             <span>请登陆</span>
             <i>lv0</i>
             </div>
         <div class="userautograph" v-if="userinfo.user_desc">
             <span>{{userinfo.user_desc}}</span>
             <a href="" @click.prevent="openuid">{{btnName}}</a> 
         </div>
         <div class="userautograph" v-else>
             <span>这个人很神秘，什么都没有写</span>
             <a href="" @click.prevent="openuid">{{btnName}}</a> 
         </div>
         <div class="useruid" v-show="openuid1">
             <span>uid:{{userinfo.id}}</span>
         </div>
     </div>
 </div>
</template>
 
<script>
export default {
    data() {
        return {
            openuid1:false,
            btnName:'展开'
        }
    },
    props:[
        'userinfo'
    ],
    methods: {
        openuid(){
            this.openuid1=!this.openuid1;
            if(this.openuid1==false){
                this.btnName='展开';
            }
            else{
                this.btnName='收起';
            }
        }
    },
}
</script>
 
<style lang="less">
    .usercontent{
        margin: 0;
        padding: 0 0 2.778vw 0;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        border-bottom: 1px solid #e7e7e7;
        .banner{
            width:100vw;
            height:24vw;
            overflow: hidden;
            background: url('../../assets/bannerTop_new.png') 50% ;
            background-size: cover;
        }
        .userimg{
            display: flex;
            .face{
                width: 22.4vw;
                height: 22.4vw;
                img{
                border-radius: 100%;
                display: block;
                margin-left: 3.2vw;
                width: 22.4vw;
                }
            }
            .relation{
                flex: 1;
                margin: 0 3vw 0 12.4vw ;
                display: flex;
                flex-direction: column;
                .count{
                    flex: 1;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    .border{
                        width: 1px;
                        height: 4.26667vw;
                        background: #e7e7e7;
                    }
                    .count-wripper{
                        flex: 1;
                        text-align: center;
                        div{
                            // margin-top: 2.778vw;
                            .num{
                                color: #212121;
                                font-size: 3.73333vw;
                            }
                            .type{
                                color: #999;
                                font-size: 2.93333vw;
                            }
                        }
                    }
                }
                .editbtn{
                    height: 8vw;
                    border-radius: 1.06667vw;
                    border: 1px solid #fb7299;
                    color: #fb7299;
                    background-color: #fff;
                    box-sizing: border-box;
                    font-size: 3.73333vw;
                    font-weight: 350;
                }
            }
        }
        .usermsg{
            display: flex;
            flex-direction: column;
            .username{
                font-size: 4.8vw;
                color: #212121;
                margin-top: 5vw;
                margin-left: 3.2vw;
                i{
                    margin-left: 3vw;
                    font-size: 3.889vw;
                    color: #fff;
                    background-color: #a5dab5;
                    padding: 0 0.8vw;
                }
            }
            .userautograph{
                font-size: 3.46667vw;
                color: #999;
                margin-top: 4vw;
                margin-left: 3.2vw;
                display: flex;
                span{
                    flex: 9;
                }
                a{
                    flex: 1;
                    color: #3d88ba;
                }
            }
            .useruid{
                font-size: 2.8vw;
                color: #505050;
                margin-top: 2vw;
                margin-left: 3.2vw;
                span{
                    background-color: #f4f4f4;
                    padding: 0.556vw;
                }
            }
        }
    }
</style>