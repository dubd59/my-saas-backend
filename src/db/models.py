from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, Text, Numeric, Date
from sqlalchemy.orm import relationship
from src.db.database import Base
from datetime import datetime


class AnalyticsEvent(Base):
    __tablename__ = "analytics_events"

    id = Column(Integer, primary_key=True, index=True)
    uuid = Column(String, unique=True, index=True)
    creator_id = Column(Integer, ForeignKey("users.id"))
    event_type = Column(String)
    event_date = Column(DateTime)
    date_created = Column(DateTime, default=datetime.now())
    date_updated = Column(DateTime, onupdate=datetime.now())


class AnalyticsInsight(Base):
    __tablename__ = "analytics_insights"

    id = Column(Integer, primary_key=True, index=True)
    uuid = Column(String, unique=True, index=True)
    report_id = Column(Integer, ForeignKey("analytics_reports.id"))
    insight = Column(Text)
    date_created = Column(DateTime, default=datetime.now())
    date_updated = Column(DateTime, onupdate=datetime.now())


class AnalyticsReport(Base):
    __tablename__ = "analytics_reports"

    id = Column(Integer, primary_key=True, index=True)
    uuid = Column(String, unique=True, index=True)
    creator_id = Column(Integer, ForeignKey("users.id"))
    report_date = Column(DateTime)
    summary = Column(Text, nullable=True)
    date_created = Column(DateTime, default=datetime.now())
    date_updated = Column(DateTime, onupdate=datetime.now())


class CreatorPayment(Base):
    __tablename__ = "creator_payments"

    id = Column(Integer, primary_key=True, index=True)
    uuid = Column(String, unique=True, index=True)
    creator_id = Column(Integer, ForeignKey("users.id"))
    payment_method = Column(String)
    account_details = Column(Text)
    date_created = Column(DateTime, default=datetime.now())
    date_updated = Column(DateTime, onupdate=datetime.now())


class CreatorPortfolio(Base):
    __tablename__ = "creator_portfolios"

    id = Column(Integer, primary_key=True, index=True)
    uuid = Column(String, unique=True, index=True)
    creator_id = Column(Integer, ForeignKey("users.id"))
    title = Column(String)
    description = Column(Text, nullable=True)
    date_created = Column(DateTime, default=datetime.now())
    date_updated = Column(DateTime, onupdate=datetime.now())


class CreatorProfile(Base):
    __tablename__ = "creator_profiles"

    id = Column(Integer, primary_key=True, index=True)
    uuid = Column(String, unique=True, index=True)
    first_name = Column(String)
    last_name = Column(String)
    email = Column(String, unique=True)
    bio = Column(Text, nullable=True)
    date_created = Column(DateTime, default=datetime.now())
    date_updated = Column(DateTime, onupdate=datetime.now())


class CustomerFeedback(Base):
    __tablename__ = "customer_feedbacks"

    id = Column(Integer, primary_key=True, index=True)
    uuid = Column(String, unique=True, index=True)
    customer_id = Column(Integer, ForeignKey("users.id"))
    feedback_text = Column(Text)
    feedback_date = Column(DateTime)
    date_created = Column(DateTime, default=datetime.now())
    date_updated = Column(DateTime, onupdate=datetime.now())


class CustomerInteraction(Base):
    __tablename__ = "customer_interactions"

    id = Column(Integer, primary_key=True, index=True)
    uuid = Column(String, unique=True, index=True)
    customer_id = Column(Integer, ForeignKey("users.id"))
    interaction_date = Column(DateTime)
    notes = Column(Text, nullable=True)
    date_created = Column(DateTime, default=datetime.now())
    date_updated = Column(DateTime, onupdate=datetime.now())


class CustomerProfile(Base):
    __tablename__ = "customer_profiles"

    id = Column(Integer, primary_key=True, index=True)
    uuid = Column(String, unique=True, index=True)
    first_name = Column(String)
    last_name = Column(String)
    email = Column(String, unique=True)
    date_created = Column(DateTime, default=datetime.now())
    date_updated = Column(DateTime, onupdate=datetime.now())


