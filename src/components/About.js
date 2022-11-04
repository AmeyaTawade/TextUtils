import React, { useState } from "react";

export default function About(props) {
    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: "white"
    // })

    let myStyle ={
        color : props.mode === 'dark'?'white':'#1f1f4a',
        backgroundColor : props.mode === 'dark'?'#1f1f4a':'white',
        border : '1px solid',
        borderColor: props.mode === 'dark'?'white':'#1f1f4a'
    }
    
    return (
        <div className="container" style={{color : props.mode === 'dark'?'white':'#1f1f4a'}}>
            <h1 className="my-3">About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyze your text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            TextUtils gives you a way to analyze your text quickly and efficiently.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Free to Use</strong> 
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, culpa? Nulla recusandae fugit, atque,
                            laudantium ducimus debitis accusantium odio fugiat porro doloremque quam maxime quasi assumenda ea facere, nemo modi.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Browser Compatible</strong> 
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, facilis eligendi accusamus rerum quaerat fugiat libero perspiciatis, 
                           asperiores perferendis eaque nostrum consectetur temporibus! Quia esse, architecto iusto impedit ullam aperiam?
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
