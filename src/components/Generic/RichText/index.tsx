import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export interface Props {
    RichText: {
        json: string
    }
    className?: string
}

const RichText: React.FC<Props> = ({ RichText, className }) => {
    const { json } = RichText;
    return (
        /* @ts-ignore */ 
        <div className={className} data-section="richtext-container">
            {
                /* @ts-ignore */ 
                documentToReactComponents(json)
            }
        </div>
    )
}

export default RichText