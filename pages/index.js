import React, { useState } from 'react';
import AuthScreen from '../components/auth/AuthScreen';
import { SessionContext } from '../providers/sessionContext';
import { HomeScreen } from '../blocks/home';

export default function Home() {
  const [session, setSession] = useState({});

  return (
    <>
      <SessionContext.Provider value={{ session, setSession }}>
        {
          !session.email ? <AuthScreen/> : <HomeScreen/>
        }
      </SessionContext.Provider>
    </>
  );
}
