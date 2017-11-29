// JavaScript Document
$(document).ready(function(e){
	//选择类型 1  - 只有一个select 无关联情况
	$('.input_box.select_count1 a').click(function(e){
		e.stopPropagation();
		var $this = $(this);
		$this.next().stop().slideToggle();
	});
	//选择类型 2  - 有两个select 有关联情况
	var $province,$city;
	$('.input_box.select_count2 a').click(function(e){
		e.stopPropagation();
		var $this = $(this),
			$list = $this.next(),
			$this_input_box = $this.closest('.input_box'),
			$province_list = $this_input_box.find('.list').eq(0),
			$city_list = $this_input_box.find('.list').eq(1),
			$str = '';
		$province = $.parseJSON($this.closest('.select_count2').find('#company_province_init').val());
		$city = $.parseJSON($this.closest('.select_count2').find('#company_city_init').val());
		$.each($province,function(index){
			$str += '<li data-id ='+ $province[index].provinceID +'>';
			$str += $province[index].name;
			$str += '</li>';
		});
		$province_list.html($str);
		//限制高度
		if($list.find('li').length > 9){
			$list.css({
				height : '360px',
				overflow : 'scroll'
			});
		}
		//显示列表
		$list.stop().slideToggle();
	});
	$(window).click(function(e){
		$('.input_box a + .list').stop().slideUp();
	});
	$('.input_box').delegate('.list li','click',function(e){
		var $this = $(this),
			$provinceID = $this.data('id'),
			$this_A = $this.closest('.list').prev(),
			$this_input_box = $this.closest('.input_box'),
			$list_all = $this_input_box.find('.list'),
			$is_towList = $this_input_box.hasClass('select_count2'),
			$is_firstList = $list_all.index($this.closest('.list')),
			$cur_input = $this.closest('.list').siblings('input[type=hidden]'),
			$str = '';
		if($is_towList && $is_firstList == 0){
			var $city_list = $this_input_box.find('.list').eq(1);
			$.each($city,function(index){
				if($city[index].provinceID == $provinceID){
					$str += '<li data-id ='+ $city[index].cityID +'>';
					$str += $city[index].name;
					$str += '</li>';
				}
			});
			$city_list.html($str);
		}
		$this_A.text($this.text());
		$cur_input.val($this.data('id'));
		$is_firstList == 0 && $is_towList && $this_input_box.find('a:last').text('公司地址/选择市');
	});
});