import { exercises, levels, types } from '@renderer/store'
import { Exercise } from '@shared/models'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { MenuItem } from './MenuItem'

export const ExercisesMenu = () => {
  const [exercisesByType, setExercisesByType] = useState<Exercise[]>([])
  const { type } = useParams()
  const menuItemStyles = `hover:bg-gray-100 dark:border-gray-700 dark:bg-cyan-700 dark:hover:bg-teal-600`

  useEffect(() => {
    const item = types.find((item) => item.code === type)
    const exercisesByType = exercises.filter((exercise) => exercise.type.code === item?.code)
    setExercisesByType(exercisesByType)
  }, [type])

  return (
    <>
      <div className=" flex flex-col md:flex-row w-full items-start justify-between overflow-hidden">
        {levels.map((lev) => (
          <section
            key={lev.id}
            className="min-h-lvh w-1/3 flex flex-col items-start justify-center"
          >
            <div className="flex flex-col items-center justify-center w-full">
              <img src={`/src/assets/pictures/${lev.image}.png`} />
              <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-5 w-full md:max-w-[1220px] md:px-5 overflow-hidden">
                {exercisesByType.map(({ id, code, name, level }) => {
                  if (level.id === lev.id) {
                    return (
                      <Link key={code} to={`/play/${id}`}>
                        <MenuItem className={menuItemStyles} key={code} title={name} />
                      </Link>
                    )
                  }
                  return null
                })}
              </div>
            </div>
          </section>
        ))}
      </div>
    </>
  )
}
