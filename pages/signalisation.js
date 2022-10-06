import Layout from '../components/layout'
import PageTitle from '../components/page-title'
import { HiCheck } from 'react-icons/hi'

const Regions = ['Laval', 'Montréal','Laurentides', 'Lanaudière','Montérégie', 'Mauricie','Quebec', 'Outaouais',"Canton-de-l'est", 
'Centre-du-Quebec','Abitibi-Témiscamingue', 'Saguenay-Lac-Saint-Jean','Charlevoix', 'Côte-Nord','Îles-de-la-madeleine', 'Gaspésie',
'Bas-Saint-Laurent', 'Chaudière-Appalache',"Nunavik", 'Eeyou istchee','Baie-James']


export default function Signalisation(){
    return (
        <Layout hasFooter title='Signalisation routière'>
        
            <section className='flex flex-col items-center justify-start max-w-screen-xl h-auto mx-auto pb-20'>
            <PageTitle>
                Signalisation routière
            </PageTitle>
            <p className='w-5/6 text-base font-main text-darkgray'>
                Nos signaleurs routiers certifiers (AQTr) assurons une circulation fluide et sécuritaire sur vos chantiers. N'importe ou au Quebec, vous pouvez compter sur nous.
            </p>
            <ul>
                <li>
                     Équipes de signaleurs disponible 24/7
                </li>
                <li>
                    Camions barrières
                </li>
                <li>
                    Véhicule d'accompagnement
                </li>
                <li>
                    Surveillance de chantier
                </li>
            </ul>
            </section>
            <section section className='w-full h-auto bg-dark-25 pb-20'>
                <div className='max-w-screen-xl mx-auto'>
                    <PageTitle>
                        Régions désservies
                    </PageTitle>
                    <div className='grid md:grid-cols-2 grid-cols-1 grid-rows-auto w-full justify-start mt-10'>
                        {
                            Regions.map((region) => (
                                <div className='md:w-5/6 w-full px-20 md:mx-auto md:px-10 inline-flex md:items-start items-center md:justify-start justify-start py-4' key={region}> <HiCheck className='text-2xl m-1 bg-light text-dark-25' /> <p className='font-main text-dark text-2xl leading-10'> { region } </p> </div>
                            ))

                        }
                    </div>
                </div>
            </section>
    
        </Layout>
    )
}