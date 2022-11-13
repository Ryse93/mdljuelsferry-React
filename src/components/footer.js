import React from 'react'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <footer className="footer-footer">
      <div className="footer-top">
        <div className="footer-left">
          <div className="footer-contact">
            <span className="footer-text">{props.text1}</span>
            <div className="footer-container">
              <a
                href="mailto:use@active-app.com?subject=Support"
                className="footer-link"
              >
                {props.text2}
              </a>
              <a
                href={props.link_text}
                target="_blank"
                rel="noreferrer noopener"
                className="footer-link1"
              >
                {props.text3}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-container1">
          <img
            alt={props.Branding_alt}
            src={props.Branding_src}
            className="footer-branding"
          />
        </div>
        <span className="footer-text1">{props.text}</span>
      </div>
    </footer>
  )
}

Footer.defaultProps = {
  text1: 'Contact',
  Branding_src: '/playground_assets/logo.svg',
  text3: 'Instagram',
  text: 'Copyright © MAISON DES LYCEENS DE JULES FERRY VERSAILLES - 2022',
  Branding_alt: 'pastedImage',
  link_text: 'https://www.instagram.com/mdljulesferry/',
  text2: 'use@active-app.com',
}

Footer.propTypes = {
  text1: PropTypes.string,
  Branding_src: PropTypes.string,
  text3: PropTypes.string,
  text: PropTypes.string,
  Branding_alt: PropTypes.string,
  link_text: PropTypes.string,
  text2: PropTypes.string,
}

export default Footer
