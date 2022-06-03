import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

import UserService from '../../services/user.service'
import {getRoleName} from '../../modules/Global'
import {Redirect} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
export default function ListeDemadeRn() {
  const [usersList, setUsersList] = useState<any[]>([])
  let history = useHistory()
  const deleteUsers = (userId: String, key: number) => {
    UserService.deleteUser(userId).then((result) => {
      usersList.splice(key, 1)
      setUsersList([...usersList])
    })
    console.log(userId)
  }
  useEffect(() => {
    UserService.getListDemandeRn().then((result) => {
      setUsersList(result.data)
    })
  }, [])

  return (
    <>
      <table className='table table  table-hover table-rounded table-striped border gy-7 gs-7'>
        <thead>
          <tr className='fw-bolder fs-6 text-gray-800 '>
            <th>Cin</th>
            <th>Nom d'ultilisateur</th>

            <th>edit</th>
          </tr>
        </thead>
        <tbody>
          {usersList.length != 0 &&
            usersList.map((user, key) => {
              return (
                <tr key={key}>
                  <td>{user.cin}</td>
                  <td>{user.username}</td>

                  <td>
                    <li>
                      <Link to={`/EditStaff/${user._id}`} className='link-primary fw-bolder'>
                        Consulter
                      </Link>
                    </li>
                  </td>
                  <td>
                    {' '}
                    <button
                      onClick={() => {
                        deleteUsers(user._id, key)
                      }}
                    >
                      Effacer
                    </button>
                  </td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </>
  )
}
