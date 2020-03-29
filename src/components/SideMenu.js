import React from 'react'
import './SideMenu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdBadge, faMailBulk } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faTwitter, faLinkedin, faMedium, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'
function SideMenu() {
    return (
        <div>
            <nav id="main-menu" className="mdl-navigation pt-0">
          <div className="container justify-content-center navbg p-0">
              <div className="row justify-content-center p-2">
                  <img src="https://tanaytoshniwal.me/assets/images/metest.jpg" alt="tanay toshniwal" className="img-fluid avatar avatar-xxl depth" />
              </div>
              <div className="row justify-content-center my-2">
                  <span><strong className="title text-center font-pacifico">Tanay Toshniwal</strong></span>
              </div>
          </div>
          <div className="container-fluid p-1">
              <ul className="list-group mt-md-4">
                  <a tabIndex="-1" href="http://tanaytoshniwal.me" rel="noopener noreferrer" target="_blank" className="remove-decoration">
                      <li className="list-group-item bg-transparent nav-item ">
                          <span className="font-oxygen nav-span black">
                            <FontAwesomeIcon icon={faIdBadge}/>
                              <span className="text-right ml-md-5 ml-3">Portfolio</span>
                          </span>
                      </li>
                  </a>
                  <a tabIndex="-1" href="https://github.com/tanaytoshniwal" rel="noopener noreferrer" target="_blank" className="remove-decoration">
                      <li className="list-group-item bg-transparent nav-item ">
                          <span className="font-oxygen nav-span black">
                            <FontAwesomeIcon icon={faGithub}/>
                              <span className="text-right ml-md-5 ml-3">GitHub</span>
                          </span>
                      </li>
                  </a>
                  <a tabIndex="-1" href="https://twitter.com/TanayToshniwal" rel="noopener noreferrer" target="_blank" className="remove-decoration">
                      <li className="list-group-item bg-transparent nav-item ">
                          <span className="font-oxygen nav-span black">
                            <FontAwesomeIcon icon={faTwitter}/>
                              <span className="text-right ml-md-5 ml-3">Twitter</span>
                          </span>
                      </li>
                  </a>
                  <a tabIndex="-1" href="https://www.linkedin.com/in/tanay-toshniwal/" rel="noopener noreferrer" target="_blank" className="remove-decoration">
                      <li className="list-group-item bg-transparent nav-item ">
                          <span className="font-oxygen nav-span black">
                            <FontAwesomeIcon icon={faLinkedin}/>
                              <span className="text-right ml-md-5 ml-3">Linked In</span>
                          </span>
                      </li>
                  </a>
                  <a tabIndex="-1" href="https://medium.com/tanay-toshniwal" rel="noopener noreferrer" target="_blank" className="remove-decoration">
                      <li className="list-group-item bg-transparent nav-item ">
                          <span className="font-oxygen nav-span black">
                            <FontAwesomeIcon icon={faMedium}/>
                              <span className="text-right ml-md-5 ml-3">Medium</span>
                          </span>
                      </li>
                  </a>
                  <a tabIndex="-1" href="https://www.instagram.com/tanaytoshniwal/" rel="noopener noreferrer" target="_blank" className="remove-decoration">
                      <li className="list-group-item bg-transparent nav-item ">
                          <span className="font-oxygen nav-span black">
                            <FontAwesomeIcon icon={faInstagram}/>
                              <span className="text-right ml-md-5 ml-3">Instagram</span>
                          </span>
                      </li>
                  </a>
                  <a tabIndex="-1" href="https://www.facebook.com/tanay.toshniwal" rel="noopener noreferrer" target="_blank" className="remove-decoration">
                      <li className="list-group-item bg-transparent nav-item ">
                          <span className="font-oxygen nav-span black">
                            <FontAwesomeIcon icon={faFacebook}/>
                              <span className="text-right ml-md-5 ml-3">Facebook</span>
                          </span>
                      </li>
                  </a>
                  <a tabIndex="-1" href="mailto:contact@tanaytoshniwal.com" rel="noopener noreferrer" target="_blank" className="remove-decoration">
                      <li className="list-group-item bg-transparent nav-item ">
                          <span className="font-oxygen nav-span black">
                            <FontAwesomeIcon icon={faMailBulk}/>
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
