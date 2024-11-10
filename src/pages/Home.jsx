import Header from '../components/Header'
import Username from '../components/Username'
import Intro from '../components/Intro'
import Separation2 from '../components/Separation2'
import ContributionTitle1 from '../components/ContributionTitle1'
import ContributionTitle2 from '../components/ContributionTitle2'
import Articles from '../components/Articles'

function Home() {
    return (
        <>
            <Header />
            <Username />
            <Intro />
            <Separation2 />
            <ContributionTitle1 />
            <Articles />
            <Separation2 />
            <ContributionTitle2 />
        </>
    )
}

export default Home