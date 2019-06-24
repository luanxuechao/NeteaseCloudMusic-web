<template>
<div class="g-topbar">
    <div class="m-top">
        <div class="wrap f-cb">
            <h1 class="logo">
                <a hidefocus="true" href="/#">网易云音乐</a>
            </h1>
        </div>
        <ul class="m-nav j-tflag">
            <li class="fst" >
                <span><a hidefocus="true" href="/#" data-module="discover" class="z-slt"><em>发现音乐</em><sub class="cor">&nbsp;</sub></a></span>
            </li>
            <li>
                <span><a data-action="bilog" data-log-action="page" data-log-json="{&quot;type&quot;:&quot;my&quot;}" hidefocus="true" href="/my/" data-module="my"><em>我的音乐</em><sub class="cor">&nbsp;</sub></a></span>
            </li>
            <li>
                <span><a hidefocus="true" href="/friend" data-module="friend"><em>朋友</em><sub class="cor">&nbsp;</sub><i class="dot j-t" style="display:none;"></i></a></span>
            </li>
            <li>
                <span><a hidefocus="true" href="/store/product" target="_blank" data-module="store"><em>商城</em></a></span>
            </li>
            <li>
                <span><a hidefocus="true" href="/nmusician/web/recruit" target="_blank" data-module="musician"><em>音乐人</em></a></span>
            </li>
            <li class="lst">
                <span><a id="topbar-download-link" data-action="bilog" data-log-action="page" data-log-json="{&quot;type&quot;:&quot;downloadapp&quot;,&quot;source&quot;:&quot;tab&quot;}" hidefocus="true" href="/download" data-module="download"><em>下载客户端</em><sub class="cor">&nbsp;</sub></a></span><sup class="hot">&nbsp;</sup>
            </li>
        </ul>
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
