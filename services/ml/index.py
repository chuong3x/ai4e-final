from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Cấu hình CORS cho tất cả các route
# Load model vào bộ nhớ khi server khởi động
###

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()  # Nhận dữ liệu từ client
        # Thực hiện dự đoán với model và dữ liệu nhận được từ client
        print(data)

        # Trả về kết quả dự đoán dưới dạng JSON
        return jsonify({'prediction': "a"})
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)  # Chạy server Flask
