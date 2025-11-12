const imageWidthInput = document.getElementById("image-width-input");
const imageHeightInput = document.getElementById("image-height-input");
const blurInput = document.getElementById("blur-input");
const grayscaleInput = document.getElementById("grayscale-input");

const getImageButton = document.getElementById("get-image-button");
const imageContainer = document.getElementById("image-container");

const sendFetchButton = document.getElementById("send-fetch-button");

getImageButton.addEventListener("click", async () => {
    const width = imageWidthInput.value;
    const height = imageHeightInput.value;
    const blur = blurInput.checked;
    const grayscale = grayscaleInput.checked;

    const params = new URLSearchParams();
    if (blur) {
        params.set("blur", true);
    }
    if (grayscale) {
        params.set("grayscale", true)
    }
    
    const res = await fetch(`https://picsum.photos/${width}/${height}?${params.toString()}`);

    console.log(res.status);
    console.log(res.headers.entries().toArray());

    const imageData = await res.blob();
    const imageURL = URL.createObjectURL(imageData);

    const newImageElement = document.createElement("img");
    newImageElement.src = imageURL;
    imageContainer.replaceChildren(newImageElement);
})

sendFetchButton.addEventListener("click", async () => {
    const res = await fetch("http://127.0.0.1:3000/fetch-test?test-param=yes", {
        // method: "PATCH",
        // body: "This is a string of content",
        headers: {
            "test-header": "test-value"
        }
    });

    console.log(res.status);
    console.log(res.headers.entries().toArray());

    const body = await res.text();
    console.log(body);
})