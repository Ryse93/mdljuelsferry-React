import React from 'react'

import DangerousHTML from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './menu.css'

const Menu = (props) => {
  return (
    <div className="menu-menu">
      <div id="mobile-menu" className="menu-mobile-navigation">
        <img alt={props.Logo_alt} src={props.Logo_src} className="menu-logo" />
        <div className="menu-links">
          <span className="Link">{props.text3}</span>
          <span className="Link">{props.text4}</span>
          <span className="Link">{props.text5}</span>
          <span className="Link">{props.text5}</span>
          <span className="Link">{props.text6}</span>
          <span className="Link">{props.text7}</span>
          <span className="Link">{props.text8}</span>
        </div>
        <div id="close-mobile-menu" className="menu-close-mobile-menu">
          <svg viewBox="0 0 804.5714285714286 1024" className="menu-icon">
            <path d="M741.714 755.429c0 14.286-5.714 28.571-16 38.857l-77.714 77.714c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-168-168-168 168c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-77.714-77.714c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l168-168-168-168c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168 168-168c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857s-5.714 28.571-16 38.857l-168 168 168 168c10.286 10.286 16 24.571 16 38.857z"></path>
          </svg>
        </div>
      </div>
      <div className="menu-desktop-navigation">
        <nav className="menu-centered">
          <div className="menu-left">
            <img
              alt={props.image_alt}
              src={props.image_src}
              className="menu-image"
            />
            <div className="menu-links1">
              <span className="menu-text07 Link">{props.text3}</span>
              <span className="menu-text08 Link">{props.text4}</span>
              <span className="menu-text09 Link">{props.text5}</span>
              <span className="menu-text10 Link">{props.text6}</span>
              <span className="menu-text11 Link">{props.text7}</span>
              <span className="menu-text12 Link">{props.text8}</span>
            </div>
          </div>
          <div className="menu-right">
            <div id="open-mobile-menu" className="menu-burger-menu">
              <img
                alt={props.Mobile_Menu_Button_alt}
                src={props.Mobile_Menu_Button_src}
                className="menu-mobile-menu-button"
              />
            </div>
          </div>
        </nav>
      </div>
      <div>
        <DangerousHTML
          html={`<script>
/*
Mobile menu - Code Embed
*/

// Mobile menu
const mobileMenu = document.querySelector("#mobile-menu")

// Buttons
const closeButton = document.querySelector("#close-mobile-menu")
const openButton = document.querySelector("#open-mobile-menu")

// On openButton click, set the mobileMenu position left to -100vw
openButton.addEventListener("click", function() {
    mobileMenu.style.transform = "translateX(0%)"
})

// On closeButton click, set the mobileMenu position to 0vw
closeButton.addEventListener("click", function() {
    mobileMenu.style.transform = "translateX(100%)"
})
</script>`}
        ></DangerousHTML>
      </div>
    </div>
  )
}

Menu.defaultProps = {
  Logo_alt: 'pastedImage',
  text5: 'La MDL',
  text51: 'La MDL',
  Mobile_Menu_Button_src: '/playground_assets/pastedimage-yxbd.svg',
  text1: 'How it works',
  text53: 'La MDL',
  image_alt: 'image',
  Mobile_Menu_Button_alt: 'pastedImage',
  text4: 'Boutique',
  image_src: '/playground_assets/logo.svg',
  text8: 'Soirée des Terminales',
  text54: 'La MDL',
  text3: 'Acceuil',
  text: 'Solutions',
  text2: 'Prices',
  text6: 'Actualités',
  text52: 'La MDL',
  Logo_src: '/playground_assets/pastedimage-no9b-1500h.png',
  text7: 'Clubs',
}

Menu.propTypes = {
  Logo_alt: PropTypes.string,
  text5: PropTypes.string,
  text51: PropTypes.string,
  Mobile_Menu_Button_src: PropTypes.string,
  text1: PropTypes.string,
  text53: PropTypes.string,
  image_alt: PropTypes.string,
  Mobile_Menu_Button_alt: PropTypes.string,
  text4: PropTypes.string,
  image_src: PropTypes.string,
  text8: PropTypes.string,
  text54: PropTypes.string,
  text3: PropTypes.string,
  text: PropTypes.string,
  text2: PropTypes.string,
  text6: PropTypes.string,
  text52: PropTypes.string,
  Logo_src: PropTypes.string,
  text7: PropTypes.string,
}

export default Menu
