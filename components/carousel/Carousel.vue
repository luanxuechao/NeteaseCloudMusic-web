<template>
<div class='carousel' :style='{"background":imgList[activeIndex].background}'>
    <div class='carousel-content carousel-re'>
        <div class='carousel-nav'>
            <a class="btnl" v-on:click='prev'></a>
            <a class="btnr" v-on:click='next'></a>
            <img :src='imgList[activeIndex].url'>
            <div class='carousel-dot'>
                <ol>
                    <li v-for='(img,index) in imgList'>
                        <div class='dot' v-on:click="activeIndex = index":style='index===activeIndex?"background:#C20C0C":""'></div>
                    </li>
                </ol>
            </div>
        </div>
        <div class='carousel-banner'>
            <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
        </div>

    </div>
</div>
</template>

<style lang="scss">
@import '~/components/carousel/carousel.sass';
</style>

<script>
export default {
    name: "Carousel",
    props: {
        imgList: Array
    },
    data() {
        return {
            activeIndex: 0,
            length:0
        }
    },
    created() {
      this.length = this.imgList.length;
      setInterval(this.next,10000)
    },
    methods: {
        prev() {
            if (this.activeIndex - 1 < 0) {
                this.activeIndex =this.length - 1;
            } else {
                this.activeIndex--;
            }

        },
        next() {
            if (this.activeIndex +1 > this.length-1) {
                this.activeIndex =0;
            } else {
                this.activeIndex++;
            }
        }
    }

}
</script>
