import './Home.css';
import { BonusOnUs } from './BonusOnUs/index.js';
import { CashReward } from './CashReward/index.js';
import { FindCC } from './FindCC/index.js';
import { GetCollege } from './GetCollege/index.js';
import { InterestRates } from './InterestRates/index.js';
import { GetCashBonus } from './GetCashBonus/index.js';
import { PlanGuide } from './PlanGuide/index.js';
import { ReimagineGuide } from './ReimagineGuide/index.js';
import { DreamGuide } from './DreamGuide/index.js';
import { AppAd } from './AppAd/index.js';
import { WhoWeAre } from './WhoWeAre/index.js';
import { WhyWeAreCommit } from './WhyWeAreCommit/index.js';

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