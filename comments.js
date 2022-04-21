function getFormattedDateTime() {
    let dateTimeNow = new Date();

    let dd = String(dateTimeNow.getDate()).padStart(2, '0');
    let mm = String(dateTimeNow.getMonth() + 1).padStart(2, '0');
    let yyyy = dateTimeNow.getFullYear();
    let h = String(dateTimeNow.getHours()).padStart(2, '0');
    let m = String(dateTimeNow.getMinutes()).padStart(2, '0');

    return [dd + '.' + mm + '.' + yyyy, h + ':' + m];
}

function makeComment(username, comment_text) {
    let date_time = getFormattedDateTime();
    const comment_template =
        `
            <p class="comment-text">
                ${comment_text}
            </p>
            <div class="additional">
                <span class="date">${date_time[0]}, ${date_time[1]}</span>
                <span class="username"><b>${username}</b></span>
            </div>
        `
    let new_comment = document.createElement("div");
    new_comment.innerHTML = comment_template;
    new_comment.classList.add("comment");
    document.getElementsByClassName("comments")[0].prepend(new_comment); //innerHTML += comment_template;
}

submit.addEventListener("click", () => { makeComment(nickname.value, comment.value) });