webpackJsonp([1],{"/hA4":function(t,i,e){t.exports=e.p+"static/img/floor3-2.9ac3403.jpg"},"/lZI":function(t,i,e){"use strict";var s=e("GQaK"),r={props:{sliderDate:{type:Array,default:function(){return[]}},dotsNumber:{type:Boolean,default:!1},loop:{type:Boolean,default:!0},autoPlay:{type:Boolean,default:!0},interval:{type:Number,default:3e3}},data:function(){return{dots:[],currentPageIndex:0}},mounted:function(){var t=this;setTimeout(function(){t.initSliderWidth(),t.initDots(),t.initSlider(),t.autoPlay&&t.play()},20),window.addEventListener("resize",function(){t.slider&&(t.initSliderWidth(!0),t.slider.refresh())})},methods:{initSliderWidth:function(t){this.children=this.$refs.sliderGroup.children;for(var i=0,e=this.$refs.slider.clientWidth,s=0;s<this.children.length;s++){this.children[s].style.width=e+"px",i+=e}this.loop&&!t&&(i+=2*e),this.$refs.sliderGroup.style.width=i+"px"},initDots:function(){this.dots=new Array(this.children.length)},initSlider:function(){var t=this;this.slider=new s.a(this.$refs.slider,{scrollX:!0,scrollY:!1,momentum:!1,snap:{loop:this.loop,threshold:.3,speed:400},click:!0}),this.slider.on("scrollEnd",function(){var i=t.slider.getCurrentPage().pageX;t.currentPageIndex=i,clearTimeout(t.timer),t.autoPlay&&t.play()})},play:function(){var t=this;clearTimeout(this.timer),this.timer=setTimeout(function(){t.slider.next()},this.interval)}},destroyed:function(){clearTimeout(this.timer)}},l={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{ref:"slider",staticClass:"slider"},[e("ul",{ref:"sliderGroup",staticClass:"slider-group"},t._l(t.sliderDate,function(t,i){return e("router-link",{key:i,staticClass:"slider-item",attrs:{tag:"li",to:t.router}},[e("img",{attrs:{src:t.imgUrl,alt:""}})])}),1),t._v(" "),t.dotsNumber?t._e():e("div",{staticClass:"dots"},t._l(t.dots,function(i,s){return e("span",{key:s,staticClass:"dot",class:{active:s===t.currentPageIndex}})}),0),t._v(" "),t.dotsNumber?e("div",{staticClass:"dotsNumber"},[e("span",[t._v(t._s(t.currentPageIndex+1)+" / "+t._s(t.dots.length))])]):t._e()])},staticRenderFns:[]};var n=e("VU/8")(r,l,!1,function(t){e("vbym")},"data-v-812c6a4a",null);i.a=n.exports},"15zF":function(t,i,e){t.exports=e.p+"static/img/floor5-1.6d1a909.jpg"},"2BKB":function(t,i,e){t.exports=e.p+"static/img/floor5-4.05a77f0.jpg"},"3s1J":function(t,i,e){t.exports=e.p+"static/img/floor5-2.e22cb1c.jpg"},"5yNi":function(t,i,e){t.exports=e.p+"static/img/floor4-1.eec464f.jpg"},"7mX5":function(t,i){},"96z0":function(t,i,e){t.exports=e.p+"static/img/floor2-2.addd5e5.jpg"},IsS2:function(t,i){},K5vK:function(t,i,e){t.exports=e.p+"static/img/floor2-3.7494c7c.jpg"},KQAr:function(t,i,e){t.exports=e.p+"static/img/floor3-3.79ec7cb.jpg"},M4yl:function(t,i,e){t.exports=e.p+"static/img/floor2-1.300fffc.jpg"},RckS:function(t,i,e){t.exports=e.p+"static/img/refresh.58971a5.gif"},V8sR:function(t,i){},cuqh:function(t,i,e){t.exports=e.p+"static/img/floor4-2.3a5e248.jpg"},dkYt:function(t,i,e){t.exports=e.p+"static/img/floor2-4.f5f177f.jpg"},dyaK:function(t,i,e){t.exports=e.p+"static/img/floor1-4.a275f3f.jpg"},exPa:function(t,i){t.exports="data:image/jpeg;base64,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"},fYYU:function(t,i,e){t.exports=e.p+"static/img/floor1-2.0daf66d.jpg"},h1XI:function(t,i,e){t.exports=e.p+"static/img/floor4-4.25b689b.jpg"},i7QY:function(t,i,e){t.exports=e.p+"static/img/banner-3.fbb0989.jpg"},jFbY:function(t,i,e){t.exports=e.p+"static/img/floor1-3.72c4d87.jpg"},"k+oL":function(t,i,e){t.exports=e.p+"static/img/banner-1.72553dc.jpg"},"lz1/":function(t,i,e){t.exports=e.p+"static/img/floor3-1.0186f4c.jpg"},nU8l:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e("Dd8w"),r=e.n(s),l=e("qwAB"),n=e("ATju"),o=e("XEAW"),a=e("NYxO"),c={data:function(){return{keyword:""}},props:{configParam:{type:Object,default:function(){return{}}}},computed:r()({placeText:function(){var t=["手机","电脑","冰箱","相机","衣服","电视"];return t[Math.floor(Math.random()*t.length)]},bg:function(){return this.configParam.isLucency?"rgba(0,0,0,0)":"rgba(239, 80, 80,1)"}},Object(a.c)(["historyList"])),methods:r()({confirm:function(){this.removeAllHistory([])},removeHistoryItem:function(t){this.removeARecord(t)},searchClick:function(){var t=this;this.$emit("inputClick"),this.$nextTick(function(){t.$refs.searchScroll.style.minHeight=t.$refs.history.$el.clientHeight+1+"px",t.$refs.history.refresh(),t.$refs.input.focus()})},searchCancel:function(){this.$emit("cancel")},deleteHistory:function(){this.historyList.length>0?this.$refs.confirm.show():this.$notice("还没有搜索历史~")},selectItem:function(t){this.$emit("inputEnter"),this.setKeyword(t||this.placeText),this.addHistory(t||this.placeText),this.searchCancel()},handleKeyupEnter:function(){this.$emit("inputEnter"),this.setKeyword(this.keyword||this.placeText),this.addHistory(this.keyword||this.placeText),this.searchCancel(),this.keyword=""},back:function(){this.$emit("back")}},Object(a.d)({setKeyword:"SET_KEYWORD",removeAllHistory:"ADD_HISTORY_LIST"}),Object(a.b)(["addHistory","removeARecord"])),components:{Scroll:l.a,TransiBase:n.a,Confirm:o.a}},A={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("div",{staticClass:"search-wrap",style:{"background-color":t.bg}},[e("div",{staticClass:"search-input"},[e("i",{staticClass:"iconfont icon-search"},[t._v("")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],ref:"input",staticClass:"input",attrs:{type:"text",placeholder:t.placeText},domProps:{value:t.keyword},on:{focus:t.searchClick,keyup:function(i){return!i.type.indexOf("key")&&t._k(i.keyCode,"enter",13,i.key,"Enter")?null:t.handleKeyupEnter(i)},input:function(i){i.target.composing||(t.keyword=i.target.value)}}})]),t._v(" "),t.configParam.cancel?e("div",{staticClass:"cancel",on:{click:t.searchCancel}},[t._v("取消")]):t._e()]),t._v(" "),e("transi-base",[e("scroll",{directives:[{name:"show",rawName:"v-show",value:t.configParam.isShowHistory,expression:"configParam.isShowHistory"}],ref:"history",staticClass:"search-history"},[e("div",{ref:"searchScroll",staticClass:"search-scroll"},[e("div",{staticClass:"title"},[e("span",[t._v("搜索历史")]),t._v(" "),e("i",{staticClass:"iconfont delete-all",on:{click:t.deleteHistory}},[t._v("")])]),t._v(" "),e("ul",{staticClass:"history-list"},t._l(t.historyList,function(i,s){return e("li",{key:i+s,staticClass:"history-item"},[e("span",{staticClass:"name",on:{click:function(e){return t.selectItem(i)}}},[t._v(t._s(i))]),t._v(" "),e("i",{staticClass:"delete-icon",on:{click:function(i){return t.removeHistoryItem(s)}}},[t._v("x")])])}),0)])])],1),t._v(" "),e("confirm",{ref:"confirm",on:{confirm:t.confirm}})],1)},staticRenderFns:[]};var u=e("VU/8")(c,A,!1,function(t){e("V8sR")},"data-v-7e9105a4",null).exports,d=e("/lZI"),p={data:function(){return{productDate:[{name:"综合销量排行",list:[{id:27,imgUrl:e("exPa"),title:"Midea/美的 BCD-535WKZM(E)冰箱双开门无霜智能家用厨卫家电",subtitle:"送品牌烤箱，五一大促"},{id:74,imgUrl:e("fYYU"),title:"小米（MI） Ninebot九号平衡车Plus智能代步电动体感车",subtitle:"一个形影不离的新伙伴"},{id:75,imgUrl:e("jFbY"),title:"Apple MacBook Pro 15.4英寸笔记本电脑 深空灰色（2017Multi-Touch Bar/Core i7/16GB/512GB MPTT2CH/A）",subtitle:"一身才华，一触，即发"},{id:77,imgUrl:e("dyaK"),title:"小米（MI）电视 50英寸 4K 智能WiFi网络平板 液晶电视机(黑色)4A L50M5-AD",subtitle:"老人小孩都会用的人工智能语音电视"}]},{name:"显示器销量排行",list:[{id:107,imgUrl:e("M4yl"),title:"索尼（SONY）KD-65X8566E 65英寸4K HDR腾讯视频 安卓7.0智能液晶电视（黑色）",subtitle:"客厅优选，4K迅锐图像引擎PRO，HDR高动态显示，享受视觉盛宴，醇音技术，内置腾讯视频"},{id:80,imgUrl:e("96z0"),title:"联想ThinkPad X1 Carbon 2018（05CD）14英寸轻薄笔记本电脑（i7-8550U 16G 1TSSD WQHD Win10Pro）黑色",subtitle:"黑色智慧"},{id:81,imgUrl:e("K5vK"),title:"外星人（Alienware）AW3418DW 34英寸专业电竞曲面显示器 120Hz刷新率 1900R曲率",subtitle:"收服世界边界"},{id:82,imgUrl:e("dkYt"),title:"华硕（ASUS）ROGSTRIX XG32VQ 31.5英寸 1800R曲率 144HZ 2K高分 AURA-Sync 吃鸡电竞显示器（HDMI/DP接口）",subtitle:"疾速出击，眼界大开"}]},{name:"手机销量排行",list:[{id:72,imgUrl:e("lz1/"),title:"Apple iPhone X (A1865) 全面屏手机 64GB 深空灰色",subtitle:"全面屏，全面绽放"},{id:28,imgUrl:e("/hA4"),title:"4+64G送手环/Huawei/华为 nova 手机P9/P10plus青春",subtitle:"NOVA青春版1999元"},{id:92,imgUrl:e("KQAr"),title:"三星 Galaxy S9+（SM-G9650/DS）6GB+128GB 谜夜黑 移动联通电信4G手机 双卡双待",subtitle:"全视曲面屏"},{id:127,imgUrl:e("u9kh"),title:"华为 HUAWEI P20 AI智慧全面屏 6GB +64GB 宝石蓝 全网通版 移动联通电信4G手机 双卡双待",subtitle:"AI摄影大师/DxO评分过百/一秒记忆960个定格/影棚级人像自拍"}]},{name:"数码销量排行",list:[{id:123,imgUrl:e("5yNi"),title:"华硕（ASUS）RT-AC86U 2900M双频全千兆低辐射/智能无线游戏路由器/MU-MIMO吃鸡路由【AiMesh组网黑科技】",subtitle:"移动电竞,手游利器,2900M手游电竞路由爆款"},{id:124,imgUrl:e("cuqh"),title:"TP-LINK TL-WDR7300 2100M智能11AC双频无线路由器 安全稳定 光纤宽带智能家用 大户型穿墙",subtitle:"TP-LINK新品上市，1200M双频，全新VxWorks操作系统，更快更可靠"},{id:121,imgUrl:e("vOnL"),title:"斐讯K3星空银 AC3150双核双频全千兆高端无线路由器 智慧家庭路由",subtitle:"匠心之作 无线速率高达3167兆 满足大户型信号全覆盖"},{id:98,imgUrl:e("h1XI"),title:"罗技（Logitech）MX Master 2S 无线蓝牙优联双模跨计算机控制鼠标 人体工学 快速充电 旗舰 儒雅黑",subtitle:"创造无尽可能"}]},{name:"相机销量排行",list:[{id:103,imgUrl:e("15zF"),title:"GoPro HERO 6 Black 运动摄像机 4K60帧高清 语音控制 防抖防水",subtitle:"精彩时刻，即刻分享"},{id:104,imgUrl:e("3s1J"),title:"佳能（Canon）EOS 80D 单反套机（EF-S 18-200mm f/3.5-5.6 IS） 2420万有效像素 45点十字对焦 WIFI/NFC",subtitle:"爆款！18-200更大焦段，一镜走天下！经典中端旗舰单反！全45点十字型高性能自动对焦，内置Wi-Fi和NFC"},{id:105,imgUrl:e("nnD6"),title:"索尼（SONY）ILCE-6000L APS-C单镜头微单相机/照相机 黑色（约2430万有效像素 16-50mm镜头 a6000/α6000）",subtitle:"快！胜一筹"},{id:106,imgUrl:e("2BKB"),title:"卡西欧（CASIO）EX-TR750 数码相机（3.5英寸大屏、双LED灯，天使之眼）美颜自拍神器 静谧黑",subtitle:"3.5英寸大屏、9000+微调，六大美颜功能、四种美肤模式"}]}]}},methods:{selectProduct:function(t){this.$router.push({path:"/home/"+t})}}},f={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"product-rank"},t._l(t.productDate,function(i,s){return e("div",{key:s,staticClass:"floor",class:"floor-"+(s+1)},[e("p",{staticClass:"name"},[t._v(t._s(i.name))]),t._v(" "),e("ul",{staticClass:"list"},t._l(i.list,function(i){return e("li",{key:i.id,staticClass:"item",on:{click:function(e){return t.selectProduct(i.id)}}},[e("div",{staticClass:"img-wrap"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:i.imgUrl,expression:"item.imgUrl"}],staticClass:"img",attrs:{alt:""}})]),t._v(" "),e("h6",{staticClass:"title",domProps:{innerHTML:t._s(i.title)}}),t._v(" "),e("p",{staticClass:"sub-title",domProps:{innerHTML:t._s(i.subtitle)}})])}),0)])}),0)},staticRenderFns:[]};var m=e("VU/8")(p,f,!1,function(t){e("IsS2")},"data-v-0618bc34",null).exports,h={data:function(){return{sliderDate:[{router:"/detail",imgUrl:e("k+oL")},{router:"/detail",imgUrl:e("zZ5O")},{router:"/detail",imgUrl:e("i7QY")}],scrollY:-1,tipsText:"下拉刷新",maxY:-1,configParam:{isShowHistory:!1,isLucency:!0,cancel:!1,isShowSearchLeft:!0,isScan:!0}}},created:function(){this.listenScroll=!0,this.probeType=3,this.pullup=!0},activated:function(){this.$refs.scroll.refresh()},methods:{inputEnter:function(){this.$router.push({path:"/product-list"})},inputClick:function(){this.configParam={isShowHistory:!0,isLucency:!1,cancel:!0,isShowSearchLeft:!1,isScan:!1}},searchCancel:function(){this.configParam={isShowHistory:!1,isLucency:!0,cancel:!1,isShowSearchLeft:!0,isScan:!0}},scroll:function(t){this.scrollY=t.y},scrollEnd:function(t){this.maxY=t}},watch:{scrollY:function(t){-t>-this.maxY&&(this.$refs.noMore.style.bottom=-t- -this.maxY+20+"px"),t<152&&t>0&&(this.$refs.refresh.style.top=t-76+"px"),this.tipsText=t>76?"松开刷新":"下拉刷新",t>0?this.$refs.search.style.opacity=1/t:(this.$refs.search.style.opacity=1,this.$refs.search.style.backgroundColor="rgba(239, 80, 80, "+-t/76+")")}},components:{HeadSearch:u,Slider:d.a,Floor:m,Scroll:l.a,TransiBase:n.a}},g={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",[s("div",{ref:"refresh",staticClass:"refresh"},[s("img",{attrs:{src:e("RckS"),width:"100",alt:""}}),t._v(" "),s("div",{staticClass:"tips"},[t._v("\n      "+t._s(t.tipsText)+"\n    ")])]),t._v(" "),s("div",{ref:"search",staticClass:"head-search"},[s("transition",{attrs:{name:"fade"}},[s("head-search",{ref:"input",attrs:{configParam:t.configParam},on:{inputClick:t.inputClick,cancel:t.searchCancel,inputEnter:t.inputEnter}})],1)],1),t._v(" "),s("scroll",{ref:"scroll",staticClass:"scroll-wrap",attrs:{listenScroll:t.listenScroll,probeType:t.probeType,pullup:t.pullup},on:{scroll:t.scroll,scrollEnd:t.scrollEnd}},[s("div",[s("slider",{attrs:{sliderDate:t.sliderDate}}),t._v(" "),s("floor")],1)]),t._v(" "),s("div",{ref:"noMore",staticClass:"no-more-tips"},[t._v("\n    没有更多了...\n  ")]),t._v(" "),s("router-view")],1)},staticRenderFns:[]};var y=e("VU/8")(h,g,!1,function(t){e("7mX5")},"data-v-55abd45e",null);i.default=y.exports},nnD6:function(t,i,e){t.exports=e.p+"static/img/floor5-3.0164723.jpg"},u9kh:function(t,i,e){t.exports=e.p+"static/img/floor3-4.b238234.jpg"},vOnL:function(t,i,e){t.exports=e.p+"static/img/floor4-3.73a64c2.jpg"},vbym:function(t,i){},zZ5O:function(t,i,e){t.exports=e.p+"static/img/banner-2.fbb0989.jpg"}});
//# sourceMappingURL=1.c3a612475ffb5f3e58a9.js.map