/**
 * Created by Maksym on 6/17/2015.
 */
// Angular, current form  //

function InvoiceCntl($scope) {
    $scope.qty = 1;
    $scope.cost = 19.95;
}

//   JQuery, Timer for CArousel   //

$(document).ready(function(){
    $('.carousel').carousel({
        interval:1000
    })
})

$('document').ready(function(){
    $('#myToolTip').tooltip();
    $('#myPopOver').popover();
    $('#d1').contenthover({
        overlay_background:'#000',
        overlay_opacity:0.8
    });
    $('#d2').contenthover({
        effect:'slide',
        slide_speed:300,
        overlay_background:'#000',
        overlay_opacity:0.8
    });
    $('#d3').contenthover({
        overlay_width:270,
        overlay_height:180,
        effect:'slide',
        slide_direction:'right',
        overlay_x_position:'right',
        overlay_y_position:'center',
        overlay_background:'#000',
        overlay_opacity:0.8
    });
})

//  Angular, Change the position for HTML element  //

angular.module('drag', []).
    directive('draggable', function($document) {
        return function(scope, element, attr) {
            var startX = 0, startY = 0, x = 0, y = 0;
            element.css({
                position: 'relative',
                border: '1px solid red',
                backgroundColor: 'lightgrey',
                cursor: 'pointer'
            });
            element.bind('mousedown', function(event) {
                // Prevent default dragging of selected content
                event.preventDefault();
                startX = event.screenX - x;
                startY = event.screenY - y;
                $document.bind('mousemove', mousemove);
                $document.bind('mouseup', mouseup);
            });

            function mousemove(event) {
                y = event.screenY - startY;
                x = event.screenX - startX;
                element.css({
                    top: y + 'px',
                    left:  x + 'px'
                });
            }

            function mouseup() {
                $document.unbind('mousemove', mousemove);
                $document.unbind('mouseup', mouseup);
            }
        }
    });

//       for Angular Scpe  //

function GreetCtrl($scope){
    $scope.name = "World";
}

function ListCtrl($scope){
    $scope.names = ['Igor', 'Max', 'Andrew'];
}