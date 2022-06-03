import React, {useState} from 'react'
import {KTSVG} from '../../../_metronic/helpers/components/KTSVG'

export default function DéposerAnnonce() {
  const [resultatFile, setResultatFile] = useState<[]>([])

  const selectFiles = (event: any) => {
    setResultatFile(event.target.files)
  }
  return (
    <>
      <div
        className='alert alert-dismissible  d-flex flex-column flex-sm-row p-5 mb-10'
        style={{backgroundColor: '#50cd89'}}
      >
        <div className='d-flex flex-column  pe-0 pe-sm-10'>
          <h5 className='mb-1'>Alert</h5>
          <span style={{color: 'white'}}>Fichier importé !</span>
        </div>
      </div>
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
            Déposer Votre Annonce ici...
          </div>
          <img
            className='w-100 card-rounded-bottom'
            alt=''
            src='assets/media/svg/illustrations/bg-4.svg'
          />
        </div>
      </div>

      <div className='py-5'>
        <table className='table table-row-dashed table-row-gray-300 gy-7'>
          <thead>
            <tr className='fw-bolder fs-6 text-gray-800'>
              <th>Joindre Fichier</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {' '}
                <input type='file' multiple id='files' onChange={selectFiles} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
