/**
 * Created by Администратор on 08.02.2016.
 */
function load_images(){
    var images_containers = [];
    var container;
    for (var i = 1; i<=8; i++ ){
        var container = document.getElementById("gallery-image-container-" + i);
        images_containers[i] = container;
    }
    for (var i = 1; i<=8; i++ ){
        images_containers[i].style.backgroundImage = 'url(' + "img/gallery/" + i + ".jpg" + ')';
    }
}
