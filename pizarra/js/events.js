window.onload = function () {
    DIBUJAR.canvas = document.getElementById("micanva");
    DIBUJAR.inicio();
    DIBUJAR.lapiz = document.getElementById("Mylapiz");
    DIBUJAR.borrador = document.getElementById("borrador");
    DIBUJAR.btnlipiar = document.getElementById("limpiarPizarra");
    DIBUJAR.imagen = document.getElementById("imagen")
    DIBUJAR.btnGuardar = document.getElementById("guardar")

    DIBUJAR.lapiz.onclick = function() {
        
        // dibujar
        DIBUJAR.canvas.onmousedown = function(e) {
        this.posicion = DIBUJAR.ajustarPosicion(e.clientX, e.clientY);
        console.log(this.posicion);
        this.dibujando = true;
        }



        // no dibujar
        DIBUJAR.canvas.onmouseup = function(e) {
            DIBUJAR.ajustarPosicion(e.clientX, e.clientY);
            this.dibujando = false;
        }
       

        // mantiene el dibujo
        DIBUJAR.canvas.onmousemove  = function(e) {
            if (this.dibujando) {
            let fin = DIBUJAR.ajustarPosicion(e.clientX, e.clientY);
            
            // inicio y fin
            DIBUJAR.dibujando(this.posicion, fin);

            this.posicion = fin;
            }
        }
        
    }

    DIBUJAR.lapiz.ontouch = function() {
        
        // dibujar
        DIBUJAR.canvas.ontouchmove = function(e) {
        this.posicion = DIBUJAR.ajustarPosicion(e.clientX, e.clientY);
        console.log(this.posicion);
        this.dibujando = true;

        if (this.dibujando) {
            let fin = DIBUJAR.ajustarPosicion(e.clientX, e.clientY);
            
            // inicio y fin
            DIBUJAR.dibujando(this.posicion, fin);

            this.posicion = fin;
            }
        }
        }

       


        // no dibujar
        DIBUJAR.canvas.ontouchend = function(e) {
            DIBUJAR.ajustarPosicion(e.clientX, e.clientY);
            this.dibujando = false;
        }
       

        // mantiene el dibujo
        

   


    DIBUJAR.borrador.onclick = function() {
        
        // borrar
        DIBUJAR.canvas.onmousedown = function(e) {
        this.posicion = DIBUJAR.ajustarPosicion(e.clientX, e.clientY);
        console.log(this.posicion);
        this.borrar = true;
        }
        DIBUJAR.canvas.addEventListener('touchstart', () =>{
            this.posicion = DIBUJAR.ajustarPosicion(e.clientX, e.clientY);
            console.log(this.posicion);
            this.borrar = true;
        })

        // no borrarr
        DIBUJAR.canvas.onmouseup = function(e) {
            DIBUJAR.ajustarPosicion(e.clientX, e.clientY);
            this.borrar = false;
        }
        DIBUJAR.canvas.addEventListener('touchend', () =>{
            DIBUJAR.ajustarPosicion(e.clientX, e.clientY);
            this.borrar = false;
            
        })

        

        // mantiene el dibujo
        DIBUJAR.canvas.onmousemove  = function(e) {
            if (this.borrar) {
            let fin = DIBUJAR.ajustarPosicion(e.clientX, e.clientY);
            
            // inicio y fin
            DIBUJAR.borrar(this.posicion, fin);

            this.posicion = fin;
            }
        }

        DIBUJAR.canvas.addEventListener('touchmove', () =>{
            if (this.borrar) {
                let fin = DIBUJAR.ajustarPosicion(e.clientX, e.clientY);
                
                // inicio y fin
                DIBUJAR.borrar(this.posicion, fin);
    
                this.posicion = fin;
                }
        })
    }
    
    DIBUJAR.btnlipiar.onclick = function () {
        DIBUJAR.limpiar();
    }

    DIBUJAR.imagen.onclick = function () {
        DIBUJAR.cargarImagen();
    } 

    DIBUJAR.btnGuardar.onclick = function () {
        DIBUJAR.guardarImg();
    }
    

    let red = document.getElementById("red"); //botones
        let blue = document.getElementById("blue"); //botones
        let green = document.getElementById("green"); //botones
        let yellow = document.getElementById("yellow"); //botones
        let black = document.getElementById("black"); //botones
        let white = document.getElementById("white"); //botones 
        white.addEventListener("click",() => {
            color.value = "#ffffff";
    
        });

        black.addEventListener("click",() => {
            color.value = "#000000";
    
        });

        blue.addEventListener("click",() => {
            color.value = "#0000ff";
    
        });

        red.addEventListener("click",() => {
            color.value = "#ff0000";
    
        });

        green.addEventListener("click",() => {
            color.value = "#00ff00";
    
        });

        yellow.addEventListener("click",() => {
            color.value = "#ffff00";
    
        });
    


}

