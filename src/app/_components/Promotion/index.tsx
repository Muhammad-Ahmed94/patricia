'use client'

import React, { useEffect, useState } from 'react'

import classes from './index.module.scss'

const Promotion = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const targetDate = new Date()
  targetDate.setDate(targetDate.getDate() + 3)

  useEffect(() => {
    const timerInterval = setInterval(() => {
      const currentTime = new Date()
      const timeDifference = Math.max(Number(targetDate) - Number(currentTime), 0)

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000)

      setTime({ days, hours, minutes, seconds })

      if (timeDifference === 0) {
        clearInterval(timerInterval)
        // extra feature can be addeds here when time limit hits 00
      }
    }, 1000)

    return () => {
      clearInterval(timerInterval) //* cleanup the interval when the component unmounts.
    }
  }, [])

  return (
    <section className={classes.promotion}>
      <div className={classes.textBox}>
        <h3 className={classes.title}>Deals of the Month</h3>
        <p>
          This month, we're offering some incredible deals on our latest products. Enjoy significant
          discounts on our new line of smartphones, featuring cutting-edge technology and stylish
          designs.
        </p>

        <ul className={classes.stats}>
          <StatBox value={time.days} label="Days" />
          <StatBox value={time.hours} label="Hours" />
          <StatBox value={time.minutes} label="Minutes" />
          <StatBox value={time.seconds} label="Seconds" />
        </ul>
      </div>
    </section>
  )
}

const StatBox = ({ label, value }: { label: string, value: number }) => (
  <li className={classes.statsBox}>
    <h4>{value}</h4>
    <p>{label}</p>
  </li>
)
export default Promotion
