// JavaScript Document

//浮层定位
var setLayerPos = function(){
	var $windowWidth = $(window).width(),
		$windowHeight = $(window).height(),
		$layer_panel = $('.layer_panel');
	$.each($layer_panel,function(index){
		var	$this = $(this),
			$layer_panel_width = $this.outerWidth(),
			$layer_panel_height = $this.outerHeight();
		$this.css({
			top : ($windowHeight - $layer_panel_height)/2,
			left : ($windowWidth - $layer_panel_width)/2
		});
	});
}
$(window).load(function(e){
	setLayerPos();
});
$(window).resize(function(e){
	setLayerPos();
});

$(document).ready(function(e){
	//内容页模板 select 下拉框
	$('.input_box2 a').click(function(e){
		e.stopPropagation();
		var $this = $(this),
			$list = $this.next();
		if($list.find('li').length > 6){
			$list.css({
				height : '174px',
				overflow : 'scroll'
			});
		}
		$list.stop().slideToggle();
	});
	$(window).click(function(e){
		$('.input_box2 a + .list2').stop(false,true).slideUp();
	});
	$('.input_box2').delegate('.list2 li','click',function(e){
		var $this = $(this),
			$list = $this.closest('.list2'),
			$this_A = $list.prev();
		$this_A.text($this.text());
	});
	
	//关闭浮层
	$('.close_icon,.close_layer').click(function(e){
		var $this = $(this),
			$cur_panel = $this.closest('.layer_panel'),
			$layer_bg = $('.layer_bg'),
			$layer_box = $('.layer');
		$cur_panel.stop(false,true).hide();
		$layer_bg.stop(false,true).hide();
		$layer_box.stop(false,true).hide();
	});
	
	//aside 侧栏 点击选择
	$('.aside_common').delegate('dd','click',function(e){
		var $this = $(this),
			$all_dd = $this.closest('.aside_common').find('dd');
		$all_dd.removeClass('cur');
		$this.addClass('cur');
	});
	
	//nav head头部 点击选择
	$('.head_common_part2').delegate('._nav a','click',function(e){
		var $this = $(this),
			$other_a = $this.siblings('a');
		$other_a.removeClass('cur');
		$this.addClass('cur');
	});
	
	//news 头部新闻
	var $ul = $('.news ul'),
		$li = $('.news li:not(.stance)'),
		$slideTimes = 0,
		$time = 3000,
		$init = window.setInterval(function(e){
			slideShow($li);
		},$time);
	function slideShow($li){
		var $li_all = $('.news li'),
			$li_cur = $li_all.filter(function(index){
				var $this = $(this);
				return $this.hasClass('cur');
			});
		$li_all.eq(0).css('font-size','14px');
		if($slideTimes >= $li.length - 1){
			$ul.css('top',0).animate({
				top : '-44px'
			},1000);
			$li_all.eq(0).css('font-size','12px');
			$li_cur.removeClass('cur');
			$li_all.eq(1).addClass('cur');
			$slideTimes = -1;
		}else{
			$ul.animate({
				top : parseInt($ul.css('top')) - 44
			},1000);
			$li_cur.removeClass('cur').next().addClass('cur');
		}
		$slideTimes++;
	}
});