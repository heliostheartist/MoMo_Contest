# MoMo Contest

Tài liệu dự án được sắp xếp trong [`docs/`](docs/README.md). Bắt đầu từ [tổng quan sản phẩm](docs/product/overview.md).

## Quy tắc làm việc

### Đặt tên nhánh

Dùng chữ thường, kebab-case, theo dạng `<loại>/<mô-tả-ngắn>`:

- `feat/<mo-ta>`: thêm tính năng
- `fix/<mo-ta>`: sửa lỗi
- `docs/<mo-ta>`: cập nhật tài liệu
- `refactor/<mo-ta>`: chỉnh cấu trúc mã, không đổi hành vi
- `chore/<mo-ta>`: việc bảo trì khác

Ví dụ: `feat/receipt-upload`, `docs/branch-commit-rules`.

### Nội dung commit

Theo dạng `<loại>: <mô tả ngắn>`; dùng cùng các loại ở trên. Mô tả bằng động từ, nêu đúng thay đổi và không kết thúc bằng dấu chấm.

Ví dụ: `feat: thêm tải ảnh hóa đơn`, `docs: bổ sung quy tắc commit`.

## Quy tắc tính tiền và lưu trữ

### Làm tròn và phân bổ

- Mọi phép tính tiền dùng số nguyên đồng (VND); không dùng số thực dấu phẩy động.
- Khi chia một khoản nguyên đồng theo tỷ trọng, tính phần chính xác bằng số nguyên, lấy phần nguyên xuống trước, rồi phân các đồng còn dư theo thứ tự phần dư lớn nhất. Nếu phần dư bằng nhau, ưu tiên khóa thành viên ổn định theo tên chuẩn hóa tăng dần; không dùng thứ tự thành viên trong đầu vào. Với phân bổ theo món, xử lý từng `item_index` riêng và dùng cùng quy tắc khóa thành viên.
- Chia đều và chia theo số phần cũng dùng quy tắc số dư lớn nhất. Với `exact`, các số tiền nhập phải cộng đúng thành tiền món; nếu không khớp thì báo lỗi, không tự sửa.
- Phân bổ theo thứ tự: giảm giá, phí phục vụ, thuế. Mỗi khoản được chia theo tỷ trọng phần món của thành viên (hoặc chia đều khi `extra_charges_split = equal`). Tổng mỗi khoản phân bổ phải bằng đúng khoản trên hóa đơn; tổng `gross` phải bằng tổng hóa đơn. Trừ tiền ứng trước sau cùng; số dư âm chỉ biểu thị thành viên đã ứng nhiều hơn phần phải chịu.

### Cơ sở dữ liệu bền

- Dùng PostgreSQL lưu các bản ghi hóa đơn, quy tắc chia, kết quả phân bổ và trạng thái thanh toán. Kết nối tới cơ sở dữ liệu PostgreSQL qua cấu hình môi trường; không ghi thông tin kết nối hoặc mật khẩu vào mã nguồn.
- Sao lưu cơ sở dữ liệu hằng ngày và kiểm tra khả năng khôi phục trước khi vận hành công khai.
- Tệp ảnh hóa đơn là dữ liệu tạm, xóa sau khi đọc theo chính sách dữ liệu của dự án; không đưa ảnh vào bản sao lưu cơ sở dữ liệu.

## Làm việc với agent

Hướng dẫn dành cho agent nằm trong [`AGENTS.md`](AGENTS.md).
