// ... (previous code) ...

function submitNovel() {
    const novelLink = document.getElementById('novelLink').value;
    const novelCover = document.getElementById('novelCover').value;
    const novelTitle = document.getElementById('novelTitle').value;
    const novelDescription = document.getElementById('novelDescription').value;

    if (novelLink.trim() === '' || novelCover.trim() === '' || novelTitle.trim() === '' || novelDescription.trim() === '') {
        alert('Please fill all the fields before submitting.');
        return;
    }

    const novelPost = document.createElement('div');
    novelPost.classList.add('novel-post');

    const coverImage = document.createElement('img');
    coverImage.src = novelCover;
    novelPost.appendChild(coverImage);

    const titleBox = document.createElement('div');
    titleBox.classList.add('novel-title-box');
    const titleHeading = document.createElement('h3');
    titleHeading.textContent = novelTitle;
    titleBox.appendChild(titleHeading);
    novelPost.appendChild(titleBox);

    const descriptionBox = document.createElement('div');
    descriptionBox.classList.add('novel-description-box');
    const descriptionParagraph = document.createElement('p');
    descriptionParagraph.textContent = novelDescription;
    descriptionBox.appendChild(descriptionParagraph);
    novelPost.appendChild(descriptionBox);

    const linkButton = document.createElement('a');
    linkButton.href = novelLink;
    linkButton.textContent = 'Read More';
    novelPost.appendChild(linkButton);

    const novelPosts = document.getElementById('novelPosts');
    novelPosts.appendChild(novelPost);

    document.getElementById('novelForm').reset();
}
