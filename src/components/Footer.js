import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">&copy;Dan Barrick Design. Made With Love By: <a href="https://www.linkedin.com/in/danbarrick"><p className=" icon fa-heart"></i>Dan Barrick</a></p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
