class Comment {
    constructor(author, text, date = getFormattedDateTime()) {
        this.author = author;
        this.date = date;
        this.text = text;
    }

    make_html_template() {
        const comment_template =
            `
            <p class="comment-text">
                ${this.text}
            </p>
            <div class="additional">
                <span class="date">${this.date[0]}, ${this.date[1]}</span>
                <span class="username"><b>${this.author}</b></span>
            </div>
        `
        return comment_template
    }

    get html_template() {
        return this.make_html_template();
    }

    make_comment() {
        let comment = document.createElement("div");
        comment.innerHTML = this.html_template;
        comment.classList.add("comment");
        document.getElementsByClassName("comments")[0].prepend(comment);
    }
}

function getFormattedDateTime() {
    let dateTimeNow = new Date();

    let dd = String(dateTimeNow.getDate()).padStart(2, '0');
    let mm = String(dateTimeNow.getMonth() + 1).padStart(2, '0');
    let yyyy = dateTimeNow.getFullYear();
    let h = String(dateTimeNow.getHours()).padStart(2, '0');
    let m = String(dateTimeNow.getMinutes()).padStart(2, '0');

    return [dd + '.' + mm + '.' + yyyy, h + ':' + m];
}

function Validate(element) {
    return !(element.value.trim().length === 0)
}

function ResetFields() {
    for (element of document.getElementsByClassName('txt')) {
        element.value = "";
    }
}

function IsAllValid() {
    let is_valid = true;
    for (element of document.getElementsByClassName('txt')) {
        if (!Validate(element)) {
            element.classList.add("red-lighter");
            is_valid = false;
        } else {
            element.classList.remove("red-lighter");

        }
    }
    return is_valid;
}

function isUserOnline() {
    return window.navigator.onLine;
}

function showAlert(text) {
    news_alert.style = 'display: flex';
    news_alert.innerHTML = text;
    let interval = setInterval(() => {
        news_alert.style = 'display: none';
        clearInterval(interval);
    }, 3000);
}
submit.addEventListener("click", () => {
    let new_comment = new Comment(nickname.value, comment.value);
    if (IsAllValid()) {
        if (!isUserOnline()) { 
            let comments = JSON.parse(localStorage.getItem("comments"));
            
            if (!comments)  comments = []; 
            
            comments[comments.length] = new_comment; 
            localStorage.setItem("comments", JSON.stringify(comments));
            showAlert("Коментар буде опубліковано після відновлення з'єднання");
        }
        else {
            new_comment.make_comment();
        }
    }
    ResetFields();
});

function displaySavedComments() {
    let comments = JSON.parse(localStorage.getItem("comments"));
    for (let comment of comments) {
        comm = new Comment(comment.author, comment.text, comment.date);
        comm.make_comment();
    }
};

window.addEventListener('online', (event) => {
    displaySavedComments();
    localStorage.removeItem("comments");
});

window.addEventListener('load', (event) => {
    displaySavedComments();
});