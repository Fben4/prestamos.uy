
function calcular_prestamo(x, y, z){
    if (z == "1") {

        var interes = x*0.03;
        var cuota = x/y + interes;
        return cuota;
    }
    else if(z == "0"){ 
        var interes = x*0.02;
        var cuota = x/y + interes;
        return cuota;

    }

    else if (z == "2") {
        var interes = x*0.05;
        var cuota = x/y + interes;
        return cuota;
        

    }
}

class Prestamo{
    constructor(x,y,z,t,u){
        this.monto      =  x;
        this.cuotas     =  y;
        this.banco      =  z;
        this.divisa     =  t;
        this.resultado  =  u;
    }

}

function calculador_mensual(acumulador, prestamo) {

    acumulador = acumulador + prestamo.resultado;
    return acumulador
}

let calcular = document.getElementById("boton");

 // creo arreglo de prestamos

calcular.addEventListener("click",function(){



        //obtengo los datos
        let monto = document.getElementById("monto").value;
        let banco = document.getElementById("banco").value;
        let cuotas = document.getElementById("cuotas").value;
        let divisa = document.getElementById("divisa");
        let selected_divisa = divisa.options[divisa.selectedIndex].text;
        let resultado = calcular_prestamo(monto,cuotas,banco);
        let result = document.getElementById("show");


        result.style.visibility = "visible";
        result.innerHTML = `<p class="text">Cuota mensual</p> ${Math.ceil(resultado)} ${selected_divisa}` ;

        
    });

    let prestamos = [];

    // guardar prestamos
    let save_button = document.getElementById("save");

    save_button.addEventListener("click", function(){


        let monto = document.getElementById("monto").value;
        let banco = document.getElementById("banco").value;
        let cuotas = document.getElementById("cuotas").value;
        let divisa = document.getElementById("divisa");
        let selected_divisa = divisa.options[divisa.selectedIndex].text;
        let resultado = calcular_prestamo(monto,cuotas,banco);

        
        let nuevo_prestamo = new Prestamo(monto, cuotas, banco, selected_divisa, resultado);
        prestamos.push(nuevo_prestamo);

        let guardar = (clave,valor) => { sessionStorage.setItem(clave,valor)}; // mandar a storage

        guardar("lista_prestamos", JSON.stringify(prestamos));

        class prestamo_json {
            constructor(obj){
                this.monto     =  parseFloat(obj.monto);
                this.cuotas      =  parseFloat(obj.cuotas);
                this.divisa     =  obj.divisa;
                this.banco      =  obj.banco;
                this.resultado  =  parseFloat(obj.resultado);
            }
        }


        let almacenados = JSON.parse(sessionStorage.getItem("lista_prestamos"));
        
        let prestamos_lista = [];
            
        for(const objeto of almacenados){
            prestamos_lista.push(new prestamo_json(objeto));
        }
        function calculador_mensual(acumulador, prestamo) {

            acumulador = acumulador + prestamo.resultado;
            return acumulador
        }

        let total = prestamos_lista.reduce(calculador_mensual,0);

        let prestamos_usuario = document.getElementById("total")
        prestamos_usuario.style.visibility = "visible";
            
        prestamos_usuario.innerHTML = `<p class="text">Cuota total</p> ${Math.ceil(total)} ${selected_divisa}`



    
    })



