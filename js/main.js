$(document).ready(function() {
	$('#fullpage-s').fullpage({
        	// 内容不居中
        	verticalCentered: false,
		resize: true,
		// 页面循环
		continuousVertical: true,
		scrollingSpeed: 500,
		// 不显示导航条
		 navigation: false,
	});
	var self = this;
	var bgMusic = $('audio').get(0);
	var $btnMusic = $('.btn-music');
	
	// 音乐开关按钮
	$btnMusic.click(function () {
		if (bgMusic.paused) {
			bgMusic.play();
			$(this).removeClass('paused');
		} else {
			bgMusic.pause();
			$(this).addClass('paused');
		}
	});

	// 移动设备监听touchstart事件，触发音乐播放
	document.addEventListener('touchstart', function () {
		function audioAutoPlay() {
			var bgMusic = $('audio').get(0);
			var $btnMusic = $('.btn-music');
			if(!$btnMusic.hasClass('paused') && bgMusic.paused) {  
				bgMusic.play();
			}
		}
		audioAutoPlay();
	});
});
