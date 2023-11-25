# Sử dụng một image Python đã có sẵn
FROM python:3.9

# Set thư mục làm việc
WORKDIR /app

# Copy các tệp cần thiết vào container
COPY requirements.txt /app/
COPY index.py /app/
COPY my_model.h5 /app/

# Cài đặt các thư viện từ requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Mở cổng 5000 (hoặc cổng bạn muốn sử dụng)
EXPOSE 5000

# Chạy ứng dụng Flask khi container được khởi động
CMD ["python", "index.py"]
