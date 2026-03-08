document.addEventListener('DOMContentLoaded', function() {
    let img1 = document.getElementById('new');
    let img2 = document.getElementById('old');
    
    function changeInd(i){
        if(i == 0){
            return 1;
        } else {
            return 0;
        }
    }
    
    function changeImg(i){
        if(i == 0){
            img1.style.display = "block";
            img2.style.display = "none";
        } else {
            img1.style.display = "none";
            img2.style.display = "block";
        }
    }
    
    let ind = 0;
    document.querySelector('.slider-nav.left').addEventListener('click', function() {
        ind = changeInd(ind);
        changeImg(ind);
    });
    
    document.querySelector('.slider-nav.right').addEventListener('click', function() {
        ind = changeInd(ind);
        changeImg(ind);
    });
});