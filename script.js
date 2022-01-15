import {data}from './data'
const container=document.querySelector('.container')
const alldata=data()
const showProducts=(array) => {
    for(let el of array){ 
        const div=document.createElement('div')
        const img=documnet.createElement('img')
        const productname=document.createElement('h3')
        const price=document.createElement('p')
        const size=document.createElement('p')

       
        price.innerHTML=el.price
        size.innerHTML=el.size
        productname.innerHTML=el.productName
        img.src=el.image

        console.log(price)
        }
}
showProducts(alldata);