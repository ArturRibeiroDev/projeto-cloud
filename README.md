# Projeto Cloud — Node.js + Express

Segundo projeto de Desenvolvimento de Software em Nuvem.

## Rodar localmente

```bash
npm install
npm start
```

Acesse http://localhost:3000, http://localhost:3000/sobre e http://localhost:3000/contato.

## Rotas

- `GET /` — página inicial
- `GET /sobre` — request-response
- `GET /contato` — informações do trabalho

## AWS EC2 (Amazon Linux 2023)

No EC2 Instance Connect, usando o usuário padrão ec2-user:

```bash
sudo dnf install -y git nodejs npm
node -v
npm -v
git --version
git clone https://github.com/SEU-USUARIO/projeto-cloud-node.git
cd projeto-cloud-node
npm ci
npm start
```

No grupo de segurança da EC2, permitir TCP 3000 para a demonstração. Acessar http://IP-PUBLICO:3000. Ao finalizar, remover a regra e encerrar a instância, conforme os requisitos da conta.

## Railway

New Project → Deploy from GitHub repo → selecionar repositório → Deploy → Settings → Networking → Generate Domain. O `npm start` é executado por padrão, e a aplicação lê `process.env.PORT`.

## Enunciado e evidências

Capturar prints das três rotas, Git clone/commit/push e repositório, EC2 com IP público, Railway com domínio público, e entregar no AVA.
# projeto-cloud
