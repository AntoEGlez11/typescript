export {}

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama
}

class Picture {
  //Propiedas de la entidad
  #id: number;
  #title: string;
  #orientation: PhotoOrientation;

  public constructor(id: number,
              title: string,
              orientation: PhotoOrientation) {
        this.#id = id;
        this.#title = title;
        this.#orientation = orientation;
  }
  //comportamiento
  public toString(){
    return `[id: ${this.#id},
             title: ${this.#title},
             orientation: ${this.#orientation}]`;
  }
}

class Album {
  #id: number;
  #title: string;
  #pictures: Picture[];

  public constructor (id: number, title: string){
    this.#id = id;
    this.#title = title;
    this.#pictures = []
  }

  public addPicture(picture: Picture) {
    this.#pictures.push(picture);
  }
}

const album: Album = new Album(1, 'Personas');
const picture: Picture = new Picture(1, 'session 1', PhotoOrientation.Landscape)
album.addPicture(picture)

console.log('album', album);

//Accediendo a los miembros publicos
// picture.id = 100;
// picture.title = 'otro titulo';
// album.title = 'actividades'
console.log('album', album);