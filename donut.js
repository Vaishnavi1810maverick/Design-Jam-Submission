// Write your Pizza Builder JavaScript in this file.


/*if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    getElementById('body').style.display = 'none';
    alert('Only works for Desktops and Laptops');
}*/

var glaze,topping;
$(".btn-strawberry").click(function() {
  $(this).toggleClass('active');
  $(".crust-gluten-free ").css("background-color", "#F14E64");
glaze="strawberry";
});
$(".btn-chocolate").click(function() {
  $(this).toggleClass('active');
  $(".crust-gluten-free ").css("background-color", "#4F3229");
glaze="chocolate";
});
$(".btn-sugarGlaze").click(function() {
  $(this).toggleClass('active');
  $(".crust-gluten-free ").css("background-color", "#F7F3E9");
glaze="sugarGlaze";
});
$(".btn-blueberry").click(function() {
  $(this).toggleClass('active');
  $(".crust-gluten-free ").css("background-color", "#4E527B");
glaze="blueberry";
});
$(".btn-mango").click(function() {
  $(this).toggleClass('active');
  $(".crust-gluten-free ").css("background-color", "#F4A207");
glaze="mango";
});
$(".btn-pineapple").click(function() {
  $(this).toggleClass('active');
  $(".crust-gluten-free ").css("background-color", "#E0A211");
glaze="pineapple";
});

$(".btn-blackberry").click(function(){
  $(this).toggleClass('active');
  $(".crust-gluten-free ").css("background-color", "#A3141B");
glaze="blackberry";
    });


$(".btn-sprinkle").click(function(e) {
  $( ".sprinkle" ).css( "border-radius", "10px" );
  $(this).toggleClass('active');
  $('.sprinkle').toggle();
topping="sprinkle";
});
$(".btn-chips").click(function(e) {
  $( ".sprinkle" ).css( "border-radius", "50%" );
  $(this).toggleClass('active');
  $('.sprinkle').toggle();
  topping="chocolate chips";
});
$(".btn-krispy").click(function(e) {
  $( ".sprinkle" ).css( "border-radius", "0px" );
  $(this).toggleClass('active');
  $('.sprinkle').toggle();
  topping="krispy";
});
$(".order").click(function(e) {
var fname=prompt("First Name:");
var lname=prompt("Last Name:");
var address=prompt("Address:");
if((fname!=null)&&(lname!=null)&&(address!=null)){
  alert("Dear"+" " +fname +" ,"+"We have recived your order.Our Company will call you back soon to confirm the order!");
}else{
  alert("Enter details properly! Missing fields");
}
});
