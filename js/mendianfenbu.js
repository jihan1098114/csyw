var itemTempalteString = '<li class="easysite-map-list-info"><i><%= index %></i><div class="easysite-map-info-detail"><a title="<%= name %>"><%= name %></a><p class="easysite-map-list-address" title="<%= address %>">地址：<%= address %></p><p class="easysite-map-list-tel" title="电话：<%= tel %>"><img src="https://www.haidilao.com/zh/uiFramework/commonResource/image/2019071215073758682.png"  style="width: 18px;height: 18px;"><%= tel %></p></div></li>';

var locations = '[{"name":"村上一屋（北工大店）","address":"平乐园地铁口C出口向东300米","tel":"13439321786","lng":116.46703499370652,"lat":39.887408083734925},{"name":"村上一屋（棕榈泉朝阳公园店）","address":"朝阳公园南路8号棕榈泉生活广场底商1层","tel":"15011092959","lng":116.46703499370652,"lat":39.887408083734925},{"name":"村上一屋（双井店）","address":"富力城D区北门底商（钱生钱财富管理中心旁）","tel":"18511620814","lng":120.69723792497743,"lat":31.767184821225076},{"name":"村上一屋（SOHO尚都店）","address":"东大桥路8号SOHO尚都北塔一层","tel":"15210530509","lng":116.46703499370652,"lat":39.887408083734925},{"name":"村上一屋（九龙山店）","address":"广渠路31号双井家乐福东侧百安居入口一层底商","tel":"13439321536","lng":116.46703499370652,"lat":39.887408083734925},{"name":"村上一屋（劲松店）","address":"劲松南路海文大厦一楼","tel":"15138114974","lng":116.46703499370652,"lat":39.887408083734925},{"name":"村上一屋（通州万达店）","address":"西关大街万达金街B2-123","tel":"18310935318","lng":120.69723792497743,"lat":31.767184821225076},{"name":"村上一屋（亚运村店）","address":"惠中路安慧里二区一号楼","tel":"13693635192","lng":116.46703499370652,"lat":39.887408083734925},{"name":"村上一屋（健翔桥店）","address":"昌平路关河馍健翔桥店旁","tel":"13520236184","lng":116.46703499370652,"lat":39.887408083734925},{"name":"村上一屋（苏州街店）","address":"苏州街左岸大厦","tel":"18810834450","lng":116.46703499370652,"lat":39.887408083734925},{"name":"村上一屋（青年路店）","address":"十里堡青年路佳亿青年汇北厅一楼（味多美旁）","tel":"13520488761","lng":116.46703499370652,"lat":39.887408083734925},{"name":"村上一屋（北邮店）","address":"学院南路北京邮电大学南门向东80米","tel":"17718338507","lng":120.69723792497743,"lat":31.767184821225076},{"name":"村上一屋（陆港城店）","address":"朝阳北路20号院3号楼一层106-1（呷哺呷哺旁）","tel":"13621156998","lng":116.46703499370652,"lat":39.887408083734925},{"name":"村上一屋（惠新东街店）","address":"惠新东街樱花宾馆楼下","tel":"15652700345","lng":116.46703499370652,"lat":39.887408083734925},{"name":"村上一屋（国贸店）","address":"建国路与东三环中路交叉口京汇大厦","tel":"15510633159","lng":120.69723792497743,"lat":31.767184821225076},{"name":"村上一屋（广渠门店）","address":"广渠门内大街29-2号西部马华旁","tel":"18518386579","lng":116.46703499370652,"lat":39.887408083734925},{"name":"村上一屋（北苑店）","address":"朝阳区秋实街1号易事达购物休闲广场一层","tel":"17701297992","lng":120.69723792497743,"lat":31.767184821225076},{"name":"村上一屋（木樨园店）","address":"丰台区海户屯165号（世纪INN酒店一层）","tel":"13126688875","lng":116.46703499370652,"lat":39.887408083734925},{"name":"村上一屋（梨园店）","address":"梨园云景东路万基广场一层","tel":"13552955172","lng":116.46703499370652,"lat":39.887408083734925},{"name":"村上一屋（魏公村店）","address":"海淀白石桥中央民族大学美食街27号","tel":"15210279982","lng":116.46703499370652,"lat":39.887408083734925},{"name":"村上一屋（上地店）","address":"海定区上地西路41号院宏达商务中心一层","tel":"13141301147","lng":120.69723792497743,"lat":31.767184821225076},{"name":"村上一屋（望京店）","address":"朝阳区望京东园4区3号楼一层","tel":"13366437679","lng":120.69723792497743,"lat":31.767184821225076},{"name":"村上一屋（宣武门店）","address":"西城区宣武门外大街32号富卓商厦","tel":"13811340750","lng":116.46703499370652,"lat":39.887408083734925},{"name":"村上一屋（回龙观店）","address":"昌平区回龙观西大街99号美廉美超市一层","tel":"18513005433","lng":116.46703499370652,"lat":39.887408083734925},{"name":"村上一屋（王府井店）","address":"东城区王府井外大街88号一幢银泰地下一层吧03-1","tel":"13552517244","lng":116.46703499370652,"lat":39.887408083734925},{"name":"村上一屋（方庄店）","address":"丰台区方庄芳星园二区6号楼时代life购物中心5层","tel":"13520726183","lng":120.69723792497743,"lat":31.767184821225076},{"name":"村上一屋（房山店）","address":"房山区拱辰北大街龙湖天街五层","tel":"15301337998","lng":120.69723792497743,"lat":31.767184821225076},{"name":"村上一屋（公主坟店）","address":"海淀区翠微路12号-1层-101-04A","tel":"18515943876","lng":116.46703499370652,"lat":39.887408083734925},{"name":"村上一屋（天通苑华联店）","address":"立汤路天通苑华联购物中心地下一层02号","tel":"18500187175","lng":116.46703499370652,"lat":39.887408083734925},{"name":"村上一屋（五棵松西点茂店）","address":"海淀区永定路88号西点茂1层村上一屋（星巴克对面）","tel":"010-59000327","lng":120.69723792497743,"lat":31.767184821225076},{"name":"村上一屋（西单店）","address":"北京市西城区西单北大街109号一层","tel":"13683285345","lng":120.69723792497743,"lat":31.767184821225076},{"name":"村上一屋（小米科技园店）","address":"安宁庄路小米移动互联网产业园","tel":"18518484556","lng":116.46703499370652,"lat":39.887408083734925},{"name":"村上一屋（国泰百货双桥店）","address":"北京市朝阳区双桥路2号国泰百货1层（肯德基旁）","tel":"18810727161","lng":116.46703499370652,"lat":39.887408083734925},{"name":"村上一屋（三里屯店）","address":"北京市朝阳区三里屯工人体育场北路雅秀大厦东侧一层底商","tel":"15711097727","lng":116.46703499370652,"lat":39.887408083734925}]';
locations = JSON.parse(locations);

function loadJScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'http://api.map.baidu.com/api?type=webgl&v=1.0&ak=NHRlaoOqbiG0LQnknheU6wxhVeCCZcO3&callback=init';
  document.body.appendChild(script);
}

function init() {
  window.map = new BMapGL.Map('allmap'); // 创建Map实例
  var point = new BMapGL.Point(116.404, 39.915); // 创建点坐标
  map.centerAndZoom(point, 15);
  map.enableScrollWheelZoom(true); // 启用滚轮放大缩小
  
  // initMarker();
  initSearch();
}

function initSearch() {
  var local = new BMap.LocalSearch(map, {
		renderOptions: {map: map, panel: "r-result"}
	});
	local.search("村上一屋");
}

function initMarker() {
  // map.setCurrentCity("北京");
  // map.addControl(new BMap.CityListControl({
  //     anchor: BMAP_ANCHOR_TOP_LEFT,
  //     offset: size,
  //     // 切换城市之前事件
  //     // onChangeBefore: function(){
  //     //    alert('before');
  //     // },
  //     // 切换城市之后事件
  //     // onChangeAfter:function(){
  //     //   alert('after');
  //     // }
  // }));

  locations.forEach(function(location) {
    let point = new BMapGL.Point(location.lng, location.lat);
    let marker = new BMapGL.Marker(point);
    map.addOverlay(marker);
    // let content = '<div style="margin:0;line-height:20px;padding:2px;">' +
    //               '地址：' + location.address +'<br/>电话：' + location.tel +  
    //             '</div>';
    // let searchInfoWindow = new BMapLib.SearchInfoWindow(map, content, {
    //   title  : location.name,      //标题
    //   width  : 290,             //宽度
    //   height : 105,              //高度
    //   panel  : "panel",         //检索结果面板
    //   enableAutoPan : true,     //自动平移
    //   searchTypes   :[
    //     BMAPLIB_TAB_SEARCH,   //周边检索
    //     BMAPLIB_TAB_TO_HERE,  //到这里去
    //     BMAPLIB_TAB_FROM_HERE //从这里出发
    //   ]
    // });
    var infoWindow = new BMapGL.InfoWindow('地址：' + location.name + '<br/>' + '电话：' + location.tel, {
      width : 200,     // 信息窗口宽度
      height: 100,     // 信息窗口高度
      title : location.name , // 信息窗口标题
      message:'地址：' + location.name + '<br/>' + '电话：' + location.tel,
    });
    marker.addEventListener("click", function(){
      map.openInfoWindow(infoWindow, point);
      // searchInfoWindow.open(marker);
    }); 
  });
}

var template = ejs.compile(itemTempalteString, {});

function renderItem(item) {
  console.log(item);
  return template(item);
}

function renderItems() {
  var html = '';
  locations.forEach(function(location, index) {
    html += renderItem({
      name: location.name,
      address: location.address,
      tel: location.tel,
      index: index + 1
    });
  });
  $('#leftMapDotInfo').html(html);
}

$(window).on('load', function() {
  loadJScript();
  // init();
  // renderItems();
});
