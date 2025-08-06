# Brent Oil Change Point Analysis

## 📊 Overview

This repository contains a comprehensive analysis of Brent oil price changes using Bayesian change point analysis with PyMC3. The project was developed for the **10 Academy Week 10 Challenge** (July 30 - August 5, 2025) and focuses on identifying significant structural breaks in Brent oil prices and correlating them with geopolitical and economic events.

### 🎯 Key Features

- **Bayesian Change Point Analysis**: Uses PyMC3 for robust statistical modeling
- **Interactive Dashboard**: Flask-React web application for data visualization
- **Event Correlation**: Links price changes with geopolitical and economic events
- **Time Series Analysis**: Comprehensive EDA and statistical modeling
- **API Integration**: RESTful API for data access and model predictions

### 🏢 Business Context

This analysis provides actionable insights for:
- **Investors**: Understanding market volatility and timing entry/exit points
- **Policymakers**: Assessing the impact of geopolitical decisions on energy markets
- **Energy Companies**: Strategic planning based on price trend analysis
- **Birhan Energies**: Specific insights for Ethiopian energy sector stakeholders

## 🏗️ Project Structure

```
BrentOilChangePoint/
├── data/                          # Raw and processed datasets
│   ├── BrentOilPrices.csv        # Historical Brent oil price data
│   ├── events.csv                # Geopolitical and economic events
│   └── processed/                # Cleaned and processed data
├── src/
│   ├── analysis/                 # Core analysis modules
│   │   ├── change_point_model.py # Bayesian change point analysis
│   │   ├── eda.py               # Exploratory data analysis
│   │   └── preprocessing.py     # Data preprocessing utilities
│   ├── dashboard/               # Web application
│   │   ├── backend/            # Flask API server
│   │   │   ├── app.py         # Main Flask application
│   │   │   ├── config.py      # Configuration settings
│   │   │   └── routes/        # API endpoints
│   │   └── frontend/          # React frontend
│   │       ├── src/
│   │       │   ├── components/ # React components
│   │       │   └── pages/     # Page components
│   │       └── public/        # Static assets
│   └── utils/                 # Utility functions
│       ├── data_utils.py      # Data handling utilities
│       └── viz_utils.py       # Visualization utilities
├── notebooks/                  # Jupyter notebooks
│   ├── 01_eda_exploration.ipynb           # Exploratory data analysis
│   └── 02_model_development_optimized.ipynb # Model development
├── docs/                      # Documentation and reports
├── tests/                     # Unit tests
├── requirements.txt           # Python dependencies
└── README.md                 # This file
```

## 🚀 Quick Start

### Prerequisites

- Python 3.8+
- Node.js 14+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/OliyadTeshome/BrentOilChangePoint.git
   cd BrentOilChangePoint
   ```

2. **Set up Python environment**
   ```bash
   # Create virtual environment
   python -m venv venv
   
   # Activate virtual environment
   # On Windows:
   venv\Scripts\activate
   # On macOS/Linux:
   source venv/bin/activate
   
   # Install dependencies
   pip install -r requirements.txt
   ```

3. **Set up React frontend**
   ```bash
   cd src/dashboard/frontend
   npm install
   ```

## 🎮 Usage

### Running the Analysis

1. **Exploratory Data Analysis**
   ```bash
   jupyter notebook notebooks/01_eda_exploration.ipynb
   ```

2. **Model Development**
   ```bash
   jupyter notebook notebooks/02_model_development_optimized.ipynb
   ```

3. **Run Change Point Analysis**
   ```bash
   python src/analysis/change_point_model.py
   ```

### Running the Dashboard

1. **Start the Flask Backend**
   ```bash
   cd src/dashboard/backend
   python app.py
   ```
   The API will be available at `http://localhost:5000`

2. **Start the React Frontend**
   ```bash
   cd src/dashboard/frontend
   npm start
   ```
   The dashboard will be available at `http://localhost:3000`

## 📡 API Documentation

### Data Endpoints

- `GET /api/data/prices` - Get Brent oil price data
- `GET /api/data/events` - Get geopolitical events data
- `GET /api/data/change-points` - Get identified change points

### Model Endpoints

- `POST /api/model/analyze` - Run change point analysis
- `GET /api/model/results` - Get model results

## 📊 Key Deliverables

### 1. Final Report
- **Location**: `docs/final_report.pdf`
- **Content**: Comprehensive analysis of Brent oil price changes and event impacts
- **Audience**: Investors, policymakers, and energy companies

### 2. Events Dataset
- **Location**: `data/processed/events.csv`
- **Content**: 10-15 key geopolitical and economic events with dates
- **Format**: CSV with event descriptions, dates, and impact assessments

### 3. Interactive Dashboard
- **Features**:
  - Real-time price visualization
  - Change point identification
  - Event correlation analysis
  - Interactive filtering and date selection

### 4. Model Outputs
- **Change Point Detection**: Bayesian analysis results
- **Statistical Significance**: Confidence intervals and posterior distributions
- **Event Impact Assessment**: Correlation between events and price changes

## 🧪 Testing

Run the test suite to ensure code quality:

```bash
# Run all tests
pytest tests/

# Run specific test modules
pytest tests/test_model.py
pytest tests/test_api.py
pytest tests/test_preprocessing.py
```

## 📈 Analysis Workflow

1. **Data Collection**: Gather historical Brent oil prices and geopolitical events
2. **Preprocessing**: Clean and prepare data for analysis
3. **Exploratory Analysis**: Visualize trends and identify patterns
4. **Model Development**: Implement Bayesian change point analysis
5. **Validation**: Test model performance and robustness
6. **Visualization**: Create interactive dashboards and reports
7. **Insights**: Generate actionable recommendations

## 🛠️ Technologies Used

### Backend
- **Python 3.8+**: Core programming language
- **PyMC3**: Bayesian statistical modeling
- **Flask**: Web framework for API
- **Pandas/NumPy**: Data manipulation and analysis
- **SciPy**: Scientific computing

### Frontend
- **React 18**: User interface framework
- **Recharts**: Data visualization library
- **JavaScript ES6+**: Modern JavaScript features

### Development Tools
- **Jupyter Notebooks**: Interactive analysis and documentation
- **Pytest**: Testing framework
- **Git**: Version control

## 👥 Team

**Tutors**: Mahlet, Rediet, Kerod, Rehmet

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For questions and support:
- Use the `#all-week10` tag in the 10 Academy community
- Reach out to the tutoring team
- Create an issue in this repository

## 📄 License

This project is developed for educational purposes as part of the 10 Academy Week 10 Challenge.

## 🔗 Related Links

- [10 Academy](https://10academy.org/)
- [PyMC3 Documentation](https://docs.pymc.io/)
- [Brent Oil Price Data](https://www.investing.com/commodities/brent-oil)
- [Flask Documentation](https://flask.palletsprojects.com/)
- [React Documentation](https://reactjs.org/)

---

**Note**: This project is part of the 10 Academy Week 10 Challenge and is designed for educational and research purposes. The analysis provides insights into Brent oil price dynamics and should be used as one of many tools for decision-making in energy markets.
