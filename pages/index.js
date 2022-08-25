import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic';
import React, { useState } from 'react';

const TestComponentDynamic = dynamic(() => import("./test.js"), {
  loading: () => <h1>loading...</h1>,
})

export default function Home() {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  }

  return (
    <div className={styles.container}>
      <button onClick={handleShow}>Load component</button>
      <div>
        <p>dynamic component below</p>
        {show ? <TestComponentDynamic/> : null}
      </div>
    </div>
  )
}
