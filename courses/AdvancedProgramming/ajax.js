let xhr = new XMLHttpRequest();



xhr.onreadystatechange = function () {
    if(xhr.readyState == 4 && xhr.status == 200) {

        let posts = JSON.parse(xhr.responseText);
        posts.forEach(e => {
            document.querySelector('.container').innerHTML += `
            <div class="post">
                <p id="title">${e.title}</p>
                <p id="body">${e.body}</p> 
            </div>
                
            `
        });
    }
}

xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
xhr.send();

