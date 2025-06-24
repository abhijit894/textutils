import React, { useState } from "react";

export default function About(props) {

    // const [mystyle, setMyStyle] = useState(
    //   {
    //     color: 'black',
    //     backgroundColor: 'white'
    // })

    let mystyle = {
      color: props.mode === 'dark'?'white' : '#042743',
      backgroundColor: props.mode === 'dark'? 'rgb(36 74 104)' : 'white',
      border : '2px solid',
      borderColor: props.mode === 'dark'?'white' : '#042743'
    }
    
  return (
    <div ClassNameName="Container " style={{color: props.mode === 'dark'?'white' : '#042743'}}>
      <h2 ClassNameName="my-10">About us</h2>
      <div ClassName="accordion" id="accordionExample">
        <div ClassName="accordion-item">
          <h2 ClassName="accordion-header">
            <button
              ClassName="accordion-button"
              type="button"style={mystyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Analyze Your Text
            </button>
          </h2>
          <div
            id="collapseOne"
            ClassName="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div ClassName="accordion-body" style={mystyle}>
              <strong>This is the first item’s accordion body.</strong> It is
               Quickly analyze your text for word count, character count, and reading time.
            </div>
          </div>
        </div>
        <div ClassName="accordion-item" >
          <h2 ClassName="accordion-header">
            <button
              ClassName="accordion-button collapsed"style={mystyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Free to Use
            </button>
          </h2>
          <div
            id="collapseTwo"
            ClassName="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div ClassName="accordion-body" style={mystyle}>
              TextUtils is completely free and available for everyone.
            </div>
          </div>
        </div>
        <div ClassName="accordion-item">
          <h2 ClassName="accordion-header">
            <button
              ClassName="accordion-button collapsed"style={mystyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Browser Compatible 
            </button>
          </h2>
          <div
            id="collapseThree"
            ClassName="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div ClassName="accordion-body" style={mystyle}>
               Works seamlessly on all modern web browsers without any installation.
            </div>
          </div>
        </div>
      </div>
      {/* <div ClassName="my-3">
        <button onClick={toggleStyle} type="button" ClassName="btn btn-primary">{btntext}</button>
      </div> */}
    
    </div>
  );
}
