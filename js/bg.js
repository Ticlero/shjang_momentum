const bgBody = document.querySelector("body");
const IMG_NUMBER = 1;

const handleImageLoad = () => {
    console.log("finished loading");
}

const paintImate = () => {
    const image = new Image();
    const width = screen.width;
    const height = screen.height;
    console.log(width, height);
    image.src = `https://source.unsplash.com/category/landscape/${width}x${height}`;
    image.classList.add("bgImage");
    bgBody.appendChild(image);
}

const generateRandomNum = () => {
    const number = (Math.floor(Math.random() * 6)) + 1;
    return number;
}
const bdInit = () => {
    //const randomNumber = generateRandomNum();
    paintImate();
}

bdInit()