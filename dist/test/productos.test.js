"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const servers_1 = require("../server/servers");
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../index"));
const database_1 = __importDefault(require("../config/database"));
let server;
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    yield database_1.default.sync({ force: true }); // Sincroniza la base de datos
    yield (0, servers_1.startServer)(); // Asegúrate de que el servidor esté en marcha
}));
afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, servers_1.stopServer)(); // Detén el servidor
    yield database_1.default.close(); // Cierra la conexión con la base de datos
}), 20000);
describe('GET /products', () => {
    test('should respond with a 200 status code', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(index_1.default).get('/productos');
        expect(response.status).toBe(200);
    }));
});
