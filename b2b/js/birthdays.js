// JavaScript Document

$(document).ready(function(e){
	//生成年份列表
	$('.year,.month,.day').click(function(e){
		e.stopPropagation();
		var $this = $(this),
			$selectList = $this.next(),
			$otherList = $this.closest('.input_box2').siblings('.input_box2').find('ul');
		//$otherList.stop().hide();
		if($this.hasClass('year')){
			year($selectList);
		}else if($this.hasClass('month')){
			month($selectList);
		}
		$selectList.css({
			height : '174px',
			overflow : 'scroll'
		}).stop().slideToggle();
	});
	$('.select_panel').delegate('li','click',function(e){
		var $this = $(this),
			$td_box = $this.closest('td');
		$this.closest('ul').prev().text($this.text());
		$this.closest('ul').siblings('input[type=hidden]').val($this.text());
		change_date($td_box);
	});
	$(window).click(function(e){
		$('.year + .list2,.month + .list2,.day + .list2').stop(false,true).slideUp();
	});
	
	//初始化年份
	function year($obj){
		var $this = $obj,
			$year = parseInt(new Date().getFullYear(),10),
			$year_length = 10;
		$this.empty();
		for(var x = 0; x <= $year_length; x++){
			if(x == 0){
				$this.append('<li>-年份-</li>');
			}else{
				var $curYear = $year - $year_length + x;
				$this.append('<li>'+ $curYear +'</li>');
			}
		}
	}
	//初始化月份
	function month($obj){
		var $this = $obj;
		$this.empty();
		for(var x = 1; x <= 12; x++){
			$this.append('<li>'+ (x < 10 ? '0'+x : x) +'</li>');
		}
	}
	//根据年月 确定 日
	function change_date($obj){
		var $this = $obj,
			$selectYear = parseInt($this.find('.year').text(),10),
			$selectMonth = parseInt($this.find('.month').text(),10),
			$date = $this.find('.day').next(),
			$date_length = new Date($selectYear,$selectMonth,0).getDate();
		$date.empty();
		for(var x = 0; x <= $date_length; x++){
			if(x == 0){
				$date.append('<li>-日期-</li>');
			}else{
				$date.append('<li>'+ (x < 10 ? '0'+x : x) +'</li>');
			}
		}
		
	}
});