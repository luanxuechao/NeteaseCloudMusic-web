<template>
<div class="container">
  <div class="rotation-banner" >
    <a-carousel :beforeChange='beforeChange'>
      <div  class='aa' v-for='img in imgList' :style='{"background":img.color}'>
        <img :src='img.url'>
      </div>
    </a-carousel>
  </div>
</div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import analyze from 'rgbaster'
export default {
  components: {
    Logo
  },
  data(){
    return {
    }
  },
  async beforeCreate() {
    this.imgList=[
        {
          url:'http://p1.music.126.net/pXoXQ06sPYt0yqBq4Hko3Q==/109951164182800685.jpg',
          color:'rgb(111,101,99)'
        },
        {
          url:'http://p1.music.126.net/PQ7MY7ggahXolR0QY-_4fQ==/109951164182848443.jpg',
          color:'rgb(190,153,98)'
        },
        { color: "rgb(255,255,255)",
          url:'http://p1.music.126.net/HHUs_8z-i52uvS1-syHywg==/109951164183264235.jpg'
        },
        {
          url:'http://p1.music.126.net/5b7V24e2LscuUuVUX2C-Vw==/109951164182413083.jpg',
          color:"rgb(244,244,242)"
        },
      ]
    for(let img of this.imgList){
        const result = await analyze(img.url,{ scale: 0.8,ignore: [ 'rgb(255,255,255)', 'rgb(0,0,0)' ]  });
        console.log(result);
        // img.color =result[0].color;
    }
    console.log(this.imgList)
  },
  methods: {
    beforeChange: async (fromIndex,toIndex)=>{
      let url = this.imgList.url[0];
      console.log(to);
    }
  },
  layout(context) {
    return 'index'
  }
}
</script>

<style scoped>

.a {
width:100%
}
/* For demo */
.ant-carousel >>> .slick-dots {
  height: auto;
  max-width: 100%;
}
.ant-carousel >>> .slick-slide img{
    display: block;
    margin: auto;
    max-width: 100%;
}
.ant-carousel >>> .slick-thumb {
  bottom: -45px;
}
.ant-carousel >>> .slick-thumb li {
  width: 60px;
  height: 45px;
}
.ant-carousel >>> .slick-thumb li img {
  width: 100%;
  height: 100%;
  filter: grayscale(100%);
}
.ant-carousel >>> .slick-thumb li.slick-active img{
    filter: grayscale(0%);
}
</style>
