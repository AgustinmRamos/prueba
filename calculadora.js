function Calculadora() {
    this.numActual = "";
    this.numAnterior = "";
    this.operador = "";
    this.resultado = true;
    var visor = document.getElementById("viewer");

    //Agrega las variables que creas necesarias

    this.agregarNumero = function (num) {
        if (this.resultado == true) {
            this.numActual = num;
            this.resultado = false;

        } else {
            if (num === ".") {
                if (!this.numActual.includes(".")) {
                    this.numActual += num;
                }

            } else {
                this.numActual += num;
            }
        }
        visor.innerHTML = this.numActual;
    };
    this.agregarOperador = function (ops) {
        if (this.operador == "") {

            visor.innerHTML = ops;


        } else {
            this.calcular(false);
        }

        this.operador = ops;
        this.numAnterior = this.numActual;
        this.numActual = "";

    };

    this.resetear = function () {

        this.numActual = "";
        this.numAnterior = "";
        visor.innerHTML = "0";
        this.operador = "";

    };

    this.calcular = function (result) {
        this.numActual = parseFloat(this.numActual);
        this.numAnterior = parseFloat(this.numAnterior);
        switch (this.operador) {
            case '+':
                this.numActual = this.numAnterior + this.numActual;
                break;
            case '-':
                this.numActual = this.numAnterior - this.numActual;
                break;
            case '*':
                this.numActual = this.numAnterior * this.numActual;
                break;
            case '/':
                this.numActual = this.numAnterior / this.numActual;
                break;

        }
        if (result) {
            this.resultado = true;
            this.operador = "";
        }
        visor.innerHTML = this.numActual;

    };
}
calculadora = new Calculadora();


