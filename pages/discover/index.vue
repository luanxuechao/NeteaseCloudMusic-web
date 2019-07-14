<template>
<div>
    <div class="container" :style='{"width":"100%","background":background}'>
        <div class="rotation-banner" style='width:800px;margin:0 auto; height:336px'>
            <a-carousel :beforeChange='beforeChange' autoplay arrows easing='null'>
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
                <div style='padding:20px 20px 0 20px;'>
                    <div style='height:33px;padding:0 10px 0 34px;border-bottom:2px solid #C10D0C'>
                        <div style='width:12px;height:12px;background:#ffffff;border-radius:50%;border:3px solid #C20C0C;display:inline-block;float:left;line-height:28px;margin:10px 10px 0 -20px;'>
                        </div>
                        <a href="/discover/playlist/" style='float:left;font-size:20px;line-height:28px; color:#333;text-decoration: none; margin-left:-5px;'>热门推荐</a>
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
                                <a :title="music.title" class="msk"></a>
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
        <div style='width:100%;float:left;margin-right:-250px;'>
            <div style='margin-right: 251px'>
                <div class='n-disk' style='padding:20px 0 0 20px;'>
                    <div style='height:33px;padding:0 10px 0 34px;border-bottom:2px solid #C10D0C'>
                        <div style='width:12px;height:12px;background:#ffffff;border-radius:50%;border:3px solid #C20C0C;display:inline-block;float:left;line-height:28px;margin:10px 10px 0 -20px;'>
                        </div>
                        <a href="/discover/playlist/" style='float:left;font-size:20px;line-height:28px; color:#333;text-decoration: none; margin-left:-5px;'>新碟上架</a>
                        <span style='float:right;margin-top:9px;'>
                            <a href="/discover/playlist/?cat=%E7%94%B5%E5%AD%90" class="s-fc3">更多</a>
                            <i class="cor s-bg s-bg-6">&nbsp;</i>
                        </span>
                    </div>
                    <div style='position: relative;height:186px;margin:20px 20px 37px 0px;border:1px solid #d3d3d3'>
                        <div style='height:184px;background:#f5f5f5;padding-left:16px;border:1px solid #fff'>
                            <a class='click-flag pre s-bg s-bg-7'></a>
                            <div class='roll f-pr'>
                                <ul class="f-cb roller-flag" style="left: 0px; transition: none 0s ease 0s;" id="auto-id-1hkI8URlM6kOvgaK">
                                    <li v-for='music in newMusicList'>
                                        <div class="u-cover u-cover-alb1">
                                            <img class="j-img" :src="music.img">
                                            <a :title="music.title" href="/album?id=79904422" class="msk"></a>
                                            <a href="javascript:;" class="icon-play f-alpha f-fr" title="播放" data-res-type="19" data-res-id="79904422" data-res-action="play"></a>
                                        </div>
                                        <p class="f-thide"><a :title="music.title" href="/album?id=79904422" class="s-fc0 tit">{{music.title}}</a></p>
                                        <p class="tit f-thide" :title="music.player">
                                            <a class="s-fc3" href="/artist?id=1060019">{{music.player}}</a>
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <a class='click-flag nxt s-bg s-bg-8'></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div style='width:100%;float:left;margin-right:-250px; padding-botton:40px;'>
            <div style='margin-right: 251px;padding-bottom:40px;'>
                <div class='n-disk' style='padding:20px 0 0 20px;'>
                    <div style='height:33px;padding:0 10px 0 34px;border-bottom:2px solid #C10D0C'>
                        <div style='width:12px;height:12px;background:#ffffff;border-radius:50%;border:3px solid #C20C0C;display:inline-block;float:left;line-height:28px;margin:10px 10px 0 -20px;'>
                        </div>
                        <a href="/discover/playlist/" style='float:left;font-size:20px;line-height:28px; color:#333;text-decoration: none; margin-left:-5px;'>榜单</a>
                        <span style='float:right;margin-top:9px;'>
                            <a href="/discover/playlist/?cat=%E7%94%B5%E5%AD%90" class="s-fc3">更多</a>
                            <i class="cor s-bg s-bg-6">&nbsp;</i>
                        </span>
                    </div>
                </div>
                <div class='n-bilst' style='height:472px;margin-left:20px;margin-top:20px;padding-left:1px;background:url(https://s2.music.126.net/style/web2/img/index/index_bill.png?27898822202dd91666825306aaafe8a4) no-repeat'>
                    <dl class='blk'  v-for='rankMusic in rankMusicList'>
                        <dt class="top">
                            <div class="cver u-cover u-cover-4">
                                <img class="j-img" :src="rankMusic.imgUri">
                                <a href="/discover/toplist?id=19723756" class="msk" :title="rankMusic.rankTitle"></a>
                            </div>
                            <div class="tit">
                                <a href="/discover/toplist?id=19723756" :title="rankMusic.rankTitle">
                                    <h3 class="f-fs1 f-thide">{{rankMusic.rankTitle}}</h3>
                                </a>
                                <div class="btn">
                                    <a href="javascript:;" class="s-bg s-bg-9 f-tdn" hidefocus="true" title="播放">播放</a>
                                    <a href="javascript:;" hidefocus="true" class="s-bg s-bg-10 f-tdn subscribe-flag " title="收藏">收藏</a>
                                </div>
                            </div>
                        </dt>
                        <dd>
                            <ol>
                                <li onmouseover="this.className='z-hvr'" onmouseout="this.className=''" class="" v-for='(music,index) in rankMusic.musicList'>
                                    <span  :class='index>2?"no":"no no-top"'>{{ index+1 }}</span>
                                    <a href="/song?id=1374051000" class="nm s-fc0 f-thide" title="木偶人">{{music.title}}</a>
                                    <div class="oper">
                                        <a href="#" class="s-bg s-bg-11" title="播放"></a>
                                        <a href="#" class="u-icn u-icn-81" title="添加到播放列表"></a>
                                        <a href="#" class="s-bg s-bg-12" title="收藏"></a>
                                    </div>
                                </li>
                            </ol>
                            <div class="more"><a href="/discover/toplist?id=19723756" class="s-fc0">查看全部&gt;</a></div>
                        </dd>
                    </dl>
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
            newMusicList: [{
                    img: 'http://p3.music.126.net/qOzi5hQa9oxtn-A0YaRqUg==/109951164161475447.jpg?param=100y100',
                    title: 'Joytime III',
                    player: 'Marshmello'
                }, {
                    img: 'http://p3.music.126.net/6Q0TwJbAqFmfoEZ76uAxOw==/109951164177750851.jpg?param=100y100',
                    title: 'BTS WORLD OST ',
                    player: 'BTS (防弹少年团) / V.A. / 屋顶月光 / 李贤'
                }, {
                    img: 'http://p4.music.126.net/OP4iOnJX00e_4dgPWwCeug==/109951164186397410.jpg?param=100y100',
                    title: '带着爸爸去留学',
                    player: '群星'
                },
                {
                    img: 'http://p3.music.126.net/mXqmc1nD5mu2S4pEvBVHzw==/109951164141857357.jpg?param=100y100',
                    title: '我们在夏枝繁茂时再见',
                    player: '钱正昊'
                },
                {
                    img: 'http://p4.music.126.net/ae3c2-_Dv7AaOmhELuMn_A==/109951164163755213.jpg?param=100y100',
                    title: '忘记拥抱',
                    player: '火箭少女101Sunee'
                }
            ],
            musicList: [{
                    img: 'http://p1.music.126.net/ErQgdvaZlzOPHqOm0zYaDQ==/109951164190488147.jpg?param=140y140',
                    title: '华语｜聆听超级女声们的一往情深',
                    nb: '110万'
                }, {
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
                }, {
                    img: 'http://p1.music.126.net/1gNcBmzdIaQtU00Dvp_TvQ==/109951163912081772.jpg?param=140y140',
                    title: '好听到单曲循环',
                    nb: '1447万'
                }, {
                    img: 'http://p2.music.126.net/_9aPYCJxc-_gAu3Sd_6qsw==/18621328930234754.jpg?param=140y140',
                    title: '呓语 王贰浪',
                    nb: '375万'
                }
            ],
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
            rankMusicList: [{
                    rankTitle: '云音乐飙升榜',
                    imgUri: 'http://p4.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=100y100',
                    musicList: [{
                            title: '关于遇见你-蘇山海',
                        },
                        {
                            title: 'Wayward One',
                        },
                        {
                            title: '沉迷',
                        },
                        {
                            title: '这是我一生中最勇敢的瞬间',
                        }, {
                            title: '闻妖',
                        },
                        {
                            title: '无名之辈',
                        },
                        {
                            title: '头号任务',
                        },
                        {
                            title: 'bad guy',
                        },
                        {
                            title: '碧海问舟',
                        },
                        {
                            title: '失去',
                        }
                    ]

                }, {
                    rankTitle: '云音乐新歌榜',
 imgUri: 'http://p4.music.126.net/N2HO5xfYEqyQ8q6oxCw8IQ==/18713687906568048.jpg?param=100y100',
                    musicList: [{
                            title: '关于遇见你-蘇山海',
                        },
                        {
                            title: 'Wayward One',
                        },
                        {
                            title: '沉迷',
                        },
                        {
                            title: '这是我一生中最勇敢的瞬间',
                        }, {
                            title: '闻妖',
                        },
                        {
                            title: '无名之辈',
                        },
                        {
                            title: '头号任务',
                        },
                        {
                            title: 'bad guy',
                        },
                        {
                            title: '碧海问舟',
                        },
                        {
                            title: '失去',
                        }
                    ]

                },
                {
                    rankTitle: '云音乐原创榜',
                     imgUri: 'http://p4.music.126.net/sBzD11nforcuh1jdLSgX7g==/18740076185638788.jpg?param=100y100',
                    musicList: [{
                            title: '关于遇见你-蘇山海',
                        },
                        {
                            title: 'Wayward One',
                        },
                        {
                            title: '沉迷',
                        },
                        {
                            title: '这是我一生中最勇敢的瞬间',
                        }, {
                            title: '闻妖',
                        },
                        {
                            title: '无名之辈',
                        },
                        {
                            title: '头号任务',
                        },
                        {
                            title: 'bad guy',
                        },
                        {
                            title: '碧海问舟',
                        },
                        {
                            title: '失去',
                        }
                    ]
                }
            ],
            background: 'url("http://p1.music.126.net/-2NyaGYG49DnGcPOUu-Gvg==/109951164184914153.jpg") repeat-x'
        }
    },
    beforeCreate() {},
    methods: {
        beforeChange(from, to) {
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

a {
    text-decoration: none;
    color: #333;
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

.s-bg,
.n-disk li {
    background: url('https://s2.music.126.net/style/web2/img/index/index.png?3f8dff64809e0bff8246c41ef867b1a0')
}

.s-bg-6 {
    background-position: 0 -240px;
}

.s-bg-7 {
    background-position: -260px -75px;
}

.s-bg-8 {
    background-position: -300px -75px;
}

.s-bg-9 {
    background-position: -267px -205px;
}

.s-bg-9:hover {
    background-position: -267px -235px;
}

.s-bg-10 {
    background-position: -300px -205px;
}

.s-bg-10:hover {
    background-position: -300px -235px;
}

.s-bg-11 {
    background-position: -267px -268px;
}

.s-bg-12 {
    background-position: -297px -268px;
}

.u-icn,
.u-icn2,
.u-icn3 {
    display: inline-block;
    overflow: hidden;
    vertical-align: middle;
}

.u-icn,
.u-title-1 .out .icon {
    background: url('https://s2.music.126.net/style/web2/img/icon.png?fabd0804bcfa70ec1d6b5305281eaf7b') no-repeat 0 9999px;
}

.u-icn-81 {
    width: 13px;
    height: 13px;
    background-position: 0 -700px;
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
.u-cover .msk,
.msk {
    background: url('https://s2.music.126.net/style/web2/img/coverall.png?fdbd0d1abb947db559f13f8771ce44b9') no-repeat;
}

.u-cover .icon-play,
.u-cover-alb1 .icon-play,
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

.n-disk .pre {
    left: 4px;
}

.n-disk .nxt {
    right: 4px;
}

.n-disk .pre,
.n-disk .nxt {
    position: absolute;
    top: 71px;
    width: 17px;
    height: 17px;
}

.n-disk .roll {
    float: left;
    width: 654px;
    height: 180px;
    overflow: hidden;
}

.f-pr {
    position: relative;
}

.n-disk ul {
    position: absolute;
    top: 0;
    width: 645px;
    margin: 28px 0 0 0;
}

.n-disk li {
    float: left;
    display: inline;
    width: 118px;
    height: 150px;
    margin-left: 11px;
    background: #f5f5f5;
}

.n-disk .u-cover {
    margin-bottom: 7px;
}

.u-cover-alb1 {
    width: 100px;
    height: 100px;
}

.u-cover-alb1 .msk {
    width: 118px;
    height: 100px;
    background-position: 0 -570px;
}

.u-cover-alb1 .icon-play,
.u-cover-alb2 .icon-play,
.u-cover-alb3 .icon-play {
    display: none;
}

.u-cover-0 .icon-play,
.u-cover-alb1 .icon-play,
.u-cover-10 .icon-play,
.u-cover-11 .icon-play,
.u-cover-12 .icon-play {
    left: 72px;
    width: 22px;
    height: 22px;
    background-position: 0 -85px;
}

.u-cover .icon-play {
    position: absolute;
    right: 10px;
    bottom: 5px;
    width: 16px;
    height: 17px;
    background-position: 0 0;
}

.n-disk p {
    width: 90%;
    line-height: 18px;
}

.f-thide {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
}

.s-fc0,
a.s-fc0:hover {
    color: #000;
}

.u-cover-alb1:hover a {
    display: block;
}

.n-disk li .s-fc0,
.n-disk li .s-fc3 {
    font-size: 12px;
}

.n-bilst .blk {
    float: left;
    font-size:12px;
    width: 230px;
}

.n-bilst .top {
    height: 100px;
    padding: 20px 0 0 19px;
    margin-bottom: 20px;
}

.n-bilst .cver {
    float: left;
    display: inline;
}

.u-cover-4 {
    width: 80px;
    height: 80px;
}

.n-bilst .tit {
    float: left;
    width: 116px;
    margin: 6px 0 0 10px;
}

.n-bilst .btn {
    margin-top: 10px;
}

.n-bilst .btn a {
    display: block;
    float: left;
    width: 22px;
    height: 22px;
    margin-right: 10px;
    text-indent: -9999px;
}
.n-bilst .tit h3 {
    width: 100%;
    font-weight: bold;
}

.n-bilst .btn a:hover {
    color: #eee;
}

.n-bilst ol {
    height: 319px;
    margin-left: 50px;
    line-height: 32px;
}

.n-bilst ol li {
    height: 32px;
    list-style: none
}

.z-hvr:hover .oper {
    display: block;
}

.n-bilst ol .no {
    float: left;
    position: relative;
    width: 35px;
    height: 32px;
    margin-left: -35px;
    text-align: center;
    color: #666;
    font-size: 16px;
}

.n-bilst ol .no-top {
    color: #c10d0c;
}

.n-bilst ol .nm {
    float: left;
    width: 170px;
    height: 32px;
}
.n-bilst ol li:hover .nm {
    width: 96px;
}

.n-bilst ol .oper {
    display: none;
    float: right;
    width: 82px;
    margin-top: 7px;
}

.n-bilst ol .oper a {
    float: left;
    width: 17px;
    height: 17px;
    margin-right: 10px;
}

.n-bilst ol .oper .u-icn-81 {
    margin: 2px 6px 0 0;
}

.n-bilst .more {
    clear: both;
    height: 32px;
    margin-right: 32px;
    font-size: 12px;
    text-align: right;
    line-height: 32px;
}

</style>
