from datetime import datetime
from decimal import Decimal

class AnalyticsEvent:
    def __init__(self, id: int, uuid: str, creator_id: int, event_type: str, event_date: datetime, date_created: datetime = datetime.now(), date_updated: datetime = None):
        self.id = id
        self.uuid = uuid
        self.creator_id = creator_id
        self.event_type = event_type
        self.event_date = event_date
        self.date_created = date_created
        self.date_updated = date_updated

class AnalyticsInsight:
    def __init__(self, id: int, uuid: str, report_id: int, insight: str, date_created: datetime = datetime.now(), date_updated: datetime = None):
        self.id = id
        self.uuid = uuid
        self.report_id = report_id
        self.insight = insight
        self.date_created = date_created
        self.date_updated = date_updated

class AnalyticsReport:
    def __init__(self, id: int, uuid: str, creator_id: int, report_date: datetime, summary: str = None, date_created: datetime = datetime.now(), date_updated: datetime = None):
        self.id = id
        self.uuid = uuid
        self.creator_id = creator_id
        self.report_date = report_date
        self.summary = summary
        self.date_created = date_created
        self.date_updated = date_updated

class CreatorPayment:
    def __init__(self, id: int, uuid: str, creator_id: int, payment_method: str, account_details: str, date_created: datetime = datetime.now(), date_updated: datetime = None):
        self.id = id
        self.uuid = uuid
        self.creator_id = creator_id
        self.payment_method = payment_method
        self.account_details = account_details
        self.date_created = date_created
        self.date_updated = date_updated

class CreatorPortfolio:
    def __init__(self, id: int, uuid: str, creator_id: int, title: str, description: str = None, date_created: datetime = datetime.now(), date_updated: datetime = None):
        self.id = id
        self.uuid = uuid
        self.creator_id = creator_id
        self.title = title
        self.description = description
        self.date_created = date_created
        self.date_updated = date_updated

class CreatorProfile:
    def __init__(self, id: int, uuid: str, first_name: str, last_name: str, email: str, bio: str = None, date_created: datetime = datetime.now(), date_updated: datetime = None):
        self.id = id
        self.uuid = uuid
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.bio = bio
        self.date_created = date_created
        self.date_updated = date_updated

class Project:
    def __init__(self, id: int, uuid: str, creator_id: int, title: str, description: str = None, date_created: datetime = datetime.now(), date_updated: datetime = None):
        self.id = id
        self.uuid = uuid
        self.creator_id = creator_id
        self.title = title
        self.description = description
        self.date_created = date_created
        self.date_updated = date_updated

class ProjectAsset:
    def __init__(self, id: int, uuid: str, project_id: int, asset_url: str, asset_type: str, date_created: datetime = datetime.now(), date_updated: datetime = None):
        self.id = id
        self.uuid = uuid
        self.project_id = project_id
        self.asset_url = asset_url
        self.asset_type = asset_type
        self.date_created = date_created
        self.date_updated = date_updated

class MarketingCampaign:
    def __init__(self, id: int, uuid: str, creator_id: int, campaign_name: str, budget: Decimal, start_date: datetime = None, end_date: datetime = None, date_created: datetime = datetime.now(), date_updated: datetime = None):
        self.id = id
        self.uuid = uuid
        self.creator_id = creator_id
        self.campaign_name = campaign_name
        self.budget = budget
        self.start_date = start_date
        self.end_date = end_date
        self.date_created = date_created
        self.date_updated = date_updated

class MarketingChannel:
    def __init__(self, id: int, uuid: str, channel_name: str, description: str = None, date_created: datetime = datetime.now(), date_updated: datetime = None):
        self.id = id
        self.uuid = uuid
        self.channel_name = channel_name
        self.description = description
        self.date_created = date_created
        self.date_updated = date_updated

class MarketingLead:
    def __init__(self, id: int, uuid: str, campaign_id: int, lead_name: str, contact_info: str = None, source: str = None, date_created: datetime = datetime.now(), date_updated: datetime = None):
        self.id = id
        self.uuid = uuid
        self.campaign_id = campaign_id
        self.lead_name = lead_name
        self.contact_info = contact_info
        self.source = source
        self.date_created = date_created
        self.date_updated = date_updated

class CustomerFeedback:
    def __init__(self, id: int, uuid: str, customer_id: int, feedback_text: str, feedback_date: datetime, date_created: datetime = datetime.now(), date_updated: datetime = None):
        self.id = id
        self.uuid = uuid
        self.customer_id = customer_id
        self.feedback_text = feedback_text
        self.feedback_date = feedback_date
        self.date_created = date_created
        self.date_updated = date_updated

class CustomerInteraction:
    def __init__(self, id: int, uuid: str, customer_id: int, interaction_date: datetime, notes: str = None, date_created: datetime = datetime.now(), date_updated: datetime = None):
        self.id = id
        self.uuid = uuid
        self.customer_id = customer_id
        self.interaction_date = interaction_date
        self.notes = notes
        self.date_created = date_created
        self.date_updated = date_updated

class EmailLead:
    def __init__(self, id: int, uuid: str, address: str, campaign_id: int, date_created: datetime = datetime.now(), date_updated: datetime = None):
        self.id = id
        self.uuid = uuid
        self.address = address
        self.campaign_id = campaign_id
        self.date_created = date_created
        self.date_updated = date_updated

class CustomerProfile:
    def __init__(self, id: int, uuid: str, first_name: str, last_name: str, email: str, date_created: datetime = datetime.now(), date_updated: datetime = None):
        self.id = id
        self.uuid = uuid
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.date_created = date_created
        self.date_updated = date_updated

class EmailCampaign:
    def __init__(self, id: int, uuid: str, creator_id: int, subject: str, send_date: datetime = None, date_created: datetime = datetime.now(), date_updated: datetime = None):
        self.id = id
        self.uuid = uuid
        self.creator_id = creator_id
        self.subject = subject
        self.send_date = send_date
        self.date_created = date_created
        self.date_updated = date_updated

class EmailTemplate:
    def __init__(self, id: int, uuid: str, creator_id: int, template_name: str, content: str = None, date_created: datetime = datetime.now(), date_updated: datetime = None):
        self.id = id
        self.uuid = uuid
        self.creator_id = creator_id
        self.template_name = template_name
        self.content = content
        self.date_created = date_created
        self.date_updated = date_updated

class User:
    def __init__(self, id: int, uuid: str, first_name: str, last_name: str, email: str, date_created: datetime = datetime.now(), date_updated: datetime = None):
        self.id = id
        self.uuid = uuid
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.date_created = date_created
        self.date_updated = date_updated
        self.date_updated = date_updated