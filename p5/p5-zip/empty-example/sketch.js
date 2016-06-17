var x=	0;
var grow;
var osc;
var y= 	0;

var colors= [];
var colors1= [];


function setup() {
	delay = new p5.Delay();


	grow=true;

	//createCanvas(800,600);//tamaño del canvas
	createCanvas(windowWidth,windowHeight);
	 colors[0]=color(255,148,73);
 	 colors[1]=color(249,89,11);
	 colors[2]=color(226,39,4);
	 colors[3]=color(55,89,5);
	 colors[4]=color(34,46,22);

	 colors1[0]=color(32,167,249);
 	 colors1[1]=color(28,218,250);
	 colors1[2]=color(146,79,148);
	 colors1[3]=color(254,23,17);
	 colors1[4]=color(170,11,7);


	 //arreglo de notas
	 notes = [16.35, 19.45, 21.83, 46.25, 49.00, 29.14];


	 //Creación de oscilador
	 osc= new p5.Oscillator();
	 osc.setType('sine');
	 osc.freq(200);
	 osc.amp(0.2);
	 osc.start();

	 






}

function draw() {

	 osc.freq(mouseX);	 //pasarle la frecuencia del mouse

	 var pos= map(mouseY, 0, height, 1, 0);
	 osc.amp(pos);

	 //reproducir notas
	 
	 if(mouseX>0&&mouseX<=width/6){osc.freq(notes[0]);}
 	 if(mouseX>width/6&&mouseX<=2*width/6){osc.freq(notes[1]);}
	 if(mouseX>2*width&&mouseX<=3*width/6){osc.freq(notes[2]);}
	 if(mouseX>3*width&&mouseX<=4*width/6){osc.freq(notes[3]);}
	 if(mouseX>5*width&&mouseX<=6*width/6){osc.freq(notes[4]);}

	 delay.process(osc, .12, .7, 2300);


	fill(255,3);
	rect(0,0,width,height);
	//background(255);//Borra y coloca solo la ellipse donde esta el mouse

	if (mouseIsPressed) {

		fill(colors1[parseInt(random(5))]);

		//fill(0);//Rellenelo con negro
	}else{
		//fill(255);//Rellene con blanco
		fill(colors[parseInt(random(5))]);
	}


	/* hace que crezca hasta 100 y luego decrezca
	
	if (x==100) {
	grow=false;
	}

	if (x==0) {
	grow=true;
	}

	if (grow) {
	x++;
	}else x--;

	ellipse(mouseX,mouseY,x,x);

	*/


		

		
	
	
		

	
	
	

	





	
	//hacer la ellipse que suba hasta cierto tamaño y de ahí baje osea imprimir con un ciclo hasta cierto parte y luego que baje
	/*ellipse(mouseX,mouseY,(Math.random() * 100) + 1),(Math.random() * 100) + 1;//Dibuja una ellipse en la posición del mouse
	ellipse(width-mouseX,mouseY,(Math.random() * 100) + 1),(Math.random() * 100) + 1;//Dibuja una ellipse en la posición del mouse con otra de simetria
	ellipse(mouseX,height-mouseY,(Math.random() * 100) + 1),(Math.random() * 100) + 1;
	ellipse(width-mouseX,height-mouseY,(Math.random() * 100) + 1),(Math.random() * 100) + 1;*/


  
}