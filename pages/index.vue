<template>
<div>
  <div style='width:100%;height:336px;'>
    <carousel :img-list='imgList' />
  </div>
  <div class='container f-cb'>
    <div class='content'>
      <div class='hot-music'>
        <div class='hot-music-menu'>
          <div class='round-dot'>
          </div>
          <a class='hot-recommend'>热门推荐</a>
          <div class='hot-recommend-list'>
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
          <span class='more'>
            <a href="/discover/playlist/?cat=%E7%94%B5%E5%AD%90" class="s-fc3">更多</a>
            <i class="cor s-bg s-bg-6">&nbsp;</i>
          </span>
        </div>
        <ul class='m-cvrlst f-cb'>
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
      <div class='hot-music'>
        <div class='hot-music-menu'>
          <div class='round-dot'>
          </div>
          <a class='hot-recommend'>新碟上架</a>
          <span class='more'>
            <a href="/discover/playlist/?cat=%E7%94%B5%E5%AD%90" class="s-fc3">更多</a>
            <i class="cor s-bg s-bg-6">&nbsp;</i>
          </span>
        </div>
        <div class='new-music'>
          <div class='new-music-container n-disk'>
            <a class='click-flag pre s-bg s-bg-7'></a>
            <div class='roll f-pr'>
              <ul class="f-cb" style="left: 0px; transition: none 0s ease 0s;">
                <li v-for='music in newMusicList'>
                  <div class="u-cover u-cover-alb1">
                    <img :src="music.img">
                    <a :title="music.title" href="/album?id=79904422" class="msk"></a>
                    <a href="javascript:;" class="icon-play f-alpha f-fr" title="播放"></a>
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
      <div class='hot-music'>
        <div class='hot-music-menu'>
          <div class='round-dot'>
          </div>
          <a class='hot-recommend'>榜单</a>
          <span class='more'>
            <a href="/discover/playlist/?cat=%E7%94%B5%E5%AD%90" class="s-fc3">更多</a>
            <i class="cor s-bg s-bg-6">&nbsp;</i>
          </span>
        </div>
        <div class='n-bilst'>
          <dl class='blk' v-for='rankMusic in rankMusicList'>
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
                  <span :class='index>2?"no":"no no-top"'>{{ index+1 }}</span>
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
    <div class='left-banner'>
      <div class='n-myinfo-1'>
        <p class="note s-fc3">登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
        <a class="btn s-bg s-bg-2 f-tdn" tabindex="1">用户登录</a>
      </div>
      <div class='n-singer'>
        <h3 class="v-hd3">
          <span class="f-fl">入驻歌手</span>
          <a href="/discover/artist/signed/" class="more s-fc3">查看全部 &gt;</a>
        </h3>
        <ul class='n-center f-cb'>
          <li v-for="singer in singerList">
            <a href="/user/home?id=29879272" class="itm f-tdn">
              <div class="head"><img class="j-img" :src="singer.avatar"></div>
              <div class="ifo">
                <h4><span class="nm f-fs1 f-ib f-thide">{{singer.nickname}}</span></h4>
                <p class="f-thide s-fc3">{{singer.note}}</p>
              </div>
            </a>
          </li>
        </ul>
        <div class='btn'>
          <a target="_blank" href="/recruit" hidefocus="true" class="u-btn2 u-btn2-1"><i>申请成为网易音乐人</i></a>
        </div>
      </div>
      <div class="n-dj n-dj-1">
        <h3 class="v-hd3">热门主播</h3>
        <ul class="n-hotdj f-cb">
          <li v-for='dj in djList'>
            <a href="/user/home?id=278438485" class="cver"><img class="j-img" :src="dj.avatar" ></a>
            <div class="info">
              <p><a href="/user/home?id=278438485" class="nm-icn f-thide s-fc0">{{dj.name}}</a> <sup class="u-icn u-icn-1 ">&nbsp</sup>
              </p>
              <p class="f-thide s-fc3">{{dj.note}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<style lang="scss">
@import '~/pages/index.sass'
</style>

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
        }

        ,
        {
          img: 'http://p3.music.126.net/6Q0TwJbAqFmfoEZ76uAxOw==/109951164177750851.jpg?param=100y100',
          title: 'BTS WORLD OST ',
          player: 'BTS (防弹少年团) / V.A. / 屋顶月光 / 李贤'
        }

        ,
        {
          img: 'http://p4.music.126.net/OP4iOnJX00e_4dgPWwCeug==/109951164186397410.jpg?param=100y100',
          title: '带着爸爸去留学',
          player: '群星'
        }

        ,
        {
          img: 'http://p3.music.126.net/mXqmc1nD5mu2S4pEvBVHzw==/109951164141857357.jpg?param=100y100',
          title: '我们在夏枝繁茂时再见',
          player: '钱正昊'
        }

        ,
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
        }

        ,
        {
          img: 'http://p1.music.126.net/qCIKkb0XpYOTe1VRIUl58Q==/109951164151093867.jpg?param=140y140',
          title: '饶舌时间 · 街拍靓仔至爱Rap',
          nb: '32万'
        }

        ,
        {
          img: 'http://p1.music.126.net/fhmefjUfMD-8qtj3JKeHbA==/18999560928537533.jpg?param=140y140',
          title: '朴树、许巍、李健、郑钧、老狼、赵雷、',
          nb: '926万'
        }

        ,
        {
          img: 'http://p2.music.126.net/OfBgWFXj94z4tTXEI7oYog==/109951164187806275.jpg?param=140y140',
          title: '没什么，都是我自己推开的',
          nb: '1464'
        }

        ,
        {
          img: 'http://p1.music.126.net/yXRr36_yIuPZhV0eNT8VLw==/109951164176862636.jpg?param=140y140',
          title: '『云村热歌』评论10w+（全收录）',
          nb: '2743万'
        }

        ,
        {
          img: 'http://p2.music.126.net/LPn5U05DR-Uj9utXXszpNw==/109951164187119370.jpg?param=140y140',
          title: '晚安，亲爱的你。',
          nb: '653'
        }

        ,
        {
          img: 'http://p1.music.126.net/1gNcBmzdIaQtU00Dvp_TvQ==/109951163912081772.jpg?param=140y140',
          title: '好听到单曲循环',
          nb: '1447万'
        }

        ,
        {
          img: 'http://p2.music.126.net/_9aPYCJxc-_gAu3Sd_6qsw==/18621328930234754.jpg?param=140y140',
          title: '呓语 王贰浪',
          nb: '375万'
        }

      ],
      imgList: [{
          url: 'http://p1.music.126.net/pXoXQ06sPYt0yqBq4Hko3Q==/109951164182800685.jpg',
          background: 'url("http://p1.music.126.net/-2NyaGYG49DnGcPOUu-Gvg==/109951164184914153.jpg") repeat-x'
        }

        ,
        {
          url: 'http://p1.music.126.net/p-anjjSzja1D4svWuNyAnQ==/109951164185502645.jpg',
          background: 'url("http://p1.music.126.net/BkgfFAeWsVDip_VRhhErnQ==/109951164185495368.jpg") repeat-x'
        }

        ,
        {
          url: 'http://p1.music.126.net/HHUs_8z-i52uvS1-syHywg==/109951164183264235.jpg',
          background: 'url("http://p1.music.126.net/f-dG5U4JPw0LdRwYYRnpyQ==/109951164184909577.jpg")'
        }

        ,
        {
          url: 'http://p1.music.126.net/gHyNlmXFIMWsToNy1lBcPg==/109951164184903316.jpg',
          background: 'url("http://p1.music.126.net/xIb2AOuGtRA7x653sRNwmQ==/109951164184908215.jpg") repeat-x'
        }

        ,
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
            }

            ,
            {
              title: 'Wayward One',
            }

            ,
            {
              title: '沉迷',
            }

            ,
            {
              title: '这是我一生中最勇敢的瞬间',
            }

            ,
            {
              title: '闻妖',
            }

            ,
            {
              title: '无名之辈',
            }

            ,
            {
              title: '头号任务',
            }

            ,
            {
              title: 'bad guy',
            }

            ,
            {
              title: '碧海问舟',
            }

            ,
            {
              title: '失去',
            }

          ]
        }

        ,
        {

          rankTitle: '云音乐新歌榜',
          imgUri: 'http://p4.music.126.net/N2HO5xfYEqyQ8q6oxCw8IQ==/18713687906568048.jpg?param=100y100',
          musicList: [{
              title: '关于遇见你-蘇山海',
            }

            ,
            {
              title: 'Wayward One',
            }

            ,
            {
              title: '沉迷',
            }

            ,
            {
              title: '这是我一生中最勇敢的瞬间',
            }

            ,
            {
              title: '闻妖',
            }

            ,
            {
              title: '无名之辈',
            }

            ,
            {
              title: '头号任务',
            }

            ,
            {
              title: 'bad guy',
            }

            ,
            {
              title: '碧海问舟',
            }

            ,
            {
              title: '失去',
            }

          ]
        }

        ,
        {

          rankTitle: '云音乐原创榜',
          imgUri: 'http://p4.music.126.net/sBzD11nforcuh1jdLSgX7g==/18740076185638788.jpg?param=100y100',
          musicList: [{
              title: '关于遇见你-蘇山海',
            }

            ,
            {
              title: 'Wayward One',
            }

            ,
            {
              title: '沉迷',
            }

            ,
            {
              title: '这是我一生中最勇敢的瞬间',
            }

            ,
            {
              title: '闻妖',
            }

            ,
            {
              title: '无名之辈',
            }

            ,
            {
              title: '头号任务',
            }

            ,
            {
              title: 'bad guy',
            }

            ,
            {
              title: '碧海问舟',
            }

            ,
            {
              title: '失去',
            }

          ]
        }

      ],
      singerList: [{
          avatar: 'http://p2.music.126.net/p9U80ex1B1ciPFa125xV5A==/5931865232210340.jpg?param=62y62',
          nickname: '张惠妹aMEI',
          note: '台湾歌手张惠妹'
        },
        {
          avatar: 'http://p2.music.126.net/1EN_iqQWU_E3DafzEOh3cA==/3302932937408956.jpg?param=62y62',
          nickname: 'Fine乐团',
          note: '独立音乐人'
        },
        {
          avatar: 'http://p2.music.126.net/ZuktZvjcxpYBjcWC3gmbPg==/19027048718765608.jpg?param=62y62',
          nickname: '萬曉利',
          note: '民谣歌手、中国现代民谣的代表人物之一'
        },
        {
          avatar: 'http://p2.music.126.net/v_zYgE9kmAwVGWV2c8hFxA==/7943971513291094.jpg?param=62y62',
          nickname: '音乐人赵雷',
          note: '民谣歌手'
        },
        {
          avatar: 'http://p2.music.126.net/6wPGl_ddgAbJTx5kOohcyw==/109951163892302996.jpg?param=62y62',
          nickname: '王三博',
          note: '音乐人'
        }
      ],
      djList:[{
          name:"陈立",
          avatar:"http://p2.music.126.net/H3QxWdf0eUiwmhJvA4vrMQ==/1407374893913311.jpg?param=40y40",
          note:"心理学家、美食家陈立教授"
      },
      {
          name:"DJ艳秋",
          avatar:"http://p2.music.126.net/y5-sM7tjnxnu_V9LWKgZlw==/7942872001461517.jpg?param=40y40",
          note:"著名音乐节目主持人"
      },
      {
          name:"国家大剧院古典音乐频道",
          avatar:"http://p2.music.126.net/6cc6lgOfQTo6ovNnTHPyJg==/3427177769086282.jpg?param=40y40",
          note:"国家大剧院古典音乐官方"
      },
      {
          name:"谢谢收听",
          avatar:"http://p2.music.126.net/xa1Uxrrn4J0pm_PJwkGYvw==/3130309604335651.jpg?param=40y40",
          note:"南京电台主持人王馨"
      },
      {
          name:"DJ晓苏",
          avatar:"http://p2.music.126.net/slpd09Tf5Ju82Mv-h8MP4w==/3440371884651965.jpg?param=40y40",
          note:"独立DJ，CRI环球旅游广播特邀DJ"
      }]
    }
  }

  ,
  methods: {}

  ,
  layout(context) {
    return 'index'
  }
}
</script>
