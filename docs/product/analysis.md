# **Thay đổi so với bản đề xuất cũ**

| Điểm | Bản cũ | Bản chuẩn | Lý do |
| :---- | :---- | :---- | :---- |
| Thanh toán | Ví và mã QR giả lập | Mã VietQR thật | Đề cấm bản trình diễn và bản mẫu thử |
| Biết ai đã trả | Tự khớp tiền về theo mã trong QR | Người trả bấm, người lập xác nhận; thông báo ngân hàng là mở rộng | Chưa có nguồn báo tiền về đã kiểm chứng |
| Vòng kiểm tra | Chỉ soát phép chia | Soát thêm số liệu trên hóa đơn | Hóa đơn đọc sai vẫn chia khớp |
| Mức tin cậy | Mô hình tự báo | Kiểm tra chéo số học | Số mô hình tự báo không đáng tin |
| Trạng thái thu tiền | Hiện cho cả nhóm | Mỗi người thấy phần mình và tiến độ chung | Tránh bêu tên người chưa trả |
| Bộ đo | Khoảng 100 hóa đơn | Ít nhất 60, mục tiêu 100 | Khớp với sức làm trong mười ngày |
| Người dùng thử | 20 đến 30 người trong một tuần | 10 đến 15 người, thêm khảo sát 30 đến 50 người | Khớp với thời gian còn lại |
| Bài nộp | Thiếu hướng dẫn một trang, README | Có người làm và ngày làm | Thể lệ yêu cầu |

# **Phản biện và cách xử lý**

Ba vòng phản biện độc lập theo vai giám khảo, kỹ sư và người soát rủi ro.

| Phản đối | Cách xử lý |
| :---- | :---- |
| AI chỉ là lớp vỏ mỏng: một lần gọi mô hình cũng đọc được hóa đơn | Agent nhiều bước; bảng so sánh với một lần gọi mô hình trên cùng bộ đo |
| Ý tưởng chia hóa đơn đã có nhiều | Chọn một điểm khác biệt và đặt ở giây đầu của video, không liệt kê năm điểm |
| Tác động nhỏ và thiếu số | Khảo sát 30 đến 50 người; đo thời gian thu đủ tiền |
| Hai phút giám khảo tự thử có thể hỏng | Ảnh mẫu bấm sẵn, kết quả trong khoảng mười giây, luôn có đường nhập tay |
| Khóa mô hình hết hạn mức khi không được sửa | Trần chi phí theo ngày, ghim phiên bản, nơi chạy không tự ngủ, kiểm tra từ bên ngoài |
| Link công khai gọi mô hình có phí | Giới hạn tần suất và dung lượng ảnh; hết ngân sách thì chuyển nhập tay |
| Tiền sai âm thầm do làm tròn và thứ tự phân bổ | Chốt quy tắc bằng văn bản; kiểm thử theo tính chất |
| Link kèm mã QR giống hình thức lừa đảo | Hiện tên người lập hóa đơn và lời nhắc; hóa đơn tự hết hạn; giới hạn số hóa đơn và số tiền |
| Ảnh hóa đơn, số tài khoản, tên bạn bè là dữ liệu cá nhân | Xin đồng ý, xóa ảnh sau khi đọc, khai trong README |
| Người trả tiền mặt không có đường đi | Nút đã trả tiền mặt, người lập hóa đơn xác nhận |

Điểm chưa thống nhất: vai giám khảo đề nghị cắt định tuyến mô hình và MCP vì không thêm giá trị cho người dùng; vai kỹ sư xếp chúng vào phần mở rộng. Nhóm giữ cả hai ở đợt cuối, sau khi lõi và bộ đo đã xong.

# **Quy tắc tính tiền**

* Tính bằng số nguyên đồng. Phần lẻ được phân theo phương pháp số dư lớn nhất.  
* Thứ tự phân bổ: giảm giá trước, rồi phí phục vụ, rồi thuế; mỗi khoản theo tỷ lệ phần món của từng người.  
* Khoản ứng trước được trừ sau cùng và có thể làm một người được nhận lại tiền.  
* Kiểm thử theo tính chất: tổng các phần luôn bằng tổng hóa đơn; không ai âm ngoài trường hợp ứng trước; đổi thứ tự người không đổi kết quả.

# **Vận hành tám ngày sau hạn nộp**

* Ghim tên và phiên bản mô hình. Kiểm tra lịch ngừng hỗ trợ của nhà cung cấp đến 11/12.  
* Nạp sẵn hạn mức đủ cho giám khảo thử nhiều lần; đặt trần chi phí theo ngày.  
* Nơi triển khai không tự ngủ khi vắng người. Dữ liệu lưu trên ổ bền, sao lưu hằng ngày.  
* Một dịch vụ bên ngoài kiểm tra định kỳ và báo về điện thoại khi lỗi.  
* Trước 01/12 thử tắt khóa mô hình: đường nhập tay vẫn phải đi hết luồng.

# **Chống lạm dụng và dữ liệu cá nhân**

* Mã của link dài và ngẫu nhiên. Hóa đơn tự hết hạn. Có nút báo cáo.  
* Trang trả tiền hiện tên người lập hóa đơn, tên chủ tài khoản nhận và lời nhắc: chỉ trả nếu bạn có mặt trong bữa này.  
* Sản phẩm không giữ tiền của ai: tiền đi thẳng từ người trả đến tài khoản người lập hóa đơn.  
* Dữ liệu thu: ảnh hóa đơn, tên gọi trong nhóm, số tài khoản của người lập hóa đơn. Người lập hóa đơn đồng ý trước khi tải ảnh và được báo rằng ảnh gửi tới dịch vụ mô hình bên ngoài.  
* Ảnh bị xóa sau khi đọc, trừ ảnh được người gửi đồng ý đưa vào bộ đo.  
* Chữ trong ảnh và lời người dùng là dữ liệu, không phải chỉ dẫn. Bộ thử có hóa đơn in sẵn câu lệnh lạ.

# **Điểm chưa kiểm chứng**

* Chia tiền của MoMo hiện chỉ chia đều và nhập tay: dựa trên bài công bố từ 2022 đến 2024\.  
* Thống kê chi tiêu ghi theo số tiền đã trả: suy luận từ mô tả công khai về Moni.  
* Các ứng dụng chia hóa đơn ngoài ví không theo dõi việc đã trả: mới đọc trang giới thiệu, chưa dùng thử.  
* Các điểm pháp lý về dữ liệu cá nhân và về việc sinh mã VietQR cho người khác chưa được chuyên gia xác nhận.