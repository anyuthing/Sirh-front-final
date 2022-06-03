import React, {useState, useEffect} from 'react'
import {idText} from 'typescript'
import {object} from 'yup'
import {TextareaHTMLAttributes} from 'react'
import {useFormik} from 'formik'
import UserService from '../../services/user.service'
import {KTSVG} from '../../../_metronic/helpers/components/KTSVG'
export default function AjouterDemandePret() {
  const [CurrentUser, setCurrentUser] = useState<any>({
    cin: String,
    username: String,
    roles: Array,
    AccessToke: String,
    children: Array,
    grade: String,
  })

  const user = window.localStorage.getItem('user')

  const convert = (user: any) => {
    var msg = JSON.parse(user)
    return msg
  }

  const [cin, setCin] = useState(convert(user).cin)
  const [idValue, setIdValue] = useState(convert(user).id)
  const [username, setUserName] = useState(convert(user).username)
  const [sommeD, setSommeD] = useState<any>()
  const [PartitionP, setPartitionP] = useState<any>()
  const [grade, setGrade] = useState<any>(convert(user).grade)

  const [loading, setLoading] = useState(false)
  const [demandeValue, setDemandeValue] = useState(
    ' Ici je presente ma demande pour une subvention de Rentrée scolaire '
  )
  const [inscription, setInscription] = useState<File[]>()

  const selectFiles = (event: any) => {
    setInscription(event.target.value)
  }
  useEffect(() => {
    setCurrentUser(window.localStorage.getItem('user'))
    console.log(grade)
  }, [])
  const initialValues = {}
  const formik = useFormik({
    initialValues,
    onSubmit: (values, {setStatus, setSubmitting}) => {
      setLoading(true)
      UserService.DemandePret(demandeValue, cin, idValue, username, sommeD, PartitionP, grade)

        .then((result) => {
          setLoading(false)
        })
        .catch(() => {
          setLoading(false)
          setSubmitting(false)
          setStatus('The Demand details are incorrect')
        })
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
            Veuillez déposer votre demande pour un Pret
          </div>
          <img
            className='w-100 card-rounded-bottom'
            alt=''
            src='assets/media/svg/illustrations/bg-4.svg'
          />
        </div>
      </div>
      <form
        className='form w-100'
        onSubmit={formik.handleSubmit}
        noValidate
        id='kt_login_signin_form'
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
        <div className='mb-10'>
          <label className='form-label'>Grade :</label>
          <input
            type='text'
            className='form-control form-control-white'
            value={convert(user).grade}
          />
        </div>
        <label style={{fontFamily: 'Poppins', fontWeight: '500', marginBottom: '1em'}}>
          Demande :
        </label>
        <br />
        <span style={{marginBottom: '2em', fontWeight: 'bold'}}>
          Au Directeur Général de la Médiathèque du Ministère de la Santé (Direction des Affaires
          Administratives et Financières/Direction des Ressources Humaines)
        </span>
        <br />
        <br />
        <span style={{marginBottom: '2em', marginTop: '1em', fontWeight: 'normal'}}>
          Objet : Demande d'acompte
        </span>
        <table className='table table-striped gy-7 gs-7'>
          <tbody>
            <tr>
              <td>
                Je vous soumets cette demande, afin de me permettre de précéder le salaire de{' '}
              </td>
              <td>
                {' '}
                <input
                  type='number'
                  className='form-control'
                  onChange={(event) => setSommeD(event.target.value)}
                />
              </td>
              <td>Et je promets de le rembourser sur</td>
              <td>
                {' '}
                <input
                  type='number'
                  className='form-control'
                  onChange={(event) => setPartitionP(event.target.value)}
                />
              </td>
              <td>versements.</td>
            </tr>
          </tbody>
        </table>
        <button type='submit' id='kt_sign_in_submit' className='btn btn-lg btn-primary w-100 mb-5'>
          {!loading && <span className='indicator-label'>Ajouter Demande</span>}
          {loading && (
            <span className='indicator-progress' style={{display: 'block'}}>
              Please wait...
              <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
            </span>
          )}
        </button>
      </form>
    </>
  )
}
