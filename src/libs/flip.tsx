import React, { useState, useEffect, useCallback } from 'react'
import './index.less'

const FlipNumber = (props: {
    layerClass?: string,
    itemClass?: string,
    number?: number,
    initialNumber?: number,
    idPreffix?: string
}) => {
    const {
        number = 0,
        initialNumber = 0,
        idPreffix = ''
    } = props
    const [defaultNumber, setDefaultNumber] = useState(initialNumber || 0)

    const backFlip = useCallback(() => {
        return document.getElementById(`${idPreffix}-back-flip`)
    }, [idPreffix])
    const frontFlip = useCallback(() => {
        return document.getElementById(`${idPreffix}-front-flip`)
    }, [idPreffix])

    useEffect(() => {
        if (number !== defaultNumber) {
            backFlip()?.classList.add('flip-down')
            frontFlip()?.classList.add('flip-down')
        }
    }, [number, defaultNumber, idPreffix, backFlip, frontFlip])

    const _flipEnd = useCallback(() => {
        console.log('ksj')
        frontFlip()?.classList.remove('flip-down')
        backFlip()?.classList.remove('flip-down')
        setDefaultNumber(number)
    }, [backFlip, frontFlip, number])

    return (
        <div className={`flip-layer${props.layerClass ? ` ${props.layerClass}` : ''}`}>
            <div id={`${idPreffix}-back-flip`} className={`flip back${props.itemClass ? ` ${props.itemClass}` : ''} number-${number}`} />
            <div id={`${idPreffix}-front-flip`} className={`flip front${props.itemClass ? ` ${props.itemClass}` : ''} number-${defaultNumber}`} onAnimationEnd={_flipEnd} />
        </div>
    )
}

export default FlipNumber