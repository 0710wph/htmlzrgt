$.fn.countTo=function(options){options=options||{};return $(this).each(function(){var settings=$.extend({},$.fn.countTo.defaults,{from:$(this).data('from'),to:$(this).data('to'),speed:$(this).data('speed'),refreshInterval:$(this).data('refresh-interval'),decimals:$(this).data('decimals')},options);var loops=Math.ceil(settings.speed/settings.refreshInterval),increment=(settings.to-settings.from)/loops;var self=this,$self=$(this),loopCount=0,value=settings.from,data=$self.data('countTo')||{};$self.data('countTo',data);if(data.interval){clearInterval(data.interval);}
data.interval=setInterval(updateTimer,settings.refreshInterval);render(value);function updateTimer(){value+=increment;loopCount++;render(value);if(typeof(settings.onUpdate)=='function'){settings.onUpdate.call(self,value);}
if(loopCount>=loops){$self.removeData('countTo');clearInterval(data.interval);value=settings.to;if(typeof(settings.onComplete)=='function'){settings.onComplete.call(self,value);}}}
function render(value){var formattedValue=settings.formatter.call(self,value,settings);$self.html(formattedValue);}});};$.fn.countTo.defaults={from:0,to:0,speed:1000,refreshInterval:100,decimals:0,formatter:formatter,onUpdate:null,onComplete:null};function formatter(value,settings){return value.toFixed(settings.decimals);}
$('.count-number').data('countToOptions',{formatter:function(value,options){return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g,',');}});$('.timer').each(count);function count(options){var $this=$(this);options=$.extend({},options||{},$this.data('countToOptions')||{});$this.countTo(options);}

(function($){
    $.fn.num = function(options){
        _this = $(this)
        var _thisTop,_thisRight,_thisBottom,_thisLeft,_thisTopBottom,_thisRightLeft,_thisAll

        n1 = _this.width();
        h1 = _this.height();

        var defaults = {
            Type:'num1',
            Color:'#ff0000',
            speed:300,
        }
        var options = $.extend({},defaults,options)
        var becurr = "background:"+options.Color+";position:absolute;border-radius:10px;opahide;"
        switch(options.Type){

            case 'num2':
                num2()
                break;
        }

        function than(_this){
            var obj = new Object();
            obj.name = '123'
            obj.thsn = function(){
                _thisTop = _this.find('.divTop').stop().show()
                _thisRight = _this.find('.divRight').stop().show()
                _thisBottom = _this.find('.divBottom').stop().show()
                _thisLeft = _this.find('.divLeft').stop().show()
                _thisTopBottom = _this.find('.divTop,.divBottom').stop().show()
                _thisRightLeft = _this.find('.divLeft,.divRight').stop().show()
                _thisAll = _this.find('.divTop,.divBottom,.divLeft,.divRight').stop().show()
            }
            return obj;
        }

        var opashow = 'opashow',opahide = 'opahide'


        function num2(){
            // top杈规
            var divTop = "<div style='"+becurr+"height:2px;width:50px;top:-2px;left:-80px;' class='divTop'></div";

            // right杈规
            var divRight = "<div style='"+becurr+"height:50px;width:2px;top:-80px;right:-2px;' class='divRight'></div";

            // Bottom杈规
            var divBottom = "<div style='"+becurr+"height:2px;width:50px;bottom:-2px;right:-80px;' class='divBottom'></div";

            // Left杈规
            var divLeft = "<div style='"+becurr+"height:50px;width:2px;bottom:-80px;left:-2px;' class='divLeft'></div";
            _this.hover(function(){
                el = $(this)
                el.append(divTop,divRight,divBottom,divLeft);
                num2 = new than(el)
                num2.thsn()
                _thisTop.animate({left:-2,},options.speed).fadeOut(0)
                _thisRight.animate({top:-2},options.speed).fadeOut(0)
                _thisBottom.animate({right:-2,},options.speed).fadeOut(0)
                _thisLeft.animate({bottom:-2,},options.speed).fadeOut(0);
            },function(){
                _thisTop.show().animate({left:-80},options.speed).hide(0)
                _thisRight.show().animate({top:-80},options.speed).hide(0)
                _thisBottom.show().animate({right:-80},options.speed).hide(0)
                _thisLeft.show().animate({bottom:-80},options.speed,function(){
                    _thisAll.remove()
                }).hide(0);
            })
        }



    }
})(jQuery);