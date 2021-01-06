//mostrar foto
export {}

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama
}
interface Picture {
  title: string;
  date: string;
  orientation: PhotoOrientation
}
function showPicture(picture: Picture) {
  console.log(`[title: ${picture.title},
                date: ${picture.date},
                orientation: ${picture.orientation}]`);
}

let myPic = {
  title: 'test',
  date: '2020-03',
  orientation: PhotoOrientation.Landscape
};

showPicture(myPic);
showPicture({
  title: 'test',
  date: '2020-03',
  orientation: PhotoOrientation.Portrait
})

interface PictureConfig {
  title?: string;
  date?: string;
  orientation?: PhotoOrientation
}

function generatePicture(config:PictureConfig) {
  const pic = {title: 'default', date: '2020-03'};
  if (config.title) {
    pic.title = config.title;
  }
  if (config.date) {
    pic.date = config.date
  }
  return pic;
}

let picture = generatePicture({})
console.log('PRUEBAS', picture);

interface User {
  readonly id: number;
  username: string;
  isPro: boolean;
}

let user: User;
user = { id: 10, username: 'antonio', isPro: true};
console.log('user', user);
user.username = 'estrada'
console.log('user', user);
// user.id = 50; //error
console.log('user', user);