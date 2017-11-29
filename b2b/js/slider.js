var curIndex = 0;
var time = 300;
var slideTime = 5000;
var ctLength = $("#banner_img>li").length;
var int = setInterval("autoSlide()", slideTime);
$("#banner_ctr>ul>li[class!='first-item'][class!='last-item']").mouseenter(function () {
 	var ct=$(this).index("#banner_ctr>ul>li[class!='first-item'][class!='last-item']");
	ct = Math.max(ct, 0);
    show(ct);
    window.clearInterval(int);
    int = setInterval("autoSlide(1)", slideTime);
});
$('.prevNav,.nextNav').click(function(){
	var $this = $(this),
		$ct = 0;
	if($this.data('click') == 0){
		curIndex - 1 < 0 ? $ct = ctLength - 1 : $ct = curIndex - 1;
		show($ct);
	}
	if($this.data('click') == 1){
		curIndex + 1 == ctLength ? $ct = 0 : $ct = curIndex + 1;
		show($ct);
	}
	window.clearInterval(int);
    int = setInterval("autoSlide(1)", slideTime);
});
function autoSlide(ct) {
	curIndex + 1 >= ctLength? curIndex = -1 : 0;
    show(curIndex + 1);
}
function show(index) {
    $("#drag_ctr").stop(false, true).animate({ left: index * 20 + 0 }, time);
    $("#banner_img>li").eq(curIndex).stop(false, true).fadeOut(time);
    setTimeout(function () {
        $("#banner_img>li").eq(index).stop(false, true).fadeIn(time);
    }, 200)
    curIndex = index;
}
function resetCtPos(){
	var $autoPosition = '',
		$panelWidth = $('.main').width();
	$autoPosition = ($panelWidth - ctLength*10)/2;
	$('#banner_ctr').css('left',$autoPosition);
}

$(window).load(function(){
	resetCtPos();
});
$(window).resize(function(){	
	resetCtPos();
});
