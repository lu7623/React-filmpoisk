import { Outlet } from 'react-router-dom'
import Header from '../../components/Header'

export default function RootLayout() {
  return (
    <>
    <Header />
      <h1>I am root</h1>
      <Outlet/>
    </>
  )
}

