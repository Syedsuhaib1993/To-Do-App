let input = document.getElementById('inp')
let parent =document.getElementById('parent')




function addToDo(){


if(!input.value){
    alert('Fields are Missing')
    return
}

    // crate an Element
let toDO = document.createElement('p')
    // create Elementtext
let toDOtxt = document.createTextNode(input.value)
    // append txt into para
toDO.appendChild(toDOtxt)
    // create parent div
let todopareant = document.createElement('div')
    // append todo into todopareant
todopareant.appendChild(toDO)
    // append into main parent
parent.appendChild(todopareant)
toDO.setAttribute('class' , "w-[60%] bg-blue-100 text-black font-bold py-2 px-4 rounded")

    // create edit button
let editbtn = document.createElement('button')
let editbtntxt = document.createTextNode('Edit')
editbtn.appendChild(editbtntxt)
todopareant.appendChild(editbtn)
editbtn.setAttribute('class','bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded')
editbtn.setAttribute('onclick','editbtn(this)')

    // create remove button
let removebtn = document.createElement('button')
let removebtntxt = document.createTextNode('Remove')
removebtn.appendChild(removebtntxt)
todopareant.appendChild(removebtn)
removebtn.setAttribute('class','bg-red-400 hover:bg-red-700 text-white font-bold py-2 px-4 rounded')
removebtn.setAttribute('onclick','removebtn(this)')

todopareant.setAttribute('class','pl-10 pt-10 mx-20 space-x-5 flex')
// todopareant.style.display = 'block'
input.value=""


}
function editbtn(ele){
    let editval = ele.parentNode.childNodes[0]
    console.log(editval);
    let useredit = prompt('Edit to do ')
    editval.innerHTML= useredit
    
    
}


function removebtn(txt){
    console.log(txt);
    let remvalue = txt.parentNode
    remvalue.remove()
}

function delAll(){
    let deleteAll = document.getElementById('parent')
    console.log(deleteAll);
    
    deleteAll.remove()
    window.location.href = "https://syedsuhaib1993.github.io/To-Do-App/"

    return
    
}