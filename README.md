## REACT LÀ GÌ
React là thư viện JavaScript phổ biến nhất để xây dựng giao diện người dùng (UI). Nó cho tốc độ phản hồi tuyệt vời khi user nhập liệu bằng cách sử dụng phương pháp mới để render trang web.
Components của công cụ này được phát triển bởi Facebook. Nó được ra mắt như một công cụ JavaScript mã nguồn mở vào năm 2013.

** Tại sao sử dụng React?

1.Dễ sử dụng
React là một thư viện GUI nguồn mở JavaScript tập trung vào một điều cụ thể; hoàn thành nhiệm vụ UI hiệu quả. Nó được phân loại thành kiểu “V” trong mô hình MVC (Model-View-Controller).

2.Viết component dễ dàng hơn
React component dễ viết hơn vì nó sử dụng JSX, mở rộng cú pháp tùy chọn cho JavaScript cho phép bạn kết hợp HTML với JavaScript.
JSX là một sự pha trộn tuyệt vời của JavaScript và HTML. Nó làm rõ toàn bộ quá trình viết cấu trúc trang web. Ngoài ra, phần mở rộng cũng giúp render nhiều lựa chọn dễ dàng hơn.
JSX có thể không là phần mở rộng cú pháp phổ biến nhất, nhưng nó được chứng minh là hiệu quả trong việc phát triển components đặc biệt hoặc các ứng dụng có khối lượng lớn.

3.Hiệu suất tốt hơn với Virtual DOM
React sẽ cập nhật hiệu quả quá trình DOM (Document Object Model – Mô hình đối tượng tài liệu). Như bạn có thể biết, quá trình này có thể gây ra nhiều thất vọng trong các dự án ứng dụng dựa trên web. May mắn là React sử dụng virtual DOMs, vì vậy bạn có thể tránh được vấn đề này.
Công cụ cho phép bạn xây dựng các virtual DOMs và host chúng trong bộ nhớ. Nhờ vậy, mỗi khi có sự thay đổi trong DOM thực tế, thì virtual sẽ thay đổi ngay lập tức.
Hệ thống này sẽ ngăn DOM thực tế để buộc các bản cập nhật được liên tục. Do đó, tốc độ của ứng dụng sẽ không bị gián đoạn.


# Hướng dẫn cài đặt React
Đây là hướng dẫn cài đặt React trong môi trường phát triển của bạn.

## Yêu cầu tiên quyết
Trước khi cài đặt React, bạn cần đảm bảo máy tính của bạn đã cài đặt các yêu cầu tiên quyết sau:
- Node.js: Phiên bản 10 trở lên
- npm: Phiên bản 6 trở lên (được cài đặt kèm theo Node.js)

## Bước 1: Tạo một dự án React mới
Đầu tiên, hãy tạo một thư mục mới cho dự án React của bạn và di chuyển vào thư mục đó:
```bash
mkdir my-react-app
cd my-react-app
```
## Bước 2: Cài đặt React và các gói phụ thuộc
`npm install react react-dom`

