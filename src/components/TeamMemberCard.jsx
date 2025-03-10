import React from 'react'

const TeamMemberCard = ({name,title,image,experience}) => {
  return (
    <div className='flex flex-col justify-center items-center bg-gray-400'>
      <div className='flex flex-col justify-center items-center bg-slate-300 p-5 mt-3 mb-3 rounded-lg shadow-black'>
        <img src={image} alt="img" className='rounded-full bg-white w-5' />
        <p className='font-semibold mt-2'>Name : {name}</p>
        <p>Job title : {title}</p>
        <p>Experience : {experience}</p>
      </div>
    </div>
  )
}

export default TeamMemberCard
