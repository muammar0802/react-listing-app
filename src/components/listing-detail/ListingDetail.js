import React from 'react'
import './ListingDetail.css'

function ListingDetail() {
  return (
    <div className="listing-detail">
      <div className="listing-detail-content">
        <img className="listing-detail-img" src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <h1 className="listing-detail-title">
          Awesome property
          <div className="listing-detail-action">
            <i class="listing-detail-action-icon fas fa-edit"></i>
            <i class="listing-detail-action-icon fas fa-trash-alt"></i>
          </div>
        </h1>
        <div className="listing-detail-meta-info">
          <span className="listing-detail-author">Author - <strong>John Doe</strong></span>
          <span className="listing-detail-time">1 Day ago</span>
        </div>
        <p className="listing-detail-description">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
        </p>
      </div>
    </div>
  )
}

export default ListingDetail