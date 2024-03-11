import React, { useEffect, useState } from 'react'
import PizzaCard from './PizzaCard/PizzaCard';
import { pizzaData } from '../../data';
import './Menu.css'

export default function Menu(){
  //const pizzas = pizzaData;
  const [pizzas,setPizzas]=useState(pizzaData)
  const [isLoading,setIsLoading]=useState(true);
  const [page,setPage] = useState(1);
  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false);
    },2000);
    let a= pizzaData.slice((page-1)*10,(page-1)*10+10);
    setPizzas(a);
  },[])
  useEffect(()=>{
    let a= pizzaData.slice((page-1)*10,(page-1)*10+10);
    setIsLoading(true);
    setTimeout(()=>{
      setIsLoading(false);
    },1000);
    setPizzas(a);
  },[page]);
  function handlePageParent(page){
    setPage(page);
  }
  return (
    <>
      {
        isLoading==true ?
        (
          <div className="loader-container">
                <div className="spinner"></div>
          </div>
        ) : (
        <div className="menu">
          <h2>Our menu</h2>
          {
            pizzas && (
              <>
                <p>Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.</p>
                <ul className="pizzas">
                  {pizzas.map((pizza)=>(
                    <PizzaCard key={pizza?.id} className="pizza" info={pizza}></PizzaCard>
                  ))}
                </ul>
              </>
            )
          }
          <Pagination page={page} handlePage={handlePageParent} total={pizzaData.length}></Pagination>
        </div>
        )
      }
    </>
  )
}

function Pagination({handlePage,total,page}){
  const [array,setArray]=useState([]);
  const handleClick=(e)=>{
    e.preventDefault();
    handlePage(e.target.innerText);
  }
  useEffect(()=>{
    let a=[];
    for(let i=0;i<=total/10;i++){
      a=[...a,{}];
    }
    setArray(a);
  },[total])
  return (
    <>
      <ul className='pagiList'>
        {
          array.length>0 &&(
            array.map((value,index)=>(
              <button className={`pagiStep `+ ( page ==(index+1) ? 'active' : '' )} onClick={handleClick} >
                {index+1}
              </button>
            ))
          )
        }
      </ul>
    </>
  )
}
