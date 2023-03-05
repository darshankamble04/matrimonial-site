import React from 'react'
import Sidebar from '../../../common/sidebar/Sidebar'
import '../css/search.css'
function Search() {
  return (
    <div className='d-flex'>
    <Sidebar />
    <main className="mainD">
        <div className="container mt-4">
            <input className='searchBar' placeholder='Enter your key to search ' type="text" name="" id="" />
        </div>
    </main>
</div>
  )
}

export default Search