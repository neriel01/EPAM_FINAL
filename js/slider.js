/**
 * Created by Администратор on 18.02.2016.
 */
var arrow_lft = document.getElementById("arrow-lft");
var arrow_rht = document.getElementById("arrow-rght");
var images_container = document.getElementById("images-container");
var element = document.getElementById("left-element");
var device_width = (window.innerWidth > 0) ? window.innerWidth : screen.width; //we need another margin in responsive
//layout
var margin_step = 210;
var initial_margin = 210;
var min = 210;
var max = 2100;
element.style.marginRight = -initial_margin + "px";
arrow_lft.onclick = function(){
    if (initial_margin >= max) //"borders" of our slider
        return;
    initial_margin+=margin_step;
    var margin = -initial_margin;
    element.style.marginRight = margin + "px";
};
arrow_rht.onclick = function () {
    if (initial_margin <= min) //"borders" of our slider
        return;
    initial_margin-=margin_step;
    var margin = -initial_margin;
    element.style.marginRight = margin + "px";
};