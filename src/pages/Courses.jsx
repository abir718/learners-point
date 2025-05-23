const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Web Development",
      description: "Learn modern web development with React, Node.js, and more",
      image: "https://placehold.co/600x400",
    },
    {
      id: 2,
      title: "Data Science",
      description: "Master data analysis, machine learning, and AI",
      image: "https://placehold.co/600x400",
    },
    {
      id: 3,
      title: "Digital Marketing",
      description: "Learn SEO, social media marketing, and content strategy",
      image: "https://placehold.co/600x400",
    },
  ]

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Our Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="card bg-base-100 shadow-xl">
            <figure><img src={course.image} alt={course.title} /></figure>
            <div className="card-body">
              <h2 className="card-title">{course.title}</h2>
              <p>{course.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Learn More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Courses 