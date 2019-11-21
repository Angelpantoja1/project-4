let inject = document.getElementById('inject');
/* let menuInject = document.getElementById('menuInject'); */
let menu = true;

function injectHtml(url, ) {

    let xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {

        console.log(url);

        if (this.readyState == 4 && this.status == 200) {
            let myArr = this.responseText;
            if (url === '../site/index.html') {
                loadIndex(myArr);
            }
            else if (url === '../site/header.html') {
                loadHeader(myArr);
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

/* function loadIndex(info) {   
} */
function loadHeader(info) {
    inject.innerHTML = info;
    /* menuInject.innerHTML = info; */
    let open = document.getElementById('open')
    let menuInject = document.getElementById('menuInject');
    open.addEventListener('click', function(e){
        if(menu == true){
            menu = false;
            injectHtml('../site/menu.html')
            open.innerText = "Click Here to Close Menu";
        }else{
            menu = true;
            menuInject.innerHTML = "";
            open.innerText= "Click Here to Open Menu";

        }
    });
}
function loadMenu(info) {
    menuInject.innerHTML = info;
}

injectHtml('../site/header.html')