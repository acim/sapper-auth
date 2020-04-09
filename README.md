# sapper-auth

This repository is not maintained anymore. If you are looking for more advanced JWT authentication in Sapper,
please check [Oxeye](https://github.com/acim/oxeye) project.

Sapper example application with JWT authentication

After successful login both header with token and cookie with token will be returned because in the following requests which may be rendered on the server JWT can't be sent by authorization header.
