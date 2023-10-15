const billCards = document.querySelector('.billCards');
const billDetails = document.querySelector('.billDetails');



const cardClass = 'bill-info';

const showDetails = () =>{
  billDetails.classList.toggle("moveOut")
}

const cadrsTemplate = (i) => `

<div class="bill-area">
<p class="userInfo-name">Order #${i}</p>
<div class="bill-subarea">
  <span class="status active"></span>
  <p class="userInfo-subTitle sm">Active</p>  
</div>
</div>
<p class="userInfo-subTitle lg">$43</p>
<div class="bill-area">
<p class="userInfo-subTitle ">Table 18 - 2 guess</p>  
</div>
<p class="userInfo-subTitle " >14:30</p>
`;

for (let i = 0; i<40; i++ ){
  const div = document.createElement('div');
  div.classList.add(cardClass)
  div.setAttribute("onClick","showDetails()")
  div.innerHTML = cadrsTemplate(i+1);
  billCards.appendChild(div);
};