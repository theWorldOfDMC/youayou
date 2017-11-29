// JavaScript Document
/* 关闭浮层 */
$(document).ready(function(e){
	//初始数据
	var $passengerInfoArr = [{"id":"1263694395","user_id":"109708820","name":"金正恩","family_name_en":"yang","give_name_en":"bowen","credentials_type":"2","credentials_no":"s123456","sex":"1","birthday":"1928-03-03","addtime":"2015-03-18 16:46:31","modtime":"2015-03-18 16:46:31"},{"id":"1263694405","user_id":"109708820","name":"金正日","family_name_en":"xiao","give_name_en":"long","credentials_type":"2","credentials_no":"s1234654","sex":"0","birthday":"1928-01-01","addtime":"2015-03-18 16:00:32","modtime":"2015-03-18 16:00:32"},{"id":"1263691515","user_id":"109708820","name":"金日成","family_name_en":"xiao","give_name_en":"long","credentials_type":"2","credentials_no":"s1234654","sex":"0","birthday":"1928-01-01","addtime":"2015-03-18 16:00:32","modtime":"2015-03-18 16:00:32"}],
		$passengerInfoArrLength = $passengerInfoArr.length;
	//选择旅客
	$('.passengerADD_btn').delegate('li','click',function(e){
		var $inputChecked = $('.passengerADD_btn input:checked');
		//清空		
		$('div[data-passenger] input[data-passengerInfo=name]').val('');
		$('div[data-passenger] input[data-passengerInfo=familyNameEN]').val('');
		$('div[data-passenger] input[data-passengerInfo=giveNameEN]').val('');
		$('div[data-passenger] div[data-passengerInfo=credentialsType]').find('a').text('证件类型');
		$('div[data-passenger] div[data-passengerInfo=credentialsType]').find('input[type=hidden]').val('');
		$('div[data-passenger] input[data-passengerInfo=credentialsNO]').val('');
		$('div[data-passenger] div[data-passengerInfo=sex]').find('a').text('选择性别');
		$('div[data-passenger] div[data-passengerInfo=bYear]').find('a').text('-年份-');
		$('div[data-passenger] div[data-passengerInfo=bMonth]').find('a').text('-月份-');
		$('div[data-passenger] div[data-passengerInfo=bDate]').find('a').text('-日期-');
		$('div[data-passenger] div[data-passengerInfo=sex]').find('input[type=hidden]').val('');
		$('div[data-passenger] div[data-passengerInfo=bYear]').find('input[type=hidden]').val('');
		$('div[data-passenger] div[data-passengerInfo=bMonth]').find('input[type=hidden]').val('');
		$('div[data-passenger] div[data-passengerInfo=bDate]').find('input[type=hidden]').val('');
		
		$inputChecked.each(function(index){
			var $indexOFInput = $(this).closest('.passengerADD_btn').find('input').index(this),
				$curData = $passengerInfoArr[$indexOFInput],
				$temp = $curData.birthday,
				$tempArr = $temp.split('-'),
				$inputName = $('div[data-passenger='+ index +'] input[data-passengerInfo=name]'),
				$inputFamilyNameEN = $('div[data-passenger='+ index +'] input[data-passengerInfo=familyNameEN]'),
				$inputGiveNameEN = $('div[data-passenger='+ index +'] input[data-passengerInfo=giveNameEN]'),
				$inputCredentialsType = $('div[data-passenger='+ index +'] div[data-passengerInfo=credentialsType]'),
				$inputCredentialsNO = $('div[data-passenger='+ index +'] input[data-passengerInfo=credentialsNO]'),
				$inputSex = $('div[data-passenger='+ index +'] div[data-passengerInfo=sex]'),
				$inputBYear = $('div[data-passenger='+ index +'] div[data-passengerInfo=bYear]'),
				$inputBMonth = $('div[data-passenger='+ index +'] div[data-passengerInfo=bMonth]'),
				$inputBDate = $('div[data-passenger='+ index +'] div[data-passengerInfo=bDate]');
			var $name = $curData.name,
				$familyNameEN = $curData.family_name_en,
				$giveNameEN = $curData.give_name_en,
				$credentialsType = $curData.credentials_type,
				$credentialsNO = $curData.credentials_no,
				$credentialsName,
				$sexName,
				$sex = $curData.sex,
				$bYear = $tempArr[0],
				$bMonth = $tempArr[1],
				$bDate = $tempArr[2];
			switch($credentialsType){
				case '1' : $credentialsName = '身份证'; break;
				case '2' : $credentialsName = '护 照'; break;
				default : '';
			}
			switch($sex){
				case '0' : $sexName = '男'; break;
				case '1' : $sexName = '女'; break;
				default : '';
			}
			$inputName.val($name);
			$inputFamilyNameEN.val($familyNameEN);
			$inputGiveNameEN.val($giveNameEN);
			$inputCredentialsType.find('a').text($credentialsName);
			$inputCredentialsType.find('input').val($credentialsType);
			$inputCredentialsNO.val($credentialsNO);
			$inputSex.find('a').text($sexName);
			$inputSex.find('input').val($sex);
			$inputBYear.find('a').text($bYear);
			$inputBYear.find('input').val($bYear);
			$inputBMonth.find('a').text($bMonth);
			$inputBMonth.find('input').val($bMonth);
			$inputBDate.find('a').text($bDate);
			$inputBDate.find('input').val($bDate);
		});
	});
	$('.passengerADD_btn li:first').click();
});
