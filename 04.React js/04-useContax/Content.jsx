import React, { useContext } from 'react'
import { Themecontaxt } from './Main'

function Content() {
  let {theme,settheme} = useContext(Themecontaxt)
  return (
    <div className={theme} style={{width: '100%'}}>
      <h1>this is content Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab iste tenetur placeat. Distinctio incidunt quae optio alias? Saepe vel, numquam molestiae nobis illo repellat consequatur magnam quidem. Enim, voluptatibus aliquam, officia minus amet nostrum dolore sequi tempora neque labore quod? Cum ipsam deleniti eaque quo? Iure cupiditate quod, et magni, beatae illo consequuntur non, architecto assumenda eligendi dicta reiciendis sunt? </h1>

    </div>
  )
}

export default Content