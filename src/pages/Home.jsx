import Header from '../components/Header'
import Username from '../components/Username'
import Intro from '../components/Intro'
import Separation2 from '../components/Separation2'
import ContributionTitle from '../components/ContributionTitle'
import Articles from '../components/Articles'

function Home() {
    return (
        <>
            <Header />
            <Username />
            <Intro />
            <Separation2 />
            <ContributionTitle />
            <Articles />
            <Separation2 />
        </>
    )
}

export default Home