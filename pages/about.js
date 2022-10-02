import Layout from '../components/layout'

const geoUrl =  "geo.json"



export default function About(){
    return (
        <Layout hasFooter title='À propos'>
            <div className='bg-dark-300'>
                <section className='w-full h-auto py-20'>
                    <div className='container mx-auto'>
                        <h2> Qui sommes-nous ?</h2>
                    </div>
                </section>
                <section className='w-full h-auto'>
                    <div className='container mx-auto'>
                    <div className='flex flex-row items-center justify-between'>
                    <h2 className='font-ultra text-5xl text-white tracking-wider'> Régions désservies </h2>
    
                    </div>
                    </div>
                </section>
            </div>
        </Layout>
    )
}