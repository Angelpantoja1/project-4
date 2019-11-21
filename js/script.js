let menuInject = document.getElementById('menuInject');
let menu = false;

function injectHtml(url, ) {

    let xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {

        console.log(url);

        if (this.readyState == 4 && this.status == 200) {
            let myArr = this.responseText;
            if (url === '../site/index.html') {
                loadIndex(myArr);
            }
            else if (url === '../site/menu.html') {
                loadMenu(myArr);
            }
        }
    };
    //opens connection
    xmlhttp.open("GET", url, true);

    //pulls the request
    xmlhttp.send();
}

function loadIndex(info) {
    inject.innerHTML = info;
    let menu = document.getElementById('menu')
    menu.addEventListener('click', function(e){
        if(menu == false){
            menu = false;
            injectHtml('../site/index.html')
        }else{
            menu = true
            injectHtml('../site/menu.html')
        }
    });
    
}
function loadMenu(info) {
    inject.innerHTML = info;
    
}

injectHtml('../site/index.html')