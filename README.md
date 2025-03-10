user : test@test.ua pass: 11111111

1) create .env
PORT=3001
db_host=localhost
db_port=27017
db_name=delabspace
db_user=
db_password=

MODE=production

2) create folder for imgs
3) Re-New SSL
certbot --nginx renew
