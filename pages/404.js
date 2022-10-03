import Layout from '../components/layout'

export default function Custom404(){
    return (
        <Layout hasFooter>
            <div className='flex items-center justify-center min-h-screen-xl min-w-screen-xl bg-dark-25'>
                <h1 className='text-4xl font-ultra text-dark'>404</h1>
            </div>
        </Layout>
    )
}