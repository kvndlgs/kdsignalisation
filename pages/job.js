import Layout from '../components/layout'
export default function Job(){
    return (
        <Layout hasFooter title='Carrière'>
        <div>
            <div className='py-8 flex items-center justify-center'>
                <h2 className='font-bold text-5xl text-dark-300 tracking-wide'> Joins-toi a l'équipe! </h2>
            </div>
            <div className='flex items-center justify-center w-full h-full'>
                <img className='w-1/3' src='images/IMG_0868.JPG' alt='retard' />
            </div>
        </div>
        </Layout>
    )
}