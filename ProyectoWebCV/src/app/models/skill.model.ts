export class skill{
    id?:number;
    nombre?:String;
    porcentaje?:number;

    constructor(nombre: String, porcentaje:number){
        this.nombre = nombre;
        this.porcentaje = porcentaje;
    }

}