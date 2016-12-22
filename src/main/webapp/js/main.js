 var $cssButtons=$(".btn-block");
 var result={
   topRight:0,
   topLeft :0,
   botRight:0,
   botLeft:0
 };
 var boxShadow={
  inset:"No",
  horrizontalLenght:0,
  verticalLength: 0,
  blurRadius:0,
  spread:0,
  RGBA:'none',
  hex:"none"
};
var textShadow={
  horizontalLenght:0,
  verticalLength:0,
  blurRadius:0,
  shadowColor:0
};
var rgbaObject={
  red:0,
  green:0,
  blue:0,
  opacity:0
};
var fontFace={
  fontFamily:"",
  fontName:""
};
var mutlipleColumns={
  columntCount:0,
  columnGap:0
};
var boxResize={
  value:""
};
var outlineObject={
  outlineThickness:0,
  outline:"",
  outlineColor:"",
  outlineOffset:""
};

function PrintBoxShadow()
{
  $("#boxShadow-result-area").html("Inset:" +boxShadow.inset+'\r' +
  "Horrizontal Lenght:"+  boxShadow.horrizontalLenght+ "px" + '\r'+  "Vertical Length:"+ boxShadow.verticalLength
  + "px" + '\r'+  "Blur Radius:"+ boxShadow.blurRadius + "px" + '\r'+  "Spread:" + boxShadow.spread+ "px"+ '\r'+ "Hex:" + "#"+boxShadow.hex);
}
function  PrintOutline()
{
  $("#outline-result-area").html("Outline Thickness:" +outlineObject.outlineThickness+"px"+'\r' +
  "Outline:"+  outlineObject.outline  + '\r'+  "Outline Color:"+ outlineObject.outlineColor
   + '\r'+  "Outline Offset:"+ outlineObject.outlineOffset);
}


$(".border-radius-input").on("input",function(){
var $this=$(this);

  if ($this.attr("tabindex") === "1"  ) {
  result.topLeft=$this.val();
  }
    if ($this.attr("tabindex") === "2") {
    result.topRight = $this.val();
    }
    if ($this.attr("tabindex") == "3") {
  result.botRight = $this.val();
    }
    if ($this.attr("tabindex") == "4") {
  result.botLeft = $this.val();
    }
    $("#border-result-area").html("border-radius:" +result.topRight + "px" + " "+ result.topLeft + "px"
   + " " + result.botRight + "px" + " " + result.botLeft + "px");
});



$(".box-shadow-input").on("input", function() {
  var $this=$(this);
  if ($("#box-shadow-color :selected").text()=="RGBA") {

  }
    if ($this.attr("tabindex") === "6"  ) {
    boxShadow.horrizontalLenght=$this.val();
    }
      if ($this.attr("tabindex") === "7") {
      boxShadow.verticalLength = $this.val();
      }
      if ($this.attr("tabindex") == "8") {
    boxShadow.blurRadius = $this.val();
      }
      if ($this.attr("tabindex") == "9") {
    boxShadow.spread = $this.val();
      }
      if ($this.attr("tabindex")== "15") {
        boxShadow.hex= $this.val();
      }
PrintBoxShadow();
  });

  $("#box-shadow-inset").on("change", function() {
    var $this=$(this);
    boxShadow.inset=$this.val();
  PrintBoxShadow();
  });


  $("#box-shadow-color").on("change", function() {
    var $this=$(this);
    var rgba=$("#box-shadow").children(".hidden")[0];
    var hex=$("#box-shadow").children(".hidden")[1];
    var jhex=$(hex);
    var jrgba=$(rgba);

  if ($this.val()=="rgba") {
  console.log($this.val());
  jrgba.removeClass("hidden").addClass("otherclass");

  }
  if ($this.val()=="hex") {
  console.log($this.val());
  jhex.removeClass("hidden").addClass("otherclass");
  jrgba.removeClass("otherclass").addClass("hidden");
  }
  });

$(".back-btn").on("click",function() {

  $cssButtons.css("visibility","initial");
  $(".interaction-area").css("visibility","hidden");
});

$(".text-shadow-input").on("input",function(){
var $this=$(this);

  if ($this.attr("tabindex") === "16"  ) {
  textShadow.horizontalLenght=$this.val();
  console.log($this.val());
  }
    if ($this.attr("tabindex") === "17") {
    textShadow.verticalLength = $this.val();
  console.log($this.val());
    }
    if ($this.attr("tabindex") == "18") {
  textShadow.blurRadius = $this.val();
  console.log($this.val());
    }
    if ($this.attr("tabindex") == "19") {
      console.log($this.val());
  textShadow.shadowColor = $this.val();
    }

    $("#text-shadow-result-area").html("Horizontal Lenght:" +textShadow.horizontalLenght + "px" + '\r'
      + "Vertical Lenght:" + textShadow.verticalLength + "px"
  + '\r' + "Blur Radius:" +  textShadow.blurRadius + "px"
+ '\r' + "Shadow Color:" + textShadow.shadowColor);
});

$(".back-btn").on("click",function() {

  $cssButtons.css("visibility","initial");
  $(".interaction-area").css("visibility","hidden");
});

$(".rgba-input").on("input",function(){
var $this=$(this);

  if ($this.attr("tabindex") === "20"  ) {
  rgbaObject.red=$this.val();

  }
    if ($this.attr("tabindex") === "21") {
    rgbaObject.green = $this.val();

    }
    if ($this.attr("tabindex") == "22") {
  rgbaObject.blue = $this.val();

    }
    if ($this.attr("tabindex") == "23") {

  rgbaObject.opacity = $this.val();
    }

    $("#rgba-result-area").html("Red:" +rgbaObject.red + "px" + '\r'
      + "Green:" + rgbaObject.green + "px"
  + '\r' + "Blue:" +  rgbaObject.blue + "px"
+ '\r' + "Opacity:" + rgbaObject.opacity);
});

$(".font-face-input").on("input",function(){
var $this=$(this);

  if ($this.attr("tabindex") === "24"  ) {
  fontFace.fontFamily=$this.val();
  }
    if ($this.attr("tabindex") === "25") {
    fontFace.fontName= $this.val();
    }

    $("#font-face-result-area").html("Font Family:" +fontFace.fontFamily + '\r'
      + "Font Name:" + fontFace.fontName);
});
$(".multiple-columns-input").on("input",function(){
var $this=$(this);
  if ($this.attr("tabindex") === "26"  ) {
  mutlipleColumns.columntCount=$this.val();
  }
    if ($this.attr("tabindex") === "27") {
    mutlipleColumns.columnGap= $this.val();
    }
    $("#multiple-columns-result-area").html("No of columns:" +  mutlipleColumns.columntCount+ "px" + '\r'
      + "Column Gap:" + mutlipleColumns.columnGap+ "px");
});

$(".outline-input").on("input",function(){
var $this=$(this);
  if ($this.attr("tabindex") === "29"  ) {
  outlineObject.outlineThickness=$this.val();

  }

    if ($this.attr("tabindex") === "31"  ) {
    outlineObject.outlineColor=$this.val();

    }
    if ($this.attr("tabindex") === "32"  ) {
    outlineObject.outlineOffset=$this.val();
    }
    PrintOutline();
});

$("#outline-style").on("change", function() {
  var $this=$(this);
  outlineObject.outline=$this.val();

  PrintOutline();
});


$("#box-resize-type").on("change", function() {
  var $this=$(this);
  boxResize.value=$this.val();
PrintBoxShadow();
});


$cssButtons.on("click",function(){

var $this=$(this);
if ($this.text() =="Border Radius") {
$("#border-radius").css("visibility","initial");
}
if ($this.text()=="Box Shadow") {
$("#box-shadow").css("visibility","initial");
}

if ($this.text()=="Text Shadow") {
$("#text-shadow").css("visibility","initial");
}
if ($this.text()=="RGBA") {
$("#rgba").css("visibility","initial");
}
if ($this.text()=="Font Face") {
  $("#font-face").css("visibility","initial");
}
if ($this.text()=="Multiple Colums") {
  $("#multiple-columns").css("visibility","initial");
}
if ($this.text()=="Box Resize") {
  $("#box-resize").css("visibility","initial");
}
if ($this.text()=="Outline") {
  $("#outline").css("visibility","initial");
}
if ($this.text()=="Transition") {
  $("#transition").css("visibility","initial");
}
if ($this.text()=="Transform") {
  CreateTransform();
}

$cssButtons.css("visibility","hidden");
});
