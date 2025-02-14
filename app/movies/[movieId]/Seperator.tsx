import React from 'react'
import styles from './page.module.css'

interface Props {
  items: React.ReactNode[]
}

export default function Seperator(props: Readonly<Props>) {
  return (
    <div className={styles.seperator}>
      {props.items.map((item, index) => (
        <React.Fragment key={index}>
          {item}
          {index < props.items.length - 1 && <i className="ri-circle-fill"></i>}
        </React.Fragment>
      ))}
    </div>
  )
}
