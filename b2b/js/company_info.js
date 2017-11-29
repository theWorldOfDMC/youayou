// JavaScript Document
$(document).ready(function(e){
	//选择类型   - 有两个select 有关联情况
	var $province = [
			{provinceID:1,name:'北京'},
			{provinceID:2,name:'上海'},
			{provinceID:3,name:'广东'}
		],
		$city = [
			{provinceID:1,cityID:1,name:'北京'},
			{provinceID:2,cityID:1,name:'上海'},
			{provinceID:3,cityID:1,name:'广州'},
			{provinceID:3,cityID:2,name:'湛江'}
		];
	$('.select_count2 .input_box2 a').click(function(e){
		e.stopPropagation();
		var $this = $(this),
			$select_panel = $this.closest('.select_count2'),
			$province_list = $select_panel.find('.list2').eq(0),
			$str = '';
		$.each($province,function(index){
			$str += '<li id ='+ $province[index].provinceID +'>';
			$str += $province[index].name;
			$str += '</li>';
		});
		$province_list.html($str);
	});
	$(window).click(function(e){
		$('.input_box2 a + .list2').stop().slideUp();
	});
	$('.select_count2').delegate('.input_box2 .list2 li','click',function(e){
		var $this = $(this),
			$provinceID = $this.attr('id'),
			$this_list = $this.closest('.list2'),
			$this_A = $this_list.prev(),
			$select_panel = $this.closest('.select_count2'),
			$is_firstList = $select_panel.find('.list2').index($this_list),
			$str = '';
		if($is_firstList == 0){
			var $city_list = $select_panel.find('.list2').eq(1);
			$.each($city,function(index){
				if($city[index].provinceID == $provinceID){
					$str += '<li id ='+ $city[index].cityID +'>';
					$str += $city[index].name;
					$str += '</li>';
				}
			});
			$city_list.css('height','auto');
			$city_list.html($str);
		}	
	});
});