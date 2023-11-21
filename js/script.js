class Persona {
    constructor(nombre,apellido,edad,dni,sexo,peso,altura,añoDeNacimiento){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.añoDeNacimiento = añoDeNacimiento;
    }

    mostrarGeneracion() {
        let nacimiento = this.añoDeNacimiento;
        let frase = `${this.nombre} ${this.apellido} que nació en el año ${nacimiento} pertenece a la `;
    
        if (nacimiento >= 1994 && nacimiento <= 2010) {
            frase += 'Generación Z. Y su rasgo caracteristico es: Irreverencia.';
        } else if (nacimiento >= 1981 && nacimiento <= 1993) {
            frase += 'Generación Y. Y su rasgo caracteristico es: Frustración.';
        } else if (nacimiento >= 1969 && nacimiento <= 1980) {
            frase += 'Generación X. Y su rasgo caracteristico es: Obsesión por el éxito.';
        } else if (nacimiento >= 1949 && nacimiento <= 1968) {
            frase += 'Baby Boom. Y su rasgo caracteristico es: Ambición.';
        } else if (nacimiento >= 1930 && nacimiento <= 1948) {
            frase += 'Silent Generation (Los niños de la post guerra). Y su rasgo caracteristico es: Austeridad.';
        } else {
            frase = `No se pudo encontrar la generación, compruebe el año ingresado`;
        }
    
        return alert(frase);
    }

    esMayorDeEdad(){
        if (this.edad >= 18) {
            alert(`${this.nombre} es mayor de edad`);
        } else if (this.edad < 18){
            alert(`${this.nombre} NO es mayor de edad`);
        } else{
            alert(`No se pudo comprobar que la persona sea mayor de edad, por favor verifique la edad ingresada`);
        }
    }

    mostrarDatos(){
        const elementoMain = document.querySelector('main');
        const contenedor = document.createElement('DIV');

        contenedor.innerHTML+= `
        <h2 class="display-5 text-center mb-4">Persona creada:</h2>
        <h3>${this.nombre} ${this.apellido}</h3>
        <ul>
            <li>Edad: ${this.edad} años</li>
            <li>DNI: ${this.dni}</li>
            <li>Sexo: ${this.sexo}</li>
            <li>Peso: ${this.peso} Kg</li>
            <li>Altura: ${this.altura} cm</li>
            <li>Año de nacimiento: ${this.añoDeNacimiento}</li>
        </ul>
        <div class= "mt-3 text-center">
            <button class="btn btn-outline-success">Mostrar generación</button>
            <button class="btn btn-outline-success">Es mayor de edad</button>
        </div>
        `

        elementoMain.children[0].appendChild(contenedor);  // Agreamos la persona creada al nodo padre
        elementoMain.removeChild(elementoMain.children[1]);  // Eliminamos el nodo hijo que crea la persona

    }
}


// // Funcion que muestra la generación
const verGeneracion = () => {
    const personaCreada = crearPersona();
    personaCreada.mostrarGeneracion();
}


// // Función que muestra si es mayor de edad 
const mayorDeEdad = () => {
    const personaCreada = crearPersona();
    personaCreada.esMayorDeEdad();
}


// Funcion para tomar los datos de los inputs y crear la persona 
const crearPersona = (e) => {
    e.preventDefault();
    const datosInput = document.querySelectorAll('.form-control');
    const datosPersona = [];

    for (let i = 0; i < datosInput.length; i++) {
        datosPersona.push(datosInput[i].value);
    }
    
    // Creamos el objeto persona 
    const persona1 = new Persona(...datosPersona);

    persona1.mostrarDatos();

    return persona1;
}


// Creamos el evento que al hacer click en crear persona, te muestre la persona creada 
const contenedorForm = document.getElementById('form-container');
const b

contenedorForm.addEventListener('submit',crearPersona);