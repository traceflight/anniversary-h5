# anniversary-h5

使用[fullpage.js](https://github.com/alvarotrigo/fullpage.js)实现整屏显示，通过CSS3实现动画。

# 实现效果

手机端打开下面网页或扫描二维码查看实现效果。

[https://blog.datarepo.cn/anniversary/index.html](https://blog.datarepo.cn/anniversary/index.html)

![qrcode](https://raw.githubusercontent.com/traceflight/anniversary-h5/master/qrcode.png)

# 功能实现说明

## 整屏显示

使用[fullpage.js](https://github.com/alvarotrigo/fullpage.js)实现，需要引入的样式文件和脚本文件包括：`jquery.fullpage.css`
，`jquery.min.js`，`jquery.easings.min.js`和`jquery.fullpage.js`。然后在`body`元素内定义如下内容：

``` html
<div id="fullpage">
	<div class="section">Some section</div>
	<div class="section">Some section</div>
	<div class="section">Some section</div>
	<div class="section">Some section</div>
</div>
```
然后需要使用JavaScript脚本初始化页面（`fullpage()`函数可通过设置参数实现复杂的初始化功能）：

``` javascript
$(document).ready(function() {
	$('#fullpage').fullpage();
});
```

## 动画

使用CSS3的`animation`实现动画。

## 背景音乐

### 音符图标

本文参考项目[wechat-h5-boilerplate](https://github.com/panteng/wechat-h5-boilerplate)中的方法添加音符图标，在css文件中导入自定义字体`my-custom-icon-font`并在相应位置填入音符对应的编码。

### 自动播放

移动设备中为了节省流量，即使在`audio`标签中设置了`autoplay`也不会自动播放，需要通过事件触发。项目中通过监听`touchstart`事件实现，即在第一次触摸屏幕后播放音乐：

``` javascript
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
```

# 使用

最简单的使用方法是：替换`index.html`中的文字和`img`文件夹内的图片。

也可以在此基础上，自定义样式和动画。

