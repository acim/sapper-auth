# sapper-auth

Sapper example application with JWT authentication

After successful login both header with token and cookie with token will be returned because in the following requests which may be rendered on the server JWT can't be sent by authorization header.