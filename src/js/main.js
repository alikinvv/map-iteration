
$(document).ready(function(){
    function moveUp(thisObject){
        thisObject.appendTo(thisObject.parents('svg>g'));
    }

    $('svg g').hover(function() {
        moveUp($(this));
    });
});
