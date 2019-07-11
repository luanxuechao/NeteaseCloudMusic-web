<template>
<div>
    <div style ='width:100%;height:336px;'>
    <carousel :img-list ='imgList'/>
    </div>
</div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Carousel from '~/components/carousel/Carousel.vue'
export default {
    components: {
        Logo,
        Carousel
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
</style>
