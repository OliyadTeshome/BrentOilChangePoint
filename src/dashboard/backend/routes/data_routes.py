from flask import Blueprint, jsonify, request
import csv
import os
from datetime import datetime

bp = Blueprint('data_routes', __name__)

@bp.route('/api/events', methods=['GET'])
def get_events():
    events = []
    csv_path = os.path.join(os.path.dirname(__file__), '../../../..', 'data/raw/key_events.csv')
    
    # Get date range parameters
    start_date = request.args.get('start_date')
    end_date = request.args.get('end_date')
    
    with open(csv_path, newline='', encoding='utf-8') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            if row['Date']:
                # Filter by date range if provided
                if start_date and end_date:
                    try:
                        event_date = datetime.strptime(row['Date'], '%Y-%m-%d')
                        start = datetime.strptime(start_date, '%Y-%m-%d')
                        end = datetime.strptime(end_date, '%Y-%m-%d')
                        if start <= event_date <= end:
                            events.append(row)
                    except ValueError:
                        events.append(row)
                else:
                    events.append(row)
    return jsonify(events)

@bp.route('/api/prices', methods=['GET'])
def get_prices():
    # Get date range parameters
    start_date = request.args.get('start_date')
    end_date = request.args.get('end_date')
    
    # Comprehensive historical Brent oil prices data spanning 1987-2022
    prices = [
        # 1987-1990: Pre-Gulf War period
        {"date": "1987-01-01", "price": 18.5},
        {"date": "1987-06-01", "price": 19.2},
        {"date": "1988-01-01", "price": 16.8},
        {"date": "1988-06-01", "price": 17.5},
        {"date": "1989-01-01", "price": 18.2},
        {"date": "1989-06-01", "price": 19.8},
        {"date": "1990-01-01", "price": 20.1},
        {"date": "1990-06-01", "price": 21.3},
        {"date": "1990-08-02", "price": 20.5},  # Iraq invades Kuwait
        {"date": "1990-09-01", "price": 28.5},  # Price spike during crisis
        {"date": "1990-10-01", "price": 35.8},  # Price spike during crisis
        {"date": "1990-12-01", "price": 25.2},
        {"date": "1991-02-28", "price": 18.2},  # Gulf War ends
        {"date": "1991-06-01", "price": 19.8},
        {"date": "1991-12-01", "price": 19.5},
        {"date": "1992-01-01", "price": 19.2},
        {"date": "1992-06-01", "price": 20.1},
        {"date": "1993-01-01", "price": 18.8},
        {"date": "1994-01-01", "price": 17.2},
        {"date": "1995-01-01", "price": 17.8},
        {"date": "1996-01-01", "price": 20.3},
        {"date": "1997-01-01", "price": 22.1},
        {"date": "1998-01-01", "price": 16.8},
        {"date": "1999-01-01", "price": 18.2},
        {"date": "2000-01-01", "price": 25.3},
        {"date": "2001-01-01", "price": 24.8},
        {"date": "2002-01-01", "price": 25.1},
        {"date": "2003-01-01", "price": 28.2},
        {"date": "2003-03-20", "price": 28.5},  # US-led invasion of Iraq
        {"date": "2003-06-01", "price": 30.2},
        {"date": "2003-12-01", "price": 32.1},
        {"date": "2004-01-01", "price": 33.8},
        {"date": "2004-06-01", "price": 38.5},
        {"date": "2005-01-01", "price": 45.2},
        {"date": "2005-06-01", "price": 52.8},
        {"date": "2006-01-01", "price": 61.5},
        {"date": "2006-06-01", "price": 68.2},
        {"date": "2007-01-01", "price": 54.2},
        {"date": "2007-06-01", "price": 72.5},
        {"date": "2008-01-01", "price": 92.8},
        {"date": "2008-06-01", "price": 125.6},
        {"date": "2008-07-01", "price": 140.2}, # Peak before crisis
        {"date": "2008-09-15", "price": 95.0},  # Global Financial Crisis begins
        {"date": "2008-10-01", "price": 75.2},
        {"date": "2008-12-01", "price": 45.2},  # Sharp decline
        {"date": "2009-01-01", "price": 44.8},
        {"date": "2009-06-01", "price": 68.5},
        {"date": "2010-01-01", "price": 78.9},
        {"date": "2010-06-01", "price": 75.2},
        {"date": "2011-01-01", "price": 95.2},
        {"date": "2011-02-15", "price": 102.3}, # Arab Spring unrest in Libya
        {"date": "2011-06-01", "price": 115.8},
        {"date": "2011-12-01", "price": 108.5},
        {"date": "2012-01-01", "price": 111.8},
        {"date": "2012-06-01", "price": 95.2},
        {"date": "2013-01-01", "price": 112.5},
        {"date": "2013-06-01", "price": 103.8},
        {"date": "2014-01-01", "price": 108.2},
        {"date": "2014-06-01", "price": 110.5},
        {"date": "2014-11-27", "price": 72.8},  # OPEC maintains production
        {"date": "2014-12-01", "price": 65.4},
        {"date": "2015-01-01", "price": 52.1},
        {"date": "2015-06-01", "price": 62.8},
        {"date": "2015-12-01", "price": 37.8},
        {"date": "2016-01-01", "price": 35.2},
        {"date": "2016-06-01", "price": 48.5},
        {"date": "2016-11-30", "price": 48.2},  # OPEC production cuts
        {"date": "2016-12-01", "price": 54.8},
        {"date": "2017-01-01", "price": 56.5},
        {"date": "2017-06-01", "price": 48.2},
        {"date": "2018-01-01", "price": 66.8},
        {"date": "2018-05-08", "price": 76.5},  # US sanctions on Iran
        {"date": "2018-06-01", "price": 78.2},
        {"date": "2018-12-01", "price": 58.2},
        {"date": "2019-01-01", "price": 61.8},
        {"date": "2019-06-01", "price": 65.5},
        {"date": "2019-12-01", "price": 66.7},
        {"date": "2020-01-01", "price": 66.7},
        {"date": "2020-02-01", "price": 55.2},
        {"date": "2020-03-11", "price": 35.8},  # COVID-19 pandemic
        {"date": "2020-04-12", "price": 31.2},  # OPEC+ production cuts
        {"date": "2020-04-20", "price": 19.8},  # Lowest point
        {"date": "2020-06-01", "price": 42.5},
        {"date": "2020-12-01", "price": 48.5},
        {"date": "2021-01-01", "price": 51.8},
        {"date": "2021-06-01", "price": 72.5},
        {"date": "2021-07-18", "price": 73.4},  # OPEC+ increases production
        {"date": "2021-12-01", "price": 78.9},
        {"date": "2022-01-01", "price": 78.9},
        {"date": "2022-02-24", "price": 96.8},  # Russia invades Ukraine
        {"date": "2022-06-01", "price": 118.5}, # Peak after invasion
        {"date": "2022-12-01", "price": 85.2}
    ]
    
    # Filter by date range if provided
    if start_date and end_date:
        try:
            start = datetime.strptime(start_date, '%Y-%m-%d')
            end = datetime.strptime(end_date, '%Y-%m-%d')
            filtered_prices = []
            for price in prices:
                price_date = datetime.strptime(price['date'], '%Y-%m-%d')
                if start <= price_date <= end:
                    filtered_prices.append(price)
            return jsonify(filtered_prices)
        except ValueError:
            pass
    
    return jsonify(prices)

@bp.route('/api/model-output', methods=['GET'])
def get_model_output():
    # Mock data for model results (e.g., change points, forecasts)
    model_output = {
        "change_points": [
            {"date": "1990-08-02", "type": "increase"},
            {"date": "2008-09-15", "type": "decrease"},
            {"date": "2020-03-11", "type": "decrease"},
            {"date": "2022-02-24", "type": "increase"}
        ],
        "forecast": [
            {"date": "2022-03-01", "predicted_price": 98.5},
            {"date": "2022-04-01", "predicted_price": 102.3},
            {"date": "2022-05-01", "predicted_price": 105.7}
        ]
    }
    return jsonify(model_output)

@bp.route('/api/indicators', methods=['GET'])
def get_indicators():
    # Mock data for key indicators
    indicators = {
        "volatility": 2.3,
        "average_price_change": 1.1
    }
    return jsonify(indicators)
