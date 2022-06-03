import {useFormik} from 'formik'
import React, {useState, useEffect} from 'react'
import UserService from '../../services/user.service'
import {getSub} from '../../modules/Global'
const GenerateRapportPret = () => {
  const [usersList, setUsersList] = useState<any[]>([])
  const [userDetails, setUserDetails] = useState<any[]>([])

  const getUserDetails = (cin: any) => {
    UserService.getUserByCin(cin).then((result) => {
      setUserDetails(result.data)
    })
  }
  useEffect(() => {
    UserService.getListDemandePret().then((result) => {
      console.log(result.data)

      setUsersList(result.data)
    })
  }, [])

  return (
    <>
      <>
        <table className='table table  table-hover table-rounded table-striped border gy-7 gs-7'>
          <thead>
            <tr className='fw-bolder fs-6 text-gray-800 '>
              <th>Cin</th>
              <th>Nom d'ultilisateur</th>
              <th>Avance Demandé</th>
              <th>Nombre de mois</th>
              <th>Grade</th>
              <th>Date de recrutement</th>
            </tr>
          </thead>
          <tbody>
            {usersList.length != 0 &&
              usersList.map((user, key) => {
                getUserDetails(user.cin)

                return (
                  <tr key={key}>
                    <td>{user.cin}</td>
                    <td>{user.username}</td>
                    <td>{user.sommeD}</td>
                    <td>{user.PartitionP}</td>
                    <td> Technicien</td>
                    <td> 05/02/2018</td>
                    <td> 05/18/2003</td>
                  </tr>
                )
              })}
          </tbody>
        </table>
      </>
    </>
  )
}

export default GenerateRapportPret
