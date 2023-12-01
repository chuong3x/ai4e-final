from flask import Flask, request, jsonify
from flask_cors import CORS
from tensorflow import keras
import numpy as np
import joblib

app = Flask(__name__)
CORS(app)  # Cấu hình CORS cho tất cả các route
# Load model vào bộ nhớ khi server khởi động
# Đọc lại mô hình đã huấn luyện
model = keras.models.load_model('./my_model.h5')
# Load thông tin về quá trình chuẩn hóa
scaler = joblib.load('scaler.pkl')
###

@app.route('/api/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()  # Nhận dữ liệu từ client
        # Chuyển đổi dữ liệu thành định dạng mà mô hình yêu cầu
        features = np.array(data['features']).reshape(1, -1)
        # Chuẩn hóa dữ liệu mới trước khi dự đoán
        new_data_scaled = scaler.transform(features)
        # Dự đoán kết quả
        prediction = model.predict(new_data_scaled)

        # Trả về kết quả dự đoán dưới dạng JSON
        return jsonify({'message': 'Success','data': prediction[0].tolist()})
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)  # Chạy server Flask
