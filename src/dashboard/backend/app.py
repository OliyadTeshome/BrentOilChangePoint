from flask import Flask
from flask_cors import CORS
from routes.data_routes import bp as data_routes_bp

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes
app.register_blueprint(data_routes_bp)

if __name__ == '__main__':
    app.run(debug=True)
