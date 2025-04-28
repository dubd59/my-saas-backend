import React from 'react';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreatorProfileList from './components/CreatorProfileList';
import CreatorProfileForm from './components/CreatorProfileForm';
import CustomerProfileList from './components/CustomerProfileList';
import CustomerProfileForm from './components/CustomerProfileForm';
import ProjectList from './components/ProjectList';
import ProjectForm from './components/ProjectForm';
import AnalyticsEventList from './components/AnalyticsEventList';
import AnalyticsEventForm from './components/AnalyticsEventForm';
import AnalyticsInsightList from './components/AnalyticsInsightList';
import AnalyticsInsightForm from './components/AnalyticsInsightForm';
import AnalyticsReportList from './components/AnalyticsReportList';
import AnalyticsReportForm from './components/AnalyticsReportForm';
import CreatorPaymentList from './components/CreatorPaymentList';
import CreatorPaymentForm from './components/CreatorPaymentForm';
import CreatorPortfolioList from './components/CreatorPortfolioList';
import CreatorPortfolioForm from './components/CreatorPortfolioForm';
import CustomerFeedbackList from './components/CustomerFeedbackList';
import CustomerFeedbackForm from './components/CustomerFeedbackForm';
import CustomerInteractionList from './components/CustomerInteractionList';
import CustomerInteractionForm from './components/CustomerInteractionForm';
import EmailCampaignList from './components/EmailCampaignList';
import EmailCampaignForm from './components/EmailCampaignForm';
import EmailLeadList from './components/EmailLeadList';
import EmailLeadForm from './components/EmailLeadForm';
import EmailTemplateList from './components/EmailTemplateList';
import EmailTemplateForm from './components/EmailTemplateForm';
import MarketingCampaignList from './components/MarketingCampaignList';
import MarketingCampaignForm from './components/MarketingCampaignForm';
import MarketingChannelList from './components/MarketingChannelList';
import MarketingChannelForm from './components/MarketingChannelForm';
import MarketingLeadList from './components/MarketingLeadList';
import MarketingLeadForm from './components/MarketingLeadForm';
import ProjectAssetList from './components/ProjectAssetList';
import ProjectAssetForm from './components/ProjectAssetForm';


function App() {
  return (
    <div style={{ padding: '20px'}}>
      <BrowserRouter>
        <h1>My SaaS App</h1>
        <Routes>
          <Route path="/" element={<>
            <UserList />
            <UserForm />
            </>}
          />
          <Route path="/users" element={<><UserList /><UserForm /></>}/>
          <Route path="/creator-profiles" element={<><CreatorProfileList /><CreatorProfileForm /></>}/>
          <Route path="/customer-profiles" element={<><CustomerProfileList /><CustomerProfileForm /></>}/>
          <Route path="/projects" element={<><ProjectList /><ProjectForm /></>}/>
          <Route path="/analytics-events" element={<><AnalyticsEventList /><AnalyticsEventForm /></>}/>
          <Route path="/analytics-insights" element={<><AnalyticsInsightList /><AnalyticsInsightForm /></>}/>
          <Route path="/analytics-reports" element={<><AnalyticsReportList /><AnalyticsReportForm /></>}/>
          <Route path="/creator-payments" element={<><CreatorPaymentList /><CreatorPaymentForm /></>}/>
          <Route path="/creator-portfolios" element={<><CreatorPortfolioList /><CreatorPortfolioForm /></>}/>
          <Route path="/customer-feedbacks" element={<><CustomerFeedbackList /><CustomerFeedbackForm /></>}/>
          <Route path="/customer-interactions" element={<><CustomerInteractionList /><CustomerInteractionForm /></>}/>
          <Route path="/email-campaigns" element={<><EmailCampaignList /><EmailCampaignForm /></>}/>
          <Route path="/email-leads" element={<><EmailLeadList /><EmailLeadForm /></>}/>
          <Route path="/email-templates" element={<><EmailTemplateList /><EmailTemplateForm /></>}/>
          <Route path="/marketing-campaigns" element={<><MarketingCampaignList /><MarketingCampaignForm /></>}/>
          <Route path="/marketing-channels" element={<><MarketingChannelList /><MarketingChannelForm /></>}/>
          <Route path="/marketing-leads" element={<><MarketingLeadList /><MarketingLeadForm /></>}/>
          <Route path="/project-assets" element={<><ProjectAssetList /><ProjectAssetForm /></>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App