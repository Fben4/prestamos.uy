
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

let lista_prestamos = []; // creo arreglo de prestamos

calcular.addEventListener("click",function(){



        //obtengo los datos
        let monto = document.getElementById("monto").value;
        let banco = document.getElementById("banco").value;
        let cuotas = document.getElementById("cuotas").value;
        let divisa = document.getElementById("divisa");
        let selected_divisa = divisa.options[divisa.selectedIndex].text;
        let resultado = calcular_prestamo(monto,cuotas,banco);
        let result = document.getElementById("show");


        
        result.innerHTML = `<p class="text">Cuota mensual</p> ${Math.ceil(resultado)} ${selected_divisa}` ;

        

        

    });


    // guardar prestamos
    let save_button = document.getElementById("save");

    save_button.addEventListener("click", function(){

        let monto = document.getElementById("monto").value;
        let banco = document.getElementById("banco").value;
        let cuotas = document.getElementById("cuotas").value;
        let divisa = document.getElementById("divisa").value;
        let resultado = calcular_prestamo(monto,cuotas,banco);
        console.log(monto,banco,cuotas,divisa,resultado);

        
        let nuevo_prestamo = new Prestamo(monto, cuotas, banco, divisa, resultado);
        lista_prestamos.push(nuevo_prestamo);

    })
