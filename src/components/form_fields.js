import React from 'react'

export const RockerSwitch = ({title, options: [a, b]}) => {
    return <div className='rocker-switch'>
        <span className='preference-title'>{title}</span>
        <div className='options'>
            <span>{a}</span>
            <label className='switch'>
                <input type='checkbox' />
                <span className='slider'></span>
            </label>
            <span>{b}</span>
        </div>
    </div>
}

export const MinMax = ({title, min, max, handleMinChange, handleMaxChange}) => {
    return <div className='min-max'>
        <span className='preference-title'>{title}</span>
        <div className='options'>
            <input value={min} placeholder='min' onChange={handleMinChange}/>
            <input value={max} placeholder='max' onChange={handleMaxChange}/>
        </div>
    </div>
}