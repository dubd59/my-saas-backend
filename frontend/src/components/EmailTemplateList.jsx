import React, { useState, useEffect } from "react";

const EmailTemplateList = () => {
  const [emailTemplates, setEmailTemplates] = useState([]);

  useEffect(() => {
    const fetchEmailTemplates = async () => {
      try {
        const response = await fetch("/email-templates/");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
          setEmailTemplates(data);
      } catch (error) {
        console.error('Failed to fetch email templates:', error);
      }
    };

    fetchEmailTemplates();
  }, []);

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "20px",
        marginBottom: "20px",
        backgroundColor: "#fff",
        borderRadius: "5px",
      }}
    >
      <h2 style={{ color: "#38beba", marginBottom: "20px", textAlign: "center" }}>
        Email Templates
      </h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {emailTemplates.map((emailTemplate) => ( <li key={emailTemplate.id} style={{ marginBottom: "10px", borderBottom: "1px solid #eee", paddingBottom: "5px" }}>{emailTemplate.name}</li>))}
      </ul>
    </div>
  );
};

export default EmailTemplateList;