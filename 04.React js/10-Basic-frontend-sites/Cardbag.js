import React, { useContext, useState } from 'react'
import Image from './empty.jpg'
import { Cardsender } from './Cardsaver'
import imgs from './pop.gif'
import imgs2 from './party-confetti.gif'
function Cardbag() {
  let { cartdata, CollectData,setdata} = useContext(Cardsender)
  let [seecount,setseecount] = useState()
  return (<>
    {
      cartdata.length === 0 ? <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',flexDirection:'column', marginTop: '10px' }}>
        <h2>{seecount}</h2> 
        <img src={Image} alt="name" />
        <button onClick={()=>setseecount(cartdata.length === 0 ? "Empty" : cartdata.length) }>Check cart</button>
       
        
      </div> : <div className='row'>
        <h1 >Total ₹ <del>{cartdata.reduce((acc, items) => acc + items.price, 0) * 2}</del> Offer rate <b style={colors}>
          <span style={{ backgroundImage: `url(${imgs2})` }}>{cartdata.reduce((acc, items) => acc + items.price, 0)}</span> </b>

        </h1>
        <div className='col-lg-2'>
        <button className='btn btn-danger' onClick={()=>setdata(cartdata.filter(i=>false))}> ✅ Clear All</button>
        </div>
        <div className='row d-flex justify-content-center align-item-center'>
        {
          cartdata.map((values, index) =>
            <div className=' col-lg-3 mx-2 d-flex justify-content-center my-2' key={index}>
              <div className='card d-flex justify-content-center align-items-center'>
              <img src={values.image} alt={values.name} width='100%' />
              <h1>{values.name}</h1>
              <h3>{values.price}</h3>
              {/* <div className='col-lg-3'> */}
                <button className='btn btn-warning text-danger' onClick={()=>CollectData(values)}> <b>Remove</b>   </button>
              {/* </div> */}
              </div>
            </div>)}
            </div>
      </div>
    }




  </>
  )
}
let colors = {
  color: 'black',
}
export default Cardbag