import {useFormik} from 'formik'
import React, {useState, useEffect} from 'react'
import UserService from '../../services/user.service'
import {toAbsoluteUrl} from '../../../_metronic/helpers'
import {error} from 'console'
export default function EditStaff() {
  const [cinValue, setCinValue] = useState('')
  const [idValue, setIdValue] = useState('')
  const [usernameValue, setUsernameValue] = useState('')
  const [password, setPasswordValue] = useState('')
  const [grade, setGradeValue] = useState('')

  let personnel = []
  const [children, setChildren] = useState<
    Array<{
      name: string
      education: string
    }>
  >([])
  const [testCorrect, setTestCorrect] = useState(false)
  const [testFalse, setTestFalse] = useState(false)
  const [loading, setLoading] = useState(false)

  const userId = window.location.pathname.substring(33)
  useEffect(() => {
    UserService.getUser(userId).then((result) => {
      console.dir(children)
      setPasswordValue(result.data.password)
      setChildren(result.data.children)
      console.log(result.data.children)
      personnel.push(result.data.children)
      setCinValue(result.data.cin)
      setUsernameValue(result.data.username)
      setIdValue(result.data._id)
      setGradeValue(result.data.grade)
    })
  }, [])

  const initialValues = {
    username: '',
  }
  const validate = () => {
    if (cinValue.length != 8) {
      setTestFalse(false)
      return 'Le Cin est invalide'
    }
  }

  const formik = useFormik({
    initialValues,

    onSubmit: (values, {setStatus, setSubmitting}) => {
      setLoading(true)
      UserService.updateUser(idValue, cinValue, password)
        .then((result) => {
          setLoading(false)

          setTestCorrect(true)
        })
        .catch(() => {
          setTestFalse(true)
          console.log('ya7')
          setLoading(false)
          setSubmitting(false)
          setStatus('The login detail is incorrect')
        })
    },
  })
  return (
    <form
      className='form w-100'
      onSubmit={formik.handleSubmit}
      noValidate
      id='kt_login_signin_form'
    >
      <div
        className='alert alert-dismissible  d-flex flex-column flex-sm-row p-5 mb-10'
        style={{backgroundColor: '#50cd89'}}
      >
        <div className='d-flex flex-column  pe-0 pe-sm-10'>
          <h5 className='mb-1'>Alert</h5>
          <span style={{color: 'white'}}>Utilisateur Mis a jour avec succès.</span>
        </div>
      </div>

      {testFalse && (
        <div
          className='alert alert-dismissible  d-flex flex-column flex-sm-row p-5 mb-10'
          style={{backgroundColor: '#50cd89'}}
        >
          <div className='d-flex flex-column  pe-0 pe-sm-10'>
            <h5 className='mb-1'>Alert</h5>
            <span style={{color: 'white'}}>{validate()}</span>
          </div>
        </div>
      )}
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
          onChange={(event) => setCinValue(event.target.value)}
        />
      </div>
      <div className='mb-10'>
        <label className='form-label'>Nom d'utilisateur :</label>
        <input
          type='text'
          className='form-control form-control-white'
          value={usernameValue}
          onChange={(event) => setUsernameValue(event.target.value)}
        />
      </div>
      <div className='mb-10'>
        <label className='form-label'>Mot de passe :</label>
        <input
          type='text'
          className='form-control form-control-white'
          placeholder='nouveaux mot de passe...'
          onChange={(event) => setPasswordValue(event.target.value)}
        />
      </div>
      <div className='mb-10'>
        <label className='form-label'>Grade :</label>
        <input
          type='text'
          className='form-control form-control-white'
          value={grade}
          onChange={(event) => setGradeValue(event.target.value)}
        />
      </div>
      <h5 style={{marginBottom: '1.5em'}}>Enfants :</h5>
      {children[0] != null &&
        children.map((child, index) => (
          <>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gridGap: '20px',
                border: '1px solide black',
                width: '100%',
                marginBottom: '0em',
              }}
            >
              <div
                className='mb-10'
                style={{
                  margin: '10px',
                  border: '1px solide black',
                  marginTop: '0',
                }}
              >
                <label className='form-label'>Nom :</label>
                <input
                  type='text'
                  className='form-control form-control-white'
                  value={child.name}
                  style={{backgroundColor: 'rgb(197,200,203)', color: 'grey'}}
                />
              </div>
              <div className='mb-10' style={{flex: '1', margin: '20px', marginTop: '0'}}>
                <label className='form-label'>Education :</label>
                <input
                  value={child.education}
                  type='text'
                  className='form-control form-control-white'
                  style={{backgroundColor: 'rgb(197,200,203)', color: 'grey'}}
                />
              </div>
            </div>
          </>
        ))}

      <button type='submit' id='kt_sign_in_submit' className='btn btn-lg btn-primary w-100 mb-5'>
        {!loading && <span className='indicator-label'>Modifier</span>}
        {loading && (
          <span className='indicator-progress' style={{display: 'block'}}>
            Please wait...
            <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
          </span>
        )}
      </button>
    </form>
  )
}
