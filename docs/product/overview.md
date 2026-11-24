# **Trợ lý tiền chung của nhóm**

Bản chuẩn ngày 24/11/2026 cho MoMo Tech Contest 2026\. Đăng ký trước 23:59 ngày 27/11. Nộp trước 23:59 ngày 03/12. Sản phẩm phải chạy đến hết 11/12.

# **Tóm tắt**

Người ứng tiền chụp hóa đơn và nói cách chia bằng lời thường. Agent đọc hóa đơn, tự kiểm tra chéo, hỏi lại chỗ không chắc và tính phần của từng người. Mỗi người mở một đường link, xem phần mình và quét mã VietQR riêng để trả. Mô hình ngôn ngữ đọc và hiểu; mọi con số do mã nguồn tính và kiểm tra.

# **Quyết định đã chốt**

* **Lõi AI:** một agent nhiều bước (đọc, kiểm tra chéo, hỏi lại, chia lại theo phản hồi), không phải một lần gọi mô hình.  
* **Thanh toán:** mã VietQR thật, quét được bằng ứng dụng ngân hàng. Không dùng nút giả lập.  
* **Xác nhận đã trả:** người trả bấm đã chuyển, người lập hóa đơn xác nhận. Thông báo tự động từ ngân hàng là phần mở rộng.  
* **Riêng tư:** mỗi người chỉ thấy phần của mình và tiến độ chung.  
* **Vận hành:** trần chi phí, giới hạn tần suất, ghim phiên bản mô hình, nơi chạy không tự ngủ.  
* **Bằng chứng:** bảng so sánh agent đầy đủ với một lần gọi mô hình trên cùng bộ hóa đơn thật.

# **Tài liệu liên quan**

* [Đề bài](../contest/brief.md): chủ đề, tiêu chí chấm, mốc thời gian.  
* [Yêu cầu dự thi](../contest/requirements.md): yêu cầu sản phẩm, bài nộp, câu hỏi gửi ban tổ chức.  
* [Đề xuất](proposal.md): bản đề xuất đề tài đầy đủ, kèm tài liệu tham khảo.  
* [Phân tích](analysis.md): điểm thay đổi so với bản cũ, phản biện, vận hành, rủi ro.  
* [Kế hoạch](../planning/plan.md): lịch mười ngày và việc cả nhóm; bảng việc chi tiết của [SE](../planning/team/se.md), [DS1](../planning/team/ds1.md), [DS2](../planning/team/ds2.md).

# **Việc hôm nay**

1. Đăng ký dự thi.  
2. Mở ứng dụng MoMo kiểm tra: Chia tiền có chia theo món không, Moni ghi một khoản ứng cho nhóm thế nào.  
3. Chốt schema chung và quy tắc tính tiền bằng văn bản.  
4. Cả nhóm thu ảnh hóa đơn thật, có sự đồng ý của người gửi.