import React, { useState } from 'react';
import Nav from './components/Nav';
import NavPh from './components/NavPh';

function App() {
  const [width,setWidth] = useState("");
  
  window.setInterval(lio,1000);
  function lio(){
    setWidth(window.innerWidth);
  }

  return (<div className='container'>
    {width<800?<NavPh/>:<Nav/>}

    {/* <Nav/> */}
    <div className='main-cont'>
      <div className='inner'>
        <div className='top'>
          <h4>UI/UX > Refer & Earn > Friends Referred </h4>
        </div>
        {width<800?<div className='back'>
        ← go back
        </div>:null}
        <div className='code'>
          <div className='ref'>
            <p>Your Referral Code</p>
            <div className='box'>
            EDCH54</div>
          </div>
          <div className='bal'>
            <p className='wl'>Wallet Balance</p>
            <p className='plz'>₹ 500</p>
          </div>
        </div>
        <div className='items'>
          <h3>Friends who enrolled<p>(3)</p></h3>
          <div className='boxes'>
            <div className='cardIn'>
            <div className='card'>
              <div className='head-dt'>
                <h4>Dhiraj Saxsena</h4><p>14 Sep, 2022</p>
              </div>
              <div className='course'>
                <p>Courses enrolled(6)</p>
                <div className='course-name'>
                  <h5 className='course-card'>UI/UX</h5>
                  <h5 className='course-card'>Photoshop</h5>
                  <h5 className='course-card'>Illustrator</h5>
                  <h5 className='course-card'>Python</h5>
                  <h5 className='course-card'>MERN</h5>
                  <h5 className='course-card'>Java</h5>
                </div>
                
              </div>
              <div className='amount'>
                  <p>Referral Amount </p>
                  <p className='bot'>₹185</p>
                  
                </div>
            </div>
            <div className='card'>
              <div className='head-dt'>
                <h4>Subhash Mishra</h4><p>15 Sep, 2022</p>
              </div>
              <div className='course'>
                <p>Courses enrolled(23)</p>
                <div className='course-name'>
                  <h5 className='course-card'>UI/UX</h5>
                  <h5 className='course-card'>Photoshop</h5>
                  <h5 className='course-card'>Illustrator</h5>
                  <h5 className='course-card'>Python</h5>
                  <h5 className='course-card'>MERN</h5>
                  <h5 className='course-card'>Java</h5>
                </div>
                
              </div>
              <div className='amount'>
                  <p>Referral Amount </p>
                  <p className='bot'>₹485</p>
                  
                </div>
            </div>
            <div className='card'>
              <div className='head-dt'>
                <h4>Prafull Kumar</h4><p>14 Sep, 2022</p>
              </div>
              <div className='course'>
                <p>Courses enrolled(23)</p>
                <div className='course-name'>
                  <h5 className='course-card'>UI/UX</h5>
                  <h5 className='course-card'>Photoshop</h5>
                  <h5 className='course-card'>Illustrator</h5>
                  <h5 className='course-card'>Python</h5>
                  <h5 className='course-card'>MERN</h5>
                  <h5 className='course-card'>Java</h5>
                </div>
                
              </div>
              <div className='amount'>
                  <p>Referral Amount </p>
                  <p className='bot'>₹485</p>
                  
                </div>
            </div>
            </div>
          </div>
        </div>

      </div>
      <div className='terms'>Terms & Conditions</div>
    </div>

  </div>
  );
}

export default App;
