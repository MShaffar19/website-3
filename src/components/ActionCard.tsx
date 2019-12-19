import React from 'react'

import styled from '@emotion/styled'
import { colors, shadows } from '../styles/variables'
import { Link } from 'gatsby'

const StyledActionCard = styled.section`
    display: block;
    max-width: 60rem;
    margin: 8rem auto;
    padding 5rem 3rem;
    text-align: center;
    background: ${colors.offWhite};
    box-shadow: ${shadows.light};

    h2 {
        font-size: 2.8rem;
    }

    p {
        margin: -3rem 0 4rem;
    }

    .btn {
        margin-right: 2rem;
    }
`

interface Anchor {
    text: string
    href: string
}

interface ActionCardProps {
    title: string
    text: string | JSX.Element
    anchors: Anchor[]
}

const ActionCard: React.SFC<ActionCardProps> = ({title, text, anchors }) => (
    <StyledActionCard>
        <h2>{title}</h2>
        { typeof text === 'string' ?  <p>{text}</p> : text }
        {link(anchors[0].href,anchors[0].text)}
        { anchors[1] ? link(anchors[1].href,anchors[1].text) : null }
    </StyledActionCard>
)

function link(href: string, text: string, primary: boolean = false) {
    if (href.indexOf('://') !== -1) {
        return <a className={"btn btn--normal" + (primary ? " btn--cta" : "")} href={href} target="_blank">{text}</a>
    } else {
        return <Link to={href} className="btn btn--cta btn--normal">{text}</Link>
    }
}

export default ActionCard