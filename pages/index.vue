<template>
<div>
    <div class="container" :style='{"width":"100%","background":background}'>
        <div class="rotation-banner" style='width:800px;margin:0 auto; height:336px'>
            <a-carousel :beforeChange='beforeChange' autoplay arrows>
                <div slot="prevArrow" slot-scope="props" class="custom-slick-arrow" style="left: 10px;zIndex: 1">
                    <a-icon type="left-circle" />
                </div>
                <div slot="nextArrow" slot-scope="props" class="custom-slick-arrow" style="right: 10px">
                    <a-icon type="right-circle" />
                </div>
                <div v-for='img in imgList'>
                    <img :src='img.url'>
            </div>
            </a-carousel>
            <div class='bbbbb' style='position:relative;width:254px;height:336px;top:-342px;left:787px;background:url(https://s2.music.126.net/style/web2/img/index/download.png?3e14ec5cff66059654bc51c3cb7c9f48'>
                <p style='position:absolute;top:300px;left:10px;color:#8d8d8d;text-align:center;font-size:12px;'>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
            </div>
        </div>
    </div>
    <div class='f-cb' style='width:980px;min-height:700px;margin:0 auto;border:1px solid #d3d3d3;border-width:0 1px;background:url(https://s2.music.126.net/style/web2/img/frame/wrap1.png?c0801643740ad93d9b5fdacba1a8a16f) repeat-y 100% 100%'>
        <div style='width:100%;float:left;margin-right:-250px;'>
            <div style='margin-right: 251px'>
                <div style='padding:20px 20px 40px;'>
                    <div style='height:33px;padding:0 10px 0 34px;border-bottom:2px solid #C10D0C'>
                        <div style='width:12px;height:12px;background:#ffffff;border-radius:50%;border:3px solid #C20C0C;display:inline-block;float:left;line-height:28px;margin:10px 10px 0 -20px;'>
                        </div>
                        <a href="/discover/playlist/"style ='float:left;font-size:20px;line-height:28px; color:#333;text-decoration: none; margin-left:-5px;'>热门推荐</a>
                        <div style='float:left;margin:7px 0 0 20px'>
                            <a href="/discover/playlist/?cat=%E5%8D%8E%E8%AF%AD" class="s-fc3">华语</a>
                            <span class="line">|</span>
                            <a href="/discover/playlist/?cat=%E6%B5%81%E8%A1%8C" class="s-fc3">流行</a>
                            <span class="line">|</span>
                            <a href="/discover/playlist/?cat=%E6%91%87%E6%BB%9A" class="s-fc3">摇滚</a>
                            <span class="line">|</span>
                            <a href="/discover/playlist/?cat=%E6%B0%91%E8%B0%A3" class="s-fc3">民谣</a>
                            <span class="line">|</span>
                            <a href="/discover/playlist/?cat=%E7%94%B5%E5%AD%90" class="s-fc3">电子</a>
                        </div>
                        <span style='float:right;margin-top:9px;'>
                            <a href="/discover/playlist/?cat=%E7%94%B5%E5%AD%90" class="s-fc3">更多</a>
                            <i class="cor s-bg s-bg-6">&nbsp;</i>
                        </span>
                    </div>
                    <ul class="m-cvrlst f-cb">
                        <li v-for='music in musicList'>
                            <div class="u-cover u-cover-1">
                                <img :src="music.img">
                                <a :title="music.title"  class="msk" ></a>
                                <div class="bottom">
                                    <a class="icon-play f-fr" title="播放"></a>
                                    <span class="icon-headset"></span>
                                    <span class="nb">{{music.nb}}</span>
                                </div>
                            </div>
                            <p class="dec">
                                <a :title="music.title" class="tit s-fc0">{{music.title}}</a>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>

        </div>

    </div>
</div>
</template>

<script>
import Logo from '~/components/Logo.vue'
export default {
    components: {
        Logo
    },                  
    data() {
        return {
            musicList: [{
                img: 'http://p1.music.126.net/ErQgdvaZlzOPHqOm0zYaDQ==/109951164190488147.jpg?param=140y140',
                title: '华语｜聆听超级女声们的一往情深',
                nb: '110万'
            },{
                img: 'http://p1.music.126.net/qCIKkb0XpYOTe1VRIUl58Q==/109951164151093867.jpg?param=140y140',
                title: '饶舌时间 · 街拍靓仔至爱Rap',
                nb: '32万'
            },
            {
                img: 'http://p1.music.126.net/fhmefjUfMD-8qtj3JKeHbA==/18999560928537533.jpg?param=140y140',
                title: '朴树、许巍、李健、郑钧、老狼、赵雷、',
                nb: '926万'
            },
            {
                img: 'http://p2.music.126.net/OfBgWFXj94z4tTXEI7oYog==/109951164187806275.jpg?param=140y140',
                title: '没什么，都是我自己推开的',
                nb: '1464'
            },
            {
                img: 'http://p1.music.126.net/yXRr36_yIuPZhV0eNT8VLw==/109951164176862636.jpg?param=140y140',
                title: '『云村热歌』评论10w+（全收录）',
                nb: '2743万'
            },
            {
                img: 'http://p2.music.126.net/LPn5U05DR-Uj9utXXszpNw==/109951164187119370.jpg?param=140y140',
                title: '晚安，亲爱的你。',
                nb: '653'
            }
            ,{
                img: 'http://p1.music.126.net/1gNcBmzdIaQtU00Dvp_TvQ==/109951163912081772.jpg?param=140y140',
                title: '好听到单曲循环',
                nb: '1447万'
            },{
                img: 'http://p2.music.126.net/_9aPYCJxc-_gAu3Sd_6qsw==/18621328930234754.jpg?param=140y140',
                title: '呓语 王贰浪',
                nb: '375万'
            }],
            imgList: [{
                    url: 'http://p1.music.126.net/pXoXQ06sPYt0yqBq4Hko3Q==/109951164182800685.jpg',
                    background: 'url("http://p1.music.126.net/-2NyaGYG49DnGcPOUu-Gvg==/109951164184914153.jpg") repeat-x'
                },
                {
                    url: 'http://p1.music.126.net/p-anjjSzja1D4svWuNyAnQ==/109951164185502645.jpg',
                    background: 'url("http://p1.music.126.net/BkgfFAeWsVDip_VRhhErnQ==/109951164185495368.jpg") repeat-x'
                },
                {
                    url: 'http://p1.music.126.net/HHUs_8z-i52uvS1-syHywg==/109951164183264235.jpg',
                    background: 'url("http://p1.music.126.net/f-dG5U4JPw0LdRwYYRnpyQ==/109951164184909577.jpg")'
                },
                {
                    url: 'http://p1.music.126.net/gHyNlmXFIMWsToNy1lBcPg==/109951164184903316.jpg',
                    background: 'url("http://p1.music.126.net/xIb2AOuGtRA7x653sRNwmQ==/109951164184908215.jpg") repeat-x'
                },
                {
                    url: 'http://p1.music.126.net/ACx0cRp6puBheqiczJX-IA==/109951164184895787.jpg',
                    background: 'url("http://p1.music.126.net/C5OA7pTsXTlsO31cMgOZng==/109951164184895792.jpg") repeat-x'
                }
            ],
            background: 'url("http://p1.music.126.net/-2NyaGYG49DnGcPOUu-Gvg==/109951164184914153.jpg") repeat-x'
        }
    },
    beforeCreate() {
        console.log(this.imgList)
    },
    methods: {
        beforeChange(from, to) {
            console.log(to)
            console.log(this.imgList)
            this.background = this.imgList[to].background;
        }
    },
    layout(context) {
        return 'index'
    }
}
</script>

<style scoped>
.ant-carousel>>>.custom-slick-arrow {
    width: 25px;
    height: 25px;
    font-size: 25px;
    color: #fff;
    background-color: rgba(31, 45, 61, .11);
    opacity: 0.3;
}

