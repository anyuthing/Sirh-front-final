/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../_metronic/helpers'
import {Link} from 'react-router-dom'
import {Dropdown1} from '../../../_metronic/partials'
import {useLocation} from 'react-router-dom'

const ProfileHeader: React.FC = () => {
  const location = useLocation()

  return (
    <div className='card mb-5 mb-xl-10'>
      <div className='card-body pt-9 pb-0'>
        <div className='d-flex flex-wrap flex-sm-nowrap mb-3'>
          <div className='me-7 mb-4'>
            <div className='symbol symbol-100px symbol-lg-160px symbol-fixed position-relative'>
              <img src={toAbsoluteUrl('/media/avatars/300-1.jpg')} alt='Metornic' />
              <div className='position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-white h-20px w-20px'></div>
            </div>
          </div>

          <div className='flex-grow-1'>
            <div className='d-flex justify-content-between align-items-start flex-wrap mb-2'>
              <div className='d-flex flex-column'>
                <div className='d-flex align-items-center mb-2'>
                  <a href='#' className='text-gray-800 text-hover-primary fs-2 fw-bolder me-1'>
                    Firas Soudeni
                  </a>
                  <a href='#'></a>
                </div>

                <div className='d-flex flex-wrap fw-bold fs-6 mb-4 pe-2'>
                  <a
                    href='#'
                    className='d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2'
                  >
                    <KTSVG
                      path='/media/icons/duotune/communication/com006.svg'
                      className='svg-icon-4 me-1'
                    />
                    Technicien
                  </a>
                </div>
              </div>

              <div className='d-flex my-4'>
                <a href='#' className='btn btn-sm btn-light me-2' id='kt_user_follow_button'>
                  <KTSVG
                    path='/media/icons/duotune/arrows/arr012.svg'
                    className='svg-icon-3 d-none'
                  />

                  <span className='indicator-progress'>
                    Please wait...
                    <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                  </span>
                </a>
              </div>
              <div className='py-5'>
                <table className='table table-row-dashed table-row-gray-300 gy-7'>
                  <thead>
                    <tr className='fw-bolder fs-6 text-gray-800'>
                      <th>Nom</th>
                      <th>Mot de passe</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        {' '}
                        <input
                          type='text'
                          id='userName'
                          className='form-control form-control-white'
                          style={{backgroundColor: '#BBC8CA'}}
                        />
                      </td>
                      <td>
                        {' '}
                        <input
                          type='text'
                          id='userName'
                          className='form-control form-control-white'
                          style={{backgroundColor: '#BBC8CA'}}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td style={{color: 'black', fontWeight: 'Bold'}}>Enfants</td>
                      <td>
                        <table
                          id='childrenArray'
                          className='table table-row-dashed table-row-gray-300 gy-7'
                        >
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
                            <tr>
                              <td>
                                {' '}
                                <input
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
                                  className='required form-select'
                                  aria-label='Select example'
                                  style={{
                                    marginBottom: '0px',
                                    backgroundColor: '#BBC8CA',
                                  }}
                                  required
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
                                  id='education'
                                  className='required form-select'
                                  aria-label='Select example'
                                  style={{
                                    backgroundColor: '#BBC8CA',
                                  }}
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
                                  className='required form-select'
                                  aria-label='Select example'
                                  style={{
                                    backgroundColor: '#BBC8CA',
                                  }}
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
                                  className='required form-select'
                                  aria-label='Select example'
                                  style={{
                                    backgroundColor: '#BBC8CA',
                                  }}
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
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export {ProfileHeader}
