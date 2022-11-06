import axios from 'axios'
import React, { useEffect, useState } from 'react'
import UserCard from '../components/UserCard'

const Users = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const getUsers = async () => {
    const {data} = await axios.get('https://randomuser.me/api/?page=1&results=10&seed=abc')
    console.log(data.results)
    setUsers(data.results)
  }

  useEffect(() => {
    getUsers()
  }, [])
  
  return (
    <div className='max-w-4xl'>
      <section className='userscard'>
        {users.map((user, index) => (
          <UserCard user={user} />
        ))}
      </section>
      {/* <pre className='font-30'>{JSON.stringify(users, null, 4)}</pre> */}
    </div>
  )
}

export default Users