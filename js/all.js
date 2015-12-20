function split_json(data){for(var split1=[],split2=[],i=0;i<data.length/2;i++)split1.push(data[i]);for(var j=split1.length;j<data.length;j++)split2.push(data[j]);return[[split1],[split2]]}function calculate_rating(featuredItem){var decimal=Math.floor(featuredItem.rating),putHalfStar=featuredItem.rating%1>.5,numberOfEmptyStars=function(){return putHalfStar?5-decimal-putHalfStar:5-decimal};return[decimal,putHalfStar,numberOfEmptyStars()]}function get_featured(data){var featuredDishes=[];return $.each(data,function(index,val){val.featured&&(val.detailedRating=calculate_rating(val),featuredDishes.push(val))}),featuredDishes}function add_margin_description(){$(".menu-description").each(function(){$(this).height()<=20&&$(this).css({"margin-bottom":"20px"})})}function gallery_dish_hover(){$(".gallery-container").children().each(function(index,val){$(val).on({mouseenter:function(){$(val).find("div").slideDown(),$(val).find("div").addClass("gallery-dish-force-flex")},mouseleave:function(){$(val).find("div").slideUp(),$(val).find("div").removeClass("gallery-dish-force-flex")}})})}function hamburgerMenu(){var mobileMenuSelector=$(".mobile-menu");$(".fa-bars").click(function(){mobileMenuSelector.is(":visible")?mobileMenuSelector.slideUp():mobileMenuSelector.slideDown()})}function registerMenu(){$("nav").find("li").each(function(index,val){switch(index){case 0:case 4:$(val).click(function(){$("html, body").animate({scrollTop:$(".menu").offset().top},1e3)});break;case 1:case 5:$(val).click(function(){$("html, body").animate({scrollTop:$(".featured").offset().top},1e3)});break;case 2:case 6:$(val).click(function(){$("html, body").animate({scrollTop:$(".gallery").offset().top},1e3)});break;case 3:case 7:$(val).click(function(){$("html, body").animate({scrollTop:$("footer").offset().top},1e3)})}})}var app=angular.module("resto",[]);app.controller("menu-controller",function($scope,$http){$http.get("js/dishes.json").success(function(data){$scope.splitted=split_json(data),$scope.menu=$scope.splitted[0][0],$scope.menu2=$scope.splitted[1][0],$scope.limit=5,$scope.limit2=5;var featured=get_featured(data);$scope.featured=featured,$scope.ratings=calculate_rating(featured),$scope.range=function(n){return new Array(n)}}),$scope.incrementLimit=function(){$scope.limit+=5,$scope.limit2+=5,$scope.splitted[1][0].length<=$scope.limit&&$("#load-more").remove()},$scope.$on("ngRepeatFinished",function(ngRepeatFinishedEvent){add_margin_description(),$("body").sliderResto()})}),app.directive("onFinishRender",function($timeout){return{restrict:"A",link:function(scope,element,attr){scope.$last===!0&&$timeout(function(){scope.$emit("ngRepeatFinished")})}}}),$(document).ready(function(){gallery_dish_hover(),hamburgerMenu(),registerMenu()}),function($){var featuredItemSelector,numberOfElements,arrowLeftSelector=$(".arrow-left"),arrowRightSelector=$(".arrow-right"),previousShift=0;$.fn.sliderResto=function(){featuredItemSelector=$(".featured-item"),numberOfElements=featuredItemSelector.length,prepareSlider()};var prepareSlider=function(){var allItemsWidthSum=0;featuredItemSelector.each(function(index,value){allItemsWidthSum+=$(value).width()+10}),$(".featured-gallery-wrapper").width(3*(featuredItemSelector.width()+10)),$(".featured-gallery").width(allItemsWidthSum),createArrows()},createArrows=function(){createLeftArrow(),createRightArrow()},trackLeftArrow=function(){0==previousShift&&arrowLeftSelector.hide()},createLeftArrow=function(){bindLeftArrowEvent()},trackRightArrow=function(){previousShift==315*(numberOfElements-3)*-1&&arrowRightSelector.hide()},createRightArrow=function(){$(".featured-gallery").width()>$(".featured-gallery-wrapper").width()&&arrowRightSelector.show(),bindRightArrowEvent()},bindRightArrowEvent=function(){arrowRightSelector.click(function(){arrowLeftSelector.show();var featuredItemSelector=$(".featured-item");featuredItemSelector.css("left",previousShift-=315),trackRightArrow()})},bindLeftArrowEvent=function(){arrowLeftSelector.click(function(){arrowRightSelector.show(),arrowLeftSelector.show(),featuredItemSelector.css("left",previousShift+=315),trackLeftArrow()})}}(jQuery);