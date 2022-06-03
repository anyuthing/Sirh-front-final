import React, {useState, useEffect} from 'react'
import UserService from '../../services/user.service'
const ViewDemandePret = () => {
  const [cinValue, setCinValue] = useState('')
  const [idValue, setIdValue] = useState('')
  const [usernameValue, setUsernameValue] = useState('')
  const [grade, setGradeValue] = useState('')
  const [sommeD, setSommeD] = useState<any>()
  const [PartitionP, setPartitionP] = useState<any>()

  const id = window.location.pathname.substring(44)
  useEffect(() => {
    UserService.getDemandePret(id).then((result) => {
      console.log(result.data.children)
      setCinValue(result.data.cin)
      setUsernameValue(result.data.username)
      setIdValue(result.data._id)
      console.log(result.data.grade)

      setGradeValue(result.data.grade)
      setSommeD(result.data.sommeD)
      setPartitionP(result.data.PartitionP)
    })
  }, [])

  return (
    <form className='form w-100' noValidate id='kt_login_signin_form'>
      <div className='mb-10'>
        <label className='form-label'>ID :</label>
        <input
          type='text'
          id='userId'
          style={{backgroundColor: 'rgb(197,200,203)', color: 'grey'}}
          className='form-control form-control-white'
          value={idValue}
        />
      </div>
      <div className='mb-10'>
        <label className='form-label'>CIN :</label>
        <input
          type='text'
          className='form-control form-control-white'
          value={cinValue}
          id='userCin'
        />
      </div>
      <div className='mb-10'>
        <label className='form-label'>Nom d'utilisateur :</label>
        <input type='text' className='form-control form-control-white' value={usernameValue} />
      </div>

      <div className='mb-10'>
        <label className='form-label'>Grade :</label>
        <input type='text' className='form-control form-control-white' value={grade} />
      </div>
      <div className='mb-10'>
        <label className='form-label'>Somme Demandé :</label>
        <input type='number' className='form-control form-control-white' value={sommeD} />
      </div>
      <div className='mb-10'>
        <label className='form-label'>Partition du remboursement :</label>
        <input type='number' className='form-control form-control-white' value={PartitionP} />
      </div>
    </form>
  )
}
export default ViewDemandePret
