var colors = ["rgb(255, 0, 0)" , "rgb(255, 255, 0)" ,"rgb(0, 255, 0)" ,"rgb(0, 255, 255)" ,"rgb(0, 0, 255)" ,"rgb(255, 0, 255)" ];

var squares=document.querySelectorAll(".square");
var pickedcolor=pickColor();
var colorDisplay=document.getElementById("colorDisplay");

colorDisplay.textContent=pickedcolor;

var messageDisplay=document.getElementById("message");

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
		{
			messageDisplay.textContent="Correct";
			changeColors(clickedcolor);
		}
		else 
		{
			this.style.backgroundColor="#232323";
			messageDisplay.textContent="Try Again";
		}

	});
}

function changeColors(color)
{
	//loop through all sqaures to change color of every sqaure to given color
	for(var i=0; i<squares.length; i++)
	{
		squares[i].style.backgroundColor=color;
	}
}

function pickColor()
{
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}