import React from 'react'
import Person from './Person'
import './PersonList.css'

const people = [
  {
    img: 'https://www.businessinsider.com/software-developers-programming-jobs-types-skills-salaries-2022-3',
    name: 'Elsa',
    job: 'Developer',
  },
  {
    img: 'https://www.businessinsider.com/software-developers-programming-jobs-types-skills-salaries-2022-3',
    name: 'Anna',
    job: 'HomeMaker',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwkYINhQzjxvWygVpn12St04e7Ev9VwdRc-A&usqp=CAU',
    name: 'Jhon',
    job: 'Developer',
  },
]

const PersonList = () => {
  return (
    <>
      <Person person={people[0]} />
      <Person person={people[1]} />
      <Person person={people[2]} />
    </>
  )
}

export default PersonList