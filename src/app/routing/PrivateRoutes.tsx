import React, {Suspense, lazy} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {FallbackView} from '../../_metronic/partials'
import {DashboardWrapper} from '../pages/dashboard/DashboardWrapper'
import {MenuTestPage} from '../pages/MenuTestPage'
import StaffManagment from '../components/StaffManagment/StaffManagment'
import EditStaff from '../components/EditStaff/EditStaff'
import AddStaff from '../components/AddStaff/AddStaff'
import Edit from '../components/Edit'
import AjouterDemandeRen from '../components/AjouterDemandeRen/AjouterDemandeRen'
import ListeDemandeRn from '../components/ListeDemadeRn/ListeDemandeRn'
import ListeDemadeJs from '../components/ListeDemandeJS/ListeDemandeJS'
import GenerateRapport from '../components/GenerateRapport/GenerateRapport'
import AjouterDemandeJS from '../components/AjouterDemandeJS/AjouterDemandeJS'
import GenerateRapportJS from '../components/GenerateRapportJS/GenerateRapportJS'
import AjouterDemandePret from '../components/DéposerDemandePret/DéposerDemandePret'
import ListeDemadePret from '../components/ListeDemandePret/ListeDemandePret'
import ViewDemandePret from '../components/viewDemandePret/ViewDemandePret'
import GenerateRapportPret from '../components/GenerateRapportPret/GenerateRapportPret'
import DéposerAnnonce from '../components/DéposerUneAnnoce/DéposerUneAnnonce'
import Generate from '../components/Generate/Generate'
export function PrivateRoutes() {
  const BuilderPageWrapper = lazy(() => import('../pages/layout-builder/BuilderPageWrapper'))
  const ProfilePage = lazy(() => import('../modules/profile/ProfilePage'))
  const WizardsPage = lazy(() => import('../modules/wizards/WizardsPage'))
  const AccountPage = lazy(() => import('../modules/accounts/AccountPage'))
  const WidgetsPage = lazy(() => import('../modules/widgets/WidgetsPage'))
  const ChatPage = lazy(() => import('../modules/apps/chat/ChatPage'))

  return (
    <Suspense fallback={<FallbackView />}>
      <Switch>
        <Route path='/dashboard' component={DashboardWrapper} />
        <Route path='/EditStaff/:id' component={EditStaff} />
        <Route path='/AddStaff' component={AddStaff} />
        <Route path='/Edit' component={Edit} />
        <Route path='/AjouterDemandeRentréeScolaire' component={AjouterDemandeRen} />
        <Route path='/ListesDemandeRentréeScolaire' component={ListeDemandeRn} />
        <Route path='/GénererRapport' component={GenerateRapport} />
        <Route path='/GénererRapportJs' component={GenerateRapportJS} />
        <Route path='/AjouterDemandeJournéeScientifique' component={AjouterDemandeJS} />
        <Route path='/ListesDemandeJournéeScientifique' component={ListeDemadeJs} />
        <Route path='/AjouterDemandePret' component={AjouterDemandePret} />
        <Route path='/ListeDemandePret' component={ListeDemadePret} />
        <Route path='/ConsulterDemandePret/:id' component={ViewDemandePret} />
        <Route path='/GénererRapportPret' component={GenerateRapportPret} />
        <Route path='/DéposerAnnonce' component={DéposerAnnonce} />

        <Route path='/StaffManagment' component={StaffManagment} />
        <Route path='/builder' component={BuilderPageWrapper} />
        <Route path='/crafted/pages/profile' component={ProfilePage} />
        <Route path='/crafted/pages/wizards' component={WizardsPage} />
        <Route path='/crafted/widgets' component={WidgetsPage} />
        <Route path='/crafted/account' component={AccountPage} />
        <Route path='/apps/chat' component={ChatPage} />
        <Route path='/menu-test' component={MenuTestPage} />
        <Redirect from='/auth' to='/dashboard' />
        <Redirect exact from='/' to='/dashboard' />
        <Redirect to='error/404' />
      </Switch>
    </Suspense>
  )
}
