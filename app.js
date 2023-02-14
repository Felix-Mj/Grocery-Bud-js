const inp_Value = document.querySelector('#inp_Value')
const abbNewbtn = document.querySelector('#abbNewbtn')
const item_list = document.querySelector('.item_list')

abbNewbtn.addEventListener('click',()=>{
   if(inp_Value.value != ''){
    const add_box = document.createElement('div')
    const add_input = document.createElement('input')
    const add_span = document.createElement('span')
    const add_edit = document.createElement('button')
    const add_del = document.createElement('button')

    add_box.setAttribute('class','box')
    add_input.setAttribute('type','text')
    add_span.setAttribute('class','box')

    add_input.disabled = true

    add_input.value = inp_Value.value
    add_edit.innerText = 'edit'
    add_del.innerText = 'del'

    add_edit.addEventListener('click',()=>{
        add_input.disabled = false 
    })
    add_input.addEventListener('focusout',()=>{
    add_input.disabled = true   
    })
    add_del.addEventListener('click', ()=>{
        add_box.remove() 
    })

    add_span.appendChild(add_edit)
    add_span.appendChild(add_del)
    add_box.appendChild(add_input)
    add_box.appendChild(add_span)
    item_list.appendChild(add_box)

    inp_Value.value = ''
   }    
   else{
    alert('Fill the input box ?')
   }
    
})