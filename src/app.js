import {features} from './model.js'

document.addEventListener("DOMContentLoaded", (e)=> {
    e.preventDefault()

    features.btn_open.addEventListener("click", (e)=>{
        e.stopPropagation()
        features.parent_target.classList.add("appear-modal")
    })

    features.btn_closed.addEventListener("click", (e)=>{
        e.stopPropagation()
        features.parent_target.classList.remove("appear-modal")
    })

    features.closed.addEventListener("click", (e)=>{
        e.stopPropagation()
        features.parent_target.classList.remove("appear-modal")
    })

    features.modal.addEventListener("click", (e)=> {
        e.stopPropagation()
    })

    document.addEventListener("click", ()=> {
        features.parent_target.classList.remove("appear-modal")
    })
})