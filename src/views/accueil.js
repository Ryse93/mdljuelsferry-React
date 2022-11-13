import React from 'react'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Menu from '../components/menu'
import ActiveUsers from '../components/active-users'
import YouTube from '../components/you-tube'
import Testimonal from '../components/testimonal'
import Footer from '../components/footer'
import './accueil.css'

const Accueil = (props) => {
  return (
    <div className="accueil-container">
      <Helmet>
        <title>mdljuelsferry</title>
        <meta property="og:title" content="mdljuelsferry" />
      </Helmet>
      <section className="accueil-hero">
        <Menu></Menu>
        <header className="accueil-header">
          <h1 className="accueil-text">
            Maison des lycéens du Lycée Jules Ferry, Versailles
          </h1>
          <p className="accueil-text01">Bureau 25</p>
          <div className="accueil-get-started">
            <span className="accueil-text02">Qui sommes-nous ?</span>
          </div>
        </header>
        <div className="accueil-dashboard-preview">
          <div className="accueil-outline">
            <img
              alt="pastedImage"
              src="/playground_assets/lycee%20jules%20f-1000h.webp"
              loading="lazy"
              className="accueil-image"
            />
          </div>
        </div>
      </section>
      <section className="accueil-features">
        <div className="accueil-cards">
          <div className="accueil-container1">
            <div className="card">
              <img
                alt="pastedImage"
                src="/playground_assets/pastedimage-fii6m-200h.png"
                className="accueil-icon"
              />
              <span className="accueil-text03">Inscris-toi dès maintenant</span>
              <span className="accueil-text04">Club Jules Ferry</span>
            </div>
            <div className="accueil-publish card">
              <img
                alt="pastedImage"
                src="/playground_assets/pastedimage-mimg-200h.png"
                className="accueil-icon01"
              />
              <span className="accueil-text05">
                <span>Actualité de la MDL</span>
                <br></br>
              </span>
              <span className="accueil-text08">Actualité</span>
            </div>
          </div>
        </div>
      </section>
      <section className="accueil-quote-container">
        <div className="accueil-quote">
          <span className="accueil-message">
            “Scale your content, grew lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.”
          </span>
          <div className="accueil-author">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDV8fGdpcmx8ZW58MHx8fHwxNjY0ODA5MjE1&amp;ixlib=rb-1.2.1&amp;w=200"
              className="accueil-avatar"
            />
            <span className="accueil-quote1">
              <span className="accueil-text09">—  Peter McPau</span>
              <span>, Founder and CEO, Active</span>
            </span>
          </div>
        </div>
      </section>
      <section className="accueil-statistics">
        <div className="accueil-container2">
          <ActiveUsers Caption="— Active users" Statistic="3.5M"></ActiveUsers>
          <ActiveUsers Caption="— Brands" Statistic="50k"></ActiveUsers>
          <ActiveUsers
            Caption="— Accounts Managed"
            Statistic="250K"
          ></ActiveUsers>
          <ActiveUsers Caption="— Active leads" Statistic="30M"></ActiveUsers>
        </div>
      </section>
      <section className="accueil-banners">
        <div className="accueil-banner-manage">
          <div className="accueil-container3">
            <div className="accueil-left">
              <span className="sub-title">Content Management</span>
              <span className="accueil-text12 title">
                Manage all your platforms in just one place.
              </span>
              <span className="accueil-text13">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. vv
              </span>
              <div className="accueil-get-started1 template-button">
                <span className="accueil-text14">Get started</span>
              </div>
            </div>
            <div className="accueil-image-container">
              <img
                alt="pastedImage"
                src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                className="accueil-cards-image"
              />
            </div>
          </div>
        </div>
        <div className="accueil-banner-advanced-analytics">
          <div className="accueil-centered-container">
            <div className="accueil-image-container1">
              <img
                alt="pastedImage"
                src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                className="accueil-cards-image1"
              />
            </div>
            <div className="accueil-right">
              <span className="sub-title">
                Reporting Metrics
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <h2 className="accueil-text16 title">
                Advanced analytics, easy to understand.
              </h2>
              <div className="accueil-category">
                <span className="accueil-text17">Power reports</span>
                <span className="accueil-text18">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  vv
                </span>
                <span className="accueil-text19">Example -&gt;</span>
              </div>
              <div className="accueil-category1">
                <span className="accueil-text20">Power reports</span>
                <span className="accueil-text21">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  vv
                </span>
                <span className="accueil-text22">Example -&gt;</span>
              </div>
            </div>
          </div>
        </div>
        <div className="accueil-banner">
          <div className="accueil-container4">
            <div className="accueil-left1">
              <span className="accueil-text23">Improve Scheduling</span>
              <h2 className="accueil-text24 title">
                Powerful scheduler that saves you time
              </h2>
              <span className="accueil-text25">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. vv
              </span>
              <div className="accueil-get-started2 template-button">
                <span className="accueil-text26">Get started</span>
              </div>
            </div>
            <div className="accueil-image-container2">
              <img
                alt="pastedImage"
                src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                className="accueil-cards-image2"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="accueil-integrations">
        <div className="accueil-centered-container1">
          <div className="accueil-heading">
            <span className="sub-title">Integrations</span>
            <span className="title">
              Integrated with the tools you know and love
            </span>
            <span className="accueil-text29">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. vv
            </span>
          </div>
          <div className="accueil-pills-container">
            <div className="accueil-pills">
              <div className="accueil-container5">
                <YouTube></YouTube>
                <YouTube pastedImage_src="/playground_assets/group%201012-200h.png"></YouTube>
                <YouTube pastedImage_src="/playground_assets/layer1-200h.png"></YouTube>
                <YouTube pastedImage_src="/playground_assets/group-200h.png"></YouTube>
              </div>
              <div className="accueil-container6">
                <YouTube pastedImage_src="/playground_assets/pinterest%20logo-200h.png"></YouTube>
                <YouTube pastedImage_src="/playground_assets/group%201014-200h.png"></YouTube>
                <YouTube pastedImage_src="/playground_assets/group%201015-200h.png"></YouTube>
                <YouTube pastedImage_src="/playground_assets/group%201017-200h.png"></YouTube>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="accueil-how-it-works">
        <div className="accueil-centered-container2">
          <div className="accueil-heading1">
            <span className="accueil-text30">How it works</span>
            <span className="accueil-text31 title">
              Being social and getting leads has never been easier
            </span>
          </div>
          <div className="accueil-category2">
            <div className="accueil-headng">
              <span className="accueil-text32">
                1 — Sign up
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="accueil-text33">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. vv
              </span>
              <div className="accueil-get-started3 template-button">
                <span className="accueil-text34">Get started</span>
              </div>
            </div>
            <div className="accueil-container7">
              <img
                alt="pastedImage"
                src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                className="accueil-pasted-image"
              />
            </div>
          </div>
          <div className="accueil-row">
            <div className="accueil-category3">
              <div className="accueil-headng1">
                <span className="accueil-text35">2 — Act</span>
                <span className="accueil-text36">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  vv
                </span>
              </div>
              <img
                alt="pastedImage"
                src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                className="accueil-pasted-image1"
              />
            </div>
            <div className="accueil-category4">
              <div className="accueil-headng2">
                <span className="accueil-text37">2 — Act</span>
                <span className="accueil-text38">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  vv
                </span>
              </div>
              <img
                alt="pastedImage"
                src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                className="accueil-pasted-image2"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="accueil-pricing">
        <div className="accueil-centered-container3">
          <div className="accueil-heading2">
            <span className="accueil-text39 title">
              Pricing for all kind of businesses
            </span>
            <span className="accueil-text40">
              Create next-generation solutions for small business customers with
              pricing options that accommodate everyone.
            </span>
            <div className="accueil-selection">
              <span className="accueil-text41">Monthly</span>
              <span className="accueil-text42">Yearly</span>
            </div>
          </div>
          <div className="accueil-cards1">
            <div className="accueil-card">
              <span className="accueil-text43">Free</span>
              <span className="accueil-text44">
                Unlimited lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed doliqua.
              </span>
              <div className="accueil-get-started4 template-button">
                <span className="accueil-text45">Start for free</span>
              </div>
              <span className="accueil-text46">What&apos;s included</span>
              <div className="accueil-bullet-points">
                <div className="accueil-point">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="accueil-icon02"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="accueil-text47">
                    Sed ut pespiciatis unde omnis
                  </span>
                </div>
                <div className="accueil-point01">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="accueil-icon04"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="accueil-text48">
                    Sed ut pespiciatis unde omnis
                  </span>
                </div>
              </div>
            </div>
            <div className="accueil-card1">
              <span className="accueil-text49">Pay as you go</span>
              <span className="accueil-text50">
                <span>Launch your lorem for $49/mo</span>
                <br></br>
                <span>lorem ipsum dolor sit amet, consectetur adipiscing.</span>
              </span>
              <div className="accueil-get-started5 template-button">
                <span className="accueil-text54">
                  <span>Upgrade now</span>
                  <br></br>
                </span>
              </div>
              <span className="accueil-text57">What&apos;s included</span>
              <div className="accueil-bullet-points1">
                <div className="accueil-point02">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="accueil-icon06"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="accueil-text58">
                    Sed ut pespiciatis unde omnis
                  </span>
                </div>
                <div className="accueil-point03">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="accueil-icon08"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="accueil-text59">
                    Sed ut pespiciatis unde omnis
                  </span>
                </div>
                <div className="accueil-point04">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="accueil-icon10"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="accueil-text60">
                    Sed ut pespiciatis unde omnis
                  </span>
                </div>
                <div className="accueil-point05">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="accueil-icon12"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="accueil-text61">
                    Sed ut pespiciatis unde omnis
                  </span>
                </div>
              </div>
            </div>
            <div className="accueil-card2">
              <span className="accueil-text62">Enterprise</span>
              <span className="accueil-text63">
                <span>
                  Custom-built lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed doliqua.
                </span>
                <br></br>
              </span>
              <div className="accueil-get-started6 template-button">
                <span className="accueil-text66">
                  <span>Contact us</span>
                  <br></br>
                </span>
              </div>
              <span className="accueil-text69">What&apos;s included</span>
              <div className="accueil-bullet-points2">
                <div className="accueil-point06">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="accueil-icon14"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="accueil-text70">
                    Sed ut pespiciatis unde omnis
                  </span>
                </div>
                <div className="accueil-point07">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="accueil-icon16"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="accueil-text71">
                    Sed ut pespiciatis unde omnis
                  </span>
                </div>
                <div className="accueil-point08">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="accueil-icon18"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="accueil-text72">
                    Sed ut pespiciatis unde omnis
                  </span>
                </div>
                <div className="accueil-point09">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="accueil-icon20"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="accueil-text73">
                    Sed ut pespiciatis unde omnis
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="accueil-testimonals">
        <div className="accueil-left2">
          <span className="accueil-text74">Testimonals</span>
          <span className="accueil-text75 title">
            What people say about Active
          </span>
        </div>
        <div className="accueil-right1">
          <div className="accueil-column">
            <Testimonal
              Quote='"Pellentesque sodales libero nulla, ac imperdiet ante tincidunt vel. Fusce auctor augue sed massa finibus, et dictum sem mollis. In luctus.”'
              Avatar_src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
            ></Testimonal>
            <Testimonal
              From="Social Club"
              Name="Jessica Smith"
              Quote="“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.\u2028 Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.”"
              Avatar_src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
            ></Testimonal>
            <Testimonal
              From="BeMe"
              Name="Logan Boy"
              Quote="“Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo..”"
              Avatar_src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
            ></Testimonal>
            <Testimonal
              From="Hello W."
              Name="Laraine Summers"
              Quote="“Rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.”"
              Avatar_src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
            ></Testimonal>
          </div>
          <div className="accueil-column1">
            <Testimonal
              From="Handsly"
              Name="William McPau"
              Quote='"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”'
              Avatar_src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
            ></Testimonal>
            <Testimonal
              From="Share"
              Name="Mariah Mae"
              Quote="“Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.”"
              Avatar_src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
            ></Testimonal>
            <Testimonal
              From="Gather"
              Name="John Finati"
              Quote='"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”'
              Avatar_src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
            ></Testimonal>
            <Testimonal
              From="Zigo"
              Name="Mary Pau"
              Quote='"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ”'
              Avatar_src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
            ></Testimonal>
          </div>
        </div>
        <span className="accueil-text76">
          <span>Show more</span>
          <br></br>
        </span>
      </section>
      <section className="accueil-action-bar">
        <div className="accueil-action">
          <div className="accueil-heading3">
            <span className="accueil-text79 title">
              <span>Get leads now </span>
              <br></br>
              <span>with Active!</span>
            </span>
            <span className="accueil-text83">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </span>
            <div className="accueil-get-started7 template-button">
              <span className="accueil-text84">
                <span>Start free</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="accueil-images">
            <img
              alt="image"
              src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
              className="accueil-image1"
            />
          </div>
        </div>
      </section>
      <section className="accueil-f-a-q">
        <div className="accueil-heading4">
          <span className="accueil-text87 title">
            Frequently asked questions
          </span>
          <span className="accueil-text88">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. vv
          </span>
        </div>
        <div className="accueil-accordion">
          <div data-faq="closed" className="accordionContainer">
            <div className="accueil-header1">
              <span className="accueil-text89">
                — What is sit amet, consectetur adipiscing elit, sed do?
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <svg viewBox="0 0 1024 1024" className="accordionIcon">
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
            </div>
            <div className="accordionContent">
              <span className="accueil-text90">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
          </div>
          <div className="accordionContainer">
            <div className="accueil-header2">
              <span className="accueil-text91">
                — Why is dolore magna aliqua excepteur sint
              </span>
              <svg viewBox="0 0 1024 1024" className="accordionIcon">
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
            </div>
            <div className="accordionContent">
              <span className="accueil-text92">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
          </div>
          <div data-faq="closed" className="accordionContainer">
            <div className="accueil-header3">
              <span className="accueil-text93">
                — Is excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum?
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <svg viewBox="0 0 1024 1024" className="accordionIcon">
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
            </div>
            <div className="accordionContent">
              <span className="accueil-text94">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
          </div>
          <div data-faq="closed" className="accordionContainer">
            <div className="accueil-header4">
              <span className="accueil-text95">
                — Who quasi architecto beatae vitae dicta sunt explicabo. Nemo
                enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                fugit, sed quia consequuntur magni
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <svg viewBox="0 0 1024 1024" className="accordionIcon">
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
            </div>
            <div className="accordionContent">
              <span className="accueil-text96">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
          </div>
          <div data-faq="closed" className="accordionContainer">
            <div className="accueil-header5">
              <span className="accueil-text97">
                — Is minim veniam quis nostrud exercitation ullamco laboris nisi
                ut aliquip ex ea commodo consequat.
              </span>
              <svg viewBox="0 0 1024 1024" className="accordionIcon">
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
            </div>
            <div className="accordionContent">
              <span className="accueil-text98">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
          </div>
        </div>
        <div>
          <DangerousHTML
            html={`<script>
// Accordion - Code Embed

const accordionContainers = document.querySelectorAll(".accordionContainer"); // All accordion containers
const accordionContents = document.querySelectorAll(".accordionContent"); // All accordion content
const accordionIcons = document.querySelectorAll(".accordionIcon"); // All accordion icons

accordionContents.forEach((accordionContent) => {
    accordionContent.style.display = "none"; //Hides all accordion contents
});

accordionContainers.forEach((accordionContainer, index) => {
    accordionContainer.addEventListener("click", () => {
        accordionContents.forEach((accordionContent) => {
            accordionContent.style.display = "none"; //Hides all accordion contents
        });

        accordionIcons.forEach((accordionIcon) => {
            accordionIcon.style.transform = "rotate(0deg)"; // Resets all icon transforms to 0deg (default)
        });

        if (accordionContainer.classList.contains("accordion-open")) { // Checks if this container has class "accordion-open"
            accordionContainer.classList.remove("accordion-open"); // Removes class "accordion-open"
        } else {
            accordionContainers.forEach((accordionContainer) => {
                accordionContainer.classList.remove("accordion-open"); // Removes class "accordion-open" from all containers
            });

            accordionContainer.classList.add("accordion-open"); // Adds class "accordion-open" to this container
            accordionContents[index].style.display = "flex"; // Shows accordion content
            accordionIcons[index].style.transform = "rotate(180deg)"; // Rotates accordion icon 180deg
        }
    });
});

/*
Here's what the above is doing:
    1. Selects all accordion containers, contents, and icons
    2. Hides all accordion contents
    3. Adds an event listener to each accordion container
    4. When an accordion container is clicked, it:
        - Hides all accordion contents
        - Resets all icon transforms to 0deg (default)
        - Checks if this container has class "accordion-open"
            - If it does, it removes class "accordion-open"
            - If it doesn't, it:
                - Removes class "accordion-open" from all containers
                - Adds class "accordion-open" to this container
                - Shows accordion content
                - Rotates accordion icon 180deg
*/
</script>`}
          ></DangerousHTML>
        </div>
      </section>
      <Footer></Footer>
    </div>
  )
}

export default Accueil
