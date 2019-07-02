<template>
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
        <div class='bbbbb' style='position:relative;width:254px;height:336px;top:-342px;left:787px;background:url("https://s2.music.126.net/style/web2/img/index/download.png?3e14ec5cff66059654bc51c3cb7c9f48"'>
        <p style='position:absolute;top:300px;left:10px;color:#8d8d8d;text-align:center;font-size:12px;'>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
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
</style>
