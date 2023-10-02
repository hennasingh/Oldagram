const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const main = document.querySelector('div')

document.addEventListener("DOMContentLoaded", loadPosts)

function loadPosts() {
    for(let post=0; post < posts.length; post++){

        //Making the Section - Avatar, userame and location
        const sectionOne = document.createElement('section')
        const containerDiv = document.createElement('div')
        containerDiv.className = 'container'

        const avatar = document.createElement('img')
        avatar.src = posts[post].avatar
        avatar.id = 'avatar-vangogh'
        const sectionDiv = document.createElement('div')
        sectionDiv.className = 'section-one'

        const headingName = document.createElement('h3');
        headingName.textContent = posts[post].name

        const location = document.createElement('p')
        location.className = 'small-text'
        location.textContent = posts[post].location

        sectionDiv.append(headingName, location)
        containerDiv.append(avatar, sectionDiv);
        sectionOne.append(containerDiv)

        //Making section Two - Post and Likes
        const sectionTwo = document.createElement('section')
        const postImg = document.createElement('img')
        postImg.src = posts[post].post
        postImg.id= 'post-vangogh'

        const divTwo = document.createElement('div')
        divTwo.className = 'section-two'
        const likeIcon = document.createElement('img')
        likeIcon.src = "images/icon-heart.png"
        likeIcon.className = 'icon-heart'

        const commentIcon = document.createElement('img')
        commentIcon.src = "images/icon-comment.png"
        commentIcon.className = 'icon-comment'

        const dmIcon = document.createElement('img')
        dmIcon.src = "images/icon-dm.png"
        dmIcon.className = 'icon-dm'

        const heading4 = document.createElement('h4')
        const spanLikes = document.createElement('span')
        spanLikes.textContent = posts[post].likes
        heading4.append(spanLikes, ' likes')

        likeIcon.addEventListener('dblclick', function() {
            let likes = parseFloat((spanLikes.textContent).replace(/,/g, ''))
            spanLikes.textContent = (likes + 1).toLocaleString()
        })

        postImg.addEventListener('dblclick', function() {
            let likes = parseFloat((spanLikes.textContent).replace(/,/g, ''))
            spanLikes.textContent = (likes + 1).toLocaleString()
        })

        divTwo.append(likeIcon, commentIcon, dmIcon, heading4)
        sectionTwo.append(postImg, divTwo)

        //Making Comment Section-three
        const sectionThree = document.createElement('section')
        const commentPara = document.createElement('p')
        const userSpan = document.createElement('span')
        userSpan.className = 'bold-text'
        userSpan.textContent = posts[post].username
        commentPara.append(userSpan, ` ${posts[post].comment}`)
        sectionThree.append(commentPara)

        main.append(sectionOne, sectionTwo, sectionThree)

    }
}

