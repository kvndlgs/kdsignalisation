import Layout from '../components/layout'
import PageTitle from '../components/page-title'


export default function About(){
    return (
        <Layout hasFooter title='À propos'>
            <div className='w-full h-screen-xl pb-14'>
                <div className='max-w-screen-xl mx-auto'>
                    <PageTitle>
                        Qui sommes-nous?
                    </PageTitle>
                    <div className='max-w-screen-xl mx-auto flex justify-center items-center pt-4 pb-8 px-14'>
                    <p className='text-base text-darkgray font-three w-full md:w-5/6'>
                        KD SIGNALISATION
                    </p>

                    </div>
                    </div>         
            </div>
        </Layout>
    )
}