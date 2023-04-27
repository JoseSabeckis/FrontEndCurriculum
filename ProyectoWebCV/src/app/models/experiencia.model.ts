export class experiencia{
    id?:number;
    descripcion:String;
    years:String;
    titulo:String;

    constructor(titulo:String, years:String, descripcion:String){
        this.descripcion = descripcion;
        this.years = years;
        this.titulo = titulo;
    }

}