$(function(){
	$('.container').fullpage({
		/*1.设置背景颜色
		sectionsColor:["#fadd67","#84a2d4","#ef674d","#ffeedd","#d04759","#84d9ed","#8ac060"],*/
		/*2.垂直居中 顶部对齐*/
		verticalCentered:false,
		/*3.显示点点
		navigation:true,*/
		/*4.进入屏幕时显示 now*/
		afterLoad:function(link,index){
			$('.section').eq(index-1).addClass("now");
		},
		/*5.离开某个页面时触发 leaved*/
		onLeave:function(index,nextIndex,direction){
			var currentSection = $('.section').eq(index-1);
			if(index== 2 && nextIndex == 3){
				/*当前从2到3页面*/
				currentSection.addClass('leaved');
			}else if(index == 3 && nextIndex == 4){
				/*当前从3到4页面*/
				currentSection.addClass('leaved');
			}else if(index == 5 && nextIndex ==6){
				currentSection.addClass('leaved');
				$('.screen06 .box').addClass('show');
			}else if (index == 6 && nextIndex ==7) {
                $('.screen07 .star').addClass('show');
                $('.screen07 .text').addClass('show');
                $('.screen07 .star img').each(function (i, item) {
                    $(this).css('transition-delay', i * 0.5 + 's');
                });

            }

		},

		/*6.点击某个按钮会切换下一页*/
		afterRender: function(){
			$('.more').on('click',function(){
				$.fn.fullpage.moveSectionDown();
			});
		/*7.购物车动画执行完 后另一个动画执行*//*问题：没有执行*/
			$('.screen04 .cart').on('transitionend',function(){
				console.log("12")
				$('.screen04 .address').show().find('img:last').fadeIn(1000);
				$('.screen04 .text').addClass('show');
			});
			/*8.第八屏手跟着鼠标移动*/
			$('.screen08').on('mousemove',function (e) {
				$(this).find('.hand').css({
					left:e.clientX -190,
					top:e.clientY -20
				});
            }).find('.again').on('click',function () {
            	$('.now,.leaved,.show').removeClass('now').removeClass('leaved').removeClass('show');
            	$('.content[style]').removeAttr('style');
            	/*跳回第一页*/
            	$.fn.fullpage.moveTo(1);

            });


		},
		/*7.页面切换时间 leaved*/
		scrollingSpeed:1000
	
	});
});