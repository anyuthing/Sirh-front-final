import React, {useState, useRef, Children} from 'react'
import {ToastContainer, toast} from 'react-toastify'
import AuthService from '../../services/auth.service'
import {useFormik, Field, isInteger} from 'formik'
import Generate from '../Generate/Generate'

const AddStaff = () => {
  const [loading, setLoading] = useState(false)
  const [cinValue, setCinValue] = useState('')
  const [childrenList, setChildrenList] = useState<any>([])
  const [grade, setGrade] = useState<any>()
  const [usernameValue, setUsernameValue] = useState('')
  const [salaire, setSalaire] = useState<any>()
  const [dataDeRecrutement, setdataDeRecrutement] = useState<any>()
  const [childrenName, setChildrenName] = useState('')
  const options = [
    {value: 'user', label: 'Personnel'},
    {value: 'moderator', label: 'RH'},
    {value: 'admin', label: 'DRH'},
  ]

  const [selectedRole, setSelectedRole] = useState('')

  const setRole = (selectedOption: any) => {
    setSelectedRole(selectedOption)
  }
  const initialValues = {
    cin: '',
    username: '',
    roles: '0',
    password: '',
  }
  const generateChild = () => {
    let newList = [...childrenList]
    newList.push({
      name: '',
      education: '',
    })
    setChildrenList(newList)
  }
  const [errors, setErrors] = useState({
    username: '',
    cin: '',
    type: '',
    childName: '',
    education: '',
  })

  function hasNumber(myString: any) {
    return /\d/.test(myString)
  }

  function validateUsername(value: any) {
    if (value.username === '') {
      setErrors((errors) => ({...errors, username: "Veuillez saisir le nom de l'utilisateur !"}))
    } else {
      if (hasNumber(value.username)) {
        setErrors((errors) => ({
          ...errors,
          username: "Le nom de l'utilisateur ne doit pas contenir un nombre",
        }))
      }
    }
    if (value.cin === '') {
      setErrors((errors) => ({...errors, cin: "Veuillez saisir le CIN de l'utilisateur !"}))
    } else if (value.cin != '') {
      if (isNaN(value.cin)) {
        setErrors((errors) => ({...errors, cin: " Le CIN de l'utilisateur doit etre un nombre !"}))
      }
    } else {
      setErrors((errors) => ({...errors, cin: ''}))
      console.log(errors.cin)
    }
    if ((document.getElementById('type') as HTMLInputElement).value === '') {
      setErrors((errors) => ({...errors, type: "veuillez saisir le role de l'utilisateur !"}))
    }
  }

  const changeChildrenName = (index: any, value: any) => {
    let updatedList = [...childrenList]
    updatedList[index].name = value
    setChildrenList(updatedList)
  }

  const changeChildrenEducation = (index: any, value: any) => {
    let updatedList = [...childrenList]
    updatedList[index].education = value
    console.log(value)

    if (value.includes('PRI')) {
      updatedList[index].selectedPrimaire = value
      updatedList[index].selectedCollege = ''
      updatedList[index].selectedSecondaire = ''
      updatedList[index].selectedFac = ''
    }
    if (value.includes('COLL')) {
      updatedList[index].selectedCollege = value
      updatedList[index].selectedPrimaire = ''
      updatedList[index].selectedSecondaire = ''
      updatedList[index].selectedFac = ''
    }
    if (value.includes('SEC')) {
      updatedList[index].selectedSecondaire = value

      updatedList[index].selectedPrimaire = ''
      updatedList[index].selectedCollege = ''
      updatedList[index].selectedFac = ''
    }
    if (value.includes('FAC')) {
      updatedList[index].selectedFac = value

      updatedList[index].selectedPrimaire = ''
      updatedList[index].selectedCollege = ''
      updatedList[index].selectedSecondaire = ''
    }

    setChildrenList(updatedList)
  }

  const formik = useFormik({
    initialValues,

    onSubmit: (values, {setStatus, setSubmitting}) => {
      setLoading(true)
      const userType = (document.getElementById('type') as HTMLInputElement).value
      const education = (document.getElementById('education') as HTMLInputElement).value
      const name = (document.getElementById('childName') as HTMLInputElement).value
      AuthService.register(
        cinValue,
        cinValue,
        usernameValue,
        [userType],
        childrenList,
        grade,
        salaire,
        dataDeRecrutement
      )
        .then((result) => {
          setLoading(false)
        })
        .catch(() => {
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
      <div className='mb-10'>
        <label className='required form-label'>CIN :</label>
        <input
          type='number'
          value={cinValue}
          onChange={(event) => setCinValue(event.target.value)}
          id='userId'
          className='form-control form-control-white'
          style={{backgroundColor: '#BBC8CA'}}
        />
        {errors.cin && (
          <div
            style={{
              height: '2em',
              backgroundColor: 'red',
              fontFamily: 'Poppins',
              fontWeight: '500',
            }}
          >
            {errors.cin}
          </div>
        )}
      </div>
      <div className='mb-10'>
        <label className='required form-label'>Nom de l'utilisateur</label>
        <input
          value={usernameValue}
          onChange={(event) => setUsernameValue(event.target.value)}
          type='text'
          id='userName'
          className='form-control form-control-white'
          style={{backgroundColor: '#BBC8CA'}}
        />
        {errors.username && (
          <div
            style={{
              height: '2em',
              backgroundColor: 'red',
              fontFamily: 'Poppins',
              fontWeight: '500',
            }}
          >
            {errors.username}
          </div>
        )}
      </div>
      <label className='required form-label'>Type de L'utilisateur :</label>
      <select
        id='type'
        className='required form-select'
        aria-label='Select example'
        style={{
          marginBottom: '3em',
          backgroundColor: '#BBC8CA',
        }}
      >
        <option>Saisisez le role...</option>
        <option value='user'>Personnel</option>
        <option value='admin'>DRH</option>
        <option value='moderator'>RH</option>
      </select>
      <label className='required form-label'>Grade :</label>
      <select
        id='education'
        className='required form-select'
        aria-label='Select example'
        style={{
          marginBottom: '3em',
          backgroundColor: '#BBC8CA',
        }}
        required
        onChange={(event) => setGrade(event.target.value)}
      >
        <option value='' disabled selected>
          Saisiez le grade...
        </option>
        <option value='Administratif'>Administratif</option>
        <option value='Technicien(e)'>Technicien(e)</option>
        <option value='Ouvrier(e)'>Ouvrier(e)</option>
      </select>
      <div>
        <div className='mb-10'>
          <label className='required form-label'>Salaire :</label>
          <input
            style={{
              marginBottom: '3em',
              backgroundColor: '#BBC8CA',
            }}
            value={salaire}
            onChange={(event) => setSalaire(event.target.value)}
            type='number'
            id='userName'
            className='form-control form-control-white'
          />
          <div className='mb-10'>
            <label className='required form-label'>Date De Recrutement :</label>
            <input
              value={dataDeRecrutement}
              onChange={(event) => setdataDeRecrutement(event.target.value)}
              type='date'
              id='userName'
              className='form-control form-control-white'
              style={{backgroundColor: '#BBC8CA'}}
            />
            {errors.username && (
              <div
                style={{
                  height: '2em',
                  backgroundColor: 'red',
                  fontFamily: 'Poppins',
                  fontWeight: '500',
                }}
              >
                {errors.username}
              </div>
            )}
          </div>
          {errors.username && (
            <div
              style={{
                height: '2em',
                backgroundColor: 'red',
                fontFamily: 'Poppins',
                fontWeight: '500',
              }}
            >
              {errors.username}
            </div>
          )}
        </div>
        {errors.type && (
          <div
            style={{
              height: '2em',
              backgroundColor: 'red',
              fontFamily: 'Poppins',
              fontWeight: '500',
            }}
          >
            {errors.cin}
          </div>
        )}
      </div>
      <label className='required form-label'>Education</label>
      <button
        type='button'
        style={{
          backgroundColor: 'white',
          color: ' Green',
          lineHeight: '2.5em',
          width: '100%',
          borderRadius: '16px',
          alignSelf: 'center',
        }}
        onClick={generateChild}
      >
        Ajouter
      </button>
      {childrenList.length != 0 && (
        <table id='childrenArray' className='table table-row-dashed table-row-gray-300 gy-7'>
          <thead>
            <tr className='fw-bolder fs-6 text-gray-800'>
              <th>Nom de l'enfant</th>
              <th>Primaire</th>
              <th>College</th>
              <th>Secondaire</th>
              <th>Faculté</th>
            </tr>
          </thead>
          <tbody>
            {childrenList.map((child: any, index: any) => {
              return (
                <tr key={index}>
                  <td>
                    {' '}
                    <input
                      onChange={(event) => changeChildrenName(index, event.target.value)}
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
                      value={childrenList[index].selectedPrimaire}
                      className='required form-select'
                      aria-label='Select example'
                      style={{
                        marginBottom: '0px',
                        backgroundColor: '#BBC8CA',
                      }}
                      required
                      onChange={(event) => changeChildrenEducation(index, event.target.value)}
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
                      value={childrenList[index].selectedCollege}
                      id='education'
                      className='required form-select'
                      aria-label='Select example'
                      style={{
                        backgroundColor: '#BBC8CA',
                      }}
                      onChange={(event) => changeChildrenEducation(index, event.target.value)}
                    >
                      <option value='' disabled selected>
                        College
                      </option>
                      <option value='COLL_1ere année'>1ere année</option>
                      <option value='COLL_2eme année'>2eme année</option>
                      <option value='COLL_3eme année'>3eme année</option>
                    </select>
                  </td>
                  <td>
                    {' '}
                    <select
                      id='education'
                      value={childrenList[index].selectedSecondaire}
                      className='required form-select'
                      aria-label='Select example'
                      style={{
                        backgroundColor: '#BBC8CA',
                      }}
                      onChange={(event) => changeChildrenEducation(index, event.target.value)}
                    >
                      <option value='' disabled selected>
                        SECONDAIRE
                      </option>
                      <option value='SEC_1ere année'>1ere année</option>
                      <option value='SEC_2eme année'>2eme année</option>
                      <option value='SEC_3eme année'>3eme année</option>
                    </select>
                  </td>
                  <td>
                    <select
                      id='education'
                      value={childrenList[index].selectedFac}
                      className='required form-select'
                      aria-label='Select example'
                      style={{
                        backgroundColor: '#BBC8CA',
                      }}
                      onChange={(event) => changeChildrenEducation(index, event.target.value)}
                    >
                      <option value='' disabled selected>
                        Faculté..
                      </option>
                      <option value='FAC_1ere année'>1ere année</option>
                      <option value='FAC_2eme année'>2eme année</option>
                      <option value='FAC_3eme année'>3eme année</option>
                      <option value='FAC_4eme année'>4eme année</option>
                      <option value='FAC_5eme année'>5eme année</option>
                    </select>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      )}

      <button
        onClick={() => {
          validateUsername({username: usernameValue, cin: cinValue})
        }}
        type='submit'
        id='kt_sign_in_submit'
        className='btn btn-lg btn-primary w-100 mb-5'
      >
        {!loading && <span className='indicator-label'>Ajouter</span>}
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
export default AddStaff
