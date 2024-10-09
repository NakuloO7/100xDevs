import { useState, useMemo} from 'react'
import './App.css'
import {RecoilRoot, useRecoilValue, useRecoilState, useSetRecoilState} from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notificationAtom, totalCountSelector } from './atom'

function App() {
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>
  
}

function MainApp(){
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsNotificationCount = useRecoilValue(jobsAtom);
  const messagesNotificationCount =  useRecoilValue(messagingAtom);
  const notificationCount = useRecoilValue(notificationAtom);
  const totalnotificationCount = useRecoilValue(totalCountSelector);

  //one approach can be using useMemo  -- but the recoil one the better apporach
  // const totalnotificationCount = useMemo(()=>{
  //   return networkNotificationCount + jobsNotificationCount + messagesNotificationCount + notificationCount;
  // },[networkNotificationCount , jobsNotificationCount ,messagesNotificationCount ,notificationCount])
 
  return (
    <>
    <button>Home</button>

    <button>My Network({networkNotificationCount >= 99 ? "99+" : networkNotificationCount})</button>
    <button>Jobs ({jobsNotificationCount})</button>
    <button>Messages ({messagesNotificationCount})</button>
    <button>Notifications ({notificationCount})</button>

    <button>Me ({totalnotificationCount})</button>
   
    </>
  )
}

export default App
