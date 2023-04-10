"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const fastify_2 = require("fastify");
const cors_1 = __importDefault(require("@fastify/cors"));
const client_1 = require("@prisma/client");
const chatGpt_1 = require("./components/chatGpt");
const prisma = new client_1.PrismaClient();
const fastify = (0, fastify_1.default)();
const server = (0, fastify_2.fastify)();
async function kusa() {
    ;
    (async () => {
        await fastify.register(cors_1.default, {});
        fastify.post('/data', (req, reply) => {
            const data = req.body;
            console.log(data);
            const fmail = data.mail;
            const fpassword = data.password;
            //const fname: string = data.name
            const ffaculty = data.faculty;
            console.log('postで受け取ることはできた');
            return main(fmail, fpassword, ffaculty, data);
        });
        //テキストを受け取りchatGPTAPIに投げる
        fastify.post('/text', async (req, reply) => {
            const text = req.body;
            console.log(text.InputText);
            const answer = await (0, chatGpt_1.chatGpt)(text.InputText);
            if (answer) {
                console.log(answer);
                //await returnText(answer)
                console.log(5);
            }
            console.log(typeof answer);
            reply.send(answer);
        });
        await fastify.listen({ port: 8080 });
        console.log(`Server listening at ${8080}`);
    })();
    //return main()
}
/*
async function returnText(answer: string) {
  fastify.get('/text', (req, reply) => {
    console.log('getできた')
    return answer
  })
}
*/
async function main(fmail, fpassword, 
//fname: string,
ffaculty, data) {
    const result = await prisma.user.create({
        data: {
            mail: fmail,
            //name: fname,
            password: fpassword,
            faculty: ffaculty,
        },
    });
    console.log(result);
    console.log('mainは回った');
    //return response()
}
kusa()
    .catch((e) => console.error(e))
    .finally(async () => {
    console.log('これでもう終わる！');
    await prisma.$disconnect();
});
