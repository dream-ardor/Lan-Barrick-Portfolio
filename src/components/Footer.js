import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">&copy;Dan Barrick Design. Made With Love By:<span className="icon fa-heart"></span> <a href="https://www.linkedin.com/in/danbarrick">Dan Barrick</a></p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
