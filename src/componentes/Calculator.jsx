import React, { useState, useRef } from 'react'
import Container from '@mui/material/Container';


const Calculator = () => {
   
  const [num, setNum] = useState(0)
  const [oldnum, setOlNum] = useState(0)
  const [operator, setOperator] = useState()


  function getNum (e) {
      
    var input = e.target.value
  


    if (num === 0){

      setNum (input)
    
    }
   
    else {
    
      setNum(num + input ); 
    
    }
   }

   function clear (){
      setNum(0)
   }

   function percentage (){
      
    setNum(num / 100)

   }

    function negativepositive (){
     if (num>0){
      setNum(-num);
     }else {
      setNum (Math.abs(num));
     }
   }

   function operatorHand(e){
      var operatorInput = e.target.value
      setOperator(operatorInput)
      setOlNum(num)
      setNum(0)
   }

   function calculate (){
       if(operator==="/"){
        setNum(oldnum / num)
       }

       else if(operator==="X"){
        setNum(oldnum * num)
       }

       else if(operator==="-"){
        setNum(oldnum - num)
       }

       else if(operator==="+"){
        setNum(parseFloat(oldnum) + parseFloat(num) )
       }
   }

  return (
    <div>
     <Container className='py-20'  maxWidth="xs"> 
      <div className='bg-black rounded-2xl  my-10 p-1 pt-20 px-4 '>
      <h1 className='text-white font-bold text-[3.5rem] mr-[1em] p-3 flex justify-end'  > {num}</h1>
      <button className='cursor-pointer  w-[3em] m-[0.3em]  h-[3em] text-[1.5rem] rounded-[2em] bg-gray-200' onClick={clear}>AC</button>
      <button className='cursor-pointer  w-[3em] m-[0.3em]  h-[3em] text-[1.5rem] rounded-[2em] bg-gray-200' onClick={negativepositive}>+/-</button>
      <button className='cursor-pointer  w-[3em] m-[0.3em]  h-[3em] text-[1.5rem] rounded-[2em] bg-gray-200' onClick={percentage}>%</button>
      <button className='cursor-pointer  w-[3em] m-[0.3em]  h-[3em] text-[1.5rem] rounded-[2em] text-white bg-[#ff9500]' onClick={operatorHand} value="/">/</button>
      <button className='cursor-pointer  w-[3em] m-[0.3em]  h-[3em] text-[1.5rem] rounded-[2em] font-bold  text-white bg-[#505050]' onClick={getNum} value={7}>7</button>
      <button className='cursor-pointer  w-[3em] m-[0.3em]  h-[3em] text-[1.5rem] rounded-[2em] font-bold  text-white bg-[#505050]' onClick={getNum} value={8}>8</button>
      <button className='cursor-pointer  w-[3em] m-[0.3em]  h-[3em] text-[1.5rem] rounded-[2em] font-bold  text-white bg-[#505050]'onClick={getNum} value={9}>9</button>
      <button className='cursor-pointer  w-[3em] m-[0.3em]  h-[3em] text-[1.5rem] rounded-[2em] text-white bg-[#ff9500]' onClick={operatorHand} value="X">X</button>
      <button className='cursor-pointer  w-[3em] m-[0.3em]  h-[3em] text-[1.5rem] rounded-[2em] font-bold  text-white bg-[#505050]' onClick={getNum} value={4}>4</button>
      <button className='cursor-pointer  w-[3em] m-[0.3em]  h-[3em] text-[1.5rem] rounded-[2em] font-bold  text-white bg-[#505050]'onClick={getNum} value={5}>5</button>
      <button className='cursor-pointer  w-[3em] m-[0.3em]  h-[3em] text-[1.5rem] rounded-[2em] font-bold  text-white bg-[#505050]'onClick={getNum} value={6}>6</button>
      <button className='cursor-pointer  w-[3em] m-[0.3em]  h-[3em] text-[1.5rem] rounded-[2em] text-white bg-[#ff9500]'onClick={operatorHand}  value="-">-</button>
      <button className='cursor-pointer  w-[3em] m-[0.3em]  h-[3em] text-[1.5rem] rounded-[2em] font-bold  text-white bg-[#505050]' onClick={getNum} value={1}>1</button>
      <button className='cursor-pointer  w-[3em] m-[0.3em]  h-[3em] text-[1.5rem] rounded-[2em] font-bold  text-white bg-[#505050]'onClick={getNum} value={2}>2</button>
      <button className='cursor-pointer  w-[3em] m-[0.3em]  h-[3em] text-[1.5rem] rounded-[2em] font-bold  text-white bg-[#505050]' onClick={getNum} value={3}>3</button>
      <button className='cursor-pointer  w-[3em] m-[0.3em]  h-[3em] text-[1.5rem] rounded-[2em] text-white bg-[#ff9500]'onClick={operatorHand} value="+">+</button>
      <button className='cursor-pointer  w-[6.5em] m-[0.3em]  h-[3em] text-start px-8 text-[1.5rem] rounded-[2em] font-bold  text-white bg-[#505050]' onClick={getNum} value={0} >0 </button>
      <button className='cursor-pointer  w-[3em] m-[0.3em]  h-[3em] text-[1.5rem] rounded-[2em] font-bold  text-white bg-[#505050]'  onClick={getNum} value={'.'}>,</button>
      <button className='cursor-pointer  w-[3em] m-[0.3em]  h-[3em] text-[1.5rem] rounded-[2em] text-white bg-[#ff9500]' onClick={calculate}>=</button>

     
    </div>
    </Container>
    </div> 
  )
}

export default Calculator