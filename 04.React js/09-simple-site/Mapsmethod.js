import React, { useContext, useState } from 'react'
import image1 from './Asserts/img-1.jpg'
import image2 from './Asserts/img-2.jpg'
import image3 from './Asserts/img-3.jpg'
import image4 from './Asserts/img-4.jpg'
import image5 from './Asserts/img-5.jpg'
import image6 from './Asserts/img-6.jpg'
import image7 from './Asserts/img-7.jpg'
import image8 from './Asserts/img-8 .jpg'
import image9 from './Asserts/img-9.jpg'
import image10 from './Asserts/img-10.jpg'
import { Cardsender } from '../Bootstrap/Cardsaver'
import { Button } from 'react-bootstrap'
function Mapsmethod() {
  let {HandleCard} =useContext(Cardsender);
  let [search,setvalue]=useState('')
  
  let datas = [
    {id:1,name:"avathar",story:"Award winner",rating:"⭐⭐⭐⭐⭐", image:image1 ,price:2200},
    {id:2,name:"thor",story:"Award winner",rating:"⭐⭐⭐⭐⭐", image:image2,price:2200},
    {id:4,name:"mib3",story:"Award winner",rating:"⭐⭐⭐⭐⭐", image:image4,price:2200},
    {id:5,name:"jurasic park",story:"Award winner",rating:"⭐⭐⭐⭐⭐", image:image5,price:2200},
    {id:6,name:"the silience of the lamp",story:"Award winner",rating:"⭐⭐⭐⭐⭐", image:image6,price:2200},
    {id:7,name:"terminator",story:"Award winner",rating:"⭐⭐⭐⭐⭐", image:image7,price:2200},
    {id:8,name:"fight club",story:"Award winner",rating:"⭐⭐⭐⭐⭐", image:image8,price:2200},
    {id:9,name:"justisleague",story:"Award winner",rating:"⭐⭐⭐⭐⭐", image:image9,price:2200},
   {id:10,name:"thor 2",story:"Award winner",rating:"⭐⭐⭐⭐⭐", image:image10,price:2200}
   ,{id:3,name:"matrix",story:"Award winner",rating:"⭐⭐⭐⭐⭐", image:image3,price:2200}
  ]
  let filteredData= datas.filter((e)=>
 e.name.toLowerCase().includes(search.toLowerCase()))
  return (
    <div>
    <div style={{display: 'flex',justifyContent:"center", margin:"30px",flexDirection:"column",alignItems:"center"}}>
          <input type="text" value={search} onChange={(e)=>setvalue(e.target.value)}/>
          <p>{filteredData.length < 10  && filteredData.length === 1 ? `Result Found : ${filteredData.length}`:`Results Found : ${filteredData.length}` } </p>
    </div>

    <div className='container' style={{display: "flex",flexWrap:"wrap", alignItems: "center", justifyContent:"center", }}>
      
{
  filteredData.map((data,index)=>
     <div style={{flexBasis:"20%" ,height:'600px',display: "flex",alignItems:"center", justifyContent:"space-evenly",flexDirection:"column",color:"wheat", backgroundColor:"black",margin:"10px", boxShadow:"10px 10px 10px 0.17px rgba(0,0,0,0.17) ,"}} key={index}>
      <img src={data.image} alt={data.name} width="100%"/>
      <h3>{data.name.toUpperCase()}</h3>
      <h3>{data.story}</h3>
      <h5>{data.rating}</h5>
      <p>Price ₹ <span style={{textDecoration:'line-through'}}>4500</span><b> {data.price}</b></p>
    <Button variant="outline-light" onClick={()=>HandleCard(data)}>Add To Cart</Button>
    </div>
  )
}
    {console.log(filteredData.reduce((a,b)=>a+b.price ,0))
    }

     </div>
     </div>
  )
}

export default Mapsmethod