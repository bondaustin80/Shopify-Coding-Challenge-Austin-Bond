let photo = document.createElement("img")

let photoInfo = {
    title: null,
    date: null,
    url: null,
    des: null,
    like: false,
}

fetch("https://api.nasa.gov/planetary/apod?api_key=pOchGVdOVxtp6DUSU2UaT6GThZzfp5BK8lBb7bax")
    .then((response) => response.json())
    .then((response) => {
        photoInfo.title = response.title
        photoInfo.date = response.date
        photoInfo.url = response.url
        photoInfo.des = response.explanation

        let title = document.getElementById("title")
        title.innerText = photoInfo.title

        let img = document.getElementById("picOfDay")
        img.src = photoInfo.url

        let des = document.getElementById("explain")
        des.innerText = photoInfo.des

        let date = document.getElementById("date")
        date.innerText = "Date Taken: " + photoInfo.date 

        let like = document.getElementById("like")

        let likeMessage = document.getElementById("likeMessage")

        function likePicture() {
            if (photoInfo.like === false) {
                photoInfo.like = true
                like.innerText = "Unlike"
                likeMessage.innerText = "You Liked this picture"
            } else {
                photoInfo.like = false
                like.innerText = "Like"
                likeMessage.innerText = ""
            }
        }

        like.addEventListener("click", likePicture)
    })
