import React, {useState, useEffect} from 'react'
import {idText} from 'typescript'
import {object} from 'yup'
import {TextareaHTMLAttributes} from 'react'
import {useFormik} from 'formik'
import UserService from '../../services/user.service'
import {KTSVG} from '../../../_metronic/helpers/components/KTSVG'
export default function AjouterDemandeJS() {
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
        console.log(result.data.path)
      })
    }

    console.log('new')

    console.log(newPaths)

    await UserService.DemandeJS(demandeValue, cin, idValue, username, newPaths)

      .then((result) => {
        console.log('mnadhem')

        setAddSuccess(true)

        console.log(result)
      })
      .catch(() => {
        console.log('oleeee')

        setAddFailure(true)
        console.log(addFailure)
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
  const [demandeValue, setDemandeValue] = useState(
    ' Ici je presente ma demande pour une subvention de Rentrée scolaire '
  )
  const [resultatFile, setResultatFile] = useState<[]>([])

  const selectFiles = (event: any) => {
    setResultatFile(event.target.files)
  }
  useEffect(() => {
    setCurrentUser(window.localStorage.getItem('user'))
  }, [])
  const initialValues = {}
  const formik = useFormik({
    initialValues,
    onSubmit: async (values, {setStatus, setSubmitting}) => {
      let resultatFileArray = [...resultatFile]
      console.log(resultatFileArray)

      await uploadDemande(resultatFileArray)

      /*UserService.DemandeJS(demandeValue, cin, idValue, username, resultatFile)

        .then((result) => {
          setLoading(false)
          setTestCorrect(true)
        })
        .catch(() => {
          setTestFalse(true)

          setLoading(false)
          setSubmitting(false)
          setStatus('The Demand details are incorrect')
        })*/
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
