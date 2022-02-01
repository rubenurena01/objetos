var listaEstudiantes = []
function crear(){
    var Nombre = document.getElementById('nombre').value
    var Fecha = document.getElementById('fechaN').value
    var Cursos = document.getElementById('cursos').value
    let estudiante1 = new Estudiante (Nombre, new Date(Fecha), Cursos)
    listaEstudiantes.push(estudiante1)
    document.getElementById('resultado').append(estudiante1,document.createElement("br"))
}
class Persona {
    constructor (nombre, fecha){
        this.nombre=nombre
        this.fecha=fecha
    }
    presentarse(){
        return `Soy ${this.nombre} y nací el ${fechaCorta(this.fecha)}, tengo, por tanto, ${this.edad} años`
    }
    get edad(){
        var fecha = new Date()
        var edad = fecha.getFullYear()-this.fecha.getFullYear()
        fecha.setYear(this.fecha.getFullYear())
        if(fecha<this.fecha){
            edad -=1
        }
        return edad
    }
    toString(){
        return this.presentarse()
    }
}
class Profesor extends Persona{
}
class Estudiante extends Persona{
    constructor (nombre, fecha, cursos){
        super(nombre, fecha)
        this.cursos=cursos
    }
    presentarse(){
        return `${Persona.prototype.presentarse.call(this)} y estudio ${this.cursos} en el IES Gregorio Prieto`
    }
}
function fechaCorta(Fecha){
    return `${Fecha.getDate()}/${Fecha.getMonth()+1}/${Fecha.getFullYear()}`
}
