function suma(){
    var a;
    var b;
    var suma;

    a = parseInt(prompt("Por favor ingrese el intervalo"));
    b = parseInt(prompt("Por favor ingrese el intervalo"));

    suma = a+b;

    alert("El resultado de la suma es:" + suma);
}
function resta(){
    var a;
    var b;
    var resta;

    a = parseInt (prompt("Por favor ingrese el primer valor"));
    b = parseInt (prompt ("Por favor ingrese el segundo valor"));
    resta = a - b;

    alert("El resultado de la resta es : " + resta);


}
function multiplicacion(){
    var a;
    var b;
    var multiplicacion;

    a = parseInt (prompt("Por favor ingrese el primer valor"));
    b = parseInt (prompt ("Por favor ingrese el segundo valor"));
    multiplicacion = a * b;

    alert("El resultado de la multiplicacion es : " + multiplicacion);
    }
    function division(){
    var a;
    var b;
    var division;

    a = parseInt (prompt("Por favor ingrese el primer valor"));
    b = parseInt (prompt ("Por favor ingrese el segundo valor"));
    division = a / b;

    alert("El resultado de la division es : " + division);


}
function numeromayor (){
    var a;
    var b;

    a=parseInt(prompt("Ingrese el numero 1",""));
    b=parseInt(prompt("Ingrese el numero 2",""));

    if(a >= b)
    {

    alert("El numero mayor es: " + a );
    }
    else
    {

   alert("El Numero mayor es : " + b );
}
} 
function numeromenor (){ 
    var a;
    var b;
    var c;

    a=parseInt(prompt("Ingrese el numero 1"));
    b=parseInt(prompt("Ingrese el numero 2"));
    c=parseInt(prompt("Ingrese el numero 3"));

    if (a <= b && a <= c) {
        men= a;
  } else {
      if (b < a && b<=c ){
        men=b;
      } else {
         men= c;
      }
} 
  alert("el menor valor de los tres numero es:"+ men)

  } 
  function numero_par_impar(){

    var numero = prompt("Introduce un número entero");

    var resultado = parImpar(numero);
    alert("El número "+numero+" es "+resultado);

  function parImpar(numero) {
      if(numero % 2 == 0) {
        return "par";
      }
      else {
        return "impar";
      }
    }
}
function cuadradoNumero(){
    var a;
    a=parseInt(prompt("por favor Ingrese un numero"));
    alert("el cuadrado del numero: " +a+  "  es: "   + a*a);

}
function obtenerArea(){
    let b;
    let h;
    let area;

    b=parseInt(prompt("por favor Ingrese la base de un triangulo"));
    h=parseInt(prompt("por favor Ingrese la altura de un triangulo"));
    area = (b * h) / 2;

    alert("el resultado del area de un triangulo es : " + area );

   }
   function centimetroAmetros(){ 
   var num;
   var centimetros;
   var metros;
    num=parseInt(prompt("por favor Ingrese los centimetrso:"));
    centimetros= num;
    metros = centimetros/100;
    alert("el centimetros  es:  " +  centimetros  + " y el valor dado en metros es:" +  metros+ " metro");

}
function calcularAños(fechaNacimiento) {
    var today = new Date();
    años = today.getFullYear() - año;
    if (fechaNacimiento.getMonth() > (today.getMonth()) || fechaNacimiento.getDay() > today.getDay())
        años--;
    alert("La fecha de nacimiento es: "+ años);
    return años;
}
function invertirCapital (){

var capital;
var ganancia;
var años;

capital =parseInt(prompt("por favor Ingrese el capital invertido "));
años  =parseInt(prompt("por favor Ingrese el numero de años "));

ganancia = capital* años *0.2;

alert("la ganancia por el capital invertido es: "  +  ganancia);
}
function promedioAlumno (){

}