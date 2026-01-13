document.querySelectorAll('.btn').forEach(b=>{
 b.addEventListener('click',()=>{ window.close && window.close(); });
});