import React from 'react'
import './MyCSSComponent.css'
import styles from './MyCSSInline.module.css'

const CssInlineComponent = () => {
    const myInlineStyle = {
        color: "blue",
        backgroundColor: "lightgray",
        padding: "20px",
        borderRadius: "5px",
        textAlign: "left"
    }


    return (
        <>
            <h2 className={styles.title}>CSS .Modules .css</h2>
            <h1>My CSS Component .css</h1>
            <p style={myInlineStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic debitis alias ab aperiam, odio possimus est ad totam ex repudiandae suscipit! Eligendi rerum facere itaque error quam, eum dolorem quis.</p>
        </>
    )
}

export default CssInlineComponent