import React from 'react'

function Table({user}) {
  return (
   <table>
       <tbody>
           <tr>
               <th>Name</th>
               <th>Surname</th>
               <th>Email</th>
           </tr>
               {
                     user.map((res)=>(
                          <tr key={res.id}>
                                <td>{res.first_name}</td>
                                <td>{res.last_name}</td>
                                <td>{res.email}</td>
                            </tr>
                        ))
               }
       </tbody>
   </table>
  )
}

export default Table