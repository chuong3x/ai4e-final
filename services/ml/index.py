from flask import Flask, request, jsonify
from flask_cors import CORS
from tensorflow import keras
import numpy as np

app = Flask(__name__)
CORS(app)  # Cấu hình CORS cho tất cả các route
# Load model vào bộ nhớ khi server khởi động
# Đọc lại mô hình đã huấn luyện
model = keras.models.load_model('./my_model.h5')
###

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()  # Nhận dữ liệu từ client
        print(data)
        # Chuyển đổi dữ liệu thành định dạng mà mô hình yêu cầu
        features = np.array(data['features']).reshape(1, -1)
        print(features)
        # Dự đoán kết quả
        prediction = model.predict(features)
        print(prediction)

        # Trả về kết quả dự đoán dưới dạng JSON
        return jsonify({'prediction': prediction[0].tolist()})
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)  # Chạy server Flask
