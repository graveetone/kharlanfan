let valid_image = true;
let previewImage = function(event) {
    let img = new Image();
    let file = event.target.files[0];
    img.src = URL.createObjectURL(file);
    if (file.type.split("/")[0] === "image") {
        img.onload = () => {
            preview.src = img.src;
            event.target.classList.remove("red-lighter");
            valid_image = true;
        }
    } else {
        event.target.classList.add("red-lighter");
        preview.src = "static/default.jpg";
        valid_image = false;

    }
};

function Validate(element) { // true if valid
    // let is_valid = true;
    return !(element.value.trim().length === 0)
}

function IsAllValid() {
    let is_valid = true;
    for (element of document.getElementsByClassName('news_txt')) {
        if (!Validate(element)) {
            element.classList.add("red-lighter");
            is_valid = false;
        } else {
            element.classList.remove("red-lighter");

        }
    }
    return is_valid;
}

function SaveNews() {
    if (IsAllValid() && valid_image) {
        {
            news_alert.style = 'display: flex';
            let interval = setInterval(() => {
                news_alert.style = 'display: none';
                clearInterval(interval);
            }, 3000);

        }
    }
}
photo.addEventListener('change', e => { previewImage(e) });
submit_news.addEventListener("click", () => { SaveNews(); })