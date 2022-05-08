let valid_image;// = true;
let globalImageURL;
let previewImage = function(event) {
    let img = new Image();
    let file = event.target.files[0];
    img.src = URL.createObjectURL(file);
    let globalImageURL = img.src;
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

function ResetFields() {
    for (element of document.getElementsByClassName('news_txt')) {
        element.value = "";
    }
    preview.src = "static/default.jpg";
    photo.value = [];
}
function showAlert(text) {
    news_alert.style = 'display: flex';
    news_alert.innerHTML = text;
    let interval = setInterval(() => {
        news_alert.style = 'display: none';
        clearInterval(interval);
    }, 3000);
}

function isUserOnline()
{
    return window.navigator.onLine;
}

class News {
    constructor(title, text, imageURL)
    {
        this.title = title;
        this.text = text;
        this.imageURL = imageURL;
    }

    saveNews()
    {
        let news_arr = JSON.parse(localStorage.getItem("news"));
            
        if (!news_arr)  news_arr = []; 
        
        news_arr[news_arr.length] = this; 
        localStorage.setItem("news", JSON.stringify(news_arr));
        // showAlert("Новину буде опубліковано після відновлення з'єднання");

    }
}

photo.addEventListener('change', e => { previewImage(e) });


submit_news.addEventListener("click", () => { 
    if (IsAllValid && valid_image)
    {
        var reader = new FileReader();
        var file = photo.files[0];
        let n = new News(title.value, text.value, "");
        reader.onloadend = function() {
            n.imageURL = reader.result;
            n.saveNews();
        }
          reader.readAsDataURL(file);
        
    let alertText;
    if (isUserOnline())
    {
        alertText = "Новина була опублікована!";
    }
    else
    {
        // save news to ls
        alertText = "Новина буде опублікована після відновлення з'єднання!";
    }
    showAlert(alertText);
    ResetFields();
}
 })