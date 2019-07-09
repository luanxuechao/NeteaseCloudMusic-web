<template>
<div class="g-ft">
<h3 >测试</h3>
</div>
</div>
</template>

<style lang="scss">
@import '~/components/header/header-bar.sass';
</style>

<script>
export default {
    name: "FooterBar",
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

<style>
.g-ft {
    position: relative;
    height: 148px;
    overflow: hidden;
    border-top: 1px solid #d3d3d3;
    background: #f2f2f2;
    text-align:center;
}
</style>
