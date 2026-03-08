import React from 'react';
import './SearchDetail.css';
import logo1 from './searchdetaillogo1.png';
import logo2 from './searchdetaillogo2.png';
import pdfLogo from './pdf-logo.png';
import inputBalance from './inputbalance.png';
import accountInfLogo from './importantaccountinfo.png';
import table1 from './table1.png';
import table2 from './table2.png';
import inputs2 from './inputs2.png';
import footer from './footer.png';
import mininput from './mininput.png';
import equalinput from './equalinput.png';
import squaredot from './squaredot.png';
import { useParams, useNavigate } from 'react-router-dom';
import { jsPDF } from 'jspdf';
import { AuthModal } from './AuthModal/index.js';

function SearchDetail() {
    const [autenticated, setAutenticated] = React.useState(false);
    const [error, setError] = React.useState(false);
    const [notFound, setNotFound] = React.useState(false);
    const [openModal, setOpenModal] = React.useState(false);
    const [password, setPassword] = React.useState('');
    /* const [userAccount, setClient] = React.useState({}); */

    const userAccount = {
        id: 1,
        name: "Jose",
        lastname: "Almazan",
        accountNumber: "5140 3135 6784 7466",
        address: "7951 Plummer St",
        country: "EE UU",
        city: "Indianapolis",
        abreviation: "IN",
        postalCode: "46226-3958",
        aBalance: "120000.00",
        eCBalance: "0",
        pWDBalance: "120000.00",
        cPBalance: "120000.00",
        pDCBalance: "120000.00",
        totalAvailable: "120000.00",
        bBalanceDate: "03/01",
        bBalance: "120000.00",
        dAdditions: "0",
        wSubtractions: "0",
        eBalanceDate: "03/31",
        eBalance: "120000.00",
        docPassword: "666666",
        tax: "12000"
    };

    const { id } = useParams();

    /* React.useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`https://wellsnetback.xyz:3001/client/${id}`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
            });
    
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
    
            const result = await response.json();
            setClient(result);
          } catch (error) {
            setNotFound(true);
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []); */

    const currentDate = new Date();

    var year = currentDate.getFullYear();
    var month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-indexed
    var day = currentDate.getDate().toString().padStart(2, '0');
    var hours = currentDate.getHours().toString().padStart(2, '0');
    var minutes = currentDate.getMinutes().toString().padStart(2, '0');
    var seconds = currentDate.getSeconds().toString().padStart(2, '0');

    const idDate = year + month + day + hours + minutes + seconds;

    const formattedDate = currentDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    const watchStatements = () => {
        setOpenModal(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== userAccount.docPassword.toString()) {
            setError(true);
        } else if (password === userAccount.docPassword.toString()) {
            setError(false);
            setOpenModal(false);
            setPassword('');
            downloadPDF();
        }
    };

    const formatAsCurrency = (amount) => {
        return Number(amount).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

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
        doc.text('Online: wellsfargodevolutions.com', 120, 100);

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


        /* NEW */
        doc.setFontSize(15);
        doc.setFont("arial", "bold");
        doc.text('Refund Payment Details', 13, 150);

        doc.setFontSize(9);
        doc.setFont("arial", "normal");
        doc.text('The current process for disbursing the refund will be carried out via transfer', 13, 156);
        // Texto antes del número
        const textBefore = 'to the account registered with Chase Bank, identified by number ';
        doc.text(textBefore, 13, 160);
        // Calcula la posición X para el número
        const xNumber = 13 + doc.getTextWidth(textBefore);
        doc.setFontSize(9);
        doc.setFont("arial", "bold");
        doc.text('588805066', xNumber, 160);
        // Vuelve al tamaño y estilo normal para el resto
        doc.setFontSize(9);
        doc.setFont("arial", "normal");
        // Texto antes del nombre
        const textBeforeName = 'in the name of ';
        doc.setFontSize(9);
        doc.setFont("arial", "normal");
        doc.text(textBeforeName, 13, 164);
        // Calcula la posición X para el nombre
        const xName = 13 + doc.getTextWidth(textBeforeName);
        doc.setFontSize(9);
        doc.setFont("arial", "bold");
        doc.text('Jose Almazan ', xName, 164);
        // Vuelve al tamaño y estilo normal para el resto
        doc.setFontSize(9);
        doc.setFont("arial", "normal");
        doc.text(' , who is listed as the account holder and ', xName + doc.getTextWidth('Jose Almazan'), 164);

        doc.text('beneficiary of this refund.', 13, 168);

        /* NEW */

        doc.setLineWidth(0.8);
        doc.line(120, 127, pageWidth - 18, 127);
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
        doc.text(formatAsCurrency(userAccount.bBalance), 105, 220, { align: 'right' });

        doc.setFont('arial', 'normal');
        doc.setFontSize(9);
        doc.text('Deposits/Additions', 17, 225);
        doc.text(formatAsCurrency(userAccount.dAdditions), 105, 225, { align: 'right' });

        doc.setFont('arial', 'normal');
        doc.setFontSize(9);
        doc.text('Withdrawals/Subtractions', 17, 230);
        doc.text(formatAsCurrency(userAccount.wSubtractions), 105, 230, { align: 'right' });

        doc.setLineWidth(0.9);
        doc.line(8, 232, pageWidth - 85, 232);

        doc.setFont('arial', 'bold');
        doc.setFontSize(10);
        doc.text(`Ending balance on ${userAccount.eBalanceDate}`, 17, 236);
        doc.text(formatAsCurrency(userAccount.eBalance), 105, 236, { align: 'right' });

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

        doc.text(`Fee period ${month}/${day}/${year} - ${userAccount.eBalanceDate}/${year}`, 8, 250);
        doc.text(formatAsCurrency(userAccount.tax), pageWidth - 100, 250);

        doc.setLineWidth(0.7);
        doc.line(8, 252, pageWidth - 80, 252);

        doc.setFont('arial', 'bold');
        doc.setFontSize(10);
        doc.text('Overdraft Protection', 8, 265);

        doc.setFont('arial', 'normal');
        doc.setFontSize(8.5);
        doc.text('This account is not currently covered by Overdraft Protection. If you would like more information regarding Overdraft Protection and eligibility requirements', 8, 270);
        doc.text('please call the number listed on your statement or visit your Wells Fargo branch.', 8, 274);

        doc.addPage();

        doc.setFontSize(10);
        doc.setFont("arial", "normal");
        doc.text(formattedDate, 15, 25);

        doc.addImage(pdfLogo, 'PNG', pageWidth - 35, 10, 18, 18);

        doc.addImage(accountInfLogo, 'PNG', 10, 55, 10, 10);

        doc.setFont("arial", "bold");
        doc.setFontSize(17);
        doc.text('IMPORTANT ACCOUNT INFORMATION', 23, 62);

        doc.setLineWidth(0.2);
        doc.line(95, 68, 120, 68);

        doc.setFont("arial", "normal");
        doc.setFontSize(9);
        doc.text(`
        Effective on or after April 1, 2021, Wells Fargo will no longer issue temporary debit cards, including Wells Fargo Instant Issue Debit
        Cards, Wells Fargo Business Instant Issue Debit Cards, and EasyPay Instant Cards. If you need a replacement card, you may request one
        by signing on to Wells Fargo Online®
        or calling the number on your statement. Once requested, replacement cards arrive by mail in 5
        to 7 calendar days. You may add your Wells Fargo Debit Card or EasyPay Card to a Wells Fargo-supported digital wallet on your mobile
        device so you can make secure, convenient purchases in stores, online, and in apps, and access Wells Fargo ATMs while you wait for
        your replacement card. Availability may be affected by your mobile carrier's coverage area. Your mobile carrier's message and data rates 
        may apply. Some ATMs within secure locations may require a physical card for entry.`, 3, 74, { align: 'left' });

        doc.setLineWidth(0.2);
        doc.line(95, 110, 120, 110);

        doc.setFont("arial", "normal");
        doc.setFontSize(9);
        doc.text(`
        Effective on or after April 1, 2021, the ATM Access Code feature will no longer be available to access your accounts at Wells Fargo ATMs.
        You may continue to access Wells Fargo ATMs using your Wells Fargo Debit, ATM or EasyPay Card, or with a Wells Fargo-supported
        digital wallet on your mobile device. For more information about adding your card to a digital wallet, please visit
        wellsfargo.com/mobile/payments. Availability may be affected by your mobile carrier's coverage area. Your mobile carrier's message
        and data rates may apply. Some ATMs within secure locations may require a physical card for entry. Note: After the ATM Access Code
        feature for accessing Wells Fargo accounts is discontinued, the "Use an Access Code" button may continue to be displayed on Wells
        Fargo ATMs to support other services`, 3, 115, { align: 'left' });

        doc.setLineWidth(0.2);
        doc.line(95, 147, 120, 147);

        doc.setFont("arial", "normal");
        doc.setFontSize(9);
        doc.text(`
        To provide you with additional flexibility to access accounts, we have increased the daily ATM withdrawal limit on your Wells Fargo
        Debit, ATM, or EasyPay Card(s) to $1,010. Any card that already has a daily ATM withdrawal limit of $1,010 or more remains the same. To
        view your card limits any time, sign on at wellsfargo.com/cardcontrol and click on Open Card Details`, 3, 152, { align: 'left' });


        doc.addPage();

        doc.setFontSize(10);
        doc.setFont("arial", "normal");
        doc.text(formattedDate, 15, 25);

        doc.addImage(pdfLogo, 'PNG', pageWidth - 35, 10, 18, 18);

        doc.setLineWidth(0.6);
        doc.line(8, 38, pageWidth - 13, 38);

        doc.setFontSize(10);
        doc.setFont("arial", "bold");
        doc.text("Worksheet to balance your account", 8, 42);

        doc.setFontSize(9);
        doc.setFont("arial", "normal");
        doc.text(`
        Follow the steps below to reconcile your statement balance with your
        account register balance. Be sure that your register shows any interest
        paid into your account and any service charges, automatic payments or
        ATM transactions withdrawn from your account during this statement
        period.`, 2, 44, { align: 'left' });

        doc.setLineWidth(0.2);
        doc.rect(8.5, 64, 3, 3.5);
        doc.setFont("arial", "bold");
        doc.setFontSize(9);
        doc.text('A', 9, 66.5);
        doc.text('Enter the ending balance', 14, 67);
        doc.setFont("arial", "normal");
        doc.text('on this statement.', 49, 67);
        doc.addImage(inputBalance, 'PNG', 73, 63, 22, 5)

        doc.rect(8.5, 69, 3, 3.5);
        doc.setFont("arial", "bold");
        doc.text('B', 9, 71.5);
        doc.text(`List outstanding deposits and other`, 14, 72, { align: 'left' });
        doc.text(`credits`, 8, 76, { align: 'left' });
        doc.setFont("arial", "normal");
        doc.text(`
            to your account that do not appear on
this statement.`, 8.1, 72.2, { align: 'left' })
        doc.setFont("arial", "bold");
        doc.text(`Enter the total`, 27.9, 79.3, { align: 'left' })
        doc.setFont("arial", "normal");
        doc.text(`in the column`, 48.2, 79.3, { align: 'left' })
        doc.text(`to the right.`, 8, 83.1, { align: 'left' })

        doc.addImage(table1, 8, 87, 65, 30);
        doc.addImage(inputs2, 74, 110, 25, 10);

        doc.rect(8.5, 120, 3, 3.5);
        doc.setFont("arial", "bold");
        doc.text('C', 9, 122.5);
        doc.text('Add', 13, 122.5);

        doc.rect(20, 120, 3, 3.5);
        doc.setFont("arial", "bold");
        doc.setFontSize(9);
        doc.text('A', 20.5, 122.5);

        doc.text('and', 24, 122.5);

        doc.rect(30, 120, 3, 3.5);
        doc.setFont("arial", "bold");
        doc.setFontSize(9);
        doc.text('B', 30.5, 122.5);

        doc.setFont("arial", "normal");
        doc.text("to calculate the subtotal.", 34.5, 122.5);

        doc.rect(8.5, 126, 3, 3.5);
        doc.setFont("arial", "bold");
        doc.text('D', 9, 128.6);

        doc.text(`List outstanding checks, withdrawals, and`, 13, 128.6);
        doc.text(`other debits`, 8, 132.6);

        doc.setFont("arial", "normal");
        doc.text(`to your account that do not appear`, 25, 132.6);
        doc.text("on this statement.", 8, 136.6);

        doc.setFont("arial", "bold");
        doc.text('Enter the total', 32, 136.5);

        doc.setFont("arial", "normal");
        doc.text(`in the column`, 53, 136.5);
        doc.text(`to the right.`, 8, 140.5);

        doc.addImage(table2, 8, 150, 65, 100);
        doc.addImage(mininput, 76, 245, 22, 5)

        doc.rect(8.5, 255, 3, 3.5);
        doc.setFont("arial", "bold");
        doc.text('E', 9, 257.5);
        doc.text('Subtract', 13, 257.5);

        doc.rect(26, 255, 3, 3.5);
        doc.setFont("arial", "bold");
        doc.setFontSize(9);
        doc.text('D', 26.5, 257.5);

        doc.text('from', 30, 257.5);

        doc.rect(38, 255, 3, 3.5);
        doc.setFont("arial", "bold");
        doc.setFontSize(9);
        doc.text('C', 38.5, 257.5);

        doc.setFont("arial", "normal");
        doc.text("to calculate the", 42.5, 257.5);
        doc.text(`adjusted ending balance. This amount should be
the same as the current balance shown in your
register.`, 9, 261.5)

        doc.addImage(equalinput, 76, 263, 22, 5)




        doc.line(100, 38, 100, pageHeigth - 30);

        doc.setFontSize(10);
        doc.setFont("arial", "bold");
        doc.text("General statement policies for Wells Fargo Bank", 102, 42);

        doc.addImage(squaredot, 101, 48, 1, 1);

        doc.setFontSize(9);
        doc.text(`To dispute or report inaccuracies in information we have furnished to a
Consumer Reporting Agency about your accounts.`, 104, 50);
        doc.setFont("arial", "normal");
        doc.text(`You have the right to`, 173, 53.8)
        doc.text(`dispute the accuracy of information that Wells Fargo Bank, N.A. has
furnished to a consumer reporting agency by writing to us at Overdraft
Collection and Recovery, P.O. Box 5058, Portland, OR 97208-5058. Please
describe the specific information that is inaccurate or in dispute and the
basis for the dispute along with supporting documentation. If you believe
the information furnished is the result of identity theft, please provide us
with an identity theft report.`, 104, 57.8)


        doc.addImage(squaredot, 101, 88, 1, 1);
        doc.setFont("aria", "bold");
        doc.text(`In case of errors or questions about your electronic transfers,`, 104, 90);
        doc.setFont("arial", "normal");
        doc.text(`telephone us at the number printed on the front of this statement or write
us at Wells Fargo Bank, P.O. Box 6995, Portland, OR 97228-6995 as soon as
you can, if you think your statement or receipt is wrong or if you need more
information about a transfer on the statement or receipt. We must hear
from you no later than 60 days after we sent you the FIRST statement on
which the error or problem appeared.
        `, 104, 93);

        doc.setFont("arial", "bold");
        doc.text('1.', 104, 118);

        doc.setFont('arial', "normal");
        doc.text('Tell us your name and account number (if any).', 108, 118);

        doc.setFont("arial", "bold");
        doc.text('2.', 104, 122);

        doc.setFont('arial', "normal");
        doc.text(`Describe the error or the transfer you are unsure about, and explain as
clearly as you can why you believe it is an error or why you need more
information.`, 108, 122);

        doc.setFont("arial", "bold");
        doc.text('3.', 104, 134);

        doc.setFont('arial', "normal");
        doc.text(`Tell us the dollar amount of the suspected error.`, 108, 134);

        doc.text(`We will investigate your complaint and will correct any error promptly. If
we take more than 10 business days to do this, we will credit your account
for the amount you think is in error, so that you will have the use of the
money during the time it takes us to complete our investigation`, 104, 140);

        doc.addImage(footer, 105, pageHeigth - 40, 100, 8);

        doc.save(`${userAccount.name + '-' + userAccount.lastname}-${idDate}.pdf`);
    };

    if (notFound) {
        return (
            <div className='error-page'>
                <div>
                    <h1>Usuario no encontrado.</h1>
                </div>
                <div>
                    <button>Realizar otra busqueda</button>
                </div>
            </div>
        );
    } else {
        return (
            <div className="search-detail">
                <div className="header-detail">
                    <div className="detail-logo-1">
                        <img src={logo1} alt="" />
                    </div>
                    <div className="account-number">
                        <h1>Account: <span>{userAccount.accountNumber}</span></h1>
                    </div>
                    <div className="nameholder">
                        <h1>Name: <span>{userAccount.name + ' ' + userAccount.lastname}</span></h1>
                    </div>
                    <div className="detail-logo-2">
                        <img src={logo2} alt="" />
                    </div>
                </div>
                <div className="balance-content">
                    <h1>Available balance: <br /><span>{formatAsCurrency(userAccount.aBalance)}</span> </h1>
                    <ul className="balance-list">
                        <li><h2>Ending collected balance: <br /> <span>{formatAsCurrency(userAccount.eCBalance)}</span></h2></li>
                        <li><h2>Current posted balance: <br /> <span>{formatAsCurrency(userAccount.cPBalance)}</span></h2></li>
                        <li><h2>Pending withdrawals/debits: <br /> <span>{formatAsCurrency(userAccount.pWDBalance)}</span></h2></li>
                        <li><h2>Pending deposits/credits: <br /> <span>{formatAsCurrency(userAccount.pDCBalance)}</span></h2></li>
                        <li><h2>Total available: <br /> <span>{formatAsCurrency(userAccount.totalAvailable)}</span></h2></li>
                    </ul>
                </div>
                <div className="download-movements">
                    <h2>Download bank movements</h2>
                    {/* <button onClick={() => downloadPDF()}>Download</button> */}
                    <button onClick={() => watchStatements()}>Download</button>
                    {openModal && (
                        <AuthModal>
                            <form onSubmit={handleSubmit}>
                                <span className='close-modal' onClick={() => setOpenModal(false)}>X</span>
                                <label className='modal-title'>This document is password protected. </label>
                                <input
                                    className='modal-pass'
                                    value={password}
                                    type='password'
                                    placeholder='Password'
                                    onChange={(event) => setPassword(event.target.value)}
                                />
                                {error && (
                                    <p className='incorrect-pass'>
                                        <span>Incorrect password.</span>
                                    </p>
                                )}
                                <button
                                    className='modal-btn'
                                    type='submit'
                                >Validate</button>
                            </form>
                        </AuthModal>
                    )}
                </div>
            </div>
        );
    }
}

export { SearchDetail };