import React from 'react'
import { Link } from 'react-router-dom'

export default function Navjustic() {
  return (
    <div className="nav2">
    <div className="nav2-div">
      <img className="nav2-img" src="images/logo.png" alt="logo"/>
    </div>
    {/* <!-- Lawyer --> */}
    <div className="nav2-div lawyer">
      <i className="fa-solid fa-print"></i>
      <label htmlFor="lawyer">Lawyer
        {/* <!-- Hover--> */}
        <div className="lawyer-hover">
          <div className="lawyer-hover-div">
            <div className="lawyer-hover-div2">
              <div><i className="fa-regular fa-hand-point-right"></i><Link className="hover-div-a"
                  to="">Corporate Lawyer</Link></div>
            </div>
            <div className="lawyer-hover-div2">
              <div>
                <img src="" alt=""/>
              </div>
              <div><Link className="hover-div-a" to=""> <i className="fa-regular fa-hand-point-right"></i>Family Lawyer</Link></div>
            </div>
            <div className="lawyer-hover-div2">
              <div><i className="fa-regular fa-hand-point-right"></i><Link className="hover-div-a"
                  to="/servicelisting">Criminal Lawyer</Link>
              </div>
            </div>
          </div>
          <div className="lawyer-hover-div">
            <div className="lawyer-hover-div2">
              <div><i className="fa-regular fa-hand-point-right"></i><Link className="hover-div-a" to="">Dispute Lawyer</Link></div>
            </div>
            <div className="lawyer-hover-div2">
              <div><i className="fa-regular fa-hand-point-right"></i><Link className="hover-div-a">Civil Lawyer</Link></div>
            </div>
          </div>
        </div>
      </label>
    </div>
    {/* <!-- Arbitators --> */}
    <div className="nav2-div2 arbitators" id="arbitators"><i className="fa-solid fa-gavel"></i>
      <label htmlFor="arbitators">Arbitators
        {/* <!-- Hover--> */}
        <div className="arbitators-hover">
          <div className="arbitators-hover-div">
            <div className="arbitators-hover-div2">
              <div><i className="fa-regular fa-hand-point-right"></i><Link className="hover-div-a" to="">Sole Arbitrators</Link></div>
            </div>
            <div className="arbitators-hover-div2">
              <div><i className="fa-regular fa-hand-point-right"></i><Link className="hover-div-a" to="">Legal Arbitrators</Link></div>
            </div>
            
          </div>
        </div>
      </label>
    </div>
    {/* <!-- Document Writers --> */}
    <div className="nav2-div2 document-writer" id="document-writer"><i className="fa-solid fa-layer-group"></i>
      <label htmlFor="lawyer">Document Writer
        {/* <!-- Hover--> */}
        <div className="document-writer-hover">
          <div className="document-writer-hover-div">
            <div className="document-writer-hover-div2">
              <div><i className="fa-regular fa-hand-point-right"></i><Link className="hover-div-a" to="">Legal Secretaries</Link></div>
            </div>
            <div className="document-writer-hover-div2">
              <div><i className="fa-regular fa-hand-point-right"></i><Link className="hover-div-a" to="">Real Estate Document Writers</Link></div>
            </div>
            <div className="document-writer-hover-div2">
              <div><i className="fa-regular fa-hand-point-right"></i><Link className="hover-div-a" to="">Family Law Document Preparers</Link>
              </div>
            </div>
          </div>
          <div className="document-writer-hover-div">
            <div className="document-writer-hover-div2">
              <div><i className="fa-regular fa-hand-point-right"></i><Link className="hover-div-a" to="">Court Reporter</Link></div>
            </div>
            <div className="document-writer-hover-div2">
              <div><i className="fa-regular fa-hand-point-right"></i><Link className="hover-div-a">Immigration Document Preparers</Link></div>
            </div>
          </div>
        </div>
      </label>
    </div>
    {/* <!-- Mediators --> */}
    <div className="nav2-div2 mediators" id="mediators"><i className="fa-solid fa-newspaper"></i>
      <label htmlFor="mediators">Mediators
        {/* <!-- Hover--> */}
        <div className="mediators-hover">
          <div className="mediators-hover-div">
            <div className="mediators-hover-div2">
              <div><i className="fa-regular fa-hand-point-right"></i><Link className="hover-div-a" to="">General Mediators</Link></div>
            </div>
            <div className="mediators-hover-div2">
              <div><i className="fa-regular fa-hand-point-right"></i><Link className="hover-div-a" to="">Family Mediators</Link></div>
            </div>
            <div className="mediators-hover-div2">
              <div><i className="fa-regular fa-hand-point-right"></i><Link className="hover-div-a" to="">Community Mediators</Link>
              </div>
            </div>
          </div>
          <div className="mediators-hover-div">
            <div className="mediators-hover-div2">
              <div><i className="fa-regular fa-hand-point-right"></i><Link className="hover-div-a" to="">Online Mediators</Link></div>
            </div>
          </div>
        </div>
      </label>
    </div>
  
    <div>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-dark" type="submit">Search</button>
      </form>
    </div>
  
  </div>
  )
}
