export class experiencia{
    id?:number;
    descripcion:String;
    years:String;
    titulo:String;

    constructor(descripcion:String, years:String, titulo:String){
        this.descripcion = descripcion;
        this.years = years;
        this.titulo = titulo;
    }

}