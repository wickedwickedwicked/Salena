import React from 'react'

const blogs = [
  { name: "Review of As Long as the Lemon Trees Grow", date: "2/13/24", link: "/blog/review-of-as-long-as-the-lemon-trees-grow" },
  { name: "Navigating Istanbul", date: "8/9/23", link: "/blog/navigating-istanbul" },
  { name: "Choosing Sustainable Fashion", date: "3/6/23", link: "/blog/choosing-sustainable-fashion" },
  { name: "What Will People Say?", date: "8/29/22", link: "/blog/what-will-people-say" },
  { name: "The Pleasure of One’s Company", date: "11/17/21", link: "/blog/pleasure-of-ones-company" },
  { name: "Post-Graduation Anxiety", date: "10/5/21", link: "/blog/post-graduation-anxiety"},
  { name: "The Pandemic has Affected the Way We Socialize", date: "9/21/21", link: "/blog/a-hrefhttpssalenachaudhrywordpresscom20210831the-pandemic-has-affected-the-way-we-socializethe-pandemic-has-affected-the-way-we-socializea" }
];


function Blogs() {
  return (
    <div className="flex justify-center">
      <div className="space-y-4">
        {blogs.map((blog, index) => (
          <div key={index} className={index === 0 ? "mt-40" : ""}>
            <p className="flex justify-center text-sm text-white mb-2 ">{blog.date}</p>
            <a href={blog.link} className="text-center flex justify-center text-6xl eb-garamond-normal custom-bronze mb-2 hover:text-current">{blog.name}</a>
            <a href={blog.link} className="text-xl flex justify-center eb-garamond-normal custom-bronze mt-8 mb-60 hover:text-current">Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
}


export default Blogs