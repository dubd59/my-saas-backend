from pydantic import BaseModel
from datetime import datetime
from decimal import Decimal
from typing import Optional

class UserBase(BaseModel):
    first_name: str
    last_name: str
    email: str

class UserCreate(UserBase):
    pass

class User(UserBase):
    id: int
    uuid: str
    date_created: datetime
    date_updated: Optional[datetime]

    class Config:
        orm_mode = True

class CreatorProfileBase(BaseModel):
    first_name: str
    last_name: str
    email: str
    bio: Optional[str] = None

class CreatorProfileCreate(CreatorProfileBase):
    pass

class CreatorProfile(CreatorProfileBase):
    id: int
    uuid: str
    date_created: datetime
    date_updated: Optional[datetime] = None

    class Config:
        orm_mode = True


class CustomerProfileBase(BaseModel):
    first_name: str
    last_name: str
    email: str

class CustomerProfileCreate(CustomerProfileBase):
    pass

class CustomerProfile(CustomerProfileBase):
    id: int
    uuid: str
    date_created: datetime
    date_updated: Optional[datetime] = None

    class Config:
        orm_mode = True


class ProjectBase(BaseModel):
    title: str
    description: Optional[str] = None

class ProjectCreate(ProjectBase):
    creator_id: int
    pass

class Project(ProjectBase):
    id: int
    uuid: str
    creator_id: int
    date_created: datetime
    date_updated: Optional[datetime] = None

    class Config:
        orm_mode = True

class AnalyticsEventBase(BaseModel):
    event_type: str
    event_date: datetime

class AnalyticsEventCreate(AnalyticsEventBase):
    creator_id: int
    pass

class AnalyticsEvent(AnalyticsEventBase):
    id: int
    uuid: str
    creator_id: int
    date_created: datetime
    date_updated: Optional[datetime] = None

    class Config:
        orm_mode = True


class AnalyticsInsightBase(BaseModel):
    insight: str

class AnalyticsInsightCreate(AnalyticsInsightBase):
    report_id: int
    pass

class AnalyticsInsight(AnalyticsInsightBase):
    id: int
    uuid: str
    report_id: int
    date_created: datetime
    date_updated: Optional[datetime] = None

    class Config:
        orm_mode = True


class AnalyticsReportBase(BaseModel):
    report_date: datetime
    summary: Optional[str] = None

class AnalyticsReportCreate(AnalyticsReportBase):
    creator_id: int
    pass

class AnalyticsReport(AnalyticsReportBase):
    id: int
    uuid: str
    creator_id: int
    date_created: datetime
    date_updated: Optional[datetime] = None

    class Config:
        orm_mode = True


class CreatorPaymentBase(BaseModel):
    payment_method: str
    account_details: str

class CreatorPaymentCreate(CreatorPaymentBase):
    creator_id: int
    pass

class CreatorPayment(CreatorPaymentBase):
    id: int
    uuid: str
    creator_id: int
    date_created: datetime
    date_updated: Optional[datetime] = None

    class Config:
        orm_mode = True


class CreatorPortfolioBase(BaseModel):
    title: str
    description: Optional[str] = None

class CreatorPortfolioCreate(CreatorPortfolioBase):
    creator_id: int
    pass

class CreatorPortfolio(CreatorPortfolioBase):
    id: int
    uuid: str
    creator_id: int
    date_created: datetime
    date_updated: Optional[datetime] = None

    class Config:
        orm_mode = True


class CustomerFeedbackBase(BaseModel):
    feedback_text: str
    feedback_date: datetime

class CustomerFeedbackCreate(CustomerFeedbackBase):
    customer_id: int
    pass

class CustomerFeedback(CustomerFeedbackBase):
    id: int
    uuid: str
    customer_id: int
    date_created: datetime
    date_updated: Optional[datetime] = None

    class Config:
        orm_mode = True


class CustomerInteractionBase(BaseModel):
    interaction_date: datetime
    notes: Optional[str] = None

class CustomerInteractionCreate(CustomerInteractionBase):
    customer_id: int
    pass

class CustomerInteraction(CustomerInteractionBase):
    id: int
    uuid: str
    customer_id: int
    date_created: datetime
    date_updated: Optional[datetime] = None

    class Config:
        orm_mode = True


class EmailCampaignBase(BaseModel):
    subject: str
    send_date: Optional[datetime] = None

class EmailCampaignCreate(EmailCampaignBase):
    creator_id: int
    pass

class EmailCampaign(EmailCampaignBase):
    id: int
    uuid: str
    creator_id: int
    date_created: datetime
    date_updated: Optional[datetime] = None

    class Config:
        orm_mode = True


class EmailLeadBase(BaseModel):
    address: str

class EmailLeadCreate(EmailLeadBase):
    campaign_id: int
    pass

class EmailLead(EmailLeadBase):
    id: int
    uuid: str
    campaign_id: int
    date_created: datetime
    date_updated: Optional[datetime] = None

    class Config:
        orm_mode = True


class EmailTemplateBase(BaseModel):
    template_name: str
    content: Optional[str] = None

class EmailTemplateCreate(EmailTemplateBase):
    creator_id: int
    pass

class EmailTemplate(EmailTemplateBase):
    id: int
    uuid: str
    creator_id: int
    date_created: datetime
    date_updated: Optional[datetime] = None

    class Config:
        orm_mode = True


class MarketingCampaignBase(BaseModel):
    campaign_name: str
    budget: Decimal
    start_date: Optional[datetime] = None
    end_date: Optional[datetime] = None

class MarketingCampaignCreate(MarketingCampaignBase):
    creator_id: int
    pass

class MarketingCampaign(MarketingCampaignBase):
    id: int
    uuid: str
    creator_id: int
    date_created: datetime
    date_updated: Optional[datetime] = None

    class Config:
        orm_mode = True


class MarketingChannelBase(BaseModel):
    channel_name: str
    description: Optional[str] = None

class MarketingChannelCreate(MarketingChannelBase):
    pass

class MarketingChannel(MarketingChannelBase):
    id: int
    uuid: str
    date_created: datetime
    date_updated: Optional[datetime] = None

    class Config:
        orm_mode = True


class MarketingLeadBase(BaseModel):
    lead_name: str
    contact_info: Optional[str] = None
    source: Optional[str] = None

class MarketingLeadCreate(MarketingLeadBase):
    campaign_id: int
    pass

class MarketingLead(MarketingLeadBase):
    id: int
    uuid: str
    campaign_id: int
    date_created: datetime
    date_updated: Optional[datetime] = None

    class Config:
        orm_mode = True


class ProjectAssetBase(BaseModel):
    asset_url: str
    asset_type: str

class ProjectAssetCreate(ProjectAssetBase):
    project_id: int
    pass

class ProjectAsset(ProjectAssetBase):
    id: int
    uuid: str
    project_id: int
    date_created: datetime
    date_updated: Optional[datetime] = None

    class Config:
        orm_mode = True