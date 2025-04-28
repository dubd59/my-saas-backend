from fastapi.testclient import TestClient
from src.api.main import app
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from src.db.database import Base
from src.api.main import get_db
import pytest


SQLALCHEMY_DATABASE_URL = "sqlite:///./test.db"

engine = create_engine(
    SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False}
)
TestingSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)


Base.metadata.drop_all(bind=engine)
Base.metadata.create_all(bind=engine)


def override_get_db():
    try:
        db = TestingSessionLocal()
        yield db
    finally:
        db.close()


app.dependency_overrides[get_db] = override_get_db


client = TestClient(app)


def test_read_main():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"Hello": "World"}


def test_create_user():
    response = client.post(
        "/users/",
        json={"first_name": "Test", "last_name": "User", "email": "testuser@example.com"},
    )
    assert response.status_code == 200
    data = response.json()
    assert data["first_name"] == "Test"
    assert data["last_name"] == "User"
    assert data["email"] == "testuser@example.com"
    assert "id" in data
    assert "uuid" in data


def test_read_users():
    response = client.get("/users/")
    assert response.status_code == 200
    data = response.json()
    assert len(data) >= 1


def test_read_user():
    response = client.get("/users/")
    data = response.json()
    response = client.get(f"/users/{data[0]['id']}")
    assert response.status_code == 200
    data = response.json()
    assert data["first_name"] == "Test"
    assert data["last_name"] == "User"
    assert data["email"] == "testuser@example.com"


def test_create_creator_profile():
    response = client.post(
        "/creator-profiles/",
        json={"first_name": "Creator", "last_name": "Profile", "email": "creatorprofile@example.com"},
    )
    assert response.status_code == 200
    data = response.json()
    assert data["first_name"] == "Creator"
    assert data["last_name"] == "Profile"
    assert data["email"] == "creatorprofile@example.com"
    assert "id" in data
    assert "uuid" in data


def test_read_creator_profiles():
    response = client.get("/creator-profiles/")
    assert response.status_code == 200
    data = response.json()
    assert len(data) >= 1


def test_read_creator_profile():
    response = client.get("/creator-profiles/")
    data = response.json()
    response = client.get(f"/creator-profiles/{data[0]['id']}")
    assert response.status_code == 200
    data = response.json()
    assert data["first_name"] == "Creator"
    assert data["last_name"] == "Profile"
    assert data["email"] == "creatorprofile@example.com"


def test_create_customer_profile():
    response = client.post(
        "/customer-profiles/",
        json={"first_name": "Customer", "last_name": "Profile", "email": "customerprofile@example.com"},
    )
    assert response.status_code == 200
    data = response.json()
    assert data["first_name"] == "Customer"
    assert data["last_name"] == "Profile"
    assert data["email"] == "customerprofile@example.com"
    assert "id" in data
    assert "uuid" in data


def test_read_customer_profiles():
    response = client.get("/customer-profiles/")
    assert response.status_code == 200
    data = response.json()
    assert len(data) >= 1


def test_read_customer_profile():
    response = client.get("/customer-profiles/")
    data = response.json()
    response = client.get(f"/customer-profiles/{data[0]['id']}")
    assert response.status_code == 200
    data = response.json()
    assert data["first_name"] == "Customer"
    assert data["last_name"] == "Profile"
    assert data["email"] == "customerprofile@example.com"


def test_create_project():
    response = client.post(
        "/projects/", json={"title": "Test Project", "creator_id": 1}
    )
    assert response.status_code == 200
    data = response.json()
    assert data["title"] == "Test Project"
    assert data["creator_id"] == 1


def test_create_analytics_event():
    response = client.post(
        "/analytics-events/", json={"event_type": "Test Event", "event_date": "2024-01-01T00:00:00", "creator_id": 1}
    )
    assert response.status_code == 200
    data = response.json()
    assert data["event_type"] == "Test Event"
    assert "id" in data
    assert "uuid" in data


def test_read_analytics_events():
    response = client.get("/analytics-events/")
    assert response.status_code == 200
    data = response.json()
    assert len(data) >= 1


def test_read_analytics_event():
    response = client.get("/analytics-events/")
    data = response.json()
    response = client.get(f"/analytics-events/{data[0]['id']}")
    assert response.status_code == 200
    data = response.json()
    assert data["event_type"] == "Test Event"


def test_create_analytics_insight():
    response = client.post(
        "/analytics-insights/", json={"insight": "Test Insight", "report_id": 1}
    )
    assert response.status_code == 200
    data = response.json()
    assert data["insight"] == "Test Insight"
    assert "id" in data
    assert "uuid" in data


def test_read_analytics_insights():
    response = client.get("/analytics-insights/")
    assert response.status_code == 200
    data = response.json()
    assert len(data) >= 1


def test_read_analytics_insight():
    response = client.get("/analytics-insights/")
    data = response.json()
    response = client.get(f"/analytics-insights/{data[0]['id']}")
    assert response.status_code == 200
    data = response.json()
    assert data["insight"] == "Test Insight"


def test_create_analytics_report():
    response = client.post(
        "/analytics-reports/", json={"report_date": "2024-01-01T00:00:00", "creator_id": 1}
    )
    assert response.status_code == 200
    data = response.json()
    assert data["creator_id"] == 1
    assert "id" in data
    assert "uuid" in data


def test_read_analytics_reports():
    response = client.get("/analytics-reports/")
    assert response.status_code == 200
    data = response.json()
    assert len(data) >= 1


def test_read_analytics_report():
    response = client.get("/analytics-reports/")
    data = response.json()
    response = client.get(f"/analytics-reports/{data[0]['id']}")
    assert response.status_code == 200
    data = response.json()
    assert data["creator_id"] == 1


def test_create_creator_payment():
    response = client.post(
        "/creator-payments/",
        json={"payment_method": "PayPal", "account_details": "test@example.com", "creator_id": 1},
    )
    assert response.status_code == 200
    data = response.json()
    assert data["payment_method"] == "PayPal"
    assert "id" in data
    assert "uuid" in data


def test_read_creator_payments():
    response = client.get("/creator-payments/")
    assert response.status_code == 200
    data = response.json()
    assert len(data) >= 1


def test_read_creator_payment():
    response = client.get("/creator-payments/")
    data = response.json()
    response = client.get(f"/creator-payments/{data[0]['id']}")
    assert response.status_code == 200
    data = response.json()
    assert data["payment_method"] == "PayPal"


def test_create_creator_portfolio():
    response = client.post(
        "/creator-portfolios/", json={"title": "Test Portfolio", "creator_id": 1}
    )
    assert response.status_code == 200
    data = response.json()
    assert data["title"] == "Test Portfolio"
    assert "id" in data
    assert "uuid" in data


def test_read_creator_portfolios():
    response = client.get("/creator-portfolios/")
    assert response.status_code == 200
    data = response.json()
    assert len(data) >= 1


def test_read_creator_portfolio():
    response = client.get("/creator-portfolios/")
    data = response.json()
    response = client.get(f"/creator-portfolios/{data[0]['id']}")
    assert response.status_code == 200
    data = response.json()
    assert data["title"] == "Test Portfolio"


def test_create_customer_feedback():
    response = client.post(
        "/customer-feedbacks/",
        json={"feedback_text": "Test Feedback", "feedback_date": "2024-01-01T00:00:00", "customer_id": 1},
    )
    assert response.status_code == 200
    data = response.json()
    assert data["feedback_text"] == "Test Feedback"
    assert "id" in data
    assert "uuid" in data


def test_read_customer_feedbacks():
    response = client.get("/customer-feedbacks/")
    assert response.status_code == 200
    data = response.json()
    assert len(data) >= 1


def test_read_customer_feedback():
    response = client.get("/customer-feedbacks/")
    data = response.json()
    response = client.get(f"/customer-feedbacks/{data[0]['id']}")
    assert response.status_code == 200
    data = response.json()
    assert data["feedback_text"] == "Test Feedback"


def test_create_customer_interaction():
    response = client.post(
        "/customer-interactions/",
        json={"interaction_date": "2024-01-01T00:00:00", "customer_id": 1},
    )
    assert response.status_code == 200
    data = response.json()
    assert data["customer_id"] == 1
    assert "id" in data
    assert "uuid" in data


def test_read_customer_interactions():
    response = client.get("/customer-interactions/")
    assert response.status_code == 200
    data = response.json()
    assert len(data) >= 1


def test_read_customer_interaction():
    response = client.get("/customer-interactions/")
    data = response.json()
    response = client.get(f"/customer-interactions/{data[0]['id']}")
    assert response.status_code == 200
    data = response.json()
    assert data["customer_id"] == 1
    assert "id" in data
    assert "uuid" in data


def test_read_projects():
    response = client.get("/projects/")
    assert response.status_code == 200
    data = response.json()
    assert len(data) >= 1


def test_read_project():
    response = client.get("/projects/")
    data = response.json()
    response = client.get(f"/projects/{data[0]['id']}")
    assert response.status_code == 200
    data = response.json()
    assert data["title"] == "Test Project"
    assert data["creator_id"] == 1