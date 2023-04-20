export class persona{
    id?: number;
    nombre: String;
    apellido: String;
    img: String;
    titulo: String;

    constructor(nombre: String, apellido: String, img: String, titulo: String){
        this.apellido = apellido;
        this.nombre = nombre;
        this.img = img;
        this.titulo = titulo;
    }


}