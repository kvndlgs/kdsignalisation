import Layout from '../components/layout'
export default function Job(){
    return (
        <Layout hasFooter title='Carrieres'>
        <div>
            <div className='pt-20 flex items-center justify-center'>
                <h2 className='font-bold text-3xl md:font-5xl text-dark '> JOINS-TOI À L'ÉQUIPE !</h2>
            </div>
            <div className='flex items-center justify-center w-full h-full'>
                <img className='w-1/3' src='images/IMG_0868.JPG' alt='retard' />
            </div>
        </div>
        </Layout>
    )
}