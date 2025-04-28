from sqlalchemy.orm import Session
from src.db import models
from src.api import schemas
import uuid


def create_user(db: Session, user: schemas.UserCreate):
    db_user = models.User(uuid=str(uuid.uuid4()), **user.dict())
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user


def get_user(db: Session, user_id: int):
    return db.query(models.User).filter(models.User.id == user_id).first()


def get_user_by_email(db: Session, email: str):
    return db.query(models.User).filter(models.User.email == email).first()


def get_users(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.User).offset(skip).limit(limit).all()


def create_creator_profile(db: Session, creator_profile: schemas.CreatorProfileCreate):
    db_creator_profile = models.CreatorProfile(uuid=str(uuid.uuid4()), **creator_profile.dict())
    db.add(db_creator_profile)
    db.commit()
    db.refresh(db_creator_profile)
    return db_creator_profile


def get_creator_profile(db: Session, creator_profile_id: int):
    return db.query(models.CreatorProfile).filter(models.CreatorProfile.id == creator_profile_id).first()

def get_creator_profiles(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.CreatorProfile).offset(skip).limit(limit).all()


def get_creator_profile_by_email(db: Session, email: str):
    return db.query(models.CreatorProfile).filter(models.CreatorProfile.email == email).first()


def create_customer_profile(db: Session, customer_profile: schemas.CustomerProfileCreate):
    db_customer_profile = models.CustomerProfile(uuid=str(uuid.uuid4()), **customer_profile.dict())
    db.add(db_customer_profile)
    db.commit()
    db.refresh(db_customer_profile)
    return db_customer_profile


def get_customer_profile(db: Session, customer_profile_id: int):
    return db.query(models.CustomerProfile).filter(models.CustomerProfile.id == customer_profile_id).first()

def get_customer_profiles(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.CustomerProfile).offset(skip).limit(limit).all()


def get_customer_profile_by_email(db: Session, email: str):
    return db.query(models.CustomerProfile).filter(models.CustomerProfile.email == email).first()


def create_project(db: Session, project: schemas.ProjectCreate):
    db_project = models.Project(uuid=str(uuid.uuid4()), **project.dict())
    db.add(db_project)
    db.commit()
    db.refresh(db_project)
    return db_project


def get_project(db: Session, project_id: int):
    return db.query(models.Project).filter(models.Project.id == project_id).first()


def get_projects(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Project).offset(skip).limit(limit).all()


def create_analytics_event(db: Session, analytics_event: schemas.AnalyticsEventCreate):
    db_analytics_event = models.AnalyticsEvent(uuid=str(uuid.uuid4()), **analytics_event.dict())
    db.add(db_analytics_event)
    db.commit()
    db.refresh(db_analytics_event)
    return db_analytics_event


def get_analytics_event(db: Session, analytics_event_id: int):
    return db.query(models.AnalyticsEvent).filter(models.AnalyticsEvent.id == analytics_event_id).first()


def get_analytics_events(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.AnalyticsEvent).offset(skip).limit(limit).all()


def create_analytics_insight(db: Session, analytics_insight: schemas.AnalyticsInsightCreate):
    db_analytics_insight = models.AnalyticsInsight(uuid=str(uuid.uuid4()), **analytics_insight.dict())
    db.add(db_analytics_insight)
    db.commit()
    db.refresh(db_analytics_insight)
    return db_analytics_insight


def get_analytics_insight(db: Session, analytics_insight_id: int):
    return db.query(models.AnalyticsInsight).filter(models.AnalyticsInsight.id == analytics_insight_id).first()


def get_analytics_insights(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.AnalyticsInsight).offset(skip).limit(limit).all()


def create_analytics_report(db: Session, analytics_report: schemas.AnalyticsReportCreate):
    db_analytics_report = models.AnalyticsReport(uuid=str(uuid.uuid4()), **analytics_report.dict())
    db.add(db_analytics_report)
    db.commit()
    db.refresh(db_analytics_report)
    return db_analytics_report


def get_analytics_report(db: Session, analytics_report_id: int):
    return db.query(models.AnalyticsReport).filter(models.AnalyticsReport.id == analytics_report_id).first()


def get_analytics_reports(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.AnalyticsReport).offset(skip).limit(limit).all()


def create_creator_payment(db: Session, creator_payment: schemas.CreatorPaymentCreate):
    db_creator_payment = models.CreatorPayment(uuid=str(uuid.uuid4()), **creator_payment.dict())
    db.add(db_creator_payment)
    db.commit()
    db.refresh(db_creator_payment)
    return db_creator_payment


def get_creator_payment(db: Session, creator_payment_id: int):
    return db.query(models.CreatorPayment).filter(models.CreatorPayment.id == creator_payment_id).first()


def get_creator_payments(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.CreatorPayment).offset(skip).limit(limit).all()


def create_creator_portfolio(db: Session, creator_portfolio: schemas.CreatorPortfolioCreate):
    db_creator_portfolio = models.CreatorPortfolio(uuid=str(uuid.uuid4()), **creator_portfolio.dict())
    db.add(db_creator_portfolio)
    db.commit()
    db.refresh(db_creator_portfolio)
    return db_creator_portfolio


def get_creator_portfolio(db: Session, creator_portfolio_id: int):
    return db.query(models.CreatorPortfolio).filter(models.CreatorPortfolio.id == creator_portfolio_id).first()


