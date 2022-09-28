import Layout from '../components/layout'

export default function About(){
    return (
        <Layout>
            <div className='bg-white py-8 flex items-center justify-center'>
                <div className='pb-[200px]'>
                <h2 className='text-4xl font-semibold text-light-400'> Qui sommes-nous ? </h2>
                <p>

                </p>
                </div>
            </div>
            <div className='py-8  bg-dark flex items-center justify-center'>
                <div className='pb-[200px]'>
                <h2 className='text-4xl font-semibold text-white'>
                    Regions
                </h2>
                <h5> Nous offrons nos services a travers le Quebec.</h5>
                </div>
            </div>
            <div className='py-8 bg-white flex items-center justify-center'>
                <div className='pb-[200px]'>
                <h2 className='text-4xl font-semibold text-dark'> Temoignages</h2>
                </div>
            </div>
        </Layout>
    )
}