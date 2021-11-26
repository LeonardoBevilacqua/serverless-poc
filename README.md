# Serverless PoC

## Sobre

Aplicação de exemplo criada para utilizar serviços serverless da AWS. Serviços utilizados:

* Aurora Serverless;
* Lambda functions;
* EventBridge.

Outros serviços:

* CloudFormation;
* CloudFront;
* ApiGateway;
* S3.

## Api

A api foi construída em javascript, utilizando a ferramenta [Serverless](https://www.serverless.com/framework/docs) para a geração da estrutura inicial.


Deve realizar a instalação do serverless via NPM: `npm install -g serverless`
É possível instalar de outras formas de acordo com a [documentação](https://www.serverless.com/framework/docs/getting-started).

Em seguida, a criação da api: `sls create -t aws-nodejs -p web-api`. Onde `-t` é o valor representando o _template_ a ser usado, no caso _nodejs_, e `-p` o diretório do projeto.

Após a criação, acesse o diretório da api e execute os comandos: `npm init -y` para iniciar o node e `npm i --save-dev serverless-offline` para adicionar a possibilidade de realizar o teste local.

Após a finalização de instalação das dependências, basta configurar o `serverless.yml` e criar as funções dentro do `handler.js`.

Para realizar o teste em ambiente local, basta executar o comando `sls offline start --skipCacheInvalidation` e para realizar o envio da aplicação para a AWS, deve realizar a configuração das informações da AWS e executar o comando `sls deploy`.
    
**Referência:** [A crash course on Serverless with AWS - Building APIs with Lambda and Aurora Serverless](https://dev.to/adnanrahic/a-crash-course-on-serverless-with-aws---building-apis-with-lambda-and-aurora-serverless-3fn3)

## Client

Criado utilizando svelte e UIKit. Hospedando no serviço S3 e distribuindo pelo CloundFront.

Para a execução local, executar o comando `npm run dev`.

Para realizar o envio para a AWS, executar o comando `npm run build` e copiar o conteúdo da pasta `public` para um bucket do S3.