import './App.css';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import TopContainer from './components/top_container/TopContainer';
import WhatContainer from './components/what-container/WhatContainer';
import SubTotalContainer from './components/subtotal-container/SubTotalContainer';
import PreferContainer from './components/prefer-container/PreferContainer';
import ProcessOrderYes from './components/process-order-yes-container/ProcessOrderYes';
import FooterComp from './components/footer/FooterComp';
import ReasonsContainer from './components/reasons-container/ReasonsContainer';
import PaymentInfoContainer from './components/payment-info-container/PaymentInfoContainer';
import ShippingContainer from './components/shipping-container/ShippingContainer';
import BillingContainer from './components/billing-container/BillingContainer';
import ShippingSmall from './components/shipping-small/ShippingSmall';
import BillingSmall1 from './components/billing-small-1/BillingSmall1';
import BillingSmall2 from './components/billing-small-2/BillingSmall2';
import SubtotalSmall from './components/subtotal-small-step/SubtotalSmall';
import PaymentSmall from './components/payment-small/PaymentSmall';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <TopContainer />
      <WhatContainer />
      <SubTotalContainer />
      <BillingSmall1 />
      <BillingSmall2/>
      <ShippingSmall />
      <PaymentSmall/>
      <PreferContainer />
      <SubtotalSmall/>
      <BillingContainer />
      <ShippingContainer />
      <PaymentInfoContainer />
      <ProcessOrderYes />
      <ReasonsContainer />
      <FooterComp />
    </div>
  );
}

export default App;
