
// className:

// var listA = document.getElementsByClassName('a');

// for(var i=0 ; i< listA.length; i++)
// {
//     listA[i].className = 'diff'
// }

// var arr = []
// for(var i=0 ; i< listA.length; i++)
// {
//     arr.push(listA[i])
// }
// for(var i=0 ; i< arr.length; i++)
// {
//     arr[i].className = 'diff'
// }



// querySelector:
// return single element

// querSelectorAll:
// return node list


// 'tagname[attribute="value"]'


// var abc = document.querySelector('p[title="ram"]');
// console.log(abc)
// abc.style.color= 'red'

// var lst = document.getElementsByTagName('li')  // node list
// console.log(lst)


// var xyz = document.getElementById('heading')
// console.log(xyz)

// var b = document.querySelector('#heading')
// console.log(b)

// var c = document.querySelector('h1[id="heading"]')
// console.log(c)


// <input type="text" name="n" id="input" class="red" title="hi" />
// // 'tagname[attribute="value"]'


// document.querySelector('input[class="red"]')
// document.querySelector('input[id="input"]')
// document.querySelector('input[name="n"]')
// document.querySelector('input[title="hi"]')

// document.querySelector('#input')
// document.querySelector('.red')

// var s = document.querySelectorAll('.a') // nodelist
// console.log(s)

// var z = document.querySelectorAll('li')
// console.log(z)


// var listA = document.querySelectorAll('li')

// // <li> Orchid </li>

// for(var i = 0; i<listA.length; i++){
//     if(listA[i].textContent == 'Orchid'){

//         listA[i].style.color = 'purple'
//     }
// }


// var listA = document.querySelectorAll('.a')
// var listB = document.querySelectorAll('.b')

// for(var i = 0; i < listA.length; i++){
//     listA[i].style.color = 'purple'
// }

// for(var i = 0; i < listB.length; i++){
//     listB[i].style.color = 'red'
// }


// console.log(document.getElementsByClassName('s')[0].className)


var lst = document.querySelectorAll('li')

for(var i = 0; i<lst.length; i++){
    if(lst[i].className == 'a'){
        lst[i].style.color = 'purple'
    }
    else if(lst[i].className == 'b'){
        lst[i].style.color = 'red'
    }
}


























































