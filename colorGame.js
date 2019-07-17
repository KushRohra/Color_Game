var numofsquares=6;

var colors=generateRandomColors(numofsquares); 

var squares=document.querySelectorAll(".square");
var pickedcolor=pickColor();
var colorDisplay=document.getElementById("colorDisplay");

colorDisplay.textContent=pickedcolor;

var messageDisplay=document.getElementById("message");

var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numofsquares=3;
	colors=generateRandomColors(numofsquares);
	pickedcolor=pickColor();
	colorDisplay.textContent=pickedcolor;
	for(var i=0; i<squares.length; i++)
	{
		if(colors[i])
		{
			squares[i].style.backgroundColor=colors[i];
		}
		else
		{
			squares[i].style.display="none";
		}
	}
});

hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numofsquares=6;
	colors=generateRandomColors(numofsquares);
	pickedcolor=pickColor();
	colorDisplay.textContent=pickedcolor;
	for(var i=0; i<squares.length; i++)
	{
		squares[i].style.backgroundColor=colors[i];
		squares[i].style.display="block";
	}

});

var resetButtton=document.querySelector("#reset");
resetButtton.addEventListener("click",function(){
	//generate all new colors
	colors=generateRandomColors(numofsquares);

	//pick a new random color from array
	pickedcolor=pickColor();

	//change colorDislpay to match picked color
	colorDisplay.textContent=pickedcolor;  

	//change colors of the square
	 for(var i=0; i<squares.length; i++)
	 {
	 	squares[i].style.backgroundColor=colors[i]; 
	 }
	 document.querySelector("h1").style.backgroundColor="steelblue";
});

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
			resetButtton.textContent="Play Again!";
			changeColors(clickedcolor);
			document.querySelector("h1").style.backgroundColor=clickedcolor;
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

function generateRandomColors(num)
{
	//make an array
	var arr=[];
	
	//repeat num times
	for(var i=0;i<num;i++)
	{
		//get random color and push into the array
		arr.push(randomColor());
	}
	
	//return that array
	return arr;
}

function randomColor()
{
	//pick a red from 0 to 255 and same for green and blue
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")"; 
}