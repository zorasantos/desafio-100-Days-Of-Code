import React from 'react'
import styled from 'styled-components'
import { footerHeight } from '../utils/constants'

const MainFooter = () => (
    <Footer>
        &copy; 2019 <br />
        <span>by Zoranildo Santos</span>
    </Footer>
)

const Footer = styled.footer`
    align-items: center;
    display: flex;
    height: ${footerHeight};
    background: #333;
    justify-content: center;
    color: #fff;
`

export default MainFooter