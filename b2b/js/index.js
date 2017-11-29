// JavaScript Document
$(document).ready(function(e){
	//生成分页控制器
	var $imgPanelItemCount = parseInt($('#imgPanelItemCount').val(),10) / 8,
		$num_a_list = '';
	for(var x = 1; x <= $imgPanelItemCount; x++){
		$num_a_list += '<a href="javascript:;" class="'+ (x == 1? 'cur' : "") +'">'+ x +'</a>';
	}
	$('.pagination_panel a.prev').after($num_a_list);
	//为分页控制器绑定事件
	$('.pagination_panel').delegate('a','click',function(e){
		var $this = $(this),
			$all_num_a = $this.closest('.pagination_panel').find('a:not(:first-child,:last-child)'), //所有分页选项a,除了上一页a 下一页a
			$all_num_a_length = $all_num_a.length, //有多少选项a
			$img_panel = $('.img_panel');
		//判断点击的时候是a,如果是则添加cur类,修改样式
		!$this.hasClass('prev') && !$this.hasClass('next') && ($all_num_a.removeClass('cur'),$this.addClass('cur'));
		var	$cur_num_a = $all_num_a.filter(function(index){	//当前选中的选项a
				var $_this = $(this);
				return $_this.hasClass('cur');
			}),
			$isNum = $all_num_a.index($cur_num_a); //当前选项在所有选项中的第几位index
		if($this.hasClass('prev')){
			$all_num_a.removeClass('cur');
			if($isNum == 0){
				$all_num_a.eq($all_num_a_length - 1).addClass('cur');
				$isNum = $all_num_a_length - 1;
			}else{
				$isNum = $all_num_a.index($cur_num_a.prev().addClass('cur'));
			}
		}else if($this.hasClass('next')){
			$all_num_a.removeClass('cur');
			if($isNum == $all_num_a_length - 1){
				$all_num_a.eq(0).addClass('cur');
				$isNum = 0;
			}else{
				$isNum = $all_num_a.index($cur_num_a.next().addClass('cur'));
			}
		}
		$img_panel.find('ul').stop(false,true).hide().filter(function(index){
			var $_this = $(this);
			return $_this.data('imgpanelbox') == $isNum;
		}).stop(false,true).show();
	});
	
	//当地精选tab切换
	$('.part3_menu').delegate('a','click',function(e){
		var $this = $(this),
			$other_a = $this.siblings('a'),
			$part3_cell_all = $this.closest('h1.main_title').siblings('.part3_cell'),
			$this_index = $this.index();
		$other_a.removeClass('cur');
		$this.addClass('cur');
		$part3_cell_all.stop(false,true).hide().eq($this_index).stop(false,true).show();
	});
	
});