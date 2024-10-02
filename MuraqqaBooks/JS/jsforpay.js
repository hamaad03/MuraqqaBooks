// window.onload
window.onload = () => {
document.getElementById("submit").addEventListener("click", payment);

function payment () {
e.preventDefault();

const cardnumber = document.getElementById("card").value;
const month = document.getElementById("expiry_month").value;
const year = document.getElementById("expiry_year").value;
const cvv = document.getElementById("CVV").value;

 //regular expression
const cardnumberregex = /^(51|52|53|54|55|3)/;
  if (!cardnumberregex.test(cardnumber)) {


    alert("Invalid Card Number");
    return false;
  }

  

  const cvvregex = /^[0-9]{3}$/;
  if (!cvvregex.test(cvv)) {

    alert("Invalid CVV Number");
    return false;


  }
 

  const today = new Date()
  currentmonth = today.getMonth("expiry_month")
  currentyear = today.getYear("expiry_year")
  if(year<currentyear || year == currentyear && month<currentmonth) {
    alert ( "Invalid Expiration Date");
    return false;
  }
 alert ("Successful Payment!")
   return true; }

}

//API 
const url = "https://mudfoot.doc.stu.mmu.ac.uk/node/api/creditcard"
   const data = {
   "master_card": card,
   "exp_year": year,
   "exp_month":month,
   "cvv_code": cvv
   
   }
   
   fetch(url,{
       method:"post",
       headers: {
        "content-type":"application/json" },
       body: JSON.stringify(data)
       })
       
       .then((response) => {
          if(response.status === 200) {
           return response.json();
          }
          else if (response.status === 400) {
         throw "Bad data was sent to the server";
       }
       else { throw "Something went wrong"; }
       })
       .then(() => {
        window.location.href = "success.html";
        return true;
       })
       .catch ((error) => {
       
           alert (error);
       })




      












