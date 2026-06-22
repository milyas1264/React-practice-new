/* eslint-disable no-unused-vars */

import React from "react";
import Header from "./components/Header";
import Counter from "./components/Counter";
import Todo from "./components/Todo";
import Testmap from "./components/Testmap";
import Footer from "./components/Footer";
import ProductCard from "./components/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import index from "./index.css";
import MyClass from "./components/MyClass.jsx";
import Employee from "./components/Employee.jsx";
import DesturcrProps from "./components/DesturcrProps.jsx";
import BindingEvent from "./components/BindingEvent.jsx";
import Mounting1 from "./components/Mounting1.jsx";
import Updating1 from "./components/Updating1.jsx";
import ParentComponent from "./components/ParentComponent.jsx";
import Compponent1 from "./components/Component1.jsx";
import Component2 from "./components/Component2.jsx";
import Students from "./components/Students.jsx";
import CssStyleSheet from "./components/CssStyleSheet.jsx";
import BsComponent from "./components/BsComponent.jsx";

function App() {
  const headerInfo = {
    name: "John Doe",
    className: "10th Grade",
    age: 16,
  };

  // const name = "Abdul";
  // let data;
  // if (name == "Ilyas") {
  //   data = <Component1 />;
  // } else {
  //   data = <Component2 />;
  // }
  const name = "Ilyas";
  let age1 = 19;
  return (
    <div>
      {" "}
      {/* <h1>Welcome to My React App Practice</h1>
    //     <Header
    //       email="abc123@gmail.com"
    //       phone="123456789"
    //       name={headerInfo.name}
    //       className={headerInfo.className}
    //       age={headerInfo.age}
    //     >
    //       <h2>hdsfhsk</h2>
    //       <h2>Welcome</h2>
    //     </Header>
    //     <Counter />
    //     <Todo />
    //     <Testmap />
    //     <Footer />
    //     <h2>This is the card section</h2>
    //     <div
    //       className="container-fluid"
    //       style={{
    //         display: "flex",
    //         flexWrap: "wrap",
    //         gap: "20px",
    //         justifyContent: "space-around",
    //         padding: "20px 0",
    //       }}
    //     >
    //       <ProductCard />
    //       <ProductCard />
    //       <ProductCard />
    //       <ProductCard />

       </div> */}{" "}
      {/* <MyClass name="Ilyas" age={53} />
    //     <Employee name="Ali kuli Khan is props" />
    //     <DesturcrProps name="Destructure this in class " age={55} />
    //     <BindingEvent /> */}
      {/* <Mounting1 city="Karachi" />
      <Updating1 />
      <ParentComponent /> */}
      <div>
        {/* {data} */}
        {name == "waqar" && <h1>Hello waqar</h1>}
        {/* {age1 >= 18 ? <h1>you can vote</h1> : <h1>you can not vote</h1>} */}
        {name == "Ilyas" ? <Compponent1 /> : <Component2 />}
      </div>
      <Students />
      <CssStyleSheet check={true} />
      <BsComponent />
    </div>
  );
}

export default App;
