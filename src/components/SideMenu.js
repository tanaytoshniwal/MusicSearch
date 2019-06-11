import React from 'react'
import './SideMenu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdBadge } from '@fortawesome/free-solid-svg-icons'
function SideMenu() {
    return (
        <div>
            <nav id="main-menu" className="mdl-navigation pt-0">
          <div className="container justify-content-center navbg py-3">
              <div className="row justify-content-center p-2">
                  <img src="https://tanaytoshniwal.me/assets/images/icon_favo.jpg" alt="image" className="img-fluid avatar avatar-xxl depth" />
              </div>
              <div className="row justify-content-center my-2">
                  <span className="title text-center font-pacifico magic-text">Tanay Toshniwal</span>
              </div>
          </div>
          <div className="container-fluid p-1">
              <ul className="list-group mt-md-4">
                  <a tabIndex="-1" href="http://tanaytoshniwal.me" target="_blank" className="remove-decoration">
                      <li className="list-group-item bg-transparent nav-item ">
                          <span className="font-oxygen nav-span black">
                            <FontAwesomeIcon icon={faIdBadge}/>
                              <span className="text-right ml-md-5 ml-3">Portfolio</span>
                          </span>
                      </li>
                  </a>
                  <a tabIndex="-1" href="https://github.com/tanaytoshniwal" target="_blank" className="remove-decoration">
                      <li className="list-group-item bg-transparent nav-item ">
                          <span className="font-oxygen nav-span black">
                            <FontAwesomeIcon icon={faIdBadge}/>
                              <span className="text-right ml-md-5 ml-3">GitHub</span>
                          </span>
                      </li>
                  </a>
                  <a tabIndex="-1" href="https://twitter.com/TanayToshniwal" target="_blank" className="remove-decoration">
                      <li className="list-group-item bg-transparent nav-item ">
                          <span className="font-oxygen nav-span black">
                            <FontAwesomeIcon icon={faIdBadge}/>
                              <span className="text-right ml-md-5 ml-3">Twitter</span>
                          </span>
                      </li>
                  </a>
                  <a tabIndex="-1" href="https://www.linkedin.com/in/tanay-toshniwal/" target="_blank" className="remove-decoration">
                      <li className="list-group-item bg-transparent nav-item ">
                          <span className="font-oxygen nav-span black">
                            <FontAwesomeIcon icon={faIdBadge}/>
                              <span className="text-right ml-md-5 ml-3">Linked In</span>
                          </span>
                      </li>
                  </a>
                  <a tabIndex="-1" href="https://medium.com/tanay-toshniwal" target="_blank" className="remove-decoration">
                      <li className="list-group-item bg-transparent nav-item ">
                          <span className="font-oxygen nav-span black">
                            <FontAwesomeIcon icon={faIdBadge}/>
                              <span className="text-right ml-md-5 ml-3">Medium</span>
                          </span>
                      </li>
                  </a>
                  <a tabIndex="-1" href="https://www.instagram.com/tanaytoshniwal/" target="_blank" className="remove-decoration">
                      <li className="list-group-item bg-transparent nav-item ">
                          <span className="font-oxygen nav-span black">
                            <FontAwesomeIcon icon={faIdBadge}/>
                              <span className="text-right ml-md-5 ml-3">Instagram</span>
                          </span>
                      </li>
                  </a>
                  <a tabIndex="-1" href="https://www.facebook.com/tanay.toshniwal" target="_blank" className="remove-decoration">
                      <li className="list-group-item bg-transparent nav-item ">
                          <span className="font-oxygen nav-span black">
                            <FontAwesomeIcon icon={faIdBadge}/>
                              <span className="text-right ml-md-5 ml-3">Facebook</span>
                          </span>
                      </li>
                  </a>
                  <a tabIndex="-1" href="mailto:contact@tanaytoshniwal.com" target="_blank" className="remove-decoration">
                      <li className="list-group-item bg-transparent nav-item ">
                          <span className="font-oxygen nav-span black">
                            <FontAwesomeIcon icon={faIdBadge}/>
                              <span className="text-right ml-md-5 ml-3">Contact</span>
                          </span>
                      </li>
                  </a>
              </ul>
          </div>
      </nav>
        </div>
    )
}

export default SideMenu
