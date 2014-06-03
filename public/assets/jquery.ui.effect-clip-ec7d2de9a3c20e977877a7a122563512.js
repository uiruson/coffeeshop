/*!
 * jQuery UI Effects 1.10.4
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/effects-core/
 */
!function($,undefined){var dataSpace="ui-effects-";$.effects={effect:{}},/*!
 * jQuery Color Animations v2.1.2
 * https://github.com/jquery/jquery-color
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * Date: Wed Jan 16 08:47:09 2013 -0600
 */
function(jQuery,undefined){function clamp(value,prop,allowEmpty){var type=propTypes[prop.type]||{};return null==value?allowEmpty||!prop.def?null:prop.def:(value=type.floor?~~value:parseFloat(value),isNaN(value)?prop.def:type.mod?(value+type.mod)%type.mod:0>value?0:type.max<value?type.max:value)}function stringParse(string){var inst=color(),rgba=inst._rgba=[];return string=string.toLowerCase(),each(stringParsers,function(i,parser){var parsed,match=parser.re.exec(string),values=match&&parser.parse(match),spaceName=parser.space||"rgba";return values?(parsed=inst[spaceName](values),inst[spaces[spaceName].cache]=parsed[spaces[spaceName].cache],rgba=inst._rgba=parsed._rgba,!1):void 0}),rgba.length?("0,0,0,0"===rgba.join()&&jQuery.extend(rgba,colors.transparent),inst):colors[string]}function hue2rgb(p,q,h){return h=(h+1)%1,1>6*h?p+(q-p)*h*6:1>2*h?q:2>3*h?p+(q-p)*(2/3-h)*6:p}var colors,stepHooks="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",rplusequals=/^([\-+])=\s*(\d+\.?\d*)/,stringParsers=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(execResult){return[execResult[1],execResult[2],execResult[3],execResult[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(execResult){return[2.55*execResult[1],2.55*execResult[2],2.55*execResult[3],execResult[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(execResult){return[parseInt(execResult[1],16),parseInt(execResult[2],16),parseInt(execResult[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(execResult){return[parseInt(execResult[1]+execResult[1],16),parseInt(execResult[2]+execResult[2],16),parseInt(execResult[3]+execResult[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(execResult){return[execResult[1],execResult[2]/100,execResult[3]/100,execResult[4]]}}],color=jQuery.Color=function(color,green,blue,alpha){return new jQuery.Color.fn.parse(color,green,blue,alpha)},spaces={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},propTypes={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},support=color.support={},supportElem=jQuery("<p>")[0],each=jQuery.each;supportElem.style.cssText="background-color:rgba(1,1,1,.5)",support.rgba=supportElem.style.backgroundColor.indexOf("rgba")>-1,each(spaces,function(spaceName,space){space.cache="_"+spaceName,space.props.alpha={idx:3,type:"percent",def:1}}),color.fn=jQuery.extend(color.prototype,{parse:function(red,green,blue,alpha){if(red===undefined)return this._rgba=[null,null,null,null],this;(red.jquery||red.nodeType)&&(red=jQuery(red).css(green),green=undefined);var inst=this,type=jQuery.type(red),rgba=this._rgba=[];return green!==undefined&&(red=[red,green,blue,alpha],type="array"),"string"===type?this.parse(stringParse(red)||colors._default):"array"===type?(each(spaces.rgba.props,function(key,prop){rgba[prop.idx]=clamp(red[prop.idx],prop)}),this):"object"===type?(red instanceof color?each(spaces,function(spaceName,space){red[space.cache]&&(inst[space.cache]=red[space.cache].slice())}):each(spaces,function(spaceName,space){var cache=space.cache;each(space.props,function(key,prop){if(!inst[cache]&&space.to){if("alpha"===key||null==red[key])return;inst[cache]=space.to(inst._rgba)}inst[cache][prop.idx]=clamp(red[key],prop,!0)}),inst[cache]&&jQuery.inArray(null,inst[cache].slice(0,3))<0&&(inst[cache][3]=1,space.from&&(inst._rgba=space.from(inst[cache])))}),this):void 0},is:function(compare){var is=color(compare),same=!0,inst=this;return each(spaces,function(_,space){var localCache,isCache=is[space.cache];return isCache&&(localCache=inst[space.cache]||space.to&&space.to(inst._rgba)||[],each(space.props,function(_,prop){return null!=isCache[prop.idx]?same=isCache[prop.idx]===localCache[prop.idx]:void 0})),same}),same},_space:function(){var used=[],inst=this;return each(spaces,function(spaceName,space){inst[space.cache]&&used.push(spaceName)}),used.pop()},transition:function(other,distance){var end=color(other),spaceName=end._space(),space=spaces[spaceName],startColor=0===this.alpha()?color("transparent"):this,start=startColor[space.cache]||space.to(startColor._rgba),result=start.slice();return end=end[space.cache],each(space.props,function(key,prop){var index=prop.idx,startValue=start[index],endValue=end[index],type=propTypes[prop.type]||{};null!==endValue&&(null===startValue?result[index]=endValue:(type.mod&&(endValue-startValue>type.mod/2?startValue+=type.mod:startValue-endValue>type.mod/2&&(startValue-=type.mod)),result[index]=clamp((endValue-startValue)*distance+startValue,prop)))}),this[spaceName](result)},blend:function(opaque){if(1===this._rgba[3])return this;var rgb=this._rgba.slice(),a=rgb.pop(),blend=color(opaque)._rgba;return color(jQuery.map(rgb,function(v,i){return(1-a)*blend[i]+a*v}))},toRgbaString:function(){var prefix="rgba(",rgba=jQuery.map(this._rgba,function(v,i){return null==v?i>2?1:0:v});return 1===rgba[3]&&(rgba.pop(),prefix="rgb("),prefix+rgba.join()+")"},toHslaString:function(){var prefix="hsla(",hsla=jQuery.map(this.hsla(),function(v,i){return null==v&&(v=i>2?1:0),i&&3>i&&(v=Math.round(100*v)+"%"),v});return 1===hsla[3]&&(hsla.pop(),prefix="hsl("),prefix+hsla.join()+")"},toHexString:function(includeAlpha){var rgba=this._rgba.slice(),alpha=rgba.pop();return includeAlpha&&rgba.push(~~(255*alpha)),"#"+jQuery.map(rgba,function(v){return v=(v||0).toString(16),1===v.length?"0"+v:v}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),color.fn.parse.prototype=color.fn,spaces.hsla.to=function(rgba){if(null==rgba[0]||null==rgba[1]||null==rgba[2])return[null,null,null,rgba[3]];var h,s,r=rgba[0]/255,g=rgba[1]/255,b=rgba[2]/255,a=rgba[3],max=Math.max(r,g,b),min=Math.min(r,g,b),diff=max-min,add=max+min,l=.5*add;return h=min===max?0:r===max?60*(g-b)/diff+360:g===max?60*(b-r)/diff+120:60*(r-g)/diff+240,s=0===diff?0:.5>=l?diff/add:diff/(2-add),[Math.round(h)%360,s,l,null==a?1:a]},spaces.hsla.from=function(hsla){if(null==hsla[0]||null==hsla[1]||null==hsla[2])return[null,null,null,hsla[3]];var h=hsla[0]/360,s=hsla[1],l=hsla[2],a=hsla[3],q=.5>=l?l*(1+s):l+s-l*s,p=2*l-q;return[Math.round(255*hue2rgb(p,q,h+1/3)),Math.round(255*hue2rgb(p,q,h)),Math.round(255*hue2rgb(p,q,h-1/3)),a]},each(spaces,function(spaceName,space){var props=space.props,cache=space.cache,to=space.to,from=space.from;color.fn[spaceName]=function(value){if(to&&!this[cache]&&(this[cache]=to(this._rgba)),value===undefined)return this[cache].slice();var ret,type=jQuery.type(value),arr="array"===type||"object"===type?value:arguments,local=this[cache].slice();return each(props,function(key,prop){var val=arr["object"===type?key:prop.idx];null==val&&(val=local[prop.idx]),local[prop.idx]=clamp(val,prop)}),from?(ret=color(from(local)),ret[cache]=local,ret):color(local)},each(props,function(key,prop){color.fn[key]||(color.fn[key]=function(value){var match,vtype=jQuery.type(value),fn="alpha"===key?this._hsla?"hsla":"rgba":spaceName,local=this[fn](),cur=local[prop.idx];return"undefined"===vtype?cur:("function"===vtype&&(value=value.call(this,cur),vtype=jQuery.type(value)),null==value&&prop.empty?this:("string"===vtype&&(match=rplusequals.exec(value),match&&(value=cur+parseFloat(match[2])*("+"===match[1]?1:-1))),local[prop.idx]=value,this[fn](local)))})})}),color.hook=function(hook){var hooks=hook.split(" ");each(hooks,function(i,hook){jQuery.cssHooks[hook]={set:function(elem,value){var parsed,curElem,backgroundColor="";if("transparent"!==value&&("string"!==jQuery.type(value)||(parsed=stringParse(value)))){if(value=color(parsed||value),!support.rgba&&1!==value._rgba[3]){for(curElem="backgroundColor"===hook?elem.parentNode:elem;(""===backgroundColor||"transparent"===backgroundColor)&&curElem&&curElem.style;)try{backgroundColor=jQuery.css(curElem,"backgroundColor"),curElem=curElem.parentNode}catch(e){}value=value.blend(backgroundColor&&"transparent"!==backgroundColor?backgroundColor:"_default")}value=value.toRgbaString()}try{elem.style[hook]=value}catch(e){}}},jQuery.fx.step[hook]=function(fx){fx.colorInit||(fx.start=color(fx.elem,hook),fx.end=color(fx.end),fx.colorInit=!0),jQuery.cssHooks[hook].set(fx.elem,fx.start.transition(fx.end,fx.pos))}})},color.hook(stepHooks),jQuery.cssHooks.borderColor={expand:function(value){var expanded={};return each(["Top","Right","Bottom","Left"],function(i,part){expanded["border"+part+"Color"]=value}),expanded}},colors=jQuery.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(jQuery),function(){function getElementStyles(elem){var key,len,style=elem.ownerDocument.defaultView?elem.ownerDocument.defaultView.getComputedStyle(elem,null):elem.currentStyle,styles={};if(style&&style.length&&style[0]&&style[style[0]])for(len=style.length;len--;)key=style[len],"string"==typeof style[key]&&(styles[$.camelCase(key)]=style[key]);else for(key in style)"string"==typeof style[key]&&(styles[key]=style[key]);return styles}function styleDifference(oldStyle,newStyle){var name,value,diff={};for(name in newStyle)value=newStyle[name],oldStyle[name]!==value&&(shorthandStyles[name]||($.fx.step[name]||!isNaN(parseFloat(value)))&&(diff[name]=value));return diff}var classAnimationActions=["add","remove","toggle"],shorthandStyles={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};$.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(_,prop){$.fx.step[prop]=function(fx){("none"!==fx.end&&!fx.setAttr||1===fx.pos&&!fx.setAttr)&&(jQuery.style(fx.elem,prop,fx.end),fx.setAttr=!0)}}),$.fn.addBack||($.fn.addBack=function(selector){return this.add(null==selector?this.prevObject:this.prevObject.filter(selector))}),$.effects.animateClass=function(value,duration,easing,callback){var o=$.speed(duration,easing,callback);return this.queue(function(){var applyClassChange,animated=$(this),baseClass=animated.attr("class")||"",allAnimations=o.children?animated.find("*").addBack():animated;allAnimations=allAnimations.map(function(){var el=$(this);return{el:el,start:getElementStyles(this)}}),applyClassChange=function(){$.each(classAnimationActions,function(i,action){value[action]&&animated[action+"Class"](value[action])})},applyClassChange(),allAnimations=allAnimations.map(function(){return this.end=getElementStyles(this.el[0]),this.diff=styleDifference(this.start,this.end),this}),animated.attr("class",baseClass),allAnimations=allAnimations.map(function(){var styleInfo=this,dfd=$.Deferred(),opts=$.extend({},o,{queue:!1,complete:function(){dfd.resolve(styleInfo)}});return this.el.animate(this.diff,opts),dfd.promise()}),$.when.apply($,allAnimations.get()).done(function(){applyClassChange(),$.each(arguments,function(){var el=this.el;$.each(this.diff,function(key){el.css(key,"")})}),o.complete.call(animated[0])})})},$.fn.extend({addClass:function(orig){return function(classNames,speed,easing,callback){return speed?$.effects.animateClass.call(this,{add:classNames},speed,easing,callback):orig.apply(this,arguments)}}($.fn.addClass),removeClass:function(orig){return function(classNames,speed,easing,callback){return arguments.length>1?$.effects.animateClass.call(this,{remove:classNames},speed,easing,callback):orig.apply(this,arguments)}}($.fn.removeClass),toggleClass:function(orig){return function(classNames,force,speed,easing,callback){return"boolean"==typeof force||force===undefined?speed?$.effects.animateClass.call(this,force?{add:classNames}:{remove:classNames},speed,easing,callback):orig.apply(this,arguments):$.effects.animateClass.call(this,{toggle:classNames},force,speed,easing)}}($.fn.toggleClass),switchClass:function(remove,add,speed,easing,callback){return $.effects.animateClass.call(this,{add:add,remove:remove},speed,easing,callback)}})}(),function(){function _normalizeArguments(effect,options,speed,callback){return $.isPlainObject(effect)&&(options=effect,effect=effect.effect),effect={effect:effect},null==options&&(options={}),$.isFunction(options)&&(callback=options,speed=null,options={}),("number"==typeof options||$.fx.speeds[options])&&(callback=speed,speed=options,options={}),$.isFunction(speed)&&(callback=speed,speed=null),options&&$.extend(effect,options),speed=speed||options.duration,effect.duration=$.fx.off?0:"number"==typeof speed?speed:speed in $.fx.speeds?$.fx.speeds[speed]:$.fx.speeds._default,effect.complete=callback||options.complete,effect}function standardAnimationOption(option){return!option||"number"==typeof option||$.fx.speeds[option]?!0:"string"!=typeof option||$.effects.effect[option]?$.isFunction(option)?!0:"object"!=typeof option||option.effect?!1:!0:!0}$.extend($.effects,{version:"1.10.4",save:function(element,set){for(var i=0;i<set.length;i++)null!==set[i]&&element.data(dataSpace+set[i],element[0].style[set[i]])},restore:function(element,set){var val,i;for(i=0;i<set.length;i++)null!==set[i]&&(val=element.data(dataSpace+set[i]),val===undefined&&(val=""),element.css(set[i],val))},setMode:function(el,mode){return"toggle"===mode&&(mode=el.is(":hidden")?"show":"hide"),mode},getBaseline:function(origin,original){var y,x;switch(origin[0]){case"top":y=0;break;case"middle":y=.5;break;case"bottom":y=1;break;default:y=origin[0]/original.height}switch(origin[1]){case"left":x=0;break;case"center":x=.5;break;case"right":x=1;break;default:x=origin[1]/original.width}return{x:x,y:y}},createWrapper:function(element){if(element.parent().is(".ui-effects-wrapper"))return element.parent();var props={width:element.outerWidth(!0),height:element.outerHeight(!0),"float":element.css("float")},wrapper=$("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),size={width:element.width(),height:element.height()},active=document.activeElement;try{active.id}catch(e){active=document.body}return element.wrap(wrapper),(element[0]===active||$.contains(element[0],active))&&$(active).focus(),wrapper=element.parent(),"static"===element.css("position")?(wrapper.css({position:"relative"}),element.css({position:"relative"})):($.extend(props,{position:element.css("position"),zIndex:element.css("z-index")}),$.each(["top","left","bottom","right"],function(i,pos){props[pos]=element.css(pos),isNaN(parseInt(props[pos],10))&&(props[pos]="auto")}),element.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),element.css(size),wrapper.css(props).show()},removeWrapper:function(element){var active=document.activeElement;return element.parent().is(".ui-effects-wrapper")&&(element.parent().replaceWith(element),(element[0]===active||$.contains(element[0],active))&&$(active).focus()),element},setTransition:function(element,list,factor,value){return value=value||{},$.each(list,function(i,x){var unit=element.cssUnit(x);unit[0]>0&&(value[x]=unit[0]*factor+unit[1])}),value}}),$.fn.extend({effect:function(){function run(next){function done(){$.isFunction(complete)&&complete.call(elem[0]),$.isFunction(next)&&next()}var elem=$(this),complete=args.complete,mode=args.mode;(elem.is(":hidden")?"hide"===mode:"show"===mode)?(elem[mode](),done()):effectMethod.call(elem[0],args,done)}var args=_normalizeArguments.apply(this,arguments),mode=args.mode,queue=args.queue,effectMethod=$.effects.effect[args.effect];return $.fx.off||!effectMethod?mode?this[mode](args.duration,args.complete):this.each(function(){args.complete&&args.complete.call(this)}):queue===!1?this.each(run):this.queue(queue||"fx",run)},show:function(orig){return function(option){if(standardAnimationOption(option))return orig.apply(this,arguments);var args=_normalizeArguments.apply(this,arguments);return args.mode="show",this.effect.call(this,args)}}($.fn.show),hide:function(orig){return function(option){if(standardAnimationOption(option))return orig.apply(this,arguments);var args=_normalizeArguments.apply(this,arguments);return args.mode="hide",this.effect.call(this,args)}}($.fn.hide),toggle:function(orig){return function(option){if(standardAnimationOption(option)||"boolean"==typeof option)return orig.apply(this,arguments);var args=_normalizeArguments.apply(this,arguments);return args.mode="toggle",this.effect.call(this,args)}}($.fn.toggle),cssUnit:function(key){var style=this.css(key),val=[];return $.each(["em","px","%","pt"],function(i,unit){style.indexOf(unit)>0&&(val=[parseFloat(style),unit])}),val}})}(),function(){var baseEasings={};$.each(["Quad","Cubic","Quart","Quint","Expo"],function(i,name){baseEasings[name]=function(p){return Math.pow(p,i+2)}}),$.extend(baseEasings,{Sine:function(p){return 1-Math.cos(p*Math.PI/2)},Circ:function(p){return 1-Math.sqrt(1-p*p)},Elastic:function(p){return 0===p||1===p?p:-Math.pow(2,8*(p-1))*Math.sin((80*(p-1)-7.5)*Math.PI/15)},Back:function(p){return p*p*(3*p-2)},Bounce:function(p){for(var pow2,bounce=4;p<((pow2=Math.pow(2,--bounce))-1)/11;);return 1/Math.pow(4,3-bounce)-7.5625*Math.pow((3*pow2-2)/22-p,2)}}),$.each(baseEasings,function(name,easeIn){$.easing["easeIn"+name]=easeIn,$.easing["easeOut"+name]=function(p){return 1-easeIn(1-p)},$.easing["easeInOut"+name]=function(p){return.5>p?easeIn(2*p)/2:1-easeIn(-2*p+2)/2}})}()}(jQuery),/*!
 * jQuery UI Effects Clip 1.10.4
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/clip-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */
function($){$.effects.effect.clip=function(o,done){var wrapper,animate,distance,el=$(this),props=["position","top","bottom","left","right","height","width"],mode=$.effects.setMode(el,o.mode||"hide"),show="show"===mode,direction=o.direction||"vertical",vert="vertical"===direction,size=vert?"height":"width",position=vert?"top":"left",animation={};$.effects.save(el,props),el.show(),wrapper=$.effects.createWrapper(el).css({overflow:"hidden"}),animate="IMG"===el[0].tagName?wrapper:el,distance=animate[size](),show&&(animate.css(size,0),animate.css(position,distance/2)),animation[size]=show?distance:0,animation[position]=show?0:distance/2,animate.animate(animation,{queue:!1,duration:o.duration,easing:o.easing,complete:function(){show||el.hide(),$.effects.restore(el,props),$.effects.removeWrapper(el),done()}})}}(jQuery);