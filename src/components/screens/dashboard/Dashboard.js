import React from 'react'
import Header from '../../common/header/Header'
import Sidebar from '../../common/sidebar/Sidebar'
import DataCard from './components/DataCard'
import Topbar from './components/Topbar'
import "./css/dashboard.css"
function Dashboard() {
  return (
    <>
     <div className='d-flex'>
        <Sidebar/>
        <main className="mainD">
            <Topbar/>
            <div className="dataCardColl d-flex flew-wrap">
              {/* recently viewed Profiles
              no of notification
              Expectation 
              feedback
              profile completeness percent 
              request  
              multiple photos  */}
              
              <DataCard imgUrl="https://notebook-covers.s3.us-west-2.amazonaws.com/g1.jpg"/>
              <DataCard imgUrl="https://notebook-covers.s3.us-west-2.amazonaws.com/g2.jpg"/>
              {/* <DataCard imgUrl="https://notebook-covers.s3.us-west-2.amazonaws.com/g3.jpg"/><br />
              <DataCard imgUrl="https://notebook-covers.s3.us-west-2.amazonaws.com/g4.jpg"/> */}
            </div>
        </main>
     </div>
      

    </>
  )
}

export default Dashboard