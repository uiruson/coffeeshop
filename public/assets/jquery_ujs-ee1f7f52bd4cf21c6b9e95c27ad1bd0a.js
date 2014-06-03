!function($,undefined){$.rails!==undefined&&$.error("jquery-ujs has already been loaded!");var rails,$document=$(document);$.rails=rails={linkClickSelector:"a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]",buttonClickSelector:"button[data-remote]",inputChangeSelector:"select[data-remote], input[data-remote], textarea[data-remote]",formSubmitSelector:"form",formInputClickSelector:"form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])",disableSelector:"input[data-disable-with], button[data-disable-with], textarea[data-disable-with]",enableSelector:"input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled",requiredInputSelector:"input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",fileInputSelector:"input[type=file]",linkDisableSelector:"a[data-disable-with]",CSRFProtection:function(xhr){var token=$('meta[name="csrf-token"]').attr("content");token&&xhr.setRequestHeader("X-CSRF-Token",token)},refreshCSRFTokens:function(){var csrfToken=$("meta[name=csrf-token]").attr("content"),csrfParam=$("meta[name=csrf-param]").attr("content");$('form input[name="'+csrfParam+'"]').val(csrfToken)},fire:function(obj,name,data){var event=$.Event(name);return obj.trigger(event,data),event.result!==!1},confirm:function(message){return confirm(message)},ajax:function(options){return $.ajax(options)},href:function(element){return element.attr("href")},handleRemote:function(element){var method,url,data,elCrossDomain,crossDomain,withCredentials,dataType,options;if(rails.fire(element,"ajax:before")){if(elCrossDomain=element.data("cross-domain"),crossDomain=elCrossDomain===undefined?null:elCrossDomain,withCredentials=element.data("with-credentials")||null,dataType=element.data("type")||$.ajaxSettings&&$.ajaxSettings.dataType,element.is("form")){method=element.attr("method"),url=element.attr("action"),data=element.serializeArray();var button=element.data("ujs:submit-button");button&&(data.push(button),element.data("ujs:submit-button",null))}else element.is(rails.inputChangeSelector)?(method=element.data("method"),url=element.data("url"),data=element.serialize(),element.data("params")&&(data=data+"&"+element.data("params"))):element.is(rails.buttonClickSelector)?(method=element.data("method")||"get",url=element.data("url"),data=element.serialize(),element.data("params")&&(data=data+"&"+element.data("params"))):(method=element.data("method"),url=rails.href(element),data=element.data("params")||null);options={type:method||"GET",data:data,dataType:dataType,beforeSend:function(xhr,settings){return settings.dataType===undefined&&xhr.setRequestHeader("accept","*/*;q=0.5, "+settings.accepts.script),rails.fire(element,"ajax:beforeSend",[xhr,settings])},success:function(data,status,xhr){element.trigger("ajax:success",[data,status,xhr])},complete:function(xhr,status){element.trigger("ajax:complete",[xhr,status])},error:function(xhr,status,error){element.trigger("ajax:error",[xhr,status,error])},crossDomain:crossDomain},withCredentials&&(options.xhrFields={withCredentials:withCredentials}),url&&(options.url=url);var jqxhr=rails.ajax(options);return element.trigger("ajax:send",jqxhr),jqxhr}return!1},handleMethod:function(link){var href=rails.href(link),method=link.data("method"),target=link.attr("target"),csrfToken=$("meta[name=csrf-token]").attr("content"),csrfParam=$("meta[name=csrf-param]").attr("content"),form=$('<form method="post" action="'+href+'"></form>'),metadataInput='<input name="_method" value="'+method+'" type="hidden" />';csrfParam!==undefined&&csrfToken!==undefined&&(metadataInput+='<input name="'+csrfParam+'" value="'+csrfToken+'" type="hidden" />'),target&&form.attr("target",target),form.hide().append(metadataInput).appendTo("body"),form.submit()},disableFormElements:function(form){form.find(rails.disableSelector).each(function(){var element=$(this),method=element.is("button")?"html":"val";element.data("ujs:enable-with",element[method]()),element[method](element.data("disable-with")),element.prop("disabled",!0)})},enableFormElements:function(form){form.find(rails.enableSelector).each(function(){var element=$(this),method=element.is("button")?"html":"val";element.data("ujs:enable-with")&&element[method](element.data("ujs:enable-with")),element.prop("disabled",!1)})},allowAction:function(element){var callback,message=element.data("confirm"),answer=!1;return message?(rails.fire(element,"confirm")&&(answer=rails.confirm(message),callback=rails.fire(element,"confirm:complete",[answer])),answer&&callback):!0},blankInputs:function(form,specifiedSelector,nonBlank){var input,valueToCheck,inputs=$(),selector=specifiedSelector||"input,textarea",allInputs=form.find(selector);return allInputs.each(function(){if(input=$(this),valueToCheck=input.is("input[type=checkbox],input[type=radio]")?input.is(":checked"):input.val(),!valueToCheck==!nonBlank){if(input.is("input[type=radio]")&&allInputs.filter('input[type=radio]:checked[name="'+input.attr("name")+'"]').length)return!0;inputs=inputs.add(input)}}),inputs.length?inputs:!1},nonBlankInputs:function(form,specifiedSelector){return rails.blankInputs(form,specifiedSelector,!0)},stopEverything:function(e){return $(e.target).trigger("ujs:everythingStopped"),e.stopImmediatePropagation(),!1},disableElement:function(element){element.data("ujs:enable-with",element.html()),element.html(element.data("disable-with")),element.bind("click.railsDisable",function(e){return rails.stopEverything(e)})},enableElement:function(element){element.data("ujs:enable-with")!==undefined&&(element.html(element.data("ujs:enable-with")),element.removeData("ujs:enable-with")),element.unbind("click.railsDisable")}},rails.fire($document,"rails:attachBindings")&&($.ajaxPrefilter(function(options,originalOptions,xhr){options.crossDomain||rails.CSRFProtection(xhr)}),$document.delegate(rails.linkDisableSelector,"ajax:complete",function(){rails.enableElement($(this))}),$document.delegate(rails.linkClickSelector,"click.rails",function(e){var link=$(this),method=link.data("method"),data=link.data("params"),metaClick=e.metaKey||e.ctrlKey;if(!rails.allowAction(link))return rails.stopEverything(e);if(!metaClick&&link.is(rails.linkDisableSelector)&&rails.disableElement(link),link.data("remote")!==undefined){if(metaClick&&(!method||"GET"===method)&&!data)return!0;var handleRemote=rails.handleRemote(link);return handleRemote===!1?rails.enableElement(link):handleRemote.error(function(){rails.enableElement(link)}),!1}return link.data("method")?(rails.handleMethod(link),!1):void 0}),$document.delegate(rails.buttonClickSelector,"click.rails",function(e){var button=$(this);return rails.allowAction(button)?(rails.handleRemote(button),!1):rails.stopEverything(e)}),$document.delegate(rails.inputChangeSelector,"change.rails",function(e){var link=$(this);return rails.allowAction(link)?(rails.handleRemote(link),!1):rails.stopEverything(e)}),$document.delegate(rails.formSubmitSelector,"submit.rails",function(e){var form=$(this),remote=form.data("remote")!==undefined,blankRequiredInputs=rails.blankInputs(form,rails.requiredInputSelector),nonBlankFileInputs=rails.nonBlankInputs(form,rails.fileInputSelector);if(!rails.allowAction(form))return rails.stopEverything(e);if(blankRequiredInputs&&form.attr("novalidate")==undefined&&rails.fire(form,"ajax:aborted:required",[blankRequiredInputs]))return rails.stopEverything(e);if(remote){if(nonBlankFileInputs){setTimeout(function(){rails.disableFormElements(form)},13);var aborted=rails.fire(form,"ajax:aborted:file",[nonBlankFileInputs]);return aborted||setTimeout(function(){rails.enableFormElements(form)},13),aborted}return rails.handleRemote(form),!1}setTimeout(function(){rails.disableFormElements(form)},13)}),$document.delegate(rails.formInputClickSelector,"click.rails",function(event){var button=$(this);if(!rails.allowAction(button))return rails.stopEverything(event);var name=button.attr("name"),data=name?{name:name,value:button.val()}:null;button.closest("form").data("ujs:submit-button",data)}),$document.delegate(rails.formSubmitSelector,"ajax:beforeSend.rails",function(event){this==event.target&&rails.disableFormElements($(this))}),$document.delegate(rails.formSubmitSelector,"ajax:complete.rails",function(event){this==event.target&&rails.enableFormElements($(this))}),$(function(){rails.refreshCSRFTokens()}))}(jQuery);