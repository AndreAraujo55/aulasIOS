for(i =2; i <= 20; i++){
   let nmrPrimo = true;
   for(let j = 2; j < i; j++)
   if(i % j === 0){
   nmrPrimo = false;
break;
   }
   

if(nmrPrimo){
    console.log(i);
}

}
