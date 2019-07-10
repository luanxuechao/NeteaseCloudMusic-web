<template>
<div class='carousel'>
    <div class='carousel-content carousel-re'>
        <div class='carousel-nav'>
            <a class="btnl"></a>
            <a class="btnr"></a>
            <img src='http://p1.music.126.net/pXoXQ06sPYt0yqBq4Hko3Q==/109951164182800685.jpg'>
            <div class='carousel-dot'>
                <ol>
                    <li>
                        <div class='dot'></div>
                    </li>
                    <li>
                        <div class='dot'></div>
                    </li>
                    <li>
                        <div class='dot'></div>
                    </li>
                    <li>
                        <div class='dot'></div>
                    </li>
                </ol>
            </div>
        </div>
        <div class='carousel-banner'>
            <p style=>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
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
    data() {
        return {
            liIndex: 0,
            subnavLiIndex: 0,
        }
    },
    methods: {
        liActive(index) {
            this.liIndex = index;
        },
        subnavliActive(index) {
            this.subnavLiIndex = index;
        }
    }

}
</script>
