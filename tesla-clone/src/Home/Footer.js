import React from 'react'
import './Footer.css'
import '../responsive.css'

function footer() {
  return (
    <footer className="footer">
			<ul>
				<li className="footer__nav__btn"><a href="#">Tesla &copy; 2022</a></li>
				<li className="footer__nav__btn"><a href="#">Privacy &amp; Legal</a></li>
				<li className="footer__nav__btn"><a href="#">Contract</a></li>
				<li className="footer__nav__btn"><a href="#">Vehicle Recalls</a></li>
				<li className="footer__nav__btn"><a href="#">Careers</a></li>
				<li className="footer__nav__btn"><a href="#">News</a></li>
				<li className="footer__nav__btn disable__for__smlrscreens"><a href="#">Engage</a></li>
				<li className="footer__nav__btn disable__for__smlrscreens"><a href="#">Locations</a></li>
			</ul>
	</footer>
  )
}

export default footer
