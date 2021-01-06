export {}

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama
}

interface Entity {
  id: number;
  title: string;
}

interface Album extends Entity {
  description: string;
}

interface Picture extends Entity {
  orientation: PhotoOrientation
}

const album: Album = {
  id: 1, title: 'Soda Estereo', description: 'Eventos del mundo'
}

const picture: Picture = {
  id: 1, title: 'Familia', orientation: PhotoOrientation.Panorama
}

let newPicture = {} as Picture;
newPicture.id = 5;
newPicture.title = 'luna'
console.log('album', album);
console.log('picture', picture);
console.log('newPicture', newPicture);