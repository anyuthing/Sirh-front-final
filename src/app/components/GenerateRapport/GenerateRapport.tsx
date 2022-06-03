import {useFormik} from 'formik'
import React, {useState, useEffect} from 'react'
import UserService from '../../services/user.service'
import {getSub} from '../../modules/Global'
const GenerateRapport = () => {
  const [loading, setLoading] = useState(false)
  const [usersList, setUsersList] = useState<any[]>([])
  const [maxFroukh, setMaxFroukh] = useState<any>([])

  const hotMaxFroukh = (value: any) => {
    setMaxFroukh(value)
  }

  const initialValues = {
    cin: '',
    username: '',
    roles: '0',
  }
  useEffect(() => {
    setLoading(true)
    UserService.getRapport().then((result) => {
      console.log(result.data)

      setUsersList(result.data.users)
      setMaxFroukh(result.data.maxChilds)

      setLoading(false)
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
              {maxFroukh.map((header: any, index: any) => {
                return (
                  <>
                    <th>Enfant</th>
                    <th>Somme</th>
                  </>
                )
              })}
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {usersList.length != 0 &&
              usersList.map((user, key) => {
                let remainingChilds = []

                for (let i = 0; i < maxFroukh.length - user.children.length; i++) {
                  remainingChilds.push({})
                }

                let total = 0

                user.children.map((child: any, index: any) => {
                  total = total + getSub(child.education)
                })

                console.log(total)

                return (
                  <tr key={key}>
                    <td>{user.cin}</td>
                    <td>{user.username}</td>
                    {user.children.length != 0 &&
                      user.children.map((child: any, index: number) => {
                        return (
                          <>
                            <td>{child.name}</td>
                            <td>{getSub(child.education)}</td>
                          </>
                        )
                      })}
                    {remainingChilds.map((x, key) => {
                      return (
                        <>
                          <td></td>
                          <td></td>
                        </>
                      )
                    })}
                    {user.children.length != 0 && <td>{total}</td>}
                    {user.children.length == 0 && <td>0</td>}
                  </tr>
                )
              })}
          </tbody>
        </table>
      </>
    </>
  )
}

export default GenerateRapport
