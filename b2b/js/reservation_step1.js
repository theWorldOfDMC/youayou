// JavaScript Document
$(document).ready(function(e){
	//优惠券
	var $coupon_panel = $('.coupon_panel'),
		$coupon_option = $('.coupon_option'),
		$icon = $coupon_option.find('i');
	//弹出关闭优惠券浮层
	$('.coupon_option').click(function(e){
		var $this = $(this),
			$couponstatus = $this.data('couponstatus');
		$couponstatus ? close_coupon() : open_coupon();
	});
	//选择优惠券
	$('.coupon_select').on('click','li',function(e){
		var $this = $(this),
			$other_li = $this.siblings('li'),
			$cur_radio = $this.find('input[type=radio]'),
			$cur_price = $this.find('.price'),
			$coupon_status = $('.coupon_status');
		$this.addClass('cur');
		$other_li.removeClass('cur');
		$cur_radio.prop('checked',true);
		$coupon_status.text($cur_price.text()).addClass('fontColorRed');
		close_coupon();
	});
	//输入优惠券
	$('.userBtn').click(function(e){
		var $this = $(this),
			$couponsDBArr = $('#couponsDB').val().split('|'),
			$coupon_status = $('.coupon_status'),
			$isMatching = 0,
			$warnPanel = $('.warnPanel'),
			$coupons_num = $('#coupons_num'),
			$ul = $('.coupon_select').find('ul'),
			$coupon_count = $('.coupon_count'),
			$s = '';
		$.each($couponsDBArr,function(key,value){
			var $_this = $(this)[0];
			if($_this.split(':')[0] == $coupons_num.val()){
				$coupon_status.text($_this.split(':')[1]).addClass('fontColorRed');
				$warnPanel.addClass('hide');
				$isMatching++;
				$s += '<li>';
                $s +=     '<a href="javascript:;">';
                $s +=         '<input type="radio" name="coupon" class="hide">';
                $s +=         '<p>订单金额达到￥500</p>';
                $s +=         '<p>有效期至2016年9月27日</p>';
                $s +=         '<i class="check_status"></i>';
                $s +=         '<div class="price">';
                $s +=             '￥<span>'+ $_this.split(':')[1] +'</span>';
                $s +=         '</div>';
                $s +=         '<i class="coupon_sideline b2b_common_bg"></i>';
                $s +=     '</a>';
                $s += '</li>';
                $ul.prepend($s).find('li:first').click();
                $coupon_count.text(parseInt($coupon_count.text(),10)+1);
                $couponsDBArr.splice($.inArray($couponsDBArr[key],$couponsDBArr),1);
                $('#couponsDB').val($couponsDBArr.join("|"));
				return false;
			}
		});
		!$isMatching ? $warnPanel.removeClass('hide') : '';
	});

	function close_coupon(){
		$coupon_panel.removeClass('show').addClass('hide');
		$coupon_option.data('couponstatus',0);
		$icon.removeClass('_close').addClass('_open');
	}
	function open_coupon(){
		$coupon_panel.removeClass('hide').addClass('show');
		$coupon_option.data('couponstatus',1);
		$icon.removeClass('_open').addClass('_close');
	}

});