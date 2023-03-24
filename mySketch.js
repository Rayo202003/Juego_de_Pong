let eliminado = 0;
let pelota; //generar pelota
let barra; //generar barra
 
class Pelota{ //clase pelota
	constructor(x,y,velX,velY,rad,color){ //construimos la pelota con atributos
		this.x = x;							//atributo X
		this.y = y;							//atributo y
		this.velX = velX;				//velocidad en eje x
		this.velY = velY;				//velocidad en eje y 
		this.rad = rad;					//tamaño pelota
		this.color = color;			//color pelota
	}
	
	girarX(){						//movimiento en x de pelota
			this.velX = -this.velX;
	}
	
	girarY(){						//movimiento en y de pelota
			this.velY = -this.velY;
	}
	
	rebotar(){					//rebotar
			 this.velY = -this.velY;
			 this.color = (random(0,255),random(0,255),random(0,255)) //cambiar el color al rebotar 
	}
	
	dibujar(){ //dibujamos la pelota
		fill(this.color); //color
		ellipse(this.x,this.y,this.rad); //tamaño
	}
	 
	moverX(){		//movimiento en eje x
		this.x = this.x - this.velX;
	}
	
	moverY(){		//movimiento en eje y
		this.y = this.y - this.velY;
	}
}

class Barra{		//clase llamada barra
	constructor(x,y,ancho,alto){		//construimos la barra con atributos
		this.x = x;
		this.y = y;
		this.ancho = ancho;
		this.alto = alto;
	}
	
	dibujar(){		//dibujamos la barra
		rectMode(CENTER);		//en el centro al comenzar juego
		fill(248, 26, 26 );	//color de la barra(rojo)
		rect(this.x,this.y,this.ancho,this.alto);
	}
	
	mover(){		//movimiento en eje x con ratón
		this.x = mouseX;
	}
}

function setup(){		//configuramos
	createCanvas(windowWidth,windowHeight);		//tamaño de la pantalla
	background(0,0,0);
	pelota = new Pelota(random(100,windowWidth-100),200,5,5,30,(random(0,255),random(0,255),random(0,255)));
	barra = new Barra(mouseX,windowHeight-200,200,25);
}

function draw(){		//dibujamos
	background(26, 255, 172 ); //fondo de la pantalla
	pelota.moverX();
	pelota.moverY();
	pelota.dibujar();
	barra.dibujar();
	barra.mover();
	
	if(pelota.y >= barra.y - barra.alto && pelota.y <= barra.y +barra.alto && pelota.x-pelota.rad >= barra.x-barra.ancho && pelota.x+pelota.rad <= barra.x+barra.ancho){
		pelota.rebotar();		//movimiento y efecto de pelota al rebotar en barra
	}
	
	if(pelota.x <= 30 || pelota.x >= windowWidth-30){		//dirección -30 al rebotar en limite de la pantalla
		pelota.girarX();
	}
	
	if(pelota.y <= 30){
		pelota.girarY();
	}
	
	if(pelota.y > windowHeight+100){
		eliminado = 1;
	}
	
	if(eliminado === 1){		//si pierdes, fin del juego
		textSize(120);
		fill(0);
		text("¡FELIZ NAVIDAD!",windowWidth/4,windowHeight/2);
	}
}