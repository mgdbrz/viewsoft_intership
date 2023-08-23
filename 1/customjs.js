function ourFunc() {
    var bt = document.getElementById('firstId')
    var t = parseInt(bt.innerHTML);

    var tg = document.getElementById('count1')


    if (t<=tg.value) {
        bt.innerHTML = t + 1;      
    }
    else
    {
        bt.innerHTML = t + 1;
        bt.classList.add("babooo")
    }
   

}
function resetFunc() {
    var bt = document.getElementById('firstId')
    bt.innerHTML = 0;
    bt.classList.remove("babooo")
}

function dennyFunc(){
var arr = [];
arr.push('avali')
arr.push('dovmi')
arr.push('sevomi')

for(i=0;i<3;i++){
    alert(arr[i])
}
}