import { exercises, types } from '@renderer/store/exercises'
import { Exercise } from '@shared/models'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { MenuItem } from './MenuItem'


export const ExercisesMenu = () => {
  const [title, setTitle] = useState('')
  const [exercisesByType, setExercisesByType] = useState<Exercise[]>([])
  const { type } = useParams()
  const navigate = useNavigate()
  const menuItemStyles = `hover:bg-gray-100 dark:border-gray-700 dark:bg-cyan-700 dark:hover:bg-teal-600`

  useEffect(() => {
    const item = types.find((item) => item.code === type)
    const exercisesByType = exercises.filter((exercise) => exercise.type.code === item?.code)
    console.log(exercisesByType)
    setExercisesByType(exercisesByType)
  }, [type])

  const handleClick = (lesson) => {
    navigate(`/menu/teach/${lesson}`, { replace: true })
  }

  return (
    <>
      <div className=" flex flex-col md:flex-row w-full items-start justify-between overflow-hidden">
        <section className="min-h-lvh w-1/3 flex flex-col items-start justify-center">
          <img src="/src/assets/pictures/nivel_1.png"/>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-5 w-full md:max-w-[1220px] md:px-5 overflow-hidden">
              {exercisesByType.map((exercise) => (
                <MenuItem className={menuItemStyles} key={exercise.code} title={exercise.name} />
              ))}
            </div>
        </section>
        <section className="min-h-lvh w-1/3 flex flex-col items-center justify-center">
            <img src="/src/assets/pictures/nivel_2.png"/>
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-5 w-full md:max-w-[1220px] md:px-5 overflow-hidden">
              {exercisesByType.map((exercise) => (
                <MenuItem className={menuItemStyles} key={exercise.code} title={exercise.name} />
              ))}
            </div>
        </section>
        <section className="min-h-lvh w-1/3 flex flex-col items-center justify-center">
            <img src="/src/assets/pictures/nivel_3.png"/>
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-5 w-full md:max-w-[1220px] md:px-5 overflow-hidden">
              {exercisesByType.map((exercise) => (
                <MenuItem className={menuItemStyles} key={exercise.code} title={exercise.name} />
              ))}
            </div>
        </section> 
      </div>     
    </>
  )
}

