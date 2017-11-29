// JavaScript Document
$(document).ready(function(e){
	var $table_zebra_lists = $('.zebra_lists');
	$.each($table_zebra_lists,function(index){
		var $this = $(this),
			$hasThead = $this.has('thead');
		if($hasThead.length == 0){
			$this.find('tbody tr').each(function(index){
				var $_this = $(this);
				$_this.css({
					background : $_this[0].rowIndex%2 ? '#FFF' : '#f7f7f7'
				})
			});
		}else{
			$this.find('tbody tr').each(function(index){
				var $_this = $(this);
				$_this.css({
					background : $_this[0].rowIndex%2 ? '#f7f7f7' : '#FFF'
				})
			});
		}
	});
});