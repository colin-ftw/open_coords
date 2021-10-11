/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=6155c7b13c86b4f6ab8f6328").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
]

let Controller

class AboutView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/AboutController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = AboutView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '6155e39e211ee73d60a8f746'
    htmlEl.dataset['wfSite'] = '6155c7b13c86b4f6ab8f6328'

    scripts.concat(null).reduce((active, next) => Promise.resolve(active).then((active) => {
      const loading = active.loading.then((script) => {
        new Function(`
          with (this) {
            eval(arguments[0])
          }
        `).call(window, script)

        return next
      })

      return active.isAsync ? next : loading
    }))
  }

  render() {
    const proxies = AboutView.Controller !== AboutView ? transformProxies(this.props.children) : {

    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/opencoordinates-463d43.webflow.css);
        ` }} />
        <span className="af-view">
          <div>
            <div data-animation="default" data-collapse="medium" data-duration={400} data-easing="ease" data-easing2="ease" role="banner" className="af-class-navbar w-nav">
              <div className="w-container">
                <a href="#" className="w-nav-brand"><img src="images/OCLogo.png" loading="lazy" width={225} sizes="225px" srcSet="images/OCLogo-p-500.png 500w, images/OCLogo-p-800.png 800w, images/OCLogo-p-1080.png 1080w, images/OCLogo-p-1600.png 1600w, images/OCLogo-p-2000.png 2000w, images/OCLogo.png 2420w" alt className="af-class-image-6" /></a>
                <nav role="navigation" className="w-nav-menu">
                  <a href="about.html" aria-current="page" className="w-nav-link w--current">About</a>
                  <a href="#" className="w-nav-link">Twitter</a>
                  <a href="#" className="w-nav-link">Discord</a>
                  <a href="#" className="w-nav-link">OpenSea</a>
                </nav>
                <div className="w-nav-button">
                  <div className="w-icon-nav-menu" />
                </div>
              </div>
            </div>
            <div className="w-container">
              <div className="af-class-text-block-3"><strong><br />About<br /><br /></strong>Open Coordinates is a collection of 10,000 tokens developed from all open source data. The GPS coordinates were supplied by the <a href="https://simplemaps.com/data/world-cities">World Cities Database</a>, maps were dynamically generated using <a href="https://www.openstreetmap.org/">OpenStreetMap</a>, and the visual styling of the map was developed by <a href="http://maps.stamen.com/">Stamen Design.</a> All data and design is used under <a href="https://creativecommons.org/licenses/by/3.0/">Creative Commons 3.0 attribution</a>. Tokens can be minted at no charge (user pays gas fees).<br /><br />Embedded in each token are the GPS coordinates referenced on the map. We hope that you will use these coordinates in new games, art and other projects. <br /><br />This project was inspired by the <a href="https://www.lootproject.com/">Loot</a> and <a href="https://www.openpalette.io/">OpenPalette</a> projects. </div>
            </div>
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    )
  }
}

export default AboutView

/* eslint-enable */