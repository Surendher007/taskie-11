import React from 'react'
import Card from './Card'

function App() {

    let data = [
      {
        plan:"FREE",
        amount:"$0",
        user:"Single User",
        isUser:true,
        storage:"5GB Storage",
        isStorage:true,
        public:"Unlimited public Project",
        isPublic:true,
        community:"Community Access",
        isCommunity:true,
        private:"Unlimitted Private Project",
        isPrivate:false,
        support:"deticated Phone Support",
        isSupport:false,
        subdomain:"Free Domains",
        isSubdomain:false,
        reports:"Monthly Status Report",
        isReports:false
  
      },
      {
        plan:"PLUS",
        amount:"$9",
        user:"5 User",
        isUser:true,
        storage:"50GB Storage",
        isStorage:true,
        public:"Unlimited public Project",
        isPublic:true,
        community:"Community Access",
        isCommunity:true,
        private:"Unlimitted Private Project",
        isPrivate:true,
        support:"deticated Phone Support",
        isSupport:true,
        subdomain:"Free Domains",
        isSubdomain:true,
        reports:"Monthly Status Report",
        isReports:false
  
      },
      {
        plan:"BRO",
        amount:"$49",
        user:"Unlimitted User",
        isUser:true,
        storage:"Unlimitted Storage",
        isStorage:true,
        public:"Unlimited public Project",
        isPublic:true,
        community:"Community Access",
        isCommunity:true,
        private:"Unlimitted Private Project",
        isPrivate:true,
        support:"deticated Phone Support",
        isSupport:true,
        subdomain:"Free Domains",
        isSubdomain:true,
        reports:"Monthly Status Report",
        isReports:true
  
      }
    ]
  return <>
  {/* <!-- This snippet uses Font Awesome 5 Free as a dependency. You can download it at fontawesome.io! --> */}

<section className="pricing py-5">
  <div className="container">
    <div className="row">
    {
      data.map((e,i)=>{
        return <Card data={e} key={i} />
      })
    }
    </div>
  </div>
</section>
  </>
}

export default App
