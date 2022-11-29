import React from 'react';

interface LabelProps {
    label: string,
    style: any,
  }

function SentimentLabel(props: LabelProps) {

    const style = {
        position: "fixed", 
        backgroundColor: "#3b3657", 
        width: "22%", 
        height: "40px",  
        bottom: "0",
        clipPath: "polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)"
    }

    return (
        <div style={Object.assign(props.style, style)}>
            <p style={{textAlign: "center", fontFamily: "roboto", color: "#fff"}}>{props.label}</p>
        </div>
    );
}

export default SentimentLabel;
