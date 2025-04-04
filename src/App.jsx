import Header from './components/layout/header';
import Footer from './components/layout/footer';
import { Outlet } from 'react-router-dom';
import { getAccountAPI } from './service/api.service';
import { useContext, useEffect } from 'react';
import { AuthContext } from './components/context/auth.context';

const ParentComponent = (props) => {
  console.log(">>> check props :", props);

  return (
    <>
      <div>parent component</div>
      {props.children}
    </>
  )
}

const ChildComponent = (props) => {
  return (
    <div>child component</div>
  )
}

const App = () => {

  const { setUser } = useContext(AuthContext)

  useEffect(() => {
    fetchUserInfor();
  }, [])

  const delay = (milSeconds) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, milSeconds)
    })
  }

  const fetchUserInfor = async () => {
    const res = await getAccountAPI();
    await delay(3000);
    if (res.data) {
      //success
      setUser(res.data.user)
      console.log(">>> check user data:", res.data);

    }
  }


  return (
    <>
      {/* video 99 */}
      {/* <ParentComponent>
        abc
        <ChildComponent/>
      </ParentComponent> */}
      {/* video 99 */}

      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
export default App;