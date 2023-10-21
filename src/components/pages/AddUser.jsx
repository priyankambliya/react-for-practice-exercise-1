import React from 'react'

const AddUser = () => {
    return (
        <div className='d-flex justify-content-center align-items-center h-100%'>
            <div className='w-50  border rounded-2 p-5'>
                <h1 className='h1 text-center mb-10'>Add users</h1>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Name</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Password</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" />
                </div>
                <button className='btn btn-primary m-auto d-flex px-4 mt-4'>Add</button>
            </div>
        </div>
    )
}

export default AddUser