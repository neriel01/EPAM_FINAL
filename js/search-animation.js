var search_field = document.getElementById("search-field");
var search_submit_btn = document.getElementById("submit-search");
var search_field_padding = search_field.style.padding;
var search_field_border = search_field.style.border;
var search_field_width = search_field.style.width;
var search_submit_btn_border_left = "1px solid #959595";
var placeholder = search_field.placeholder;
var form = document.getElementById("email-input");
var isExpanded = true;
function animate(evt){
    evt.preventDefault();
    if (isExpanded && (search_field.value=="")){
        search_field.style.width = "0";
        search_field.style.paddingLeft = "0";
        search_field.style.paddingRight = "0";
        search_field.placeholder = "";

       isExpanded = false;


    }
    else if (search_field.value==""){
        search_field.placeholder = placeholder;
        search_submit_btn.style.borderLeft = "none";
        search_field.style.padding = search_field_padding;
        search_field.style.border = search_field_border;
        search_field.style.height = "41px";
        search_field.style.width = search_field_width;

        isExpanded = true;
    }
}
form.addEventListener("submit",animate);
search_field.addEventListener("transitionend", function () {
   if (!isExpanded){
       this.style.border = "1px solid transparent";
       search_submit_btn.style.borderLeft =  search_submit_btn_border_left;
   }
    else{
       this.style.border = search_field_border;
   }
});