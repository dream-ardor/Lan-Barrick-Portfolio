import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">&copy;<a href="https://www.linkedin.com/in/danbarrick">Dan Barrick</a></p> Design.Made With Love  <span className="icon fa-heart"></span> 
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
