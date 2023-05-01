import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, list, getDownloadURL} from '@angular/fire/storage';
import { async } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  url:string = "";

  constructor(private storage: Storage) { }

  public cargarImage($event:any, name: string){
    const file = $event.target.files[0];

    console.log(file);
    const img = ref(this.storage, `image/`+ name);

    uploadBytes(img, file)
    .then(response => {this.getImage()})
    .catch(error => console.log(error))
  }

  getImage(){
    const imageReferencia = ref(this.storage, 'image')
    list(imageReferencia)
    .then(async response => {
      for(let item of response.items){
        this.url = await getDownloadURL(item);
        console.log("la url es: "+this.url);
      }
    })
    .catch(error => console.log(error))
  }

}
