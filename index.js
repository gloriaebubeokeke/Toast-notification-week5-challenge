function showToast(type, message, duration=2500){
const box=document.getElementById('toastBox')
const toast=document.createElement('div')
toast.className=`toast ${type}`
toast.innerHTML=`
<span>${message}</span>
<button onclick='this.parentElement.remove()'>×</button>
`

box.appendChild(toast)

setTimeout(()=>toast.classList.add('show'), 10)


setTimeout(()=>{
    toast.classList.remove('show')
setTimeout(()=>toast.remove(), 300)
}, duration)
}