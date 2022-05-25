let bookmarkStr = localStorage.getItem('bookmark')

let bookmarkItems;
if(bookmarkStr){
    bookmarkItems = [];
}
else{
    bookmarkItems = JSON.parse(bookmarkStr);
}


fetch('https://jsonplaceholder.typicode.com/users/1/posts')
    .then(response => response.json())
    .then(data => {

        data.forEach(element => {
            let card = `<div class="col-md-4">
                            <div class="card" style="width: 18rem;">
                                <button type="button" class="add btn btn-primary">Add to Bookmark</button>
                                <div class="card-body">
                                <h5 class="card-title">${element.title}</h5>
                                <p class="card-text">${element.body}</p>
                                <a href="#" class="card-link">Card link</a>
                                <a href="#" class="card-link">Another link</a>
                                <button type="button" class="close btn btn-warning">X</button>
                                </div>
                            </div>
                        </div>`
            document.querySelector('.row').innerHTML += card;

            let close = document.querySelector('.close');
            close.addEventListener('click',function(){
                let remove = [...bookMarkItems].indexOf(element);
        
                bookMarkItems.splice(remove,1);
        
                localStorage.setItem('bookmark',JSON.stringify(bookmarkItems))
            })
           
        });
        
    })