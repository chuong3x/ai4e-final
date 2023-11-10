import pika
import json
import tensorflow as tf

# Connection string (URI) đến RabbitMQ
connection_string = "amqp://guest:Hello@localhost:5672/"

# Tạo kết nối từ connection string
parameters = pika.URLParameters(connection_string)
connection = pika.BlockingConnection(parameters)

# Tạo một channel
channel = connection.channel()

# Tên hàng đợi để nhận tin nhắn
input_queue_name = 'input_queue'
# Tên hàng đợi để nhận kết quả
output_queue_name = 'output_queue'

# Khai báo hàng đợi nếu chưa tồn tại
channel.queue_declare(queue=input_queue_name)
channel.queue_declare(queue=output_queue_name)

# Load model từ TensorFlow
model = tf.keras.models.load_model('your_model_path')  

# Hàm xử lý khi nhận được tin nhắn từ RabbitMQ
def callback(ch, method, properties, body):
    input_data = json.loads(body)
    
    # Thực hiện dự đoán bằng mô hình
    prediction = model.predict([input_data['input_data']])  # Thay đổi phần này tùy thuộc vào đầu vào của mô hình

    # Gửi kết quả vào hàng đợi result_queue
    result_message = {'prediction': prediction.tolist()}
    channel.basic_publish(
        exchange='',
        routing_key=output_queue_name,
        body=json.dumps(result_message)
    )

    print(f"Received input: {input_data}, Sent result: {result_message}")

# Lắng nghe hàng đợi input_queue
channel.basic_consume(queue=input_queue_name, on_message_callback=callback, auto_ack=True)

# Lắng nghe kết quả từ hàng đợi
print("Waiting for input and sending results. To exit press Ctrl+C")
channel.start_consuming()