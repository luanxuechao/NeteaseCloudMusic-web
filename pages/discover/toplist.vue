<template>
<div class='toplist-container f-cb'>
    <div class='left-banner'>
        <div class='left-banner-content'>
            <h2>云音乐特色榜</h2>
            <ul class="f-cb">
                <li class="mine" v-for="rank in rankList">
                    <div class="item f-cb">
                        <div class="left">
                            <a class="avatar" href="/discover/toplist?id=19723756">
                                <img :src="rank.avatar" alt="">
                                <span class="msk"></span>
                            </a>
                        </div>
                        <p class="name"><a href="/discover/toplist?id=19723756" class="s-fc0">{{rank.title}}</a></p>
                        <p class="s-fc4">{{rank.updateTime}}</p>
                    </div>
                </li>
            </ul>
            <h2 class='scd'>全球媒体榜</h2>
            <ul class="f-cb">
                <li class="mine" v-for="rank in rankList">
                    <div class="item f-cb">
                        <div class="left">
                            <a class="avatar" href="/discover/toplist?id=19723756">
                                <img :src="rank.avatar" alt="">
                                <span class="msk"></span>
                            </a>
                        </div>
                        <p class="name"><a href="/discover/toplist?id=19723756" class="s-fc0">{{rank.title}}</a></p>
                        <p class="s-fc4">{{rank.updateTime}}</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <div style="float:left;width:740px;height:1000px;">
        <div style='padding:40px;'>
            <div class='f-cb'>
                <div style='float: left;position: relative;display: inline;margin: 0 -220px 0 0;width: 150px;height: 150px;border:1px solid #ccc;padding:3px;display:inline;'>
                    <img style='width: 142px;height: 142px;display:block' src='http://p1.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=150y150'>
                </div>
                <div style='float:right;width:100%'>
                    <div style='margin-left:187px;'>
                        <div style='margin:16px 0 4px;position:relative;line-height:24px;'>
                            <h2 style='line-height: 24px;font-size: 20px;font-weight: normal;'>云音乐飙升榜</h2>
                        </div>
                        <div style='margin: 0 0 20px;line-height: 35px;font-size:12px;'>
                            <i class='u-icn' style='float: left;margin: 9px 0 0 3px;width: 13px;height: 13px;background-position: -18px -682px;'></i>
                            <span style='margin-left: 5px;'>
                                最近更新：07月16日
                            </span>
                            <span style='color: #999;'>
                                （每天更新）
                            </span>
                        </div>
                        <div class='btns f-cb'>
                            <a class="u-btn2 u-btn2-2 u-btni-addply f-fl">
                                <i style=''><em class="ply"></em>播放</i>
                            </a>
                            <a href="" class="u-btni u-btni-add"></a>
                            <a class='u-collect'>
                                <i class="iconfont">&#xe601;</i>
                                (2090957)
                            </a>
                            <a class='u-collect'>
                                <i class="iconfont">&#xe602;</i>
                                (6095)
                            </a>
                            <a class='u-collect'>
                                <i class="iconfont">&#xe677;</i>
                                下载
                            </a>
                            <a class='u-collect'>
                                <i class="iconfont">&#xe600;</i>
                                (1000)
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class='g-wrap12'>
            <div class='u-title-1 u-title f-cb'>
                <h3><span class='f-ff2'>歌曲列表</span></h3>
                <span class='sub'>100首歌</span>
                <span class='more'>播放：<strong>2150490112</strong>次</span>
            </div>
            <div>
                <table class='m-table m-table-rank'>
                    <thead>
                        <tr>
                            <th class="first w1"></th>
                            <th>
                                <div class="wp">标题</div>
                            </th>
                            <th class="w2-1">
                                <div class="wp">时长</div>
                            </th>
                            <th class="w3">
                                <div class="wp">歌手</div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr  class="even ">
                            <td>
                                <div class="hd"><span class="num">1</span>
                                    <div class="rk "><span class="ico u-icn u-icn-73 s-fc9">5</span></div>
                                </div>
                            </td>
                            <td class="rank">
                                <div class="f-cb">
                                    <div class="tt"><a href="/song?id=1377078201"><img class="rpic" src="http://p1.music.126.net/MLXjdgJQb5Zra2K_UbkhEw==/109951164219640182.jpg?param=50y50&amp;quality=100"></a><span data-res-id="1377078201" data-res-type="18" data-res-action="play" class="ply ">&nbsp;</span>
                                        <div class="ttc"><span class="txt"><a href="/song?id=1377078201"><b title="离岸">离岸</b></a></span></div>
                                    </div>
                                </div>
                            </td>
                            <td class="s-fc3">
                                <span class="u-dur">03:09</span>
                                <div class="opt hshow"><a class="u-icn u-icn-81 icn-add" title="添加到播放列表"></a><span class="icn icn-fav" title="收藏"></span><span class="icn icn-share" title="分享"></span><span class="icn icn-dl" title="下载"></span></div>
                            </td>
                            <td class="">
                                <div class="text" title="苏晗"><span title="苏晗"><a class="">苏晗</a></span></div>
                            </td>
                        </tr>
                         <tr  class="">
                            <td>
                                <div class="hd"><span class="num">2</span>
                                    <div class="rk "><span class="ico u-icn u-icn-73 s-fc9">5</span></div>
                                </div>
                            </td>
                            <td class="rank">
                                <div class="f-cb">
                                    <div class="tt"><a href="/song?id=1377078201"><img class="rpic" src="http://p1.music.126.net/MLXjdgJQb5Zra2K_UbkhEw==/109951164219640182.jpg?param=50y50&amp;quality=100"></a><span data-res-id="1377078201" data-res-type="18" data-res-action="play" class="ply ">&nbsp;</span>
                                        <div class="ttc"><span class="txt"><a href="/song?id=1377078201"><b title="离岸">离岸</b></a></span></div>
                                    </div>
                                </div>
                            </td>
                            <td class="s-fc3">
                                <span class="u-dur">03:09</span>
                                <div class="opt hshow"><a class="u-icn u-icn-81 icn-add" title="添加到播放列表"></a><span class="icn icn-fav" title="收藏"></span><span class="icn icn-share" title="分享"></span><span class="icn icn-dl" title="下载"></span></div>
                            </td>
                            <td class="">
                                <div class="text" title="苏晗"><span title="苏晗"><a class="">苏晗</a></span></div>
                            </td>
                        </tr>
                         <tr  class="even ">
                            <td>
                                <div class="hd"><span class="num">3</span>
                                    <div class="rk "><span class="ico u-icn u-icn-73 s-fc9">5</span></div>
                                </div>
                            </td>
                            <td class="rank">
                                <div class="f-cb">
                                    <div class="tt"><a href="/song?id=1377078201"><img class="rpic" src="http://p1.music.126.net/MLXjdgJQb5Zra2K_UbkhEw==/109951164219640182.jpg?param=50y50&amp;quality=100"></a><span data-res-id="1377078201" data-res-type="18" data-res-action="play" class="ply ">&nbsp;</span>
                                        <div class="ttc"><span class="txt"><a href="/song?id=1377078201"><b title="离岸">离岸</b></a></span></div>
                                    </div>
                                </div>
                            </td>
                            <td class="s-fc3">
                                <span class="u-dur">03:09</span>
                                <div class="opt hshow"><a class="u-icn u-icn-81 icn-add" title="添加到播放列表"></a><span class="icn icn-fav" title="收藏"></span><span class="icn icn-share" title="分享"></span><span class="icn icn-dl" title="下载"></span></div>
                            </td>
                            <td class="">
                                <div class="text" title="苏晗"><span title="苏晗"><a class="">苏晗</a></span></div>
                            </td>
                        </tr>
                        <tr  class="">
                            <td>
                                <div class="hd"><span class="num">4</span>
                                    <div class="rk "><span class="ico u-icn u-icn-73 s-fc9">5</span></div>
                                </div>
                            </td>
                            <td class="">
                                <div class="f-cb">
                                    <div class="tt">
                                        <span data-res-id="1377078201" data-res-type="18" data-res-action="play" class="ply ">&nbsp;</span>
                                        <div class="ttc"><span class="txt"><a href="/song?id=1377078201"><b title="离岸">离岸</b></a></span></div>
                                    </div>
                                </div>
                            </td>
                            <td class="s-fc3">
                                <span class="u-dur">03:09</span>
                                <div class="opt hshow"><a class="u-icn u-icn-81 icn-add" title="添加到播放列表"></a><span class="icn icn-fav" title="收藏"></span><span class="icn icn-share" title="分享"></span><span class="icn icn-dl" title="下载"></span></div>
                            </td>
                            <td class="">
                                <div class="text" title="苏晗"><span title="苏晗"><a class="">苏晗</a></span></div>
                            </td>
                        </tr>
                         <tr  class="">
                            <td>
                                <div class="hd"><span class="num">4</span>
                                    <div class="rk "><span class="ico u-icn u-icn-73 s-fc9">5</span></div>
                                </div>
                            </td>
                            <td class="">
                                <div class="f-cb">
                                    <div class="tt">
                                        <span data-res-id="1377078201" data-res-type="18" data-res-action="play" class="ply ">&nbsp;</span>
                                        <div class="ttc"><span class="txt"><a href="/song?id=1377078201"><b title="离岸">离岸</b></a></span></div>
                                    </div>
                                </div>
                            </td>
                            <td class="s-fc3">
                                <span class="u-dur">03:09</span>
                                <div class="opt hshow"><a class="u-icn u-icn-81 icn-add" title="添加到播放列表"></a><span class="icn icn-fav" title="收藏"></span><span class="icn icn-share" title="分享"></span><span class="icn icn-dl" title="下载"></span></div>
                            </td>
                            <td class="">
                                <div class="text" title="苏晗"><span title="苏晗"><a class="">苏晗</a></span></div>
                            </td>
                        </tr>
                         <tr  class="">
                            <td>
                                <div class="hd"><span class="num">4</span>
                                    <div class="rk "><span class="ico u-icn u-icn-73 s-fc9">5</span></div>
                                </div>
                            </td>
                            <td class="">
                                <div class="f-cb">
                                    <div class="tt">
                                        <span data-res-id="1377078201" data-res-type="18" data-res-action="play" class="ply ">&nbsp;</span>
                                        <div class="ttc"><span class="txt"><a href="/song?id=1377078201"><b title="离岸">离岸</b></a></span></div>
                                    </div>
                                </div>
                            </td>
                            <td class="s-fc3">
                                <span class="u-dur">03:09</span>
                                <div class="opt hshow"><a class="u-icn u-icn-81 icn-add" title="添加到播放列表"></a><span class="icn icn-fav" title="收藏"></span><span class="icn icn-share" title="分享"></span><span class="icn icn-dl" title="下载"></span></div>
                            </td>
                            <td class="">
                                <div class="text" title="苏晗"><span title="苏晗"><a class="">苏晗</a></span></div>
                            </td>
                        </tr>
                         <tr  class="">
                            <td>
                                <div class="hd"><span class="num">4</span>
                                    <div class="rk "><span class="ico u-icn u-icn-73 s-fc9">5</span></div>
                                </div>
                            </td>
                            <td class="">
                                <div class="f-cb">
                                    <div class="tt">
                                        <span data-res-id="1377078201" data-res-type="18" data-res-action="play" class="ply ">&nbsp;</span>
                                        <div class="ttc"><span class="txt"><a href="/song?id=1377078201"><b title="离岸">离岸</b></a></span></div>
                                    </div>
                                </div>
                            </td>
                            <td class="s-fc3">
                                <span class="u-dur">03:09</span>
                                <div class="opt hshow"><a class="u-icn u-icn-81 icn-add" title="添加到播放列表"></a><span class="icn icn-fav" title="收藏"></span><span class="icn icn-share" title="分享"></span><span class="icn icn-dl" title="下载"></span></div>
                            </td>
                            <td class="">
                                <div class="text" title="苏晗"><span title="苏晗"><a class="">苏晗</a></span></div>
                            </td>
                        </tr>
                         <tr  class="">
                            <td>
                                <div class="hd"><span class="num">4</span>
                                    <div class="rk "><span class="ico u-icn u-icn-73 s-fc9">5</span></div>
                                </div>
                            </td>
                            <td class="">
                                <div class="f-cb">
                                    <div class="tt">
                                        <span data-res-id="1377078201" data-res-type="18" data-res-action="play" class="ply ">&nbsp;</span>
                                        <div class="ttc"><span class="txt"><a href="/song?id=1377078201"><b title="离岸">离岸</b></a></span></div>
                                    </div>
                                </div>
                            </td>
                            <td class="s-fc3">
                                <span class="u-dur">03:09</span>
                                <div class="opt hshow"><a class="u-icn u-icn-81 icn-add" title="添加到播放列表"></a><span class="icn icn-fav" title="收藏"></span><span class="icn icn-share" title="分享"></span><span class="icn icn-dl" title="下载"></span></div>
                            </td>
                            <td class="">
                                <div class="text" title="苏晗"><span title="苏晗"><a class="">苏晗</a></span></div>
                            </td>
                        </tr>
                         <tr  class="">
                            <td>
                                <div class="hd"><span class="num">4</span>
                                    <div class="rk "><span class="ico u-icn u-icn-73 s-fc9">5</span></div>
                                </div>
                            </td>
                            <td class="">
                                <div class="f-cb">
                                    <div class="tt">
                                        <span data-res-id="1377078201" data-res-type="18" data-res-action="play" class="ply ">&nbsp;</span>
                                        <div class="ttc"><span class="txt"><a href="/song?id=1377078201"><b title="离岸">离岸</b></a></span></div>
                                    </div>
                                </div>
                            </td>
                            <td class="s-fc3">
                                <span class="u-dur">03:09</span>
                                <div class="opt hshow"><a class="u-icn u-icn-81 icn-add" title="添加到播放列表"></a><span class="icn icn-fav" title="收藏"></span><span class="icn icn-share" title="分享"></span><span class="icn icn-dl" title="下载"></span></div>
                            </td>
                            <td class="">
                                <div class="text" title="苏晗"><span title="苏晗"><a class="">苏晗</a></span></div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <div>
    </div>
</div>
</template>

<style lang="scss">
@import '~/pages/discover/css/toplist.sass'
</style>

<script>
export default {
    data() {
        return {
            rankList: [{
                    title: "云音乐飙升榜",
                    avatar: "http://p1.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=40y40",
                    updateTime: "每天更新"
                },
                {
                    title: "网易原创歌曲榜",
                    avatar: "http://p2.music.126.net/sBzD11nforcuh1jdLSgX7g==/18740076185638788.jpg?param=40y40",
                    updateTime: "每周四更新"
                },
                {
                    title: "云音乐新歌榜",
                    avatar: "http://p2.music.126.net/N2HO5xfYEqyQ8q6oxCw8IQ==/18713687906568048.jpg?param=40y40",
                    updateTime: "每天更新"
                },
                {
                    title: "云音乐热歌榜",
                    avatar: "http://p2.music.126.net/GhhuF6Ep5Tq9IEvLsyCN7w==/18708190348409091.jpg?param=40y40",
                    updateTime: "每周四更新"
                }
            ],
        }
    },
    layout(context) {
        return 'index'
    }
}
</script>

<style scoped>

</style>
