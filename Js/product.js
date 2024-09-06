let product = document.getElementById("prod");
let contact = document.getElementById("contact");
let showContent = 4;
let myObjDes;

// Get Data
function asObj() {
    fetch("https://raw.githubusercontent.com/Mohamed-ID/Pixel_Digicam/main/Json/descreption.json")
    .then(response => response.json())
    .then(data => myObjDes = data)
    fetch('https://api.github.com/repos/Mohamed-ID/Pixel_Digicam/contents/Img/Product', {
        method: 'GET',
        headers: {
        'Authorization': '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'
        }
    })
    .then(response => response.json())
    .then(obj => Showproduct(obj, myObjDes))
}
asObj()


// The Create function
function Showproduct(imgData, myObjDes) {
    for(let a = 0; a < showContent; a++) {
        let [box, resize, imgDiv, img, info, h3, span, rate, p] = [document.createElement("div"), document.createElement("div"), document.createElement("div"), document.createElement("img"), document.createElement("div"), document.createElement("h3"), document.createElement("span"), document.createElement("div"), document.createElement("p")];
        box.className = "box";
        resize.className = "resize";
        imgDiv.className = "img";
        img.src = `Img/Product/${imgData[a + 1].name}`;
        info.className = "info";
        h3.textContent = `${myObjDes[a].product}`;
        span.textContent = `${myObjDes[a].prix}`;
        rate.className = "rate";
        for(let j = 0; j < 5; j++) {
            let icon = document.createElement("i");
            if(j < myObjDes[a].rate) {
                icon.className = "fa fa-star";
            } else {
                icon.className = "fa-regular fa-star";
            }
            rate.appendChild(icon);
        }
        p.textContent = `${myObjDes[a].more_info}`;
        resize.appendChild(imgDiv);
        resize.appendChild(img);
        info.appendChild(h3);
        info.appendChild(span);
        info.appendChild(rate);
        info.appendChild(p);
        box.appendChild(resize);
        box.appendChild(info);
        box.appendChild(contact.cloneNode(true));
        product.appendChild(box);
    }
}
