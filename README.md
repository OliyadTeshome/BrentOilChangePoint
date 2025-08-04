# BrentOilChangePoint

## Overview
This repository contains the code and deliverables for the **10 Academy Week 10 Challenge** (July 30 - August 5, 2025). The project focuses on analyzing the impact of geopolitical and economic events (e.g., political decisions, OPEC policies, conflicts) on Brent oil prices using Bayesian change point analysis with PyMC3. The solution includes a Flask-React dashboard for interactive visualization and a report with actionable insights for investors, policymakers, and energy companies at Birhan Energies.

## Folder Structure
- `data/`: Raw and processed datasets (e.g., `BrentOilPrices.csv`, `events.csv`) and outputs (e.g., `model_outputs`, `visualizations`).
- `src/`: Source code for analysis (`analysis/`), dashboard (`dashboard/backend/`, `dashboard/frontend/`), and utilities (`utils/`).
- `docs/`: Reports and documentation (e.g., `final_report.pdf`).
- `notebooks/`: Jupyter notebooks for EDA and model development (e.g., `eda_exploration.ipynb`).
- `tests/`: Unit tests for code validation.

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/OliyadTeshome/BrentOilChangePoint.git
cd BrentOilChangePoint
```

### 2. Install Dependencies
```bash
pip install -r requirements.txt
```

### 3. Set Up the Backend (Flask)
Navigate to `src/dashboard/backend/` and run:
```bash
python app.py
```
Access the API at http://localhost:5000.

### 4. Set Up the Frontend (React)
Navigate to `src/dashboard/frontend/` and install dependencies:
```bash
npm install
```
Start the app:
```bash
npm start
```
Access the dashboard at http://localhost:3000.

### 5. Explore Notebooks
Open `notebooks/` in Jupyter Notebook for EDA and model development.

## Deliverables
- **Final Report**: `docs/final_report.pdf` - Insights on Brent oil price changes and event impacts.
- **Events Dataset**: `data/processed/events.csv` - List of 10-15 key events with dates.
- **GitHub Code**: This repository with screenshots of the dashboard and notebooks.

## Usage
- Run `eda_exploration.ipynb` to visualize Brent oil price trends.
- Execute `src/analysis/change_point_model.py` to perform Bayesian change point analysis.
- Interact with the dashboard to explore price changes and event correlations.

## Team
**Tutors**: Mahlet, Rediet, Kerod, Rehmet

## Contact
For questions, use the #all-week10 tag or reach out to the team.

## License
[Add license if applicable, e.g., MIT License]
