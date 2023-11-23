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
        console.log('Método mostrarGeneracion llamado');
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
        console.log('Método esMayorDeEdad llamado');
        if (this.edad >= 18) {
            alert(`${this.nombre} es mayor de edad`);
        } else if (this.edad < 18){
            alert(`${this.nombre} NO es mayor de edad`);
        } else{
            alert(`No se pudo comprobar que la persona sea mayor de edad, por favor verifique la edad ingresada`);
        }
    }

    mostrarDatos(){
        const contenedorPersona = document.querySelector('.personaCreada');
        const contenedorBotones = document.querySelector('.contenedorBotones');
        contenedorBotones.className += 'd-block';

        contenedorPersona.innerHTML+= `
        <h2 class="display-5 text-center mb-4">Persona creada:</h2>
        <h3>${this.nombre} ${this.apellido}</h3>
        <ul>
            <li>Edad: ${this.edad} años</li>
            <li>DNI: ${this.dni}</li>
            <li>Sexo: ${this.sexo}</li>
            <li>Peso: ${this.peso} Kg</li>
            <li>Altura: ${this.altura} cm</li>
            <li>Año de nacimiento: ${this.añoDeNacimiento}</li>
        </ul>`;
    }
}


// Funcion para tomar los datos de los inputs y crear la persona 
const crearPersona = (e) => {
    e.preventDefault();
    
    const datosInput = document.querySelectorAll('.form-control');
    const datosPersona = [];
    const btnCrearPersona = document.getElementById("btn-crearPersona");
    btnCrearPersona.className = 'd-none';

    for (let i = 0; i < datosInput.length; i++) {
        datosPersona.push(datosInput[i].value);
    }
    
    // Creamos el objeto persona con las propiedades escritas en los inputs
    const persona1 = new Persona(...datosPersona);
    persona1.mostrarDatos();

    // Funcion que muestra la generación
    btnVerGeneracion.addEventListener('click',() => {
        persona1.mostrarGeneracion();
    })
    
    
    // Función que muestra si es mayor de edad 
    btnMayorDeEdad.addEventListener('click',() => {
        persona1.esMayorDeEdad();
    });
}

const btnVerGeneracion = document.getElementById('btn-generacion');
const btnMayorDeEdad = document.getElementById('btn-mayorDeEdad');


const contenedorForm = document.getElementById('form-container');
contenedorForm.addEventListener('submit',crearPersona);