
let addBtnHtml = `

<div class="item__add-block">
                        <div class="item__add-plus">
                            <p>+</p>
                        </div>
                        <div class="item__add-price">
                            <p>420 ₽</p>
                        </div>
                        </div>
`

let addBtnHtml2 = ` <div class="item__add-block">
<div class="item__add-plus">
    <p>+</p>
</div>
<div class="item__add-amount">
    <p>2</p>
</div>
<div class="item__add-minus">
    <p>-</p>
</div>
</div>
<div class="item__add-modifier">
<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M240-500v-220h220v220H240Zm0 260v-220h220v220H240Zm260-260v-220h220v220H500Zm0 260v-220h220v220H500ZM320-580h60v-60h-60v60Zm260 0h60v-60h-60v60ZM320-320h60v-60h-60v60Zm260 0h60v-60h-60v60ZM380-580Zm200 0Zm0 200Zm-200 0ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Z"/></svg>
</div>
`

let addBtns = document.querySelectorAll(".item__add")
addBtns.forEach((e) => {
    e.querySelector(".item__add-block").addEventListener("click", ()=>{
        if(!e.classList.contains("item__add_click")){
            e.innerHTML
        }else{

        }
    })
})