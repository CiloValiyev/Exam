import React from 'react';
import "../footer/footer.scss";
const Footer = () => {
  return (
    <div>
      {/* Section1 */}
      <section className='footer1'>
        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <ul className='other-pages'>
                <h5>Other Pages</h5>
                <li>Home</li>
                <li>Gallery</li>
                <li>Shortcodes</li>
                <li>About</li>
                <li>Language</li>
              </ul>
            </div>
            <div className='col-6'>
              <ul className='colorlib-square'>
                <li> <p className='colorlib'>colorlib<p className='square'></p></p></li>
                <li> <p>Awesome and completely free WordPress WooCommerce themes to take your ecommerce website to the next level.</p></li>
                <li> <p>If you are having problems with theme setup, please feel free to use Colorlib support forum.</p></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Section2 */}
      <section className='footer2'>
        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <ul>
              <li>Home</li>
              <li>Galery</li>
              <li>ShortCode</li>
              <li>About</li>
              <li>Language</li>
              </ul>
            </div>
            <div className='col-6'>
           <ul>
           <p>Dazzling Demo All rights reserved. Theme by Colorlib Powered by WordPress</p>
           </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer