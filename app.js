// console.log("hello")

document.addEventListener("DOMContentLoaded", () => {

    const images = document.querySelector("footer.img.doggos");

    for(const image of images){
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => {
            image.src = data.message
            image.width = 150; 
            image.height = 150;

        })
    }

} )