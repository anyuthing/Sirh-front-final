/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import * as Yup from 'yup'
import clsx from 'clsx'
import {Link} from 'react-router-dom'
import {useFormik} from 'formik'
import * as auth from '../redux/AuthRedux'
import {login} from '../redux/AuthCRUD'
import {toAbsoluteUrl} from '../../../../_metronic/helpers'
import AuthService from '../../../services/auth.service'
import {useHistory} from 'react-router-dom'
const loginSchema = Yup.object().shape({
  /*   cin: Yup.string()
    .cin('Wrong cin format')
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('cin is required') ,*/
  password: Yup.string(),
  /* .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Password is required'), */
})

const initialValues = {
  cin: '',
  password: '',
}

/*
  Formik+YUP+Typescript:
  https://jaredpalmer.com/formik/docs/tutorial#getfieldprops
  https://medium.com/@maurice.de.beijer/yup-validation-and-typescript-and-formik-6c342578a20e
*/

export function Login() {
  let history = useHistory()
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: (values, {setStatus, setSubmitting}) => {
      console.log('aaaaaaaaaaaaaaaaaaaa')

      setLoading(true)
      setTimeout(() => {
        console.log(values.cin)

        login(values.cin, values.password)
          .then((data: any) => {
            console.log('LOGINNNNN')
            console.dir(data.data)

            localStorage.setItem('user', JSON.stringify(data.data))

            setLoading(false)
            dispatch(auth.actions.login(data.data.api_token))
          }) /*AuthService.login(values.cin, values.password)
          .then(() => {
            history.push('/dashboard')
          })*/
          .catch((error) => {
            console.log('ya7')
            console.log(error)

            setLoading(false)
            setSubmitting(false)
            setStatus('The login detail is incorrect')
          })
      }, 1000)
    },
  })

  return (
    <form
      className='form w-100'
      onSubmit={formik.handleSubmit}
      noValidate
      id='kt_login_signin_form'
    >
      {/* begin::Heading */}
      <div className='text-center mb-10'>
        <h1 className='text-dark mb-3'>S'authentifier</h1>
      </div>
      {/* begin::Heading */}

      {/* begin::Form group */}
      <div className='fv-row mb-10'>
        <label className='form-label fs-6 fw-bolder text-dark'>cin</label>
        <input
          placeholder='cin'
          {...formik.getFieldProps('cin')}
          className={clsx(
            'form-control form-control-lg form-control-solid',
            {'is-invalid': formik.touched.cin && formik.errors.cin},
            {
              'is-valid': formik.touched.cin && !formik.errors.cin,
            }
          )}
          type='cin'
          name='cin'
          autoComplete='off'
        />
        {formik.touched.cin && formik.errors.cin && (
          <div className='fv-plugins-message-container'>
            <span role='alert'>{formik.errors.cin}</span>
          </div>
        )}
      </div>
      {/* end::Form group */}

      {/* begin::Form group */}
      <div className='fv-row mb-10'>
        <div className='d-flex justify-content-between mt-n5'>
          <div className='d-flex flex-stack mb-2'>
            {/* begin::Label */}
            <label className='form-label fw-bolder text-dark fs-6 mb-0'>Password</label>
            {/* end::Label */}
            {/* begin::Link */}
            <Link
              to='/auth/forgot-password'
              className='link-primary fs-6 fw-bolder'
              style={{marginLeft: '5px'}}
            >
              Forgot Password ?
            </Link>
            {/* end::Link */}
          </div>
        </div>
        <input
          type='password'
          autoComplete='off'
          {...formik.getFieldProps('password')}
          className={clsx(
            'form-control form-control-lg form-control-solid',
            {
              'is-invalid': formik.touched.password && formik.errors.password,
            },
            {
              'is-valid': formik.touched.password && !formik.errors.password,
            }
          )}
        />
        {formik.touched.password && formik.errors.password && (
          <div className='fv-plugins-message-container'>
            <div className='fv-help-block'>
              <span role='alert'>{formik.errors.password}</span>
            </div>
          </div>
        )}
      </div>
      {/* end::Form group */}

      {/* begin::Action */}
      <div className='text-center'>
        <button
          type='submit'
          id='kt_sign_in_submit'
          className='btn btn-lg btn-primary w-100 mb-5'
          disabled={formik.isSubmitting || !formik.isValid}
        >
          {!loading && <span className='indicator-label'>Continue</span>}
          {loading && (
            <span className='indicator-progress' style={{display: 'block'}}>
              Please wait...
              <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
            </span>
          )}
        </button>
      </div>
    </form>
  )
}
