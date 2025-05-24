import { useState, useEffect } from 'react'
import coursesData from '../data/courses.json'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Courses = () => {
  const { courses } = coursesData
  const [selectedCategory, setSelectedCategory] = useState('All')


  const categories = ['All', '2nd Semester', '4th Semester', 'Referred']

  const filteredCourses = selectedCategory === 'All' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory)

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Our Courses</h1>
      
      <div className="flex justify-center gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full transition-all ${
              selectedCategory === category
                ? 'bg-primary text-white'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredCourses.map((course, index) => (
          <div 
            key={course.id} 
            className="card bg-base-100 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"

          >
            <figure><img src={course.image} alt={course.title} /></figure>
            <div className="card-body">
              <div className="">
                <h2 className="card-title">{course.title}</h2>
              </div>
              <div className="text-sm text-gray-600">
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-xl font-bold">${course.price}</span>
                <div className="card-actions">
                  <button className="btn btn-primary">Enroll Now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Courses 