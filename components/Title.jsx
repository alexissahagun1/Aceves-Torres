import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

const Title = () => {

    const router = useRouter()
    const currentRoute = router.pathname
    const RoutePath = currentRoute.substring(1)
    const title = `Aceves Torres - ${RoutePath}`
    
    return (
        <div>

            <Head>
                <title>{title}</title>
            </Head>

            
        </div>
    )
}

export default Title
