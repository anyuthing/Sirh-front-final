/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import {useIntl} from 'react-intl'
import {KTSVG} from '../../../helpers'
import {AsideMenuItemWithSub} from './AsideMenuItemWithSub'
import {AsideMenuItem} from './AsideMenuItem'

export function AsideMenuMain() {
  const intl = useIntl()

  return (
    <>
      <AsideMenuItem
        to='/dashboard'
        icon='/media/icons/duotune/art/art002.svg'
        title={intl.formatMessage({id: 'Tableau de bord'})}
        fontIcon='bi-app-indicator'
      />
      <AsideMenuItem
        to='/DéposerAnnonce'
        icon='/media/icons/duotune/art/art002.svg'
        title={intl.formatMessage({id: 'Déposer une annoce'})}
        fontIcon='bi-app-indicator'
      />
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span style={{color: 'white'}}>Espace staff</span>
        </div>
      </div>
      <AsideMenuItem
        to='/AjouterDemandeRentréeScolaire'
        icon='/media/icons/duotune/general/gen035.svg'
        title='Demande Rentrée Scolaire'
        fontIcon='svg-icon-muted svg-icon-2hx'
      />
      <AsideMenuItem
        to='/AjouterDemandeJournéeScientifique'
        icon='/media/icons/duotune/general/gen035.svg'
        title='Demande Journée scientifique'
        fontIcon='svg-icon-muted svg-icon-2hx'
      />
      <AsideMenuItem
        to='/AjouterDemandePret'
        icon='/media/icons/duotune/general/gen035.svg'
        title='Demande de Pret'
        fontIcon='svg-icon-muted svg-icon-2hx'
      />

      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span style={{color: 'white'}}>Géstion personnels</span>
        </div>
      </div>
      <AsideMenuItem
        to='/StaffManagment'
        icon='/media/icons/duotune/text/txt001.svg'
        title='Listes Personnels'
        fontIcon='svg-icon-muted svg-icon-2hx'
      />
      <AsideMenuItem
        to='/AddStaff'
        icon='/media/icons/duotune/general/gen035.svg'
        title='Ajouter Personnel'
        fontIcon='svg-icon-muted svg-icon-2hx'
      />
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span style={{color: 'white'}}>Géstion Rentrée Scolaire</span>
        </div>
      </div>

      <AsideMenuItem
        to='/ListesDemandeRentréeScolaire'
        icon='/media/icons/duotune/text/txt001.svg'
        title='Listes Demandes Rentrée Scolaire'
        fontIcon='svg-icon-muted svg-icon-2hx'
      />
      <AsideMenuItem
        to='/GénererRapport'
        icon='/media/icons/duotune/general/gen005.svg'
        title='Génerer le rapport'
        fontIcon='svg-icon-muted svg-icon-2hx'
      />
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span style={{color: 'white'}}>Géstion Journée scientifique</span>
        </div>
      </div>
      <AsideMenuItem
        to='/ListesDemandeJournéeScientifique'
        icon='/media/icons/duotune/text/txt001.svg'
        title='Listes Demandes Journée Scientifique'
        fontIcon='svg-icon-muted svg-icon-2hx'
      />
      <AsideMenuItem
        to='/GénererRapportJs'
        icon='/media/icons/duotune/general/gen005.svg'
        title='Génerer le rapport'
        fontIcon='svg-icon-muted svg-icon-2hx'
      />
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span style={{color: 'white'}}>Géstion des Avancements Sur Salaire</span>
        </div>
      </div>
      <AsideMenuItem
        to='/ListeDemandePret'
        icon='/media/icons/duotune/text/txt001.svg'
        title='Listes Demandes Avancements Sur Salaire'
        fontIcon='svg-icon-muted svg-icon-2hx'
      />
      <AsideMenuItem
        to='/GénererRapportPret'
        icon='/media/icons/duotune/general/gen005.svg'
        title='Génerer le rapport de pret'
        fontIcon='svg-icon-muted svg-icon-2hx'
      />
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span style={{color: 'white'}}>Applications</span>
        </div>
      </div>
      <AsideMenuItemWithSub
        to='/apps/chat'
        title='Messagerie'
        fontIcon='bi-chat-left'
        icon='/media/icons/duotune/communication/com012.svg'
      >
        <AsideMenuItem to='/apps/chat/private-chat' title='Private Chat' hasBullet={true} />
        <AsideMenuItem to='/apps/chat/group-chat' title='Group Chart' hasBullet={true} />
        <AsideMenuItem to='/apps/chat/drawer-chat' title='Drawer Chart' hasBullet={true} />
      </AsideMenuItemWithSub>
      <div className='menu-item'>
        <div className='menu-content'>
          <div className='separator mx-1 my-4'></div>
        </div>
      </div>
    </>
  )
}
