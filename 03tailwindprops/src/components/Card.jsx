// Card.jsx
import React from 'react'

function Card({ username = "Hitesh", post = "Not assigned yet", photo="https://d8qb5cxd9qhkd.cloudfront.net/pages/tiles/Manchal.jpg" }) {
  // Setting default value for photo if not provided
  // if (!photo) {
  //   photo = "https://media.licdn.com/dms/image/D4D03AQF5Quja7xI0Xg/profile-displayphoto-shrink_800_800/0/1702531255203?e=2147483647&v=beta&t=l12enIbLdpWhHvVNdDGW61d6FCvWn36E3aKAwa1m4QQ";
  // }

  return (
    <div>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" 
             src={photo} 
             alt="" width="384" height="512"/>
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale
              on large teams. It’s easy to customize, adapts to any design,
              and the build size is tiny.”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
              {username}
            </div>
            <div className="text-slate-700 dark:text-slate-500">
              {post}
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  )
}

export default Card



