import React, {useState, useEffect} from 'react'
import {idText} from 'typescript'
import {object} from 'yup'
import {TextareaHTMLAttributes} from 'react'
import {useFormik} from 'formik'
import UserService from '../../services/user.service'
import {KTSVG} from '../../../_metronic/helpers/components/KTSVG'
import {toAbsoluteUrl} from '../../../_metronic/helpers/AssetHelpers'

export default function AjouterDemandeRn() {
  const [addSuccess, setAddSuccess] = useState<boolean>(false)
  const [addFailure, setAddFailure] = useState<boolean>(false)

  const [CurrentUser, setCurrentUser] = useState<any>({
    cin: String,
    username: String,
    roles: Array,
    AccessToke: String,
    children: Array,
  })

  const user = window.localStorage.getItem('user')

  const uploadDemande = async (resultatFileArray: any) => {
    let newPaths: any = []

    for (const file of resultatFileArray) {
      await UserService.upload(file).then((result) => {
        newPaths.push(result.data.path)
      })
    }

    await UserService.DemandeRn(demandeValue, cin, idValue, username, newPaths)
      .then((result) => {
        setAddSuccess(true)
      })
      .catch(() => {
        setAddFailure(true)
      })
  }

  const convert = (user: any) => {
    var msg = JSON.parse(user)
    return msg
  }

  const [cin, setCin] = useState(convert(user).cin)
  const [idValue, setIdValue] = useState(convert(user).id)
  const [username, setUserName] = useState(convert(user).username)
  const [testCorrect, setTestCorrect] = useState(false)
  const [testFalse, setTestFalse] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState('')
  const [errorValidator, setErrorValidator] = useState(false)
  const [demandeValue, setDemandeValue] = useState(
    ' Ici je presente ma demande pour une subvention de Rentrée scolaire '
  )
  const [resultatFile, setResultatFile] = useState<[]>([])

  const selectFiles = (event: any) => {
    setResultatFile(event.target.files)
  }

  const validate = (selectFiles: any) => {
    if (selectFiles.length === 0) {
      setErrors("Veuillez saisir les document justificatifs de l'inscription de vos enfants")
      setErrorValidator(true)
    } else {
      setErrors('')
      setErrorValidator(false)
    }
  }
  useEffect(() => {
    setCurrentUser(window.localStorage.getItem('user'))
  }, [])
  const initialValues = {}
  const formik = useFormik({
    initialValues,
    onSubmit: async (values, {setStatus, setSubmitting}) => {
      let resultatFileArray = [...resultatFile]
      validate(resultatFileArray)
      await uploadDemande(resultatFileArray)
    },
  })
  return (
    <>
      <div className='card card-custom shadow' style={{marginBottom: '2em'}}>
        <div className='card-header'>
          <KTSVG
            path='/media/icons/duotune/general/gen046.svg'
            className='svg-icon svg-icon-3x svg-icon-info'
          />
          <div className='card-toolbar'>
            <span className='badge badge-success'>Instruction</span>
          </div>
        </div>
        <div className='card-body p-0'>
          <div className='card_p' style={{padding: '2em 0em !important ', paddingLeft: '1em'}}>
            Veuillez déposer votre demande pour une subvention de la Journée scientifique
          </div>
          <img
            className='w-100 card-rounded-bottom'
            alt=''
            src='assets/media/svg/illustrations/bg-4.svg'
          />
        </div>
        {errorValidator && (
          <div
            className='alert alert-dismissible  d-flex flex-column flex-sm-row p-5 mb-10'
            style={{backgroundColor: '#ff6961'}}
          >
            <div className='d-flex flex-column text-light pe-0 pe-sm-10'>
              <h5 className='mb-1'>Erreur</h5>
              <span>{errors}</span>
            </div>

            <button
              type='button'
              className='position-absolute position-sm-relative m-2 m-sm-0 top-0 end-0 btn btn-icon ms-sm-auto'
              data-bs-dismiss='alert'
              onClick={() => {
                setErrorValidator(false)
              }}
            >
              <span className='svg-icon svg-icon-2x svg-icon-light'>
                <img src={toAbsoluteUrl('/media/icons/duotune/general/gen040.svg')} />
              </span>
            </button>
          </div>
        )}
        {addSuccess && (
          <div
            className='alert alert-dismissible  d-flex flex-column flex-sm-row p-5 mb-10'
            style={{backgroundColor: '#50cd89'}}
          >
            <div className='d-flex flex-column  pe-0 pe-sm-10'>
              <h5 className='mb-1'>Alert</h5>
              <span style={{color: 'white'}}>Demande ajoutée avec succès.</span>
            </div>
          </div>
        )}
        {addFailure && (
          <div
            className='alert alert-dismissible  d-flex flex-column flex-sm-row p-5 mb-10'
            style={{backgroundColor: '#50cd89'}}
          >
            <div className='d-flex flex-column  pe-0 pe-sm-10'>
              <h5 className='mb-1'>Alert</h5>
              <span style={{color: 'white'}}>Demande ajoutée avec succès.</span>
            </div>
          </div>
        )}
      </div>
      <form
        onSubmit={formik.handleSubmit}
        noValidate
        id='kt_login_signin_form'
        className='form w-100 border border-primary border-hover'
      >
        <div className='mb-10'>
          <label className='form-label'>ID :</label>
          <input type='text' className='form-control' value={convert(user).id} />
        </div>
        <div className='mb-10'>
          <label className='form-label'>CIN :</label>
          <input type='text' className='form-control' value={convert(user).cin} />
        </div>
        <div className='mb-10'>
          <label className='form-label'>Nom :</label>
          <input
            type='text'
            className='form-control form-control-white'
            value={convert(user).username}
          />
        </div>
        <label style={{fontFamily: 'Poppins', fontWeight: '500', marginBottom: '1em'}}>
          Demande :
        </label>

        <textarea
          id='story'
          name='story'
          onChange={(event) => setDemandeValue(event.target.value)}
          style={{width: '100%', fontFamily: 'Poppins', fontWeight: '500'}}
          placeholder='Déposer votre demande ici...'
        ></textarea>
        <button type='submit' id='kt_sign_in_submit' className='btn btn-lg btn-primary w-100 mb-5'>
          {!loading && <span className='indicator-label'>Déposer Demande</span>}
          {loading && (
            <span className='indicator-progress' style={{display: 'block'}}>
              Please wait...
              <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
            </span>
          )}
        </button>

        <input type='file' multiple id='files' onChange={selectFiles} />
      </form>
    </>
  )
}
