
function displaySupermarket (supermarket) {
    const div = document.querySelector('.container-sheet')
    div.innerHTML+=`
    <div class="supermarket-sheet">
                <img src="${supermarket.ImageUrl}" alt="${supermarket.name}">
                <h3>${supermarket.name}</h3>
                <p>${supermarket.description}</p>
                <p>${supermarket.tellers}</p>
                <p>${supermarket.loction}</p>
                <form id="comment-form" class="comment-form">
                <input
                class="comment-input"
                type="text"
                name="comment"
                id="comment"
                placeholder="Add a comment..."
                />
                <button class="comment-button" type="submit">Post</button>
            </form>
            <ul class = "cart">
            </ul>
                <form id="rating-form" class="rating-form">
                    <input
                    class="rating-input"
                    type="number"
                    name="rating"
                    id="rating"
                    placeholder=".."
                    />
                    <button class="rating-button" type="submit">Rate</button>
                </form>
                <ul class = "refer">
                </ul>
               
                </div>
                    `
            addComment()

            giveRate()


}

function getData () {
    fetch('http://localhost:3000/supermarkets/')
.then(res => res.json())
.then(data =>{
    console.log(data)
    data.forEach(element => {
        displaySupermarket(element)
    });
})

}



function addComment() {
    const btn = document.querySelectorAll('.comment-button')
    
    btn.forEach(sub => {
      
        sub.addEventListener('click', (e) =>{
            e.preventDefault()
            console.log(e.target.previousElementSibling.value)
           // document.querySelector('.cart').innerHTML +=`
            //<li>${e.target.previousElementSibling.value}</li>
           // `
         e.target.parentElement.nextElementSibling.innerHTML+=`<li>${e.target.previousElementSibling.value}</li>`
    
            
        })
    })
}

function giveRate () {
    const rateBtn = document.querySelectorAll('.rating-button')
    rateBtn.forEach(git => {
        git.addEventListener('click', (e) => {
            e.preventDefault()
            console.log(e.target.previousElementSibling.value)
            e.target.parentElement.nextElementSibling.innerHTML += `
            <li>${e.target.previousElementSibling.value}</li>
            `
        })
    })

}


document.addEventListener('DOMContentLoaded', () => {
    getData()
})