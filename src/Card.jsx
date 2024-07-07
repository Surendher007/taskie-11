import React from 'react'
function Card({data}) {
  return <>
  
      {/* <!-- Free Tier --> */}
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{data.plan}</h5>
            <h6 className="card-price text-center">{data.amount}<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              <li className={data.isUser? "" : "text-muted"}><span className="fa-li"><i className={data.isUser?"fas fa-check":"fas fa-times"}></i></span>{data.plan==="FREE"?data.user:<b>{data.user}</b> }</li>
              <li className={data.isStorage? "" : "text-muted"}><span className="fa-li"><i className={data.isStorage?"fas fa-check":"fas fa-times"}></i></span>{data.storage}</li>
              <li className={data.isPublic? "" : "text-muted"}><span className="fa-li"><i className={data.isPublic?"fas fa-check":"fas fa-times"}></i></span>{data.public}</li>
              <li className={data.isCommunity? "" : "text-muted"}><span className="fa-li"><i className={data.isCommunity?"fas fa-check":"fas fa-times"}></i></span>{data.community}</li>
              <li className={data.isPrivate? "" : "text-muted"}><span className="fa-li"><i className={data.isPrivate?"fas fa-check":"fas fa-times"}></i></span>{data.private}</li>
              <li className={data.isSupport? "" : "text-muted"}><span className="fa-li"><i className={data.isSupport?"fas fa-check":"fas fa-times"}></i></span>{data.support}</li>
              <li className={data.isSubdomain? "" : "text-muted"}><span className="fa-li"><i className={data.isSubdomain?"fas fa-check":"fas fa-times"}></i></span>{data.plan==="BRO"?<><b>Unlimited</b> {data.subdomain}</>:data.subdomain}</li>
              <li className={data.isReports? "" : "text-muted"}><span className="fa-li"><i className={data.isReports?"fas fa-check":"fas fa-times"}></i></span>{data.reports}</li>
            </ul>
            <div className="d-grid">
              <button className="btn btn-primary text-uppercase">Button</button>
            </div>
          </div>
        </div>
      </div>
  </>
}

export default Card