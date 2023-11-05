//Ən bahalı məhsul 

const EnBahalimehsul =document.getElementById('enBahalimehsul')


fetch('https://northwind.vercel.app/api/products')
  .then(res => res.json())
  .then(mahsul => {
    console.log('Ən bahalı məhsul:', mahsul[0]);
  })
  .catch(error => console.error('xeta:', error));




  //Ortalama stok miqdarı

  const OrtalamaStokmiqdari=document.getElementById('ortalamaStokmiqdari')


  fetch('https://northwind.vercel.app/api/products')
  .then(res => res.json())
  .then(mahsullar => {
    let toplamStokMiqdari = 0;

    mahsullar.forEach(mahsul => {
      toplamStokMiqdari += mahsul.unitsInStock;
    });

    const ortalamaStokMiqdari = toplamStokMiqdari / mahsullar.length;
    console.log('Ortalama stok miqdarı:', ortalamaStokMiqdari);
  })
  .catch(error => console.error('xeta:', error));




 // “C” ilə başlayan məhsullar

 const CIləBaslayanmehsullar=document.getElementById('cIləBaslayanmehsullar')


 fetch('https://northwind.vercel.app/api/products')
  .then(res => res.json())
  .then(mahsullar => {
    console.log('"C" ilə başlayan məhsullar:', mahsullar);
  })
  .catch(error => console.error('xeta:', error));




  //“London” şəhərindəki müştəriləri console a yaz 

const musterilerlistesi=document.getElementById('musterilerListesi')

  fetch('https://northwind.vercel.app/api/customers')
  .then(res => res.json())
  .then(customers => {
    console.log('London şəhərindəki müştərilər:', customers);
  })
  .catch(error => console.error('xeta:', error));




  //Region NULL olan nə qədər customer var?

const musterilistesi=document.getElementById('musteriListesi')

  fetch('https://northwind.vercel.app/api/customers')
  .then(res=> res.json())
  .then(customers => {
    console.log('Regionı NULL olan müştərilərin sayı:', customers.length);
  })
  .catch(error => console.error('xeta:', error));




  //Id-si 1 olan userin nə qədər postu var?

  const postcount=document.getElementById('postCount')

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(posts => {
    console.log('Id-si 1 olan istifadəçinin postların sayı:', posts.length);
  })
  .catch(error => console.error('xeta:', error));



 // 1 nömrəli albümdə nə qədər fotoqraf var?

 const photocount=document.getElementById('photoCount')

  fetch('https://jsonplaceholder.typicode.com/albums')
  .then(response => response.json())
  .then(photos => {
    console.log('1 nömrəli albumde fotoqrafların sayı:', photos.length);
  })
  .catch(error => console.error('xeta:', error));