def get_creator_portfolios(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.CreatorPortfolio).offset(skip).limit(limit).all()


def create_customer_feedback(db: Session, customer_feedback: schemas.CustomerFeedbackCreate):
    db_customer_feedback = models.CustomerFeedback(uuid=str(uuid.uuid4()), **customer_feedback.dict())
    db.add(db_customer_feedback)
    db.commit()
    db.refresh(db_customer_feedback)
    return db_customer_feedback


def get_customer_feedback(db: Session, customer_feedback_id: int):
    return db.query(models.CustomerFeedback).filter(models.CustomerFeedback.id == customer_feedback_id).first()


def get_customer_feedbacks(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.CustomerFeedback).offset(skip).limit(limit).all()


def create_customer_interaction(db: Session, customer_interaction: schemas.CustomerInteractionCreate):
    db_customer_interaction = models.CustomerInteraction(uuid=str(uuid.uuid4()), **customer_interaction.dict())
    db.add(db_customer_interaction)
    db.commit()
    db.refresh(db_customer_interaction)
    return db_customer_interaction


def get_customer_interaction(db: Session, customer_interaction_id: int):
    return db.query(models.CustomerInteraction).filter(models.CustomerInteraction.id == customer_interaction_id).first()


def get_customer_interactions(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.CustomerInteraction).offset(skip).limit(limit).all()


def create_email_campaign(db: Session, email_campaign: schemas.EmailCampaignCreate):
    db_email_campaign = models.EmailCampaign(uuid=str(uuid.uuid4()), **email_campaign.dict())
    db.add(db_email_campaign)
    db.commit()
    db.refresh(db_email_campaign)
    return db_email_campaign


def get_email_campaign(db: Session, email_campaign_id: int):
    return db.query(models.EmailCampaign).filter(models.EmailCampaign.id == email_campaign_id).first()


def get_email_campaigns(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.EmailCampaign).offset(skip).limit(limit).all()


def create_email_lead(db: Session, email_lead: schemas.EmailLeadCreate):
    db_email_lead = models.EmailLead(uuid=str(uuid.uuid4()), **email_lead.dict())
    db.add(db_email_lead)
    db.commit()
    db.refresh(db_email_lead)
    return db_email_lead


def get_email_lead(db: Session, email_lead_id: int):
    return db.query(models.EmailLead).filter(models.EmailLead.id == email_lead_id).first()


def get_email_leads(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.EmailLead).offset(skip).limit(limit).all()


def create_email_template(db: Session, email_template: schemas.EmailTemplateCreate):
    db_email_template = models.EmailTemplate(uuid=str(uuid.uuid4()), **email_template.dict())
    db.add(db_email_template)
    db.commit()
    db.refresh(db_email_template)
    return db_email_template


def get_email_template(db: Session, email_template_id: int):
    return db.query(models.EmailTemplate).filter(models.EmailTemplate.id == email_template_id).first()


def get_email_templates(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.EmailTemplate).offset(skip).limit(limit).all()


def create_marketing_campaign(db: Session, marketing_campaign: schemas.MarketingCampaignCreate):
    db_marketing_campaign = models.MarketingCampaign(uuid=str(uuid.uuid4()), **marketing_campaign.dict())
    db.add(db_marketing_campaign)
    db.commit()
    db.refresh(db_marketing_campaign)
    return db_marketing_campaign


def get_marketing_campaign(db: Session, marketing_campaign_id: int):
    return db.query(models.MarketingCampaign).filter(models.MarketingCampaign.id == marketing_campaign_id).first()


def get_marketing_campaigns(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.MarketingCampaign).offset(skip).limit(limit).all()


def create_marketing_channel(db: Session, marketing_channel: schemas.MarketingChannelCreate):
    db_marketing_channel = models.MarketingChannel(uuid=str(uuid.uuid4()), **marketing_channel.dict())
    db.add(db_marketing_channel)
    db.commit()
    db.refresh(db_marketing_channel)
    return db_marketing_channel


def get_marketing_channel(db: Session, marketing_channel_id: int):
    return db.query(models.MarketingChannel).filter(models.MarketingChannel.id == marketing_channel_id).first()


def get_marketing_channels(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.MarketingChannel).offset(skip).limit(limit).all()


def create_marketing_lead(db: Session, marketing_lead: schemas.MarketingLeadCreate):
    db_marketing_lead = models.MarketingLead(uuid=str(uuid.uuid4()), **marketing_lead.dict())
    db.add(db_marketing_lead)
    db.commit()
    db.refresh(db_marketing_lead)
    return db_marketing_lead


def get_marketing_lead(db: Session, marketing_lead_id: int):
    return db.query(models.MarketingLead).filter(models.MarketingLead.id == marketing_lead_id).first()


def get_marketing_leads(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.MarketingLead).offset(skip).limit(limit).all()


def create_project_asset(db: Session, project_asset: schemas.ProjectAssetCreate):
    db_project_asset = models.ProjectAsset(uuid=str(uuid.uuid4()), **project_asset.dict())
    db.add(db_project_asset)
    db.commit()
    db.refresh(db_project_asset)
    return db_project_asset


def get_project_asset(db: Session, project_asset_id: int):
    return db.query(models.ProjectAsset).filter(models.ProjectAsset.id == project_asset_id).first()


def get_project_assets(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.ProjectAsset).offset(skip).limit(limit).all()