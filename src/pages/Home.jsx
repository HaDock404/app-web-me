import Header from '../components/Header'
import Username from '../components/Username'
import Intro from '../components/Intro'
import Separation2 from '../components/Separation2'
import Separation3 from '../components/Separation3'
import ContributionTitle1 from '../components/ContributionTitle1'
import ContributionTitle2 from '../components/ContributionTitle2'
import ContributionTitle3 from '../components/ContributionTitle3'
import Articles from '../components/Articles'
import Articles2 from '../components/Articles2'
import Articles3 from '../components/Articles3'
import Articles4 from '../components/Articles4'
import Banner from '../components/Banner'
import Banner2 from '../components/Banner2'

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
            <Banner />
            <Separation3 />
            <Articles2 />
            <Separation3 />
            <Banner2 />
            <Separation3 />
            <Articles4 />
            <Separation2 />
            <ContributionTitle3 />
            <Articles3 />
            <Separation2 />
        </>
    )
}

export default Home