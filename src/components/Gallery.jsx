import React from "react";

function Gallery(){
    return <div>
                 {/* <section style=" padding-top: 15px "  class="gallery min-vh-100"> */}
            <div class="container-lg" className="gallery min-vh-100">
                <div style = {{ marginTop : 25 }}
 class="row gy-4 row-cols-1 row-cols-sm-1 row-cols-md-1" >
    
                 <div class="col">
                      <img src="https://media.istockphoto.com/photos/portrait-beautiful-young-woman-with-clean-fresh-skin-picture-id1329622588?b=1&k=20&m=1329622588&s=170667a&w=0&h=MrsM7nyIOW4Gt5PM5Vs6xYIMJ1nr1FLT9bvt0Sve-S4=" class="gallery-item" alt="gallery"/>
                 </div>
                 <div class="col">
                  <img src="https://media.istockphoto.com/photos/portrait-beautiful-young-woman-with-clean-fresh-skin-picture-id1329622588?b=1&k=20&m=1329622588&s=170667a&w=0&h=MrsM7nyIOW4Gt5PM5Vs6xYIMJ1nr1FLT9bvt0Sve-S4=" class="gallery-item" alt="gallery"/>
                </div>
                <div class="col">
                  <img src="https://media.istockphoto.com/photos/portrait-beautiful-young-woman-with-clean-fresh-skin-picture-id1329622588?b=1&k=20&m=1329622588&s=170667a&w=0&h=MrsM7nyIOW4Gt5PM5Vs6xYIMJ1nr1FLT9bvt0Sve-S4=" class="gallery-item" alt="gallery"/>
                </div>
                <div class="col">
                  <img src="https://media.istockphoto.com/photos/portrait-beautiful-young-woman-with-clean-fresh-skin-picture-id1329622588?b=1&k=20&m=1329622588&s=170667a&w=0&h=MrsM7nyIOW4Gt5PM5Vs6xYIMJ1nr1FLT9bvt0Sve-S4=" class="gallery-item" alt="gallery"/>
                </div>
                <div class="col">
                  <img src="https://media.istockphoto.com/photos/portrait-beautiful-young-woman-with-clean-fresh-skin-picture-id1329622588?b=1&k=20&m=1329622588&s=170667a&w=0&h=MrsM7nyIOW4Gt5PM5Vs6xYIMJ1nr1FLT9bvt0Sve-S4=" class="gallery-item" alt="gallery"/>
              </div>
              <div class="col">
                  <img src="https://media.istockphoto.com/photos/portrait-beautiful-young-woman-with-clean-fresh-skin-picture-id1329622588?b=1&k=20&m=1329622588&s=170667a&w=0&h=MrsM7nyIOW4Gt5PM5Vs6xYIMJ1nr1FLT9bvt0Sve-S4=" class="gallery-item" alt="gallery"/>
              </div>
    
                </div>
            </div>
        


{/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button> */}

<div class="modal fade" id="galleryModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        {/* <h5 class="modal-title" id="exampleModalLabel">Modal title</h5> */}
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <img src="https://media.istockphoto.com/photos/portrait-beautiful-young-woman-with-clean-fresh-skin-picture-id1329622588?b=1&k=20&m=1329622588&s=170667a&w=0&h=MrsM7nyIOW4Gt5PM5Vs6xYIMJ1nr1FLT9bvt0Sve-S4=" class="modal-img" alt="modal img"/>
      </div>
      
    </div>
  </div>
</div>

                

    



    </div>
}

export default Gallery;