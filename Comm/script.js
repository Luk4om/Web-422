// localStorage.clear();

function getComments() {
    let comments = localStorage.getItem("comments");
    return comments ? JSON.parse(comments) : [];
}

function saveComments(comments) {
    localStorage.setItem("comments", JSON.stringify(comments));
}
function displayComments() {
    const comments = getComments();
    const commentsDiv = document.getElementById("comments");
    commentsDiv.innerHTML = ''

    comments.forEach(commnet => {
        const p = document.createElement("p");
        p.textContent = commnet.text
        commentsDiv.appendChild(p)
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("new-comment");
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const commentText = document.getElementById("comment-text").value;
        let comments = getComments();

        comments.push({ text: commentText });
        saveComments(comments);
        document.getElementById("comment-text").value = "";

        displayComments();
    });

    form.addEventListener("reset", function (e) {
        e.preventDefault();

        localStorage.clear();
        displayComments();
    });
    
    displayComments();
});
