import React from 'react'
import { Outlet, Link } from 'react-router-dom'
export default function Games() {
    return (
        <div className='games'>
            <aside>
                <div className='d-grid gap-2 p-2 m-auto mt-2'>
                    <Link className='btn btn-primary  btn-lg' to=''>coin</Link>
                    <Link className='btn btn-primary  btn-lg' to='paper'>Rock Paper Scissor</Link>
                </div>
            </aside>
            <main>
                <Outlet />
            </main>
        </div>
    )
}
