<div>
<button onclick="pay(20)">Это ветка оплаты из patch2</button> 
</div>

document.getElementById('btn').onclick = pay;
//com
function pay(total){
    console.log(total + 50)
}
