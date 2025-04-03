import Header from './components/layout/header';
import Footer from './components/layout/footer';
import { Outlet } from 'react-router-dom';

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