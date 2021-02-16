
const links = document.getElementsByClassName('nav-link');
for (let i =0; i < links.length; i++){
    links[i].addEventListener('click', function(){
        const current = document.getElementsByClassName('active');
        if (current.length > 0) {
        current[0].className = current[0].className.replace(' active', '');
        }
        this.className += ' active';
    });

}

/* const myCollapse = document.getElementsByClassName('latest-item');
for (let i =0; i<myCollapse.length; i++) {
    myCollapse[i].addEventListener('click', function(){
     const now = document.getElementsByTagName('button')[2].getAttribute('aria-expanded');
       console.log(now);
    })   
} */

$(document).click(function(e) {
	if (!$(e.target).is('.collapse')) {
    	$('.collapse').collapse('hide');	    
    }
});

