import {data}from './data.js'
const container=document.querySelector('.container')
const alldata=data()
const div = document.createElement('div')

const showProducts=(array) => {
    array.forEach(el=> {

        div.innerHTML = `
            <div class="inner-div">
                <img src="${el.image}" alt="${el.productName}">
                <h3>${el.productName}</h3>
                <p>${el.size}</p>
                <p>${el.price}</p>
            </div>
        `
        container.appendChild(div)
        })
}
showProducts(alldata);