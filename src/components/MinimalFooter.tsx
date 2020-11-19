import React from 'react'

import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { colors } from '../styles/variables'

const StyledMinimalFooter = styled.footer`
    padding: 5rem 0 6rem;
    text-align: center;
    color: ${colors.lightGrey};
    background: ${colors.offWhite};

    p {
        margin-bottom: 2rem;
    }

    a {
        padding: 0 1rem;
        color: inherit;
        font-weight: 400;

        &:not(:last-child) {
            border-right: 1px solid;
        }
    }
`

const MinimalFooter = () => (
    <StyledMinimalFooter role="footer">
        <div className="row">
            <p>Copyright TypeFox All Right Reserved</p>
            <div>
                <Link to="/imprint">Imprint</Link>
                <Link to="/terms">Terms of Service</Link>
                <Link to="/privacy">Privacy Policy</Link>
            </div>
        </div>
    </StyledMinimalFooter>
)

export default MinimalFooter
