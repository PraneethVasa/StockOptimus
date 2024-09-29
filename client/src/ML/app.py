from flask import Flask, request, jsonify
from prediction_model import train_and_predict
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS to allow frontend communication

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json
        state = data['state']
        commodity = data['commodity']
        num_days = int(data['days'])

        # Call the prediction function
        predicted_prices = train_and_predict(state, commodity, num_days)

        # Convert NumPy array to list
        predicted_prices_list = predicted_prices.flatten().tolist()

        return jsonify({
            "predicted_prices": predicted_prices_list,
            "success": True
        })
    except Exception as e:
        # Return the error message in case of failure
        return jsonify({
            "success": False,
            "error": str(e)
        }), 500

if __name__ == '__main__':
    app.run(debug=True)
