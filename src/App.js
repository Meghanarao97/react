import logo from "./logo.svg";
// import "./App.css";
import Logincomponent from "./Logincomponent";
import Signupcomponent from "./Signupcomponent";
import Dashboard from "./Containers/Dashboard";
import PositionsComponets from "./Containers/PositionsComponets";
import LifecycleMethods from "./LifecycleMethods";
import LifecyclemethodParent from "./LifecyclemethodParent";
import DataFetch from "./DataFetch/DataFetch";
import UseEffect from "./UseEffect/UseEffect";
import FormsHooks from "./Hooks/FormsHooks";
import ReactForms from "./ValidationWithLibrary/ReactForms";
import UseEffectCount from "./UseEffectCount/UseEffectCount";
import ParentPureComponent from "./PureComponent/ParentPureComponent";
import Ecommerce from "./Ecommerce/Ecommerce";
import UseMemoComponent from "./Hooks/UseMemoComponent";
import HocSampleComponent from "./Hoc/HocSampleComponent";
import HocSampleToDoList from "./Hoc/HocSampleToDoList";
import UseRef from "./Hooks/UseRef/UseRef";
import UncontrolledComponent from "./Hooks/UseRef/UncontrolledComponent";
import CustomHooks from "./CustomHooks/CustomHooks";
import Destructuring from "./ObjectDestructuring/Destructuring";
import AuthenticationComp from "./Context/AuthenticationComp";
import { Context } from "./Context/Context";
import Header from "./Context/Header";

function App() {
  return (
    <div className="App">
      <Logincomponent />
      <Dashboard />
      <PositionsComponets />
      <LifecyclemethodParent />
      <DataFetch />
      <UseEffect />
      <FormsHooks />
      <ReactForms />
      <UseEffectCount />
      <DataFetch />
      <ParentPureComponent />
      <UseMemoComponent />
      <Ecommerce />
      <HocSampleComponent />
      <HocSampleToDoList />
      <UseRef />
      <UncontrolledComponent />
      {/* <CustomHooks /> */}
      <Destructuring />
      <Context>
        <Header />
        <AuthenticationComp />
      </Context>
    </div>
  );
}

export default App;
