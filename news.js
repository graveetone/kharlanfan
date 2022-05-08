class News {
    constructor(title, text, imageURL)
    {
        this.title = title;
        this.text = text;
        this.imageURL = imageURL;
    }
    
    make_html_template() {
        const news_template =
            `
            <div class="news-image">
                <img src=${this.imageURL}>
            </div>
            <p class='md'> ${this.title}</p>
            <div class="comment-text">
            ${this.text}
            </div>
        `
        return news_template
    }

    get html_template() {
        return this.make_html_template();
    }

    display() {
        let news = document.createElement("div");
        news.innerHTML = this.html_template;
        news.classList.add("card");
        news.classList.add("card-fans");
        news.classList.add("sm");
        document.getElementsByClassName("comments")[0].prepend(news);
    }
}
function displaySavedNews() {
    let news = JSON.parse(localStorage.getItem("news"));
    for (let one_news of news) {
        let new_news = new News(one_news.title, one_news.text, one_news.imageURL);
        new_news.display();
    }
};

function isUserOnline() {
    return window.navigator.onLine;
}

window.addEventListener('load', () => {
    if (isUserOnline())
    {
    displaySavedNews();
    localStorage.removeItem("news");
}

});