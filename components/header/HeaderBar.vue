<template>
<div class="g-topbar f-cb">
  <div class="m-top">
    <div class="wrap ">
      <h1 class="logo f-cb">
        <a hidefocus="true" href="/#">网易云音乐</a>
      </h1>
      <ul class="m-nav">
        <li :class='{activeli:liIndex == 0}' @click='liActive(0)'>
          <span><a hidefocus="true" href="#"  class="z-slt"><em>发现音乐</em><sub  class="cor">&nbsp;</sub></a></span>
        </li>
        <li :class='{activeli:liIndex == 1}' @click='liActive(1)'>
          <span><a  href="#" ><em>我的音乐</em><sub class="cor">&nbsp;</sub></a></span>
        </li>
        <li :class='{activeli:liIndex == 2}' @click='liActive(2)'>
          <span><a hidefocus="true"><em>朋友</em><sub class="cor">&nbsp;</sub><i class="dot j-t" style="display:none;"></i></a></span>
        </li>
        <li>
          <span><a hidefocus="true"  target="_blank"><em>商城</em></a></span>
        </li>
        <li>
          <span><a hidefocus="true"  target="_blank" ><em>音乐人</em></a></span>
        </li>
        <li :class='{activeli:liIndex == 3}' @click='liActive(3)'>
          <span><a ><em>下载客户端</em><sub class="cor">&nbsp;</sub></a></span><sup class="hot"><span >HOT</span></sup>
        </li>
      </ul>
      <div class="m-tophead f-pr">
        <a class="link">登录</a>
        <div class="m-tlist">
          <div class="inner">
            <ul class="f-cb">
              <li><a><i class="icn icn-mb"></i><em>手机号登录</em></a></li>
              <li class="ltb"><a><i class="icn icn-wx"></i><em>微信登录</em></a></li>
              <li><a><i class="icn icn-qq"></i><em>QQ登录</em></a></li>
              <li><a><i class="icn icn-sn"></i><em>新浪微博登录</em></a></li>
              <li><a><i class="icn icn-wy"></i><em>网易邮箱账号登录</em></a></li>
            </ul>
          </div>
        </div>
      </div>
      <a class="m-toppvd f-pr">
              创作者中心
            </a>
      <div class="m-srch f-pr">
        <div class="srchbg">
          <span class="parent">
                        <input type="text"  class="txt" value="" style="opacity: 1;">
                        <label class="ph" >音乐/视频/电台/用户</label>
                    </span>
        </div>
      </div>
    </div>
  </div>
  <div class="m-subnav">
    <div class="wrap f-pr">
      <ul class="nav">
        <li :class='{subnavliactive:subnavLiIndex == 0}'  @click='subnavliActive(0)'>
          <a><em>推荐</em></a>
        </li>
        <li :class='{subnavliactive:subnavLiIndex == 1}' @click='subnavliActive(1)'>
          <a><em>排行榜</em></a>
        </li>
        <li :class='{subnavliactive:subnavLiIndex == 2}' @click='subnavliActive(2)'>
          <a><em>歌单</em></a>
        </li>
        <li :class='{subnavliactive:subnavLiIndex == 3}' @click='subnavliActive(3)'>
          <a><em>主播电台</em></a>
        </li>
        <li :class='{subnavliactive:subnavLiIndex == 4}' @click='subnavliActive(4)'>
          <a><em>歌手</em></a>
        </li>
        <li :class='{subnavliactive:subnavLiIndex == 5}' @click='subnavliActive(5)'>
          <a><em>新碟上架</em></a>
        </li>
      </ul>
    </div>

  </div>
</div>
</template>

<style lang="scss">
@import '~/components/header/header-bar.sass';
</style>

<script>
export default {
  name: "HeaderBar",
  data() {
    return {
      liIndex: 0,
      subnavLiIndex: 0,
    }
  },
  methods: {
    liActive(index) {
      this.liIndex = index;
    },
    subnavliActive(index) {
      this.subnavLiIndex = index;
    }
  }

}
</script>