class EmailCampaign(Base):
    __tablename__ = "email_campaigns"

    id = Column(Integer, primary_key=True, index=True)
    uuid = Column(String, unique=True, index=True)
    creator_id = Column(Integer, ForeignKey("users.id"))
    subject = Column(String)
    send_date = Column(DateTime, nullable=True)
    date_created = Column(DateTime, default=datetime.now())
    date_updated = Column(DateTime, onupdate=datetime.now())


class EmailLead(Base):
    __tablename__ = "email_leads"

    id = Column(Integer, primary_key=True, index=True)
    uuid = Column(String, unique=True, index=True)
    address = Column(String)
    campaign_id = Column(Integer, ForeignKey("email_campaigns.id"))
    date_created = Column(DateTime, default=datetime.now())
    date_updated = Column(DateTime, onupdate=datetime.now())


class EmailTemplate(Base):
    __tablename__ = "email_templates"

    id = Column(Integer, primary_key=True, index=True)
    uuid = Column(String, unique=True, index=True)
    creator_id = Column(Integer, ForeignKey("users.id"))
    template_name = Column(String)
    content = Column(Text, nullable=True)
    date_created = Column(DateTime, default=datetime.now())
    date_updated = Column(DateTime, onupdate=datetime.now())


class MarketingCampaign(Base):
    __tablename__ = "marketing_campaigns"

    id = Column(Integer, primary_key=True, index=True)
    uuid = Column(String, unique=True, index=True)
    creator_id = Column(Integer, ForeignKey("users.id"))
    campaign_name = Column(String)
    budget = Column(Numeric)
    start_date = Column(DateTime, nullable=True)
    end_date = Column(DateTime, nullable=True)
    date_created = Column(DateTime, default=datetime.now())
    date_updated = Column(DateTime, onupdate=datetime.now())


class MarketingChannel(Base):
    __tablename__ = "marketing_channels"

    id = Column(Integer, primary_key=True, index=True)
    uuid = Column(String, unique=True, index=True)
    channel_name = Column(String)
    description = Column(Text, nullable=True)
    date_created = Column(DateTime, default=datetime.now())
    date_updated = Column(DateTime, onupdate=datetime.now())


class MarketingLead(Base):
    __tablename__ = "marketing_leads"

    id = Column(Integer, primary_key=True, index=True)
    uuid = Column(String, unique=True, index=True)
    campaign_id = Column(Integer, ForeignKey("marketing_campaigns.id"))
    lead_name = Column(String)
    contact_info = Column(Text, nullable=True)
    source = Column(String, nullable=True)
    date_created = Column(DateTime, default=datetime.now())
    date_updated = Column(DateTime, onupdate=datetime.now())


class ProjectAsset(Base):
    __tablename__ = "project_assets"

    id = Column(Integer, primary_key=True, index=True)
    uuid = Column(String, unique=True, index=True)
    project_id = Column(Integer, ForeignKey("projects.id"))
    asset_url = Column(String)
    asset_type = Column(String)
    date_created = Column(DateTime, default=datetime.now())
    date_updated = Column(DateTime, onupdate=datetime.now())


class Project(Base):
    __tablename__ = "projects"

    id = Column(Integer, primary_key=True, index=True)
    uuid = Column(String, unique=True, index=True)
    creator_id = Column(Integer, ForeignKey("users.id"))
    title = Column(String)
    description = Column(Text, nullable=True)
    date_created = Column(DateTime, default=datetime.now())
    date_updated = Column(DateTime, onupdate=datetime.now())


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    uuid = Column(String, unique=True, index=True)
    first_name = Column(String)
    last_name = Column(String)
    email = Column(String, unique=True)
    date_created = Column(DateTime, default=datetime.now())
    date_updated = Column(DateTime, onupdate=datetime.now())