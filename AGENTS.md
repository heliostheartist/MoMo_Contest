# Hướng dẫn làm việc với agent

## Phạm vi và ưu tiên

- Làm đúng yêu cầu gần nhất của người dùng và giữ nguyên các quyết định đã chốt trong tài liệu dự án.
- Trước khi sửa, đọc tài liệu liên quan trong `docs/` và kiểm tra trạng thái Git để tránh ghi đè thay đổi đang có.
- Nếu yêu cầu mơ hồ nhưng có thể chọn cách an toàn, tiếp tục với giả định hợp lý và ghi rõ giả định trong câu trả lời.

## Thay đổi trong repository

- Giữ thay đổi nhỏ, có mục đích; không xóa hoặc viết lại nội dung ngoài phạm vi yêu cầu.
- Đặt tên nhánh và commit theo quy tắc trong `README.md`.
- Không tự tạo commit, push, mở pull request hay triển khai nếu chưa được yêu cầu.
- Khi thêm hoặc đổi cấu trúc tài liệu, cập nhật các liên kết và mục lục liên quan.
- Không thêm thư viện, dịch vụ, chi phí hoặc dữ liệu mẫu bên ngoài nếu chưa cần thiết cho yêu cầu.

## Dữ liệu và bảo mật

- Không đưa khóa API, mật khẩu, token, thông tin tài khoản ngân hàng hoặc dữ liệu cá nhân thật vào mã nguồn hay tài liệu.
- Với hóa đơn và dữ liệu người dùng, chỉ dùng dữ liệu được phép sử dụng; ưu tiên dữ liệu giả lập hoặc đã ẩn danh.
- Không gửi tin nhắn, email hoặc dữ liệu ra dịch vụ bên ngoài thay mặt người dùng nếu chưa được yêu cầu rõ ràng.

## Kiểm tra và báo cáo

- Chỉ chạy kiểm thử hoặc lệnh có tác động đáng kể khi người dùng yêu cầu hoặc khi việc đó cần thiết để hoàn tất thay đổi.
- Báo rõ những file đã sửa, nội dung chính, kiểm tra đã thực hiện và phần còn vướng (nếu có).
- Trả lời bằng tiếng Việt, trừ khi người dùng yêu cầu ngôn ngữ khác.
