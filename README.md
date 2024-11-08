# nginx
Ghi chú học Nginx năm 2024.

# Nginx UI
[Nginx UI](https://nginxui.com/) : Open source tools to manage nginx

### các lệnh cần thiết để quản lý

- kiểm tra cú pháp file cấu hình có bị lỗi hay không
```sh
$ sudo nginx -t
```
- reload lại file cấu hình

```sh
$ sudo nginx -s reload
```

- mở file log

```sh
$ sudo nginx -s reopen
```

### danh sách file và thư mục quan trọng

- `/etc/nginx/nginx.conf`: file config chính
- `/etc/nginx/conf.d`: thư mục chưa các file config của riêng bạn
- `/etc/nginx/sites-available`: thư mục chưa các file config VirtualHost, cho phép chúng ta cấu hình riêng biệt cho từng website
- `/etc/nginx/sites-available/default`: file config Virtual Hosts mặc định

### documents

- [installation](https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-18-04)
- [Nginx Tutorial](https://www.devdungeon.com/content/nginx-tutorial)
- [Nginx Tutorial Step by Step with Examples](https://knockdata.github.io/Nginx-Tutorial-Step-by-Step-with-Examples/)
- [nginx from vinasupport.com](https://vinasupport.com/web-server/nginx/)
- [7 Nginx Rewrite Rule Examples with Reg-Ex and Flags](https://www.thegeekstuff.com/2017/08/nginx-rewrite-examples/)
- [Fordward Proxy và Reverse Proxy là gì và chúng khác nhau như thế nào?](https://viblo.asia/p/fordward-proxy-va-reverse-proxy-la-gi-va-chung-khac-nhau-nhu-the-nao-924lJpobKPM)
