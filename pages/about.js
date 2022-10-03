import Layout from '../components/layout'
import PageTitle from '../components/page-title'


export default function About(){
    return (
        <Layout hasFooter title='À propos'>
            <div className='w-full h-screen-xl'>
                <div className='max-w-screen-xl mx-auto'>
                    <PageTitle>
                        Qui sommes-nous ?
                    </PageTitle>
                    <div className='max-w-screen-xl mx-auto flex justify-center items-center pt-4 pb-8 px-14'>
                    <p className='text-base text-dark font-main'>
                        Jeune mais non pas pour le moin ambitieuse entreprise. Nous aspirons a devenir un leader dans l'industrie. Chez KD SIGNALISATION nous nous démarquons pars notre standard de recrutement ainsi que notre étique de travail exceptionel. En visitant de nombreux chantier d'un bout a l'autre du Quebec, nous pouvons confirmer avec certitude que personne n'est a l'abris de la betise humaine, specialement lorsque nous nous trouvons derriere le volant. Le bien etre des travailleurs comme  celui des usagées nous tiens a coeur. C'est pourquoi il est devenue instinctif pour nous de la mettre au premier plan.
                    </p>

                    </div>
                    </div>         
            </div>
        </Layout>
    )
}