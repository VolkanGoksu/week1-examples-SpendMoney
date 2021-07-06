/*

Bill Gates'in parasını harca uygulaması

Ornek verelim, 

Bill Gates'in parası Number.MAX_SAFE_INTEGER olsun. Aşağıdaki ürün listesini (productList) kullanarak bu parayı harcayabileceğimiz bir uygulama yapalım.

1) Uygulama açıldığında aşağıdaki ürünler ekrana gelsin ve ekranda her ürün için [fotoğraf, ürün, ekle butonu] içeren bir kart yer alsın.
2) Ekle butonunun üzerine geldiğımiz zaman o üründen kaç tane alabileceğimizi görelim
3) Ekle butonuna bastığımız zaman ürün kartının yanına bu üründen kaç tane eklediğimizi görelim.
4) Paramız bittiyse ürün ekleyemeyelim
5) Tüm kartların üzerinde ne kadar paramız kaldığını gösteren bir yazı yer alsın Kalan Para: xxxx
*/


const productList = [
    { id: 1, name: 'Kola', price: 4, img: 'https://i.sozcu.com.tr/wp-content/uploads/2016/01/19/diyet-kola.jpg' },
    { id: 2, name: 'Iskender', price: 30, img: 'https://i.lezzet.com.tr/images-xxlarge-recipe/ev-yapimi-iskender-33bd7089-fa36-4398-95f8-02c6463ea27c.jpg' },
    { id: 3, name: 'Yat', price: 450000, img: 'https://i.ytimg.com/vi/9BCZpcgsAb8/maxresdefault.jpg'  },
    { id: 4, name: 'Bahceli Ev', price: 9500000, img: 'https://www.neredekal.com/res/blog/1582812421_7.jpg' },
    { id: 5, name: 'Araba Fabrikası', price: 120000000, img: 'https://i.ytimg.com/vi/rfMkp55oTv0/maxresdefault.jpg' },
    // ... Kendi örneklerinizi eklemeye çekinmeyin.
]