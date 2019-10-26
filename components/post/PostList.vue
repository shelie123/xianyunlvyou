<template>
  <div>
    <div class="content clearfix">
      <!-- 多图布局 -->
      <div class="content-details clearfix" v-if="list.images.length>=3">
        <div class="details-top">{{list.title}}</div>
        <div class="details-center">{{list.summary}}</div>
        <div class="details-image">
          <img v-for="(item,index) in list.images" :key="index" :src="item" v-if="index<3" alt />
        </div>
        <div class="details-bottom">
          <span>
            <i class="el-icon-location-outline"></i>
            {{list.cityName}}
          </span>
          <span>by</span>
          <em>
            <span>
              <img :src="$axios.defaults.baseURL+list.account.defaultAvatar" alt />
              {{list.account.nickname}}
            </span>
          </em>
          <span>
            <i class="el-icon-view"></i>
            {{list.watch}}
          </span>
          <i class="fr">{{list.like?list.like:0}}赞</i>
        </div>
      </div>

      <!-- 单图布局 -->
      <div class="content-oneList clearfix" v-if="list.images.length>0 && list.images.length<3">
        <div class="image fl">
          <img :src="list.images[0]" alt />
        </div>
        <div class="centerList fl">
          <span>{{list.title}}</span>
          <p>{{list.summary}}</p>
          <div class="userInfo">
            <span class="fl">
              <i class="el-icon-location-outline"></i>
              {{list.cityName}}
            </span>
            <span class="fl">by</span>
            <em class="fl">
              <img :src="$axios.defaults.baseURL+list.account.defaultAvatar" alt />
              {{list.account.nickname}}
            </em>
            <span class="fl">
              <i class="el-icon-view"></i>
              {{list.watch}}
            </span>
            <i class="fr">{{list.like?list.like:0}}赞</i>
          </div>
        </div>
      </div>

      <!-- 无图布局 -->
      <div class="content-nullList clearfix" v-if="list.images.length ===0">
        <div class="image fl">
          <img src="../../assets/wutu.png" alt />
        </div>
        <div class="centerList fl">
          <span>{{list.title}}</span>
          <p>{{list.summary}}</p>
          <div class="userInfo">
            <span class="fl">
              <i class="el-icon-location-outline"></i>
              {{list.cityName}}
            </span>
            <span class="fl">by</span>
            <em class="fl">
              <img :src="$axios.defaults.baseURL+list.account.defaultAvatar" alt />
              {{list.account.nickname}}
            </em>
            <span class="fl">
              <i class="el-icon-view"></i>
              {{list.watch}}
            </span>
            <i class="fr">{{list.like?list.like:0}}赞</i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["list"]
};
</script>

<style scoped lang="less">
.content {
  width: 700px;

  .content-details {
    padding-bottom: 10px;
    border-bottom: 1px #ddd solid;
    margin: 20px 0;
    .details-top {
      margin: 20px 0;
      font-size: 20px;
    }
    .details-center {
      color: #666666;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
    }
    .details-image {
      width: 100%;
      img {
        width: 32.5%;
        height: 150px;
        padding: 15px 0;
        object-fit: cover;
      }
    }
    .details-bottom {
      color: #b0a6b0;
      font-size: 12px;
      span {
        padding-right: 10px;
      }
      em {
        font-size: 12px;
        padding-right: 10px;
        color: #ffa500;
        img {
          width: 14px;
          height: 14px;
          border-radius: 50%;
        }
      }
      i {
        font-size: 16px;
        color: #ffa500;
      }
    }
  }
  .content-oneList {
    margin-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px #ddd solid;
    .image {
      width: 220px;
      img {
        width: 100%;
      }
    }
    .centerList {
      width: 460px;
      margin-left: 20px;
      span {
        display: block;
        margin-bottom: 15px;
        font-size: 18px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
      }
      p {
        width: 100%;
        color: #666666;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
      }
      .userInfo {
        margin-top: 20px;
        color: #b0a6b0;
        span {
          font-size: 12px;
          padding-right: 10px;
        }
        em {
          font-size: 12px;
          padding-right: 10px;
          color: #ffa500;
          img {
            width: 14px;
            height: 14px;
            border-radius: 50%;
          }
        }
        i {
          color: #ffa500;
        }
      }
    }
  }

  .content-nullList {
    margin-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px #ddd solid;
    .image {
      width: 220px;
      img {
        width: 100%;
      }
    }
    .centerList {
      width: 460px;
      margin-left: 20px;
      span {
        display: block;
        margin-bottom: 15px;
        font-size: 18px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
      }
      p {
        color: #666666;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
      }
      .userInfo {
        margin-top: 20px;
        color: #b0a6b0;
        span {
          font-size: 12px;
          padding-right: 10px;
        }
        em {
          font-size: 12px;
          padding-right: 10px;
          color: #ffa500;
          img {
            width: 14px;
            height: 14px;
            border-radius: 50%;
          }
        }
        i {
          color: #ffa500;
        }
      }
    }
  }
}
</style>