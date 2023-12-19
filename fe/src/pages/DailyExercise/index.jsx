import React, { useState } from 'react'
import './style.css'
import Header from '../../components/Header'
import { useEffect } from 'react'
import USER from '../../services/userService'
import { useLocation } from 'react-router-dom'
import Exercise from '../../components/Excercise'

export default function DailyExercise() {
  const location = useLocation()
  const currentPath = location.pathname
  var dayCount = currentPath.split('/')[2]
  dayCount = 1
  const [exerciseDetail, setExerciseDetail] = useState()
  useEffect(() => {
    const fetchExercise = async () => {
      try {
        const res = await USER.getExercisePerDays(dayCount)
        if (res) {
          if (res?.data?.exerciseDetail) {
            setExerciseDetail(res?.data?.exerciseDetail)
          }
        }
      } catch (error) {
        console.error(error?.response?.data?.message)
      }
    }
    fetchExercise()
  }, [dayCount])
  console.log(exerciseDetail)
  return (
    <div className="daily-exercise-container">
      <Header goBack={true} text={`Ngày ${dayCount}`} />
      <ul className="list-exercise">
        <p>Danh sách bài tập</p>
        <li>
          <Exercise title={'a'} />
        </li>
        <li>
          <Exercise title={'b'} />
        </li>
        <li>
          <Exercise title={'c'} />
        </li>
        <li>
          <Exercise title={'d'} />
        </li>
      </ul>
    </div>
  )
}
