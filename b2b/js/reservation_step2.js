// JavaScript Document
$(document).ready(function(e){
	//提交表单
	$('.submit_form').click(function(e){
		var $form = $('form[formID=submit_form]');
		$form.submit();
	});
	//去支付
	$('.btn_submit').click(function(e){
		var $layer = $('.layer'),
			$layer_panel = $('.layer_panel[layerID=confirm_panel]'),
			$layer_bg = $('.layer_bg');
		$layer.stop(false,true).show();
		$layer_panel.stop(false,true).show();
		$layer_bg.stop(false,true).show();
		setLayerPos();
	});
	$('.input_box2').delegate('.list2 li','click',function(e){
		var $this = $(this),
			$cur_input = $this.closest('.list2').siblings('input[type=hidden]');
		$cur_input.val($this.data('id'));
	});
});