.ant-carousel>>>.custom-slick-arrow:before {
    display: none;
}

.ant-carousel>>>.custom-slick-arrow:hover {
    opacity: 0.5;
}

/**   */
.ant-carousel>>>.slick-dots {
    height: auto
}

.ant-carousel>>>.slick-dots li {
    cursor: pointer;
    margin: 0 10px;
}

.ant-carousel>>>.slick-slide img {
    display: block;
    margin: auto;
    width: 773px;
    height: 336px;
}

.ant-carousel>>>.slick-thumb {
    bottom: -45px;
}

.ant-carousel>>>.slick-thumb li {
    width: 60px;
    height: 45px;
}

.ant-carousel>>>.slick-thumb li img {
    width: 100%;
    height: 100%;
    filter: grayscale(100%);
}

.ant-carousel>>>.slick-thumb li.slick-active img {
    filter: grayscale(0%);
}

.ant-carousel>>>.slick-dots li button {
    background: #eee;
    opacity: 1;
    width: 6px;
    height: 6px;
    border-radius: 16px;
}

.ant-carousel>>>.slick-dots li:hover button {
    background: #C20C0C;
}

.ant-carousel>>>.slick-dots li.slick-active button {
    background: #C20C0C;
}

.f-cb:after {
    clear: both;
    content: '.';
    display: block;
    height: 0;
    visibility: hidden;
}

.s-fc3 {
    color: #666;
    font-size: 12px;
}

.line {
    margin: 0 10px;
    color: #ccc;
}

.cor {
    display: inline-block;
    width: 12px;
    height: 12px;
    margin-left: 0px;
    vertical-align: middle;
}

.s-bg-6 {
    background: url('https://s2.music.126.net/style/web2/img/index/index.png?3f8dff64809e0bff8246c41ef867b1a0')
}

.s-bg {
    background-position: 0 -240px;
}

.m-cvrlst {
    margin: 20px 0 0 -42px;
}

.m-cvrlst li {
    float: left;
    display: inline-block;
    width: 182px;
    height: 234px;
    overflow: hidden;
    padding: 0 0 30px 50px;
    line-height: 1.4;
}

.u-cover-1 {
    width: 140px;
    height: 140px;
}

.u-cover {
    position: relative;
    display: block;
}

.u-cover img {
    display: block;
    width: 100%;
    max-width: 100%;
    height: 100%;
}

.u-cover .bottom,
.msk {
    background: url('https://s2.music.126.net/style/web2/img/coverall.png?fdbd0d1abb947db559f13f8771ce44b9') no-repeat;
}

.u-cover .icon-play,
.u-cover .icon-headset {
    background: url('https://s2.music.126.net/style/web2/img/iconall.png?7d696a83b957a41929c2906a750f8764') no-repeat;
}

.u-cover-1 .msk {
    background-position: 0 0;
}

.u-cover .msk {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.u-cover .bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 27px;
    background-position: 0 -537px;
    color: #ccc;
}

.u-cover .icon-play {
    position: absolute;
    right: 10px;
    bottom: 5px;
    width: 22px;
    font-size: 12px;
    height: 17px;
    background-position: 0 0;
}

.u-cover .icon-headset,
.u-cover .icon-play {
    display: inline-block;
}

.f-fr {
    float: right;
}

.u-cover .icon-headset {
    float: left;
    width: 14px;
    font-size: 12px;
    height: 11px;
    background-position: 0 -24px;
    margin: 9px 5px 9px 10px;
}

.nb {
    float: left;
    font-size: 12px;
    margin: 6px 0 0 0;
}

.m-cvrlst li .dec {
    margin: 8px 0 3px;
    font-size: 14px;
}

.m-cvrlst li .tit {
    display: inline-block;
    max-width: 100%;
    width: 100%;
    vertical-align: middle;
}

.s-fc0,
a.s-fc0:hover {
    color: #000;
}
</style>
