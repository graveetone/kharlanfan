let nickname = document.querySelector("#nickname");
let comment = document.querySelector("#comment");
let submit = document.querySelector("#submit-comment");

function getDate() {
    let dateTimeNow = new Date();

    let dd = String(dateTimeNow.getDate()).padStart(2, '0');
    let mm = String(dateTimeNow.getMonth() + 1).padStart(2, '0');
    let yyyy = dateTimeNow.getFullYear();
    let h = String(dateTimeNow.getHours()).padStart(2, '0');
    let m = String(dateTimeNow.getMinutes()).padStart(2, '0');

    return dd + '.' + mm + '.' + yyyy + ', ' + h + ':' + m;
}

function makeComment(datetime, author, text) {
    let comment_card = document.createElement("div");
    comment_card.classList.add("card", "comment");
    comment_card.innerHTML = `<p> ${text} </p> <br> <p class="md"> <span>${datetime}</span> <span>${author}</span></p>`;
    document.getElementById("comments").appendChild(comment_card);
}

submit.addEventListener("click", () => { makeComment(getDate(), nickname.value, comment.value) });