 var $cssButtons=$(".btn-block");

function CreateBorderRadius() {
var $mainDiv=  $("<div />").css({"max-width" : "740px","margin" : "0 auto","position" : "fixed","top" : "30%","left" : "30%"})
.appendTo($(".form"));


//   var $firstSpan=$("<span/>").html("Top Left:").addClass("span");
//   var $secondSpan=$("<span/>").html("Top Right:").addClass("span");
//     var $thirdSpan=$("<span/>").html("Bottom Right:").addClass("span");
//       var $fourthSpan=$("<span/>").html("Bottom Left:").addClass("span");
// var $firstInput=$('<input/>').addClass("dynamic-input");

// var $firstLabel=$("<label/>").addClass("label").appendTo($mainDiv);
// var $secondLabel=$("<label/>").addClass("label").appendTo($mainDiv);
// var $thirdLabel=$("<label/>").addClass("label").appendTo($mainDiv);
// var $fourthLabel=$("<label/>").addClass("label").appendTo($mainDiv);
for (var i = 0; i < 4; i=i+1) {
  if (i===0) {
    var $firstSpan=$("<span/>").html("Top Left:").addClass("span");
  }
  if (i===1) {
    var $firstSpan=$("<span/>").html("Top Right:").addClass("span");
  }
  if (i===2) {
        var $firstSpan=$("<span/>").html("Bottom Right:").addClass("span");
  }
  if (i===3) {
    var $firstSpan=$("<span/>").html("Bottom Left:").addClass("span");
  }
  var $input=$("<input>").addClass(" dynamic-input");
  var $label=$("<label/>").addClass(" label").appendTo($mainDiv).append($firstSpan).append($input);

}


}
$cssButtons.on("click",function(){
var $this=$(this);
if ($this.text()=="Border Radius") {
CreateBorderRadius();

}
$cssButtons.css("visibility","hidden");
});
