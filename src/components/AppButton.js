import React from 'react'

const AppButton = ({
    children,
    type,
    borderRadius,
    border, 
    margin,
    buttonBackground,
    buttonPadding,
    fontSize,
    textColor
    }) => {


  return (
    <button
    type={type}
    style={{
            borderRadius: borderRadius,
            border: border,
            background: buttonBackground,
            padding: buttonPadding,
            margin: margin,
            fontSize: fontSize,
            color: textColor
          }}
    className='btn'
>
    {children}
</button>
  )
}

export default AppButton