# **DS1: đọc hóa đơn**

Cứng: chưa xong thì không làm được. Mềm: có cách gỡ ghi trong ngoặc, không được đứng đợi.

| \# | Ngày | Việc | Xong khi | Cần xong trước | Ưu |
| :---- | :---- | :---- | :---- | :---- | :---- |
| A1 | 24/11 | Chọn mô hình thị giác, thử 2 đến 3 ảnh, thu 30 hóa đơn | Có ảnh và JSON mẫu | Schema nháp (mềm) | P0 |
| A2 | 25/11 | Một ảnh ra đúng schema qua API thật; dán nhãn 10 hóa đơn đầu | 1 ảnh đúng schema | S1, A1 (cứng) | P0 |
| A3 | 26/11 | Kiểm tra chéo số học trên hóa đơn; chạy 20 hóa đơn dev, bảng lỗi theo trường | Có bảng đúng sai; dòng lệch bị gắn cờ | A2 (cứng) | P0 |
| A4 | 27/11 | Đóng gói dịch vụ đọc: timeout, cờ không chắc, kiểm tra schema, phiên bản prompt, lưu kết quả theo mã băm | Gọi được như API, không cần notebook | A2, A3 (cứng) | P0 |
| A5 | 28/11 | Trang sửa hóa đơn, hỏi lại dòng không chắc | Thiếu giá không bị coi là đúng | S5 (cứng); mẫu có dòng không chắc (mềm) | P0 |
| A6 | 29/11 | Bộ đo đủ 60 hóa đơn có nhãn; ảnh mẫu 1 dễ, 1 khó; giới hạn dung lượng ảnh | Bộ đo và bộ mẫu cố định | A4 (mềm) | P0 |
| A7 | 30/11 | Sửa lỗi phần đọc | Theo danh sách S11 | S11 (cứng) | P0 |
| A8 | 01/12 | Chạy tập test khóa một lần; so sánh một lần gọi mô hình với agent | Bảng số liệu | S12, nhãn xong (cứng) | P0 |
| A9 | 02/12 | Viết phần đọc hóa đơn và 1 slide | Khớp log | A8 (cứng) | P0 |

