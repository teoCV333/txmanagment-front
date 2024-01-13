import React from 'react';
import './SearchDetail.css';
import logo1 from './searchdetaillogo1.png';
import logo2 from './searchdetaillogo2.png';
import pdfLogo from './pdf-logo.png';
import { useParams, useNavigate } from 'react-router-dom';
import { jsPDF } from 'jspdf';
import { AuthModal } from './AuthModal';

function SearchDetail() {
    const [autenticated, setAutenticated] = React.useState(false);
    const [openModal, setOpenModal] = React.useState(false);

    const { id } = useParams();

    const userAccount = {
        id: id,
        name: 'Fulanito',
        lastname: 'Peréz Durango',
        accountNumber: '5844082932',
        address: '7312 N 21ST ST',
        country: 'Pennsylvania',
        city: 'PHILADELPHIA',
        abreviation: 'PA',
        postalCode: '19138',
        bBalanceDate: '02/01',
        bBalance: '$582.42',
        dAdditions: '2,149.45',
        wSubtractions: '-3,096.469',
        eBalanceDate: '02/29',
        eBalance: '-$364.62'
    }

    const currentDate = new Date();

    const formattedDate = currentDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });


    const doc = new jsPDF();

    const downloadPDF = () => {
        const pageWidth = doc.internal.pageSize.getWidth();
        const pageHeigth = doc.internal.pageSize.getHeight();

        doc.setFontSize(20);
        doc.setFont("arial", "bold");
        doc.text(`Wells Fargo Statement of Account`, 13, 18);

        doc.setFontSize(10);
        doc.setFont("arial", "normal");
        doc.text(formattedDate, 15, 25);

        doc.addImage(pdfLogo, 'PNG', pageWidth - 35, 10, 18, 18);

        doc.setFontSize(11);
        doc.setFont("arial", "bold");
        doc.text(userAccount.name + ' ' + userAccount.lastname, 20, 75);
        doc.text(userAccount.accountNumber, 20, 80);
        doc.text(userAccount.address, 20, 85);
        doc.text(userAccount.city + ' ' + userAccount.abreviation, 20, 90);


        doc.setLineWidth(0.8);
        doc.line(118, 60, 118, 115);

        doc.setFontSize(14);
        doc.setFont("arial", "bold");
        doc.text('Questions?', 120, 63);

        doc.setFontSize(9);
        doc.setFont("arial", "normal");
        doc.text('Available by phone 24 hours a day, 7 days a week:', 120, 70);
        doc.text('We accept all relay calls, including 711', 120, 75);

        doc.setFontSize(11);
        doc.setFont("arial", "bold");
        doc.text('1-800-TO-WELLS', 123, 80);
        doc.setFont("arial", "normal");
        doc.setFontSize(8);
        doc.text('(1-800-869-3557)', 157, 80);

        doc.setFontSize(9);
        doc.setFont("arial", "normal");
        doc.text('En español: 1-877-727-2932', 122, 86);

        doc.setFontSize(9);
        doc.setFont("arial", "normal");
        doc.text('Online: wellsfargonet.com', 120, 100);

        doc.setFontSize(9);
        doc.setFont("arial", "normal");
        doc.text('Write: Wells Fargo Bank, N.A. (345)', 120, 106);
        doc.text('P.O. Box 6995', 130, 110);
        doc.text('Portland, OR 97228-6995', 130, 114);

        doc.setLineWidth(0.8);
        doc.line(8, 124, 115, 124);

        doc.setFontSize(15);
        doc.setFont("arial", "bold");
        doc.text('You and Wells Fargo', 13, 130);

        doc.setFontSize(9);
        doc.setFont("arial", "normal");
        doc.text('Thank you for being a loyal Wells Fargo customer. We value your trust in our', 13, 135);
        doc.text('company and look forward to continuing to serve you with your financial needs.', 13, 139);

        doc.setLineWidth(0.8);
        doc.line(120, 127, pageWidth - 18, 127);

        doc.setFontSize(13);
        doc.setFont("arial", "bold");
        doc.text('Account options', 120, 133);

        doc.setFontSize(8);
        doc.setFont("arial", "normal");
        doc.text('A check mark in the box indicates you have these', 120, 138);
        doc.text('convenient services with your account(s). Go to', 120, 141);
        doc.text('wellsfargo.com or call the number above if you have', 120, 144);
        doc.text('questions or if you would like to add new services.', 120, 147);

        doc.setFontSize(9);
        doc.setLineWidth(0.2);
        doc.setFont("arial", "normal");

        doc.text('Online Banking', 120, 155);
        doc.rect(150, 152, 3, 3);
        doc.setFontSize(11);
        doc.setFont('arial', 'bold');
        doc.text('x', 150.7, 154.3);

        doc.setFontSize(9);
        doc.setFont("arial", "normal");
        doc.text('Online Bill Pay', 120, 160);
        doc.rect(150, 157, 3, 3);

        doc.text('Online Statements', 120, 165);
        doc.rect(150, 162, 3, 3);

        doc.text('Mobile Banking', 120, 170);
        doc.rect(150, 167, 3, 3);
        doc.setFontSize(11);
        doc.setFont('arial', 'bold');
        doc.text('x', 150.7, 169.3);

        doc.setFontSize(9);
        doc.setFont('arial', 'normal');
        doc.text('My Spending Report', 120, 175);
        doc.rect(150, 172, 3, 3);
        doc.setFontSize(11);
        doc.setFont('arial', 'bold');
        doc.text('x', 150.7, 174.4);


        doc.setFontSize(9);
        doc.setLineWidth(0.2);
        doc.setFont("arial", "normal");

        doc.text('Direct Deposit', 158, 155);
        doc.rect(189, 152, 3, 3);
        doc.setFontSize(11);
        doc.setFont('arial', 'bold');
        doc.text('x', 189.7, 154.3);

        doc.setFontSize(9);
        doc.setFont('arial', 'normal');
        doc.text('Auto Transfer/Payment', 158, 160);
        doc.rect(189, 157, 3, 3);
        doc.setFontSize(11);
        doc.setFont('arial', 'bold');
        doc.text('x', 189.7, 159.3);

        doc.setFontSize(9);
        doc.setFont('arial', 'normal');
        doc.text('Overdraft Protection', 158, 165);
        doc.rect(189, 162, 3, 3);

        doc.text('Debit Card', 158, 170);
        doc.rect(189, 167, 3, 3);

        doc.text('Overdraft Service', 158, 175);
        doc.rect(189, 172, 3, 3);

        doc.setLineWidth(2);
        doc.line(8, 190, pageWidth - 13, 190);

        doc.setFont('arial', 'bold');
        doc.setFontSize(17)
        doc.text('Wells Fargo Every Day Checking', 8, 200);

        doc.setLineWidth(0.2);
        doc.line(8, 210, pageWidth - 85, 210);

        doc.setLineWidth(0.9);
        doc.line(pageWidth - 85, 210, pageWidth - 85, 240);

        doc.setFont('arial', 'bold');
        doc.setFontSize(13);
        doc.text('Statement period activity summary', 8, 214);

        doc.setFont('arial', 'normal');
        doc.setFontSize(9);
        doc.text(`Beginning balance on ${userAccount.bBalanceDate}`, 17, 220);
        doc.text(userAccount.bBalance, 105, 220, {align: 'right'});

        doc.setFont('arial', 'normal');
        doc.setFontSize(9);
        doc.text('Deposits/Additions', 17, 225);
        doc.text(userAccount.dAdditions, 105, 225, {align: 'right'});

        doc.setFont('arial', 'normal');
        doc.setFontSize(9);
        doc.text('Withdrawals/Subtractions', 17, 230);
        doc.text(userAccount.wSubtractions, 105, 230, {align: 'right'});

        doc.setLineWidth(0.9);
        doc.line(8, 232, pageWidth - 85, 232);

        doc.setFont('arial', 'bold');
        doc.setFontSize(10);
        doc.text(`Ending balance on ${userAccount.eBalanceDate}`, 17, 236);
        doc.text(userAccount.eBalance, 105, 236, {align: 'right'});

        doc.setFont('arial', 'normal');
        doc.setFontSize(10);
        doc.text('Account number:', pageWidth - 83, 214);
        doc.setFont('arial', 'bold');
        doc.text(userAccount.accountNumber, pageWidth - 58, 214);

        doc.setFont('arial', 'bold');
        doc.setFontSize(10);
        doc.text(userAccount.name + ' ' + userAccount.lastname, pageWidth - 83, 220);

        doc.setFont('arial', 'normal');
        doc.setFontSize(9);
        doc.text(`${userAccount.country}  account terms and conditions apply.`, pageWidth - 83, 226);

        doc.setFont('arial', 'normal');
        doc.setFontSize(9);
        doc.text('For Direct Deposit use', pageWidth - 83, 233); 
          
        doc.setFont('arial', 'normal');
        doc.setFontSize(9);
        doc.text('Routing Number (RTN): 031000503', pageWidth - 83, 237); 
          
        doc.setFont('arial', 'bold');
        doc.setFontSize(10);
        doc.text('Overdraft Protection', 8, 250); 

        doc.setFont('arial', 'normal');
        doc.setFontSize(8.5);
        doc.text('This account is not currently covered by Overdraft Protection. If you would like more information regarding Overdraft Protection and eligibility requirements', 8, 255);
        doc.text('please call the number listed on your statement or visit your Wells Fargo branch.', 8, 259);


        //page
       /*  doc.setFontSize(10);
        doc.setFont("arial", "normal");
        doc.text(formattedDate, 15, 25);
        doc.addImage(pdfLogo, 'PNG', pageWidth - 30, 10, 18, 18);

        doc.setLineWidth(0.5);
        doc.line(13, 35, pageWidth - 10, 35);
        doc.setFont("arial", "bold");
        doc.text('Monthly service fee summary ', 13, 39);

        doc.setFontSize(9);
        doc.text('How to avoid the monthly service fee', 22, 45); */

        doc.save("test-1.pdf");
    };

    const watchStatements = () => {
        setOpenModal(true);
    };

    return (
        <div className="search-detail">
            <div className="header-detail" >
                <div className="detail-logo-1">
                    <img src={logo1} alt="" />
                </div>
                <p className="account-number">
                    <h1>Account: <span>{userAccount.id}</span></h1>
                </p>
                <p className="nameholder">
                    <h1>Name: <span>Fulanito Peralez Duran</span></h1>
                </p>
                <div className="detail-logo-2">
                    <img src={logo2} alt="" />
                </div>
            </div>
            <div className="balance-content">
                <h1>Available balance: <span>$5000,00</span> </h1>
                <ul className="balance-list">
                    <li><h2>Ending collected balance: <span>$0,00</span></h2></li>
                    <li><h2>Current posted balance: <span>$5000,00</span></h2></li>
                    <li><h2>Pending deposits/credits: <span>$5000,00</span></h2></li>
                    <li><h2>Total available: <span>$5000,00</span></h2></li>
                </ul>
            </div>
            <div className="download-movements">
                <h2>Download bank movements</h2>
                <button onClick={() => downloadPDF()}>Download</button>
               {/*  <button onClick={() => watchStatements()}>Download</button>
                {openModal && (
                    <AuthModal>
                        <input type='text' placeholder='Password' />
                        <button>Validate</button>
                    </AuthModal>
                )} */}
            </div>
        </div>
    );
}

export { SearchDetail };