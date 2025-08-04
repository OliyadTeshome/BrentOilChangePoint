import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

# Load data
df = pd.read_csv('../data/raw/brent_oil_prices.csv')
df['Date'] = pd.to_datetime(df['Date'])

# Basic statistics
print(df.describe())
