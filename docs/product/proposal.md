# **Trợ lý tiền chung của nhóm: agent chia, thu và theo dõi chi phí chung**

Đề xuất đề tài dự thi MoMo Tech Contest 2026

# **Tóm tắt**

Chia chi phí chung là việc lặp lại hằng tuần của nhóm bạn và người ở chung. Đề tài đề xuất một agent nhận ảnh hóa đơn và lời mô tả cách chia, tính phần của từng người, thu tiền qua một đường link kèm mã VietQR riêng, theo dõi ai đã trả và ghi đúng phần chi thật của từng người. Mô hình ngôn ngữ đảm nhận việc đọc và hiểu; mọi con số do mã nguồn tính và kiểm tra. Sản phẩm thuộc chủ đề Trợ lý AI, nhóm trợ lý thanh toán và trợ lý tài chính \[1\].

# **1\. Vấn đề**

* Hóa đơn thực tế hiếm khi chia đều: có người không dùng một số món, có người đã ứng trước, có phí phục vụ, thuế và giảm giá. Theo các bài công bố từ 2022 đến 2024, tính năng Chia tiền trong ví chia đều theo số người và yêu cầu nhập tay \[2\], \[3\].  
* Người ứng tiền phải tự tính, tự nhắn từng người và tự dò ai đã trả.  
* Nếu thống kê chi tiêu ghi theo số tiền đã trả, người ứng tiền cho cả nhóm bị ghi mức chi cao hơn phần chi thật, làm sai các phân tích dựa trên số liệu đó \[4\].

# **2\. Giải pháp**

1. Người lập hóa đơn chụp ảnh và mô tả cách chia bằng lời thường, ví dụ: Nam không uống bia, Lan ứng trước 200 nghìn, còn lại chia đều.  
2. Agent đọc hóa đơn, kiểm tra chéo các con số và hỏi lại đúng dòng nó không chắc.  
3. Agent chuyển lời mô tả thành quy tắc chia. Mã nguồn tính phần của từng người và kiểm tra tổng. Người lập hóa đơn duyệt.  
4. Hệ thống sinh một đường link. Mỗi người mở link, chọn tên, xem món và số tiền của mình, phản hồi nếu sai, rồi quét mã VietQR riêng để trả bằng ứng dụng ngân hàng hoặc ví bất kỳ. Người trả không cần cài thêm ứng dụng.  
5. Người trả bấm đã chuyển hoặc đã trả tiền mặt, người lập hóa đơn xác nhận. Mỗi người chỉ thấy phần của mình và tiến độ chung.  
6. Mỗi người có trang ghi số tiền đã trả và phần chi thật, kể cả người ứng tiền.

# **3\. Phân công giữa mô hình và mã nguồn**

Nguyên tắc: mô hình đề xuất, mã nguồn quyết định con số.

| Thành phần | Do | Cách thực hiện |
| :---- | :---- | :---- |
| Đọc hóa đơn | AI | Mô hình thị giác xử lý hóa đơn in nhiệt mờ, viết tay, tên món viết tắt; trả dữ liệu theo schema cố định |
| Kiểm tra chéo hóa đơn | Mã nguồn | Số lượng nhân đơn giá bằng thành tiền; tổng các dòng bằng tạm tính; tạm tính cộng phí, thuế, trừ giảm giá bằng tổng in. Dòng lệch bị gắn cờ không chắc |
| Hiểu cách chia | AI | Chuyển lời mô tả tự do thành quy tắc phân bổ từng món cho từng người. Tên người hoặc món không tồn tại thì hỏi lại |
| Tính tiền | Mã nguồn | Số nguyên đồng; phân bổ phí phục vụ, thuế, giảm giá theo tỷ lệ. Mô hình không làm phép tính |
| Kiểm tra phép chia | Mã nguồn | Tổng các phần bằng tổng hóa đơn; không ai âm; không món nào bị tính hai lần |
| Vòng sửa | AI và mã nguồn | Lỗi cụ thể được gửi lại cho mô hình, tối đa hai vòng, sau đó chuyển sang nhập tay |
| Chia lại theo phản hồi | AI và mã nguồn | Từng người phản hồi trên trang của mình, agent đề xuất thay đổi, người lập hóa đơn duyệt |
| Mã VietQR | Mã nguồn | Mỗi người một mã mang số tiền và nội dung chuyển khoản riêng |
| Bảo vệ ngân sách | Mã nguồn | Đếm chi phí theo ngày, vượt trần thì chuyển sang nhập tay; giới hạn tần suất |

