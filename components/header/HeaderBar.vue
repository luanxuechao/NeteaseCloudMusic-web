<template>
<div class="g-topbar">
    <div class="m-top">
        <div class="wrap ">
            <h1 class="logo f-cb">
                <a hidefocus="true" href="/#">网易云音乐</a>
            </h1>
            <ul class="m-nav">
                <li class="fst">
                    <span><a hidefocus="true" href="/#"  class="z-slt"><em>发现音乐</em><sub class="cor">&nbsp;</sub></a></span>
                </li>
                <li>
                    <span><a data-action="bilog"  ><em>我的音乐</em><sub class="cor">&nbsp;</sub></a></span>
                </li>
                <li>
                    <span><a hidefocus="true"><em>朋友</em><sub class="cor">&nbsp;</sub><i class="dot j-t" style="display:none;"></i></a></span>
                </li>
                <li>
                    <span><a hidefocus="true"  target="_blank"><em>商城</em></a></span>
                </li>
                <li>
                    <span><a hidefocus="true"  target="_blank" ><em>音乐人</em></a></span>
                </li>
                <li class="lst">
                    <span><a ><em>下载客户端</em><sub class="cor">&nbsp;</sub></a></span><sup class="hot">1111</sup>
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

}
</script>
