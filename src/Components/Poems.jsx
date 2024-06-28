import React from 'react'
import { Link } from 'react-router-dom';

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
            <li className='flex justify-center'>
              <Link to={blog.link} className="text-center text-6xl eb-garamond-normal custom-bronze mb-2 no-underline hover:text-current">{blog.name}</Link>
            </li>
            <li className='flex justify-center mt-8 mb-60'>
              <Link to={blog.link} className="text-xl eb-garamond-normal custom-bronze no-underline hover:text-current">Read More</Link>
            </li>
          </div>
        ))}
      </div>
    </div>
  );
}


export default Blogs