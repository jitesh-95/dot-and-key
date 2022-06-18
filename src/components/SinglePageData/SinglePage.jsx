import React from 'react'
import Details from "../SinglePageData/Details";
import LeftBar from "../SinglePageData/LeftBar";
import RightBar from "../SinglePageData/RightBar";
import style from "../SinglePageData/singlePage.module.css"

const SinglePage = () => {
  return (
<>

      <div className={style.main}>
              <RightBar/>
      <LeftBar/>
      </div>
      <Details/>
</>
  )
}

export default SinglePage;