# **SE: nền tảng, tính tiền, thanh toán**

Cứng: chưa xong thì không làm được. Mềm: có cách gỡ ghi trong ngoặc, không được đứng đợi.

| \# | Ngày | Việc | Xong khi | Cần xong trước | Ưu |
| :---- | :---- | :---- | :---- | :---- | :---- |
| S1 | 24/11 | Repo, khung FE và BE, chốt schema JSON; commit 3 file mẫu receipt, splitrule, allocation | Cả ba xác nhận schema | Không | P0 |
| S2 | 24/11 | Chốt quy tắc làm tròn và thứ tự phân bổ; chọn DB lưu bền | Ghi vào README | S1 | P0 |
| S3 | 25/11 | Deploy khung app, API tạo và đọc hóa đơn, tài liệu API | URL công khai mở được | S1 (cứng) | P0 |
| S4 | 26/11 | Bộ tính tiền số nguyên đồng: theo món, theo người; phí, thuế, giảm giá theo tỷ lệ; kiểm tra tổng và số âm | Ca chuẩn khớp từng đồng | S1, S2 (cứng) | P0 |
| S5 | 27/11 | Lát cắt dọc: tải ảnh, món, sửa, chia, bảng tiền | Chạy trên URL công khai | S3 (cứng); A4 (mềm: cờ USE\_MOCK\_AI) | P0 |
| S6 | 27/11 | Mã VietQR thật cho từng người, có số tiền và nội dung riêng | Quét được bằng ứng dụng ngân hàng | S4 (cứng) | P0 |
| S7 | 28/11 | Nối parser với bộ tính tiền; endpoint preview và recalculate; cờ VALIDATE | Một câu mô tả ra bảng tiền | S4, A4, B4 (cứng) | P0 |
| S8 | 28/11 | Vòng sửa: gửi lỗi kiểm tra lại cho mô hình, tối đa 2 vòng, rồi nhập tay | Có log số vòng | S7 (cứng) | P0 |
| S9 | 28/11 | Trần chi phí theo ngày, giới hạn tần suất, ghim phiên bản mô hình | Vượt trần thì chuyển nhập tay | S7 (cứng) | P0 |
| S10 | 29/11 | Link thành viên, mã khó đoán: chọn tên, xem phần mình, phản hồi, bấm đã chuyển hoặc trả tiền mặt; người lập xác nhận | Trạng thái còn sau khi tải lại, trên trình duyệt khác | S3, S6 (cứng) | P0 |
| S11 | 30/11 | Chạy trọn luồng 3 lần, ghi lỗi chặn | Danh sách lỗi | S7, S10 (cứng) | P0 |
| S12 | 01/12 | Sửa lỗi chặn, đóng băng tính năng, nạp ảnh mẫu; thử tắt khóa mô hình | Không còn lỗi chặn; nhập tay đi hết luồng | S11 (cứng) | P0 |
| S13 | 02/12 | Quay video; README; đóng gói mã nguồn | Video, README, file zip | S12 (cứng). Quay thử ngày 30/11 | P0 |
| S14 | 29/11 đến 01/12 | Thông báo tiền về từ ngân hàng; định tuyến mô hình; MCP | Chạy được, không đụng lõi | S10 (mềm) | P2 |

