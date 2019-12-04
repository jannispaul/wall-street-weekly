import React from "react"

const Icon = props => {
  const styles = {
    svg: {
      verticalAlign: "middle",
    },
    path: {
      fill: props.color,
    },
  }

  return (
    <svg
      style={styles.svg}
      width={`${props.size}px`}
      height={`${props.size}px`}
      viewBox="0 0 48 48"
    >
      <path style={styles.path} d={props.icon} />
    </svg>
  )
}

Icon.defaultProps = {
  size: 32,
}

export default Icon
