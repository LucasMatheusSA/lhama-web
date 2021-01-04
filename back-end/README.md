## Upload Avatar Backend

Upload a file to a local folder and make it available through a public url. 

An interface to upload files to this backend service can be found [here](https://github.com/giuliana-bezerra/upload-avatar-frontend).

## Getting Started
```
$ npm start
```

## API

[POST] Avatar
```
> POST /api/avatar/upload
```

Input:
```
Form Data using key "avatar".
```

Output:
```
{id: "String", url: "String"}
```

[GET] Avatar
```
> GET /uploads/{avatarId}
```

Output:
```
The binary image.
```
 


https://medium.com/desenvolvimento-com-node-js/upload-de-imagem-com-o-node-js-3c0fff6c6c61
https://github.com/giuliana-bezerra/upload-avatar-backend       


https://www.npmjs.com/package/xml2js
https://attacomsian.com/blog/nodjs-edit-xml-file
https://tutorialedge.net/nodejs/editing-xml-files-with-nodejs/
https://stackoverflow.com/questions/38244545/node-js-remove-root-node-from-resulting-xml-using-xml2js/46054858
https://stackoverflow.com/questions/59389686/add-comment-to-xml-with-nodejs































