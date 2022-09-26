// Variable

const accordion = document.getElementsByClassName('content-container');

// console.log(accordion);
for (i = 0; i < accordion.length; i++) {
    console.log(accordion[i]);
    accordion[i].addEventListener('click', function(){
        console.log(this);
        this.classList.toggle('active');
    })
}