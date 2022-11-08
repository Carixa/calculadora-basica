const txtOp1 = document.getElementById("op1")
const txtOperacion = document.getElementById("operacion")
const txtOp2 = document.getElementById("op2")
const txtCalcular = document.getElementById("calcular")
const txtResultado = document.getElementById("resultado")

function calcular (){
    const operacion = txtOperacion.value
    const op1 = parseFloat (txtOp1.value)
    const op2 = parseFloat (txtOp2.value)

    if((operacion == "+" || operacion == "-" || operacion == "*" || operacion== "/") && !isNaN(op1) || !isNaN(op2)){
        let resultado;
        switch (operacion){
            case "+":
                resultado = op1 + op2
                break;
            case "-":
                resultado = op1 - op2
                break;
            case "*":
                resultado = op1*op2
                break;
            case "/":
                resultado = op1/op2
                break;
        }

        txtResultado.style = "color:black"
        txtResultado.innerText = "=" + resultado
    } else{
        txtResultado.style = "color:red"
        txtResultado.innerText ="calculo imposible"
    }
}

