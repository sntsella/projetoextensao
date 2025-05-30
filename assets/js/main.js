/* ================== SHOW SOCIAL NETWORKS ================= */
const chk = document.getElementById('ri-contrast-2-line')
const card = document.getElementById('card')

chk.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  if (document.body.classList.contains('dark')){
    chk.style.color = "white";
    card.style.backgroundColor = '#2c4944';
    card.style.color = 'black'
  }else{
    chk.style.color = "black"
    card.style.backgroundColor = "";
    card.style.color = "";
  }
})
