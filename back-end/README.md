## Getting Started
```
$ npm install
```

```
$ npm start
```

## API

### [GET] -> Busca imagem

Endpoint:
```
> GET /images/"Nome de uma imagem"
```

Response:
```
Retorna a imagem em binario.
```


### [POST] -> Lista imagens da pasta repositorio 

Endpoint:
```
> POST /api/listImgs
```

Request:
```
{
    "pag": 2,   // Número da página
    "qtd": 5    // Quantidade de itens por página 
}
```

Response:
```
{
    "list": [
        "Nome_do_arquivo.jpg",
        "Nome_do_arquivo.jpg",
        "Nome_do_arquivo.jpg",
        "Nome_do_arquivo.jpeg",
        "Nome_do_arquivo.jpg",
    ],
    "all": 28,      // Quantidade de elementos no total
    "first": 10,    // Número do primeiro elemento da página
    "last": 15      // Número do ultimo elemento da página
}
```

### [GET] -> Retorna listagem de templates

Endpoint:
```
> GET /api/listTemp
```

Response:
```
{
    "templateFields": {
        "CNH": [
            { 
                "label": "NOME", 
                "desc": "Nome", 
                "type": "text" 
            },
            [...]           // Listagem de templates e seus campos
    },
    "list": [
        [...]                   // Lista das files de templates
    ]
}
```

### [POST] -> Salva campos da imagem no xml  

Endpoint:
```
> POST /api/saveFields
```

Request:
```
{
    "file": "teste",        // Nome do arquivo
    "data": {               // Estrutura do xml
        "teste":[
            {
                "testoso1":
                [
                    "teste1"
                ],
                 "testoso2":
                [
                    "teste2"
                ],
                 "testoso3":
                [
                    "teste3"
                ]
            }
        ]
    }
}
```

Response:
```
{
    "status": 200,
    "message": "Update do arquivo [./public/images-xml/teste.xml] feito com sucesso."
}
```

## Extra

### Upload de imagens (não finalizado)

[POST] 
```
> POST /api/lhama/images
```

Input:
```
Form Data usar chave "lhama".
```

Output:
```
{id: "String", url: "String"}
```