Ảnh hóa đơn và lời người dùng được coi là dữ liệu không đáng tin: nội dung của chúng không được làm thay đổi hành vi của agent, và mọi thay đổi về số tiền đều qua bước kiểm tra và được người lập hóa đơn duyệt.

# **4\. Sản phẩm đầu ra và hình thức triển khai**

Sản phẩm chạy trực tuyến, dùng thử được ngay, không phụ thuộc môi trường cài đặt cục bộ \[1\].

* **Web dùng trên trình duyệt điện thoại:** người lập hóa đơn tải ảnh và nhập cách chia; từng thành viên mở link, chọn tên, xem chi tiết món, phản hồi và quét mã VietQR thật.  
* **Dịch vụ API lõi (REST):** nhận ảnh hóa đơn kèm mô tả cách chia bằng tiếng Việt, trả dữ liệu món có cấu trúc, bảng phân bổ đã qua kiểm tra, đường link thu tiền và mã VietQR cho từng người; hỗ trợ chia lại khi có phản hồi.  
* **Tài liệu API trực tuyến (OpenAPI):** giám khảo gửi yêu cầu thử với ảnh hóa đơn và kịch bản chia bất kỳ ngay trên trình duyệt.

# **5\. Kiểm chứng**

* **Bộ đo:** ít nhất 60 hóa đơn thật tại Việt Nam, mục tiêu 100; có thể bổ sung từ bộ MC-OCR 2021 \[10\]. Mỗi hóa đơn kèm đáp án do người soạn trước khi chạy hệ thống; ít nhất 40 hóa đơn có thêm lời mô tả cách chia. Khoảng 30% số ca được giữ riêng và chỉ chạy một lần để báo cáo.  
* **Chỉ số:** độ chính xác khi đọc món và giá; tỷ lệ hóa đơn chia đúng hoàn toàn đến từng đồng; tỷ lệ dòng sai được gắn cờ; số vòng sửa; thời gian và chi phí mỗi lần chia.  
* **Đối chứng:** agent đầy đủ so với một lần gọi mô hình thị giác; có và không có bước kiểm tra bằng mã nguồn; so sánh giữa các mô hình. Mỗi ca chạy ba lần và báo cả các ca sai.  
* **Người dùng thật:** khảo sát 30 đến 50 người về tần suất chia tiền; 10 đến 15 người dùng cho các bữa ăn thật. Đo thời gian từ lúc chụp hóa đơn đến lúc thu đủ tiền, so với cách nhắn tay. Mỗi lần người dùng sửa được lưu thành một ca kiểm thử mới.

# **6\. Khác biệt so với giải pháp hiện có**

* **So với Chia tiền trong ví \[2\], \[3\]:** chia theo món và theo lời mô tả thay vì chia đều; đọc hóa đơn thay vì nhập tay; ghi phần chi thật.  
* **So với các ứng dụng chia hóa đơn bằng AI \[6\], \[7\], \[8\], \[9\]:** agent tự kiểm tra chéo và sửa theo phản hồi của từng người, có số đo công khai về độ chính xác, và theo dõi được ai đã trả.  
* **Về định hướng:** MoMo mô tả bước tiếp theo của trợ lý là chuyển từ trả lời sang hành động thay người dùng \[5\]. Tạo yêu cầu thu tiền là hành động có rủi ro thấp vì agent không chi tiền của ai, nên phù hợp làm bước đầu.

# **7\. Giới hạn**

* Sản phẩm chưa tích hợp với ví MoMo. Việc tự động biết tiền đã về và nối với thống kê của Moni là hướng tích hợp.  
* Mô tả về tính năng Chia tiền dựa trên các bài công bố từ 2022 đến 2024, và nhận định về thống kê chi tiêu là suy luận từ mô tả công khai; cả hai cần được xác nhận trên ứng dụng hiện tại.  
* Mỗi lần sử dụng có giá trị nhỏ; tác động đến từ tần suất và số người dùng.  
* Đường link kèm mã QR là hình thức kẻ lừa đảo cũng dùng. Trang trả tiền phải hiện tên người lập hóa đơn và tên chủ tài khoản nhận.  
* Cỡ mẫu của bộ đo và của nhóm người dùng thử chỉ đủ để cho thấy xu hướng.

# **Tài liệu tham khảo**

\[1\] MoMo Tech Contest 2026\. Đề bài. [https\://techday.momo.vn/topic.html](https://techday.momo.vn/topic.html)

\[2\] MoMo. Ra mắt tính năng Chia tiền với QR. [https\://www\.momo.vn/tin-tuc/thong-bao/ra-mat-tinh-nang-chia-tien-voi-qr-nhan-tu-moi-app-6952](https://www.momo.vn/tin-tuc/thong-bao/ra-mat-tinh-nang-chia-tien-voi-qr-nhan-tu-moi-app-6952)

\[3\] MoMo (2022). Tha hồ ăn chơi cùng hội bạn, chia tiền đã có MoMo lo. [https\://www\.momo.vn/tin-tuc/thong-bao/tha-ho-an-choi-cung-hoi-ban-chia-tien-da-co-momo-2965](https://www.momo.vn/tin-tuc/thong-bao/tha-ho-an-choi-cung-hoi-ban-chia-tien-da-co-momo-2965)

\[4\] GenK (09/2026). MoMo AI Moni: lớp trợ thủ tài chính tiếng Việt xuyên suốt ứng dụng. [https\://genk.vn/momo-ai-moni-lop-tro-thu-tai-chinh-tieng-viet-xuyen-suot-ung-dung-ho-tro-giao-dich-24-7-va-bao-mat-99999-do-chinh-xac-16526092913431772.chn](https://genk.vn/momo-ai-moni-lop-tro-thu-tai-chinh-tieng-viet-xuyen-suot-ung-dung-ho-tro-giao-dich-24-7-va-bao-mat-99999-do-chinh-xac-16526092913431772.chn)

\[5\] Brands Vietnam (09/07/2026). Tech Talks: Head of AI & Data MoMo. [https\://www\.brandsvietnam.com/congdong/topic/tech-talks-head-of-ai-data-momo-va-hanh-trinh-dua-ai-tro-thanh-ban-nang-doanh-nghiep](https://www.brandsvietnam.com/congdong/topic/tech-talks-head-of-ai-data-momo-va-hanh-trinh-dua-ai-tro-thanh-ban-nang-doanh-nghiep)

\[6\] ChiaHoaDon. [https\://chiahoadon.com/blog/gioi-thieu-chia-hoa-don](https://chiahoadon.com/blog/gioi-thieu-chia-hoa-don)

\[7\] Share Money. [https\://sharemoney.io.vn/](https://sharemoney.io.vn/)

\[8\] Clust. [https\://joinclust.com/](https://joinclust.com/)

\[9\] Poco Biller (mã nguồn mở). [https\://github.com/huyngo92/poco-biller](https://github.com/huyngo92/poco-biller)

\[10\] Vietnamese Receipts MC-OCR 2021\. [https\://www\.kaggle.com/datasets/domixi1989/vietnamese-receipts-mc-ocr-2021](https://www.kaggle.com/datasets/domixi1989/vietnamese-receipts-mc-ocr-2021)