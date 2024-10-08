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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTransferServices = void 0;
const RepTransferencias_1 = require("../repositories/RepTransferencias");
const createTransferServices = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Llamar a la función para crear la transferencia en la base de datos
        const transferencia = yield (0, RepTransferencias_1.CreateTransferenciasDB)(data);
        return transferencia;
    }
    catch (error) {
        console.error('Error en CreateTransferenciasDB:', error);
        throw error;
    }
});
exports.createTransferServices = createTransferServices;
