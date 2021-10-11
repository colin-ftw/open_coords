/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=6155c7b13c86b4f6ab8f6328").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
]

let Controller

class IndexView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/IndexController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = IndexView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '6155c7b13c86b421048f6329'
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
    const proxies = IndexView.Controller !== IndexView ? transformProxies(this.props.children) : {

    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/opencoordinates-463d43.webflow.css);
        ` }} />
        <span className="af-view">
          <div className="af-class-body">
            <div data-animation="default" data-collapse="medium" data-duration={400} data-easing="ease" data-easing2="ease" role="banner" className="af-class-navbar w-nav">
              <div className="w-container">
                <a href="index.html" aria-current="page" className="w-inline-block w--current"><img src="images/OCLogo.png" loading="lazy" width={225} sizes="225px" srcSet="images/OCLogo-p-500.png 500w, images/OCLogo-p-800.png 800w, images/OCLogo-p-1080.png 1080w, images/OCLogo-p-1600.png 1600w, images/OCLogo-p-2000.png 2000w, images/OCLogo.png 2420w" alt className="af-class-image-7" /></a>
                <nav role="navigation" className="w-nav-menu">
                  <a href="coordinates.html" className="w-nav-link">Coordinates</a>
                  <a href="about.html" className="w-nav-link">About</a>
                  <a href="#" className="w-nav-link">Twitter</a>
                  <a href="#" className="w-nav-link">Discord</a>
                  <a href="#" className="w-nav-link">OpenSea</a>
                </nav>
                <div className="w-nav-button">
                  <div className="w-icon-nav-menu" />
                </div>
              </div>
            </div>
            <div className="af-class-wf-section" />
            <div className="af-class-section af-class-wf-section">
              <div data-animation="slide" data-duration={500} data-infinite={1} className="af-class-slider-1 w-slider">
                <div className="w-slider-mask">
                  <div className="af-class-slide w-slide"><img src="images/1036685795---Forster-New-South-Wales-Australia.png" loading="lazy" width={650} sizes="(max-width: 479px) 76vw, (max-width: 991px) 72vw, 650px" srcSet="images/1036685795---Forster-New-South-Wales-Australia-p-500.png 500w, images/1036685795---Forster-New-South-Wales-Australia-p-800.png 800w, images/1036685795---Forster-New-South-Wales-Australia.png 1500w" alt className="af-class-image" />
                    <div className="af-class-text-block-4"><em>(Example location - your results will vary.)</em></div>
                  </div>
                  <div className="w-slide"><img src="images/1056836704---Mons-Wallonia-Belgium.png" loading="lazy" width={650} sizes="(max-width: 479px) 76vw, (max-width: 767px) 72vw, 650px" srcSet="images/1056836704---Mons-Wallonia-Belgium-p-500.png 500w, images/1056836704---Mons-Wallonia-Belgium-p-800.png 800w, images/1056836704---Mons-Wallonia-Belgium-p-1080.png 1080w, images/1056836704---Mons-Wallonia-Belgium.png 1500w" alt className="af-class-image-2" /></div>
                  <div className="w-slide"><img src="images/1076043748---Sao-Joao-do-Caiua-Paraná-Brazil.png" loading="lazy" width={650} sizes="(max-width: 479px) 76vw, (max-width: 767px) 72vw, 650px" srcSet="images/1076043748---Sao-Joao-do-Caiua-Paraná-Brazil-p-500.png 500w, images/1076043748---Sao-Joao-do-Caiua-Paraná-Brazil-p-800.png 800w, images/1076043748---Sao-Joao-do-Caiua-Paraná-Brazil-p-1080.png 1080w, images/1076043748---Sao-Joao-do-Caiua-Paraná-Brazil.png 1500w" alt className="af-class-image-3" /></div>
                  <div className="w-slide"><img src="images/1012285874---Saida-Saïda-Algeria.png" loading="lazy" width={650} sizes="(max-width: 479px) 76vw, (max-width: 767px) 72vw, 650px" srcSet="images/1012285874---Saida-Saïda-Algeria-p-500.png 500w, images/1012285874---Saida-Saïda-Algeria-p-800.png 800w, images/1012285874---Saida-Saïda-Algeria-p-1080.png 1080w, images/1012285874---Saida-Saïda-Algeria.png 1500w" alt className="af-class-image-4" /></div>
                  <div className="w-slide"><img src="images/1032017911---Embalse-Córdoba-Argentina.png" loading="lazy" width={650} sizes="(max-width: 479px) 76vw, (max-width: 767px) 72vw, 650px" srcSet="images/1032017911---Embalse-Córdoba-Argentina-p-500.png 500w, images/1032017911---Embalse-Córdoba-Argentina-p-800.png 800w, images/1032017911---Embalse-Córdoba-Argentina-p-1080.png 1080w, images/1032017911---Embalse-Córdoba-Argentina.png 1500w" alt className="af-class-image-5" /></div>
                </div>
                <div className="w-slider-arrow-left">
                  <div className="af-class-icon w-icon-slider-left" />
                </div>
                <div className="w-slider-arrow-right">
                  <div className="af-class-icon-2 w-icon-slider-right" />
                </div>
                <div className="af-class-slide-nav w-slider-nav w-round" />
              </div>
            </div>
            <div className="af-class-text-block"><br /></div>
            <div className="af-class-section-2 af-class-wf-section">
              <a href="#" className="af-class-button w-button"><strong>Mint</strong></a>
            </div>
            <div className="af-class-text-block-2">No fee, only gas. <br />(6,567 of 10,000 remaining)<em className="af-class-italic-text"><br /></em></div>
            <div className="af-class-text-block-2"><br /><br />
              <a href="about.html">Learn more about Open Coordinates.</a>
            </div>
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    )
  }
}

export default IndexView

/* eslint-enable */