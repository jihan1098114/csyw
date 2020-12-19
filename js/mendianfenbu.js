var itemTempalteString = '<li onclick="showMarker(<%= lng %>, <%= lat %>)" class="easysite-map-list-info"><i><%= index %></i><div class="easysite-map-info-detail"><a title="<%= name %>"><%= name %></a><p class="easysite-map-list-address" title="<%= address %>">地址：<%= address %></p><p class="easysite-map-list-tel" title="电话：<%= tel %>"><img src="https://www.haidilao.com/zh/uiFramework/commonResource/image/2019071215073758682.png"  style="width: 18px;height: 18px;"><%= tel %></p></div></li>';

var locations = '[{"name":"村上一屋（北工大店）","address":"平乐园地铁口C出口向东300米","tel":"13439321786","lng":116.49061748961557,"lat":39.88685264948024},{"name":"村上一屋（棕榈泉朝阳公园店）","address":"朝阳公园南路8号棕榈泉生活广场底商1层","tel":"15011092959","lng":116.48517429720842,"lat":39.93765803735959},{"name":"村上一屋（双井店）","address":"富力城D区北门底商（钱生钱财富管理中心旁）","tel":"18511620814","lng":116.4613479760314,"lat":39.90281489364754},{"name":"村上一屋（SOHO尚都店）","address":"东大桥路8号SOHO尚都北塔一层","tel":"15210530509","lng":116.45916996964448,"lat":39.924717323365996},{"name":"村上一屋（九龙山店）","address":"广渠路31号双井家乐福东侧百安居入口一层底商","tel":"13439321536","lng":116.48130197164656,"lat":39.89948935170407},{"name":"村上一屋（劲松店）","address":"劲松南路海文大厦一楼","tel":"15138114974","lng":116.46685129022974,"lat":39.8876526505318},{"name":"村上一屋（通州万达店）","address":"西关大街万达金街B2-123","tel":"18310935318","lng":116.64997697691621,"lat":39.91194010432189},{"name":"村上一屋（亚运村店）","address":"惠中路安慧里二区一号楼","tel":"13693635192","lng":116.41799972981667,"lat":40.00093339204581},{"name":"村上一屋（健翔桥店）","address":"昌平路关河馍健翔桥店旁","tel":"13520236184","lng":116.38901177033189,"lat":39.99369910119012},{"name":"村上一屋（苏州街店）","address":"苏州街左岸大厦","tel":"18810834450","lng":116.31117817925039,"lat":39.99025859512863},{"name":"村上一屋（青年路店）","address":"十里堡青年路佳亿青年汇北厅一楼（味多美旁）","tel":"13520488761","lng":116.5236515967784,"lat":39.92806633287942},{"name":"村上一屋（北邮店）","address":"学院南路北京邮电大学南门向东80米","tel":"17718338507","lng":116.36526443536175,"lat":39.963993968889795},{"name":"村上一屋（陆港城店）","address":"朝阳北路20号院3号楼一层106-1（呷哺呷哺旁）","tel":"13621156998","lng":116.48549391430888,"lat":39.91487385815088},{"name":"村上一屋（惠新东街店）","address":"惠新东街樱花宾馆楼下","tel":"15652700345","lng":116.43052597133946,"lat":39.984956604111005},{"name":"村上一屋（国贸店）","address":"建国路与东三环中路交叉口京汇大厦","tel":"15510633159","lng":116.46982998147028,"lat":39.91252708659223},{"name":"村上一屋（广渠门店）","address":"广渠门内大街29-2号西部马华旁","tel":"18518386579","lng":116.44123321696728,"lat":39.899958519204915},{"name":"村上一屋（北苑店）","address":"朝阳区秋实街1号易事达购物休闲广场一层","tel":"17701297992","lng":116.42816513462868,"lat":40.048605587434345},{"name":"村上一屋（木樨园店）","address":"丰台区海户屯165号（世纪INN酒店一层）","tel":"13126688875","lng":116.40417103513496,"lat":39.857343062741855},{"name":"村上一屋（梨园店）","address":"梨园云景东路万基广场一层","tel":"13552955172","lng":116.67127400394678,"lat":39.88273207979252},{"name":"村上一屋（魏公村店）","address":"海淀白石桥中央民族大学美食街27号","tel":"15210279982","lng":116.3271264257829,"lat":39.95662410464323},{"name":"村上一屋（上地店）","address":"海定区上地西路41号院宏达商务中心一层","tel":"13141301147","lng":116.31677300562764,"lat":40.03618909128847},{"name":"村上一屋（望京店）","address":"朝阳区望京东园4区3号楼一层","tel":"13366437679","lng":116.49707001809374,"lat":40.00712598903381},{"name":"村上一屋（宣武门店）","address":"西城区宣武门外大街32号富卓商厦","tel":"13811340750","lng":116.38158700580027,"lat":39.89949205018385},{"name":"村上一屋（回龙观店）","address":"昌平区回龙观西大街99号美廉美超市一层","tel":"18513005433","lng":116.32950576758716,"lat":40.08252674951635},{"name":"村上一屋（王府井店）","address":"东城区王府井外大街88号一幢银泰地下一层吧03-1","tel":"13552517244","lng":116.41795957556037,"lat":39.92220633976118},{"name":"村上一屋（方庄店）","address":"丰台区方庄芳星园二区6号楼时代life购物中心5层","tel":"13520726183","lng":116.44193022928027,"lat":39.87144837249839},{"name":"村上一屋（房山店）","address":"房山区拱辰北大街龙湖天街五层","tel":"15301337998","lng":116.14588089252881,"lat":39.75195938665992},{"name":"村上一屋（公主坟店）","address":"海淀区翠微路12号-1层-101-04A","tel":"18515943876","lng":116.30934554617949,"lat":39.91842305432487},{"name":"村上一屋（天通苑华联店）","address":"立汤路天通苑华联购物中心地下一层02号","tel":"18500187175","lng":116.41034257364961,"lat":40.134029033405575},{"name":"村上一屋（五棵松西点茂店）","address":"海淀区永定路88号西点茂1层村上一屋（星巴克对面）","tel":"010-59000327","lng":116.27149795877199,"lat":39.91106705826038},{"name":"村上一屋（西单店）","address":"北京市西城区西单北大街109号一层","tel":"13683285345","lng":116.37981932021772,"lat":39.92018167361932},{"name":"村上一屋（小米科技园店）","address":"安宁庄路小米移动互联网产业园","tel":"18518484556","lng":116.32384859880753,"lat":40.05372324442656},{"name":"村上一屋（国泰百货双桥店）","address":"北京市朝阳区双桥路2号国泰百货1层（肯德基旁）","tel":"18810727161","lng":116.58428676954917,"lat":39.91408815112393},{"name":"村上一屋（三里屯店）","address":"北京市朝阳区三里屯工人体育场北路雅秀大厦东侧一层底商","tel":"15711097727","lng":116.4309711715502,"lat":39.97474809977646}]';
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
  
  initMarker();
  // initSearch();
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
    var infoWindow = new BMapGL.InfoWindow('地址：' + location.address + '<br/>' + '电话：' + location.tel, {
      width : 200,     // 信息窗口宽度
      height: 100,     // 信息窗口高度
      title : location.name , // 信息窗口标题
      message:'地址：' + location.address + '<br/>' + '电话：' + location.tel,
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
      index: index + 1,
      lng: location.lng,
      lat: location.lat
    });
  });
  $('#leftMapDotInfo').html(html);
}

$(window).on('load', function() {
  loadJScript();
  // init();
  renderItems();

  window.showMarker = function(lng, lat) {
    var point = new BMapGL.Point(lng, lat);
    map.centerAndZoom(point, 20);
  }
});
