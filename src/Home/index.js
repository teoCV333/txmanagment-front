import './Home.css';
import { BonusOnUs } from './BonusOnUs';
import { CashReward } from './CashReward';
import { FindCC } from './FindCC';
import { GetCollege } from './GetCollege';
import { InterestRates } from './InterestRates';
import { GetCashBonus } from './GetCashBonus';
import { PlanGuide } from './PlanGuide';
import { ReimagineGuide } from './ReimagineGuide';
import { DreamGuide } from './DreamGuide';
import { AppAd } from './AppAd';
import { WhoWeAre } from './WhoWeAre';
import { WhyWeAreCommit } from './WhyWeAreCommit';

function Home() {
    return (
        <div>
            <CashReward />
            <div className="grid-container" >
                <BonusOnUs />
                <FindCC />
                <GetCollege />
                <InterestRates />
            </div>
            <GetCashBonus />
            <hr className="break-line" />
            <div className="financial-guide-content" >
                <h1 className="financial-guide-tittle" >Financial guidance and support</h1>
                <div className="financial-grid-container">
                    <PlanGuide />
                    <ReimagineGuide />
                    <DreamGuide />
                </div>
            </div>
            <AppAd />
            <hr className="break-line" />
            <div className="serving-customers-content">
                <h1 className="serving-customers-tittle">Serving our customers and communities</h1>
                <h2 className="serving-customers-text-content">
                    It doesn't happen with one transaction, in one day on the job, or in one quarter. It's earned relationship by relationship.
                </h2>
                <div className="serving-grid-container">
                    <WhoWeAre />
                    <WhyWeAreCommit />
                </div>
            </div>
        </div>
    );
}

export { Home };