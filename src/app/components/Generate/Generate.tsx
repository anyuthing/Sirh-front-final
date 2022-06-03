import {useState} from 'react'
import React from 'react'

export default function Generate() {
  const [childrenName, setChildrenName] = useState('')
  return (
    <table id='childrenArray' className='table table-row-dashed table-row-gray-300 gy-7'>
      <tbody>
        <tr>
          <td>
            {' '}
            <input
              value={childrenName}
              onChange={(event) => setChildrenName(event.target.value)}
              type='text'
              id='childName'
              className='form-control form-control-white'
              style={{backgroundColor: '#BBC8CA'}}
            />
          </td>
          <td>
            {' '}
            <select
              id='education'
              className='required form-select'
              aria-label='Select example'
              style={{
                marginBottom: '0px',
                backgroundColor: '#BBC8CA',
              }}
              required
            >
              <option value='' disabled selected>
                Primaire..
              </option>
              <option value='PRI_1ere année'>1ere année</option>
              <option value='PRI_2eme année'>2eme année</option>
              <option value='PRI_3eme année'>3eme année</option>
              <option value='PRI_4eme année'>4eme année</option>
              <option value='PRI_5eme année'>5eme année</option>
              <option value='PRI_6eme année'>6eme année</option>
            </select>
          </td>
          <td>
            {' '}
            <select
              id='education'
              className='required form-select'
              aria-label='Select example'
              style={{
                backgroundColor: '#BBC8CA',
              }}
            >
              <option>College</option>
              <option value='COLL_1ere année'>1ere année</option>
              <option value='COLL_2eme année'>2eme année</option>
              <option value='COLL_3eme année'>3eme année</option>
            </select>
          </td>
          <td>
            {' '}
            <select
              id='education'
              className='required form-select'
              aria-label='Select example'
              style={{
                backgroundColor: '#BBC8CA',
              }}
            >
              <option>SECONDAIRE</option>
              <option value='SEC_1ere année'>1ere année</option>
              <option value='SEC_2eme année'>2eme année</option>
              <option value='SEC_3eme année'>3eme année</option>
            </select>
          </td>
          <td>
            <select
              id='education'
              className='required form-select'
              aria-label='Select example'
              style={{
                backgroundColor: '#BBC8CA',
              }}
            >
              <option>Faculté..</option>
              <option value='FAC_1ere année'>1ere année</option>
              <option value='FAC_2eme année'>2eme année</option>
              <option value='FAC_3eme année'>3eme année</option>
              <option value='FAC_4eme année'>4eme année</option>
              <option value='FAC_5eme année'>5eme année</option>
            </select>
          </td>
        </tr>
      </tbody>
    </table>
  )
}
