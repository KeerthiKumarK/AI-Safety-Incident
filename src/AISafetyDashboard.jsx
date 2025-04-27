import React, { useState } from "react";
import "./AISafetyDashboard.css";

const mockIncidents = [
  {
    id: 1,
    title: "Biased Recommendation Algorithm",
    severity: "Medium",
    reportedDate: "2025-03-15T10:00:00Z",
    description:  "Algorithm consistently favored certain demographics..."
  },
  {
    id: 2,
    title: "LLM Hallucination in Critical Info",
    severity: "High",
    reportedDate: "2025-04-01T14:30:00Z",
    description: "LLM provided incorrect safety procedure information..."
  },
  {
    id: 3,
    title: "Minor Data Leak via Chatbot",
    severity: "Low",
    reportedDate: "2025-03-20T09:15:00Z",
    description: "Chatbot inadvertently exposed non-sensitive user metadata..."
  }
];

const AISafetyDashboard = () => {
  const [incidents, setIncidents] = useState(mockIncidents);
  const [expandedIncident, setExpandedIncident] = useState(null);
  const [filterSeverity, setFilterSeverity] = useState("All");
  const [sortOrder, setSortOrder] = useState("Newest");

  const [newIncident, setNewIncident] = useState({
    title: "",
    description: "",
    severity: "Low"
  });

  // Toggle expanded description
  const toggleExpand = (id) => {
    setExpandedIncident(expandedIncident === id ? null : id);
  };

  // Handle filtering
  const handleFilterChange = (e) => {
    setFilterSeverity(e.target.value);
  };

  // Handle sorting
  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewIncident((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle adding new incident
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newIncident.title.trim() === "" || newIncident.description.trim() === "") {
      alert("Please fill in all fields.");
      return;
    }
    const newEntry = {
      ...newIncident,
      id: Date.now(),
      reportedDate: new Date().toISOString().split('T')[0]
    };
    setIncidents([newEntry, ...incidents]);
    setNewIncident({ title: "", description: "", severity: "Low" });
  };

  // Filter and Sort incidents
  const displayedIncidents = incidents
    .filter((incident) => filterSeverity === "All" || incident.severity === filterSeverity)
    .sort((a, b) => {
      if (sortOrder === "Newest") {
        return new Date(b.reportedDate) - new Date(a.reportedDate);
      } else {
        return new Date(a.reportedDate) - new Date(b.reportedDate);
      }
    });

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">AI Safety Incident Dashboard</h1>

      {/* Controls */}
      <div className="controls">
        <select value={filterSeverity} onChange={handleFilterChange} className="control-select">
          <option value="All">All Severities</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <select value={sortOrder} onChange={handleSortChange} className="control-select">
          <option value="Newest">Newest First</option>
          <option value="Oldest">Oldest First</option>
        </select>
      </div>

      {/* Incident List */}
      <div className="incident-list">
        {displayedIncidents.map((incident) => (
          <div key={incident.id} className="incident-card">
            <div className="incident-header">
              <div>
                <h2 className="incident-title">{incident.title}</h2>
                <p className="incident-info">
                  <span className={`severity ${incident.severity.toLowerCase()}`}>{incident.severity}</span> 
                  | {incident.reportedDate}
                </p>
              </div>
              <button
                className="view-button"
                onClick={() => toggleExpand(incident.id)}
              >
                {expandedIncident === incident.id ? "Hide Details" : "View Details"}
              </button>
            </div>

            {expandedIncident === incident.id && (
              <div className="incident-description">
                {incident.description}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Report New Incident Form */}
      <div className="form-container">
        <h2>Report New Incident</h2>
        <form onSubmit={handleSubmit} className="incident-form">
          <input
            type="text"
            name="title"
            placeholder="Incident Title"
            value={newIncident.title}
            onChange={handleInputChange}
            className="form-input"
          />
          <textarea
            name="description"
            placeholder="Incident Description"
            value={newIncident.description}
            onChange={handleInputChange}
            className="form-textarea"
          />
          <select
            name="severity"
            value={newIncident.severity}
            onChange={handleInputChange}
            className="form-select"
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <button type="submit" className="submit-button">Submit Incident</button>
        </form>
      </div>
    </div>
  );
};

export default AISafetyDashboard;
