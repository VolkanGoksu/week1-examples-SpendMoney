const productList = [
    { id: 1, name: 'Squat Rack', price: 5550, img: 'https://cdn.cimri.io/image/1000x1000/max-tech-n1050-squat-rack_314525321.jpg  ', amount: 0 },
    { id: 2, name: 'Bench Press Sehpası', price: 849, img: 'https://cdn.cimri.io/image/1000x1000/rota-spor-fonksiyonel-agirlik-bench-press-sehpasi_225382221.jpg', amount: 0 },
    { id: 3, name: 'Olimpik Bar', price: 15000, img: 'https://cdn.cimri.io/image/1000x1000/usr-hermes-50-cm-olimpik-kisa-bar_322320244.jpg', amount: 0 },
    { id: 4, name: 'Plaka Ağırlık 20 Kg', price: 509, img: 'https://cdn.cimri.io/image/1000x1000/profesyonel-kaucuk-flans-plaka-agirlik-20-kg_395109403.jpg', amount: 0 },
    { id: 5, name: 'Kola', price: 4, img: 'https://i.sozcu.com.tr/wp-content/uploads/2016/01/19/diyet-kola.jpg' ,amount: 0},
    { id: 6, name: 'Yat', price: 450000, img: 'https://i.ytimg.com/vi/9BCZpcgsAb8/maxresdefault.jpg'  ,amount: 0},
    { id: 7, name: 'Bahceli Ev', price: 9500000, img: 'https://www.neredekal.com/res/blog/1582812421_7.jpg',amount: 0 },
    { id: 8, name: 'Araba Fabrikası', price: 120000000, img: 'https://i.ytimg.com/vi/rfMkp55oTv0/maxresdefault.jpg',amount: 0 }
]

let total =  Number.MAX_SAFE_INTEGER ;

function onLoad() {
    setProducts();
}

function setProducts() {
    let main = document.getElementById("main");
    main.innerHTML = ""  //Divi temizlemeyi unutma

    var totalText = document.createElement("p");
    totalText.id = "total"
    totalText.innerText = total
    //main.append(totalText);

    //Para Birimi
    var p = document.createElement("p");
    p.innerText = "$";

    var nav = document.createElement("div");
    nav.id = "nav";
    nav.append(totalText)
    nav.append(p)
    main.append(nav);


    productList.forEach(product => {
     
        let productDiv = document.createElement("div");
        productDiv.classList.add("card");

        let name = document.createElement("h2");
        name.innerText = product.name
        productDiv.append(name);

        let price = document.createElement("p");
        price.id = "price"
        price.classList.add("price");
        price.innerText = product.price
        productDiv.append(price);

        var p = document.createElement("p");
        p.innerText = "$";
        var cardNav = document.createElement("div");
        cardNav.id = "cardNav";
        cardNav.append(price);
        cardNav.append(p);
        productDiv.append(cardNav)

        let productImage = document.createElement("img");
        productDiv.classList.add("image");
        productImage.src = product.img;
        productDiv.append(productImage);
        productImage.style.width = "100%"

        let btn = document.createElement("button");
        btn.id = "btnEkle-" + product.id;
        productDiv.appendChild(btn);
        btn.innerText = "Ekle";

        btn.onclick = function () {
            //Total = 0 ise ekleme yapma
            let sum = document.getElementById("total");
            let kalan = Number(sum.innerText) - Number(price.innerText);
            if (kalan <= 0) {
                alert("paranız yetmiyor " + kalan)
                return;
            }

            let basketText = document.getElementById(name.innerText + product.id);
            basketText.innerHTML = Number(basketText.innerHTML) + 1;
            //totale id verdim bu sayede counter ve total çakışmıyor //setProductsu burda cagırmya gerek kalmıyor
            total = total - Number(price.innerText)
            document.getElementById("total").innerHTML = total;
            //setProducts();


        }
        btn.onmouseover = function (e) {
            let price = productList.find(p => p.id == e.target.id.split("-")[1]).price;
            let total = document.getElementById("total").innerText;
            let result = Number(total) / price;
            alert(result)
        };
        //btn.addEventListener("click", function () {
        //alert("Button is clicked");
        //});


        let basket = document.createElement("p");
        basket.id = name.innerText + product.id;
        basket.innerText = product.amount;
        productDiv.appendChild(basket);
        main.append(productDiv);

    })

}