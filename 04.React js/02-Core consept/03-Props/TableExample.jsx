import React from 'react'
import {Table} from 'react-bootstrap'
function TableExample(props) {
  return (
    <div>
      {console.log(props)
      }
      <div className="container">
        <Table className='table'>
          <thead>
            <th>NAME</th>
            <th>AGE</th>
            <th>ACHIVEMENT</th>
          </thead>
          <tbody>
            <td>{props.name}</td>
            <td>{props.age}</td>
            <td>{props.achivement}</td>
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default TableExample