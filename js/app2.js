// @TODO: YOUR CODE HERE!{}
var svgWidth = 960;
var svgHeight = 500;

var margin = {
  top: 20,
  right: 40,
  bottom: 80,
  left: 100
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

var svg = d3
  .select("#scatter")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight)
  .attr("class","chart");
  

d3.csv("data/data.csv", function(data){

    visualize(data);
})
var circRadius;
function crGet(){
  if(width <= 530){
    circRadius =5;
  }else{
    circRadius=10;
  }
}
crGet();

// Bottom Axis
svg.append("g").attr("class","xText");
// To select the group
var xText=d3.select(".xText");

// Use xText to append SVG file 
xText
  .append("text")
  .attr("x",0)
  .attr("data-axis","x")
  .attr("data-name","poverty")
  .text("In poverty (%)");

// Left Axis
  //Add label group for y-axis
svg.append("g").attr("class", "yText");

var yText=d3.select(".yText");

yText
  .append("text")
  .attr("y", 0)
  .attr("data-axis","y")
  .attr("data-name", "healthcare")
  .text("In healthcare (%)")

function visualize(data){
    var healthcare = "healthcare";
    var poverty = "poverty";


    var xMin;
    var xMax;
    var yMin;
    var yMax;

    
  // Append an SVG group
  

    var toolTip = d3.tip()
      .attr("class", "d3-tip")
      .offset([40, -60])
      .html(function(d) {
        var theState ="<div>"+d.state +"</div>";
        var theY="<div>"+healthcare+":"+d[healthcare]+"%</div>"
        var theX="<div>"+poverty+":"+ d[poverty] + "%</div>"
        return theState+theX+theY;
      });
    svg.call(toolTip);


}