import * as React from "react";

export interface AdProps 
{
    link: string
    type: AdType
}

export const Ad = (props: AdProps) =>
{
    <a href={props.link}>
        <p>{props.type}</p>
    </a>
}