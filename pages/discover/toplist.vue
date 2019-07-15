<template>
<div class='toplist-container f-cb'>
    <div class='left-banner'>
        <div class='left-banner-content'>
            <h2>云音乐特色榜</h2>
            <ul class="f-cb">
                <li class="mine" v-for ="rank in rankList">
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
                    avatar: "http://p2.music.126.net/N2HO5xfYEqyQ8q6oxCw8IQ==/18713687906568048.jpg?param=40y40",
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
