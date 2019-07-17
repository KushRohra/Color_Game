var colors = ["rgb(255, 0, 0)" , "rgb(255, 255, 0)" ,"rgb(0, 255, 0)" ,"rgb(0, 255, 255)" ,"rgb(0, 0, 255)" ,"rgb(255, 0, 255)" ];

var squares=document.querySelectorAll(".square");
var pickedcolor=colors[3];
var colorDisplay=document.getElementById("colorDisplay");

colorDisplay.textContent=pickedcolor;

for(var i=0; i<squares.length; i++)
{
	//add initial colors to the squares
	squares[i].style.backgroundColor=colors[i];

	//add event listeners to squares
	squares[i].addEventListener("click",function(){

		//grab alert of clicked square
		var clickedcolor=this.style.backgroundColor; 

		//compare color to picked color
		if(clickedcolor===pickedcolor)
			alert("Correct");
		else alert("Wrong");

	});
}