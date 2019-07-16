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
                        <div style='margin-bottom: 25px;margin-right: 10px;'class='f-cb'>
                            <a class="u-btn2 u-btn2-2 u-btni-addply f-fl" style='float: left;color: #fff;background-position: right -428px;text-decoration: none;padding: 0 5px 0 0;display: inline-block;height: 31px;line-height: 31px;vertical-align: top;text-align: center;cursor: pointer;'>
                                <i style='display: inline-block;height: 31px;line-height: 31px;overflow: hidden;line-height: 32px;vertical-align: top;text-align: center;cursor: pointer;'><em class="ply"></em>播放</i>
                            </a>
                        </div>
                    </div>
                </div>
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
