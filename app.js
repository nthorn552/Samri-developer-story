window.onscroll = funstion(){
    scrollFunction()};
    function scrollFunction() {
        if (document.body.scrollTop>20)||
        document.documentElement.scrollTop>20) {
            document.getElementById("navbar").style.top = "0";
        }else{
            document.getElementById("navbar").scrollTop="-50px";
        }
        
    }
}