// patron de diseño 
// tipo objeto
const DIBUJAR = {
    //propiedades
    canvas: null, // inicializar el canva
    contexto: null, // inicializar
    dibujando: false, // inicializar
    posicion: {},
    lapiz: null,
    borrador: null,
    borrar: false,
    limpiar : false,
    btnlipiar: null,
    cargarImagen: false,
    imagen:null, 
    btnGuardar: null,
    guardarImg: false,
    //metodos
    inicio: function () {
        if (this.canvas && this.canvas.getContext){
            this.contexto = this.canvas.getContext("2d");
            if (this.contexto) {
                return this.contexto;
            }else{
                alert("No acepta el navegador");
            }
        } else{
            alert("No acepta el navegador");
        }
    },
    ajustarPosicion: function (x,y) {
        let tamCanva = this.canvas.getBoundingClientRect();
        console.log(tamCanva);

        // clculos para generar una posicion mas exata co respecto a mi canvas
        let xreal =  tamCanva.x;
        let yreal =  tamCanva.y;
        if (e.changedTouches ===undefined) {
            xreal = x - tamCanva.left;
            yreal = y - tamCanva.top;
        }else{
            xreal = e.changedTouches[0].x - tamCanva.x;
            yreal = e.changedTouches[0].y - tamCanva.y;
        }
        return {xx:xreal, yy:yreal}
    },
    

    // canvas, elementos asocioantos a las graficas 2d
    dibujando: function (inicio, fin) {
        let grosor = document.getElementById("grosor").value;
        let color = document.getElementById("color");



        let rgb =this.contexto.createLinearGradient(0, 170, 170, 0);
            rgb.addColorStop(0, "red");
            rgb.addColorStop(0.33, "orange");
            rgb.addColorStop(1, "blue");
        let arcoiris = document.getElementById("arcoiris");
        let espejo = document.getElementById("espejo");
        
       if (arcoiris.checked) {
            this.contexto.strokeStyle = rgb;
        } else{
            this.contexto.strokeStyle = color.value;
        }
        this.contexto.beginPath();// inicio de la trayectora del dibujo
        this.contexto.lineWidth = grosor;
        let formaBrocha = document.getElementsByName("forma");
        for (const posicion in formaBrocha) {
             if (formaBrocha[posicion].checked) {
                this.contexto.lineCap = formaBrocha[posicion].value;
             }
        }
       
        this.contexto.moveTo(inicio.xx, inicio.yy);
        this.contexto.lineTo(fin.xx, fin.yy);
        this.contexto.stroke();
         if(espejo.checked){
            this.contexto.save();
            this.contexto.translate(this.canvas.width, 0);
            this.contexto.scale(-1, 1);
            this.contexto.moveTo(inicio.xx, inicio.yy);
            this.contexto.lineTo(fin.xx, fin.yy);
            this.contexto.stroke();
            this.contexto.restore();
        }
       
    },
    borrar: function (inicio) {
        let grosor = document.getElementById("grosor").value;
        this.contexto.beginPath();
        this.contexto.clearRect(inicio.xx, inicio.yy, grosor, grosor);
        this.contexto.stroke();

        
    },

    limpiar: function () {
        this.contexto.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    

        cargarImagen: function() {
            const seleccionador = document.createElement("input");
            seleccionador.type = "file";
            seleccionador.accept = "image/*";
            seleccionador.addEventListener("change", (event) => {
              const archivo = event.target.files[0];
              const lector = new FileReader();
              lector.onload = (e) => {
                this.imagen = new Image();
                this.imagen.onload = () => {
                  this.contexto.clearRect(0, 0, this.canvas.width, this.canvas.height);
                  const posX = (this.canvas.width - this.imagen.width) / 2;
                  const posY = (this.canvas.height - this.imagen.height) / 2;
                  this.contexto.drawImage(this.imagen, posX, posY);
                };
                this.imagen.src = e.target.result;
              };
              lector.readAsDataURL(archivo);
            });
            seleccionador.click();
          },

          guardarImg: function (){
            const enlace = document.createElement("a");
            enlace.href = this.canvas.toDataURL();
            enlace.download = "mi_canvas.jpg";
            enlace.click();
          }
}