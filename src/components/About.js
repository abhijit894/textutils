import React, { useState } from "react";

export default function About() {

    const [mystyle, setMyStyle] = useState(
      {
        color: 'black',
        backgroundColor: 'white'
    })
    const [btntext, setBtnText] = useState("Enable Dark Mode")
    
    const toggleStyle = ()=>{
      if(mystyle.color === 'black'){
        setMyStyle({
          color: 'white',
          backgroundColor: 'black',
          border: '1px solid white'
        })
        setBtnText("Enable Light Mode")
    
      
      }
      else{
        setMyStyle({
          color: 'black',
          backgroundColor: 'white'
        })
        setBtnText("Enable Dark Mode")
      }
    }
    
    
  return (
    <div ClassNameName="Container" style={mystyle}>
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
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            ClassName="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div ClassName="accordion-body" style={mystyle}>
              <strong>This is the first item’s accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              ClassNamees that we use to style each element. These ClassNamees control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It’s also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
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
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            ClassName="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div ClassName="accordion-body" style={mystyle}>
              <strong>This is the second item’s accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              ClassNamees that we use to style each element. These ClassNamees control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It’s also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
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
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            ClassName="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div ClassName="accordion-body" style={mystyle}>
              <strong>This is the third item’s accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              ClassNamees that we use to style each element. These ClassNamees control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It’s also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
      <div ClassName="my-3">
        <button onClick={toggleStyle} type="button" ClassName="btn btn-primary">{btntext}</button>
      </div>
    
    </div>
  );
}
