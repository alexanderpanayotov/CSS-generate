 var $cssButtons=$(".btn-block");


function CreateBorderRadius() {
  var $mainDiv=  $("<div />").addClass(' mainDiv').css({"max-width" : "740px","margin" : "0 auto","position" : "fixed","top" : "30%","left" : "30%"})
  .appendTo($(".form"));
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
var $resetBtn=$("<btn>").addClass("btn btn-primary btn-lg btn-block").attr("id","backBtn").appendTo($mainDiv).html("Back");

}
function CreateBoxShadow()
{
  var $mainDiv=  $("<div />").addClass(' mainDiv').css({"max-width" : "740px","margin" : "0 auto","position" : "fixed","top" : "30%","left" : "30%"})
  .appendTo($(".form"));
  for (var i = 0; i < 6; i=i+1) {
    if (i===0) {
      var $firstSpan=$("<span/>").html("Inset:").addClass("span");
      var $input=$("<select>").addClass(" dynamic-select").append($("<option/>").text("No")).append($("<option/>").text("Inset"));

      var $label=$("<label/>").addClass(" label").appendTo($mainDiv).append($firstSpan).append($input);
      continue;
    }
    if (i===1) {
      var $firstSpan=$("<span/>").html("Horizontal Length::").addClass("span");
    }
    if (i===2) {
          var $firstSpan=$("<span/>").html("Vertical Length:").addClass("span");
    }
    if (i===3) {
      var $firstSpan=$("<span/>").html("Blur Radius:").addClass("span");
    }
      if (i===4){

        var $firstSpan=$("<span/>").html("Spread:").addClass("span");
      }
    if (i===5){
        var $firstSpan=$("<span/>").html("Color Type:").addClass("span");
        var $input=$("<select>").addClass(" dynamic-select").append($("<option/>").text("RGBA")).append($("<option/>").text("Hex"));

        var $label=$("<label/>").addClass(" label").appendTo($mainDiv).append($firstSpan).append($input);
        continue;
    }
    var $input=$("<input>").addClass(" dynamic-input");
    var $label=$("<label/>").addClass(" label").appendTo($mainDiv).append($firstSpan).append($input);
}
var $resetBtn=$("<btn>").addClass("btn btn-primary btn-lg btn-block").attr("id","backBtn").appendTo($mainDiv).html("Back");

}

function CreateTextShadow()
{
  var $mainDiv=  $("<div />").addClass(' mainDiv').css({"max-width" : "740px","margin" : "0 auto","position" : "fixed","top" : "30%","left" : "30%"})
  .appendTo($(".form"));

  for (var i = 0; i < 4; i=i+1) {
    if (i===0) {
      var $firstSpan=$("<span/>").html("Horizontal Length:").addClass("span");
    }
    if (i===1) {
      var $firstSpan=$("<span/>").html("Vertical Length:").addClass("span");
    }
    if (i===2) {
          var $firstSpan=$("<span/>").html("Blur Radius:").addClass("span");
    }
    if (i===3) {
      var $firstSpan=$("<span/>").html("Shadow Color:").addClass("span");
    }
    var $input=$("<input>").addClass(" dynamic-input");
    var $label=$("<label/>").addClass(" label").appendTo($mainDiv).append($firstSpan).append($input);

  }
  var $resetBtn=$("<btn>").addClass("btn btn-primary btn-lg btn-block").attr("id","backBtn").appendTo($mainDiv).html("Back");

}

function  CreateRGBA()
{
  var $mainDiv=  $("<div />").addClass(' mainDiv').css({"max-width" : "740px","margin" : "0 auto","position" : "fixed","top" : "30%","left" : "30%"})
  .appendTo($(".form"));
for (var i = 0; i < 4; i=i+1) {
  if (i===0) {
    var $firstSpan=$("<span/>").html("R:").addClass("span");
  }
  if (i===1) {
    var $firstSpan=$("<span/>").html("G:").addClass("span");
  }
  if (i===2) {
        var $firstSpan=$("<span/>").html("B:").addClass("span");
  }
  if (i===3) {
    var $firstSpan=$("<span/>").html("Opacity:").addClass("span");
  }
  var $input=$("<input>").addClass(" dynamic-input");
  var $label=$("<label/>").addClass(" label").appendTo($mainDiv).append($firstSpan).append($input);

}
var $resetBtn=$("<btn>").addClass("btn btn-primary btn-lg btn-block").attr("id","backBtn").appendTo($mainDiv).html("Back");

}
function CreateFontFace()
{
  var $mainDiv=  $("<div />").addClass(' mainDiv').css({"max-width" : "740px","margin" : "0 auto","position" : "fixed","top" : "30%","left" : "30%"})
  .appendTo($(".form"));
for (var i = 0; i < 2; i=i+1) {
  if (i===0) {
    var $firstSpan=$("<span/>").html("Font Family:").addClass("span");
  }
  if (i===1) {
    var $firstSpan=$("<span/>").html("Font Name:").addClass("span");
  }

  var $input=$("<input>").addClass(" dynamic-input");
  var $label=$("<label/>").addClass(" label").appendTo($mainDiv).append($firstSpan).append($input);

}
var $resetBtn=$("<btn>").addClass("btn btn-primary btn-lg btn-block").attr("id","backBtn").appendTo($mainDiv).html("Back");

}
function CreateMultipleColums()
{
  var $mainDiv=  $("<div />").addClass(' mainDiv').css({"max-width" : "740px","margin" : "0 auto","position" : "fixed","top" : "30%","left" : "30%"})
  .appendTo($(".form"));
for (var i = 0; i < 2; i=i+1) {
  if (i===0) {
    var $firstSpan=$("<span/>").html("# of Columns:").addClass("span");
  }
  if (i===1) {
    var $firstSpan=$("<span/>").html("Column Gap:").addClass("span");
  }

  var $input=$("<input>").addClass(" dynamic-input");
  var $label=$("<label/>").addClass(" label").appendTo($mainDiv).append($firstSpan).append($input);

}
var $resetBtn=$("<btn>").addClass("btn btn-primary btn-lg btn-block").attr("id","backBtn").appendTo($mainDiv).html("Back");

}

function CreateBoxResize ()
{
  var $mainDiv=  $("<div />").addClass(' mainDiv').css({"max-width" : "740px","margin" : "0 auto","position" : "fixed","top" : "30%","left" : "30%"})
  .appendTo($(".form"));

  var $firstSpan=$("<span/>").html("Inset:").addClass("span");
  var $input=$("<select>").addClass(" dynamic-select").append($("<option/>").text("None"))
  .append($("<option/>").text("Horizontal")).append($("<option/>").text("Vertical")).append($("<option/>").text("both"));
  var $label=$("<label/>").addClass(" label").appendTo($mainDiv).append($firstSpan).append($input);
  var $resetBtn=$("<btn>").addClass("btn btn-primary btn-lg btn-block").attr("id","backBtn").appendTo($mainDiv)
  .html("Back");

}
function CreateOutline()
{
  var $mainDiv=  $("<div />").addClass(' mainDiv').css({"max-width" : "740px","margin" : "0 auto","position" : "fixed","top" : "30%","left" : "30%"})
  .appendTo($(".form"));
  for (var i = 0; i < 4; i=i+1) {
    if (i===0) {
      var $firstSpan=$("<span/>").html("Outline:").addClass("span");
      var $input=$("<select>").addClass(" dynamic-select").append($("<option/>").text("Dotted")).append($("<option/>").text("Dashed")).append($("<option/>").text("Solid"))
      .append($("<option/>").text("Groove")).append($("<option/>").text("Ridge")).append($("<option/>").text("Inset")).append($("<option/>").text("Outset"))
      .append($("<option/>").text("Double")).append($("<option/>").text("Auto"));


      var $label=$("<label/>").addClass(" label").appendTo($mainDiv).append($firstSpan).append($input);
      continue;
    }
    if (i===1) {
      var $firstSpan=$("<span/>").html("Outline Thickness:").addClass("span");
    }
    if (i===2) {
          var $firstSpan=$("<span/>").html("Outline Color:").addClass("span");
    }
    if (i===3) {
      var $firstSpan=$("<span/>").html("Outline Offset:").addClass("span");
    }

    var $input=$("<input>").addClass(" dynamic-input");
    var $label=$("<label/>").addClass(" label").appendTo($mainDiv).append($firstSpan).append($input);
}
var $resetBtn=$("<btn>").addClass("btn btn-primary btn-lg btn-block").attr("id","backBtn").appendTo($mainDiv).html("Back");

}

