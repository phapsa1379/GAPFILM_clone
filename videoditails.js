function addComment() {
    let comment = document.getElementsByClassName("comment")[0];
    let value = comment.value;
    comment.value = "";
    let user_comments = document.getElementsByClassName("user-comments")[0];

    let new_user_comments = user_comments.cloneNode(true);
    new_user_comments.getElementsByClassName(
        "user-comments-texts-text"
    )[0].textContent = value;
    console.log(new_user_comments);
    let comments = document.getElementsByClassName("comments")[0];
    comments.appendChild(new_user_comments);
}