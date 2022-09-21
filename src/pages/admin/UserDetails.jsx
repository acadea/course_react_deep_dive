import React from 'react'
import { Form, useActionData, useLoaderData } from 'react-router-dom'

export default function UserDetails(props) {

  const loaderData = useLoaderData();

  const actionData = useActionData();

  // console.log({loaderData});
  console.log({actionData});

  return (
    <div>UserDetails

      <Form action='/admin/manage/user/1' method='post'>
        <input type="text" name="email" className='m-5 bg-light-900' />

        {actionData?.errors && (<span className='text-red-400'>{actionData.errors}</span>)}

      </Form>


    </div>
  )
}