function CreateTransition()
{
  var $mainDiv=  $("<div />").addClass(' mainDiv').css({"max-width" : "740px","margin" : "0 auto","position" : "fixed","top" : "30%","left" : "30%"})
  .appendTo($(".form"));
  for (var i = 0; i < 3; i=i+1) {
    if (i===0) {
      var $firstSpan=$("<span/>").html("Property:").addClass("span");
      var $input=$("<select>").addClass(" dynamic-select").append($("<option/>").text("All")).append($("<option/>").text("Background")).append($("<option/>").text("Width"))
      .append($("<option/>").text("Height")).append($("<option/>").text("Color")).append($("<option/>")
      .text("Outline"));

      var $label=$("<label/>").addClass(" label").appendTo($mainDiv).append($firstSpan).append($input);
      continue;
    }
    if (i===1) {
      var $firstSpan=$("<span/>").html("Duration").addClass("span");
    }
    if (i===2) {
          var $firstSpan=$("<span/>").html("Function:").addClass("span");
    }

    var $input=$("<input>").addClass(" dynamic-input");
    var $label=$("<label/>").addClass(" label").appendTo($mainDiv).append($firstSpan).append($input);
}
var $resetBtn=$("<btn>").addClass("btn btn-primary btn-lg btn-block").attr("id","backBtn").appendTo($mainDiv).html("Back");

}
function CreateTransform()
{
  var $mainDiv=  $("<div />").addClass(' mainDiv').css({"max-width" : "740px","margin" : "0 auto","position" : "fixed","top" : "30%","left" : "30%"})
  .appendTo($(".form"));
for (var i = 0; i < 4; i=i+1) {
  if (i===0) {
    var $firstSpan=$("<span/>").html("Scale:").addClass("span");
  }
  if (i===1) {
    var $firstSpan=$("<span/>").html("Rotate:").addClass("span");
  }
  if (i===2) {
        var $firstSpan=$("<span/>").html("Translate:").addClass("span");
  }
  if (i===3) {
    var $firstSpan=$("<span/>").html("Skew:").addClass("span");
  }
  var $input=$("<input>").addClass(" dynamic-input");
  var $label=$("<label/>").addClass(" label").appendTo($mainDiv).append($firstSpan).append($input);
}
var $resetBtn=$("<btn>").addClass("btn btn-primary btn-lg btn-block").attr("id","backBtn").appendTo($mainDiv).html("Back");

}

$(".form").on("click","#backBtn",function() {
  $("#backBtn").remove();
  $(".mainDiv").remove();

  $cssButtons.css("visibility","initial");
});

$cssButtons.on("click",function(){


var $this=$(this);
if ($this.text()=="Border Radius") {
CreateBorderRadius();
}
if ($this.text()=="Box Shadow") {
CreateBoxShadow();
}

if ($this.text()=="Text Shadow") {
CreateTextShadow();
}
if ($this.text()=="RGBA") {
  CreateRGBA();
}
if ($this.text()=="Font Face") {
  CreateFontFace();
}
if ($this.text()=="Multiple Colums") {
  CreateMultipleColums();
}
if ($this.text()=="Box Resize") {
  CreateBoxResize();
}
if ($this.text()=="Outline") {
  CreateOutline ();
}
if ($this.text()=="Transition") {
  CreateTransition();
}
if ($this.text()=="Transform") {
  CreateTransform();
}

$cssButtons.css("visibility","hidden");
});
