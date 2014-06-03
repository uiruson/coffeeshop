(function(){var init_sortable,recompute_positions;$(function(){return $(document).on("click","a.button.has_many_remove",function(e){var parent,to_remove;return e.preventDefault(),parent=$(this).closest(".has_many_container"),to_remove=$(this).closest("fieldset"),recompute_positions(parent),parent.trigger("has_many_remove:before",[to_remove]),to_remove.remove()}),$(document).on("click","a.button.has_many_add",function(e){var before_add,elem,fieldset,html,index,parent,regex;return e.preventDefault(),elem=$(this),parent=elem.closest(".has_many_container"),parent.trigger(before_add=$.Event("has_many_add:before")),before_add.isDefaultPrevented()?void 0:(index=parent.data("has_many_index")||parent.children("fieldset").length-1,parent.data({has_many_index:++index}),regex=new RegExp(elem.data("placeholder"),"g"),html=elem.data("html").replace(regex,index),fieldset=$(html).insertBefore(this),recompute_positions(parent),parent.trigger("has_many_add:after",[fieldset]))}),$(document).on("change",'.has_many_container[data-sortable] :input[name$="[_destroy]"]',function(){return recompute_positions($(this).closest(".has_many"))}),init_sortable(),$(document).on("has_many_add:after",".has_many_container",init_sortable)}),init_sortable=function(){var elems;return elems=$(".has_many_container[data-sortable]:not(.ui-sortable)"),elems.sortable({items:"> fieldset",handle:"> ol > .handle",stop:recompute_positions}),elems.each(recompute_positions)},recompute_positions=function(parent){var input_name,position;return parent=parent instanceof jQuery?parent:$(this),input_name=parent.data("sortable"),position=0,parent.children("fieldset").each(function(){var destroy_input,fieldset,sortable_input;return fieldset=$(this),destroy_input=fieldset.find("> ol > .input > :input[name$='[_destroy]']"),sortable_input=fieldset.find("> ol > .input > :input[name$='["+input_name+"]']"),sortable_input.length?sortable_input.val(destroy_input.is(":checked")?"":position++):void 0})}}).call(this);