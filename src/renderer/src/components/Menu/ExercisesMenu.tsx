import { exercises, levels, types } from '@renderer/store'
import { Exercise } from '@shared/models'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import LevelMenu from './LevelMenu'

export const ExercisesMenu = () => {
  const [exercisesByType, setExercisesByType] = useState<Exercise[]>([])
  const { type } = useParams()

  useEffect(() => {
    const item = types.find((item) => item.code === type)
    const exercisesByType = exercises.filter((exercise) => exercise.type.code === item?.code)
    setExercisesByType(exercisesByType)
  }, [type])

  return (
    <>
      <div className=" flex flex-col md:flex-row w-full items-start justify-between overflow-hidden">
        {levels.map((lev) => (
          <LevelMenu key={lev.title} level={lev} exercisesByType={exercisesByType} />
        ))}
      </div>
    </>
  )
}
