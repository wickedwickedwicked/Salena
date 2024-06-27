import React from 'react'

const blogs = [
  { name: "Beauty", date: "12/27/22", link: "/poems/beauty" },
  { name: "Composure", date: "8/26/22", link: "/poems/composure" }
];


function Blogs() {
  return (
    <div className="flex justify-center">
      <div className="space-y-4">
        {blogs.map((blog, index) => (
          <div key={index} className={index === 0 ? "mt-40" : ""}>
            <p className="flex justify-center text-sm text-white mb-2 ">{blog.date}</p>
            <a href={blog.link} className="text-center flex justify-center text-6xl eb-garamond-normal custom-bronze mb-2 hover:text-current">{blog.name}</a>
            <a href={blog.link} className=" text-center text-xl flex justify-center eb-garamond-normal custom-bronze mt-8 mb-60 hover:text-current">Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs