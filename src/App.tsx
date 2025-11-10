import React from 'react'
import './App.css'
import { observer } from 'mobx-react-lite'
import { Notifications } from './components/notifications/Notifications'
import { AuthSection } from './components/authSection/AuthSection'
import { UserPanel } from './components/userPanel/UserPanel'

const App: React.FC = observer(() => {

  return (
    <>
      <Notifications />
      <UserPanel />
      <AuthSection />
    </>
  )
})

export default App
