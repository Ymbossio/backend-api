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
exports.CreateTransferenciasDB = exports.mapTransferenciaDataToModel = void 0;
const transferencias_1 = require("../../model/transferencias");
const mapTransferenciaDataToModel = (data) => {
    return {
        transaction_id: data.transactionId,
        created_at: data.createdAt,
        finalized_at: data.finalizedAt,
        amount_in_cents: data.amountInCents,
        customer_email: data.customerEmail,
        currency: data.currency,
        payment_method_type: data.paymentMethodType,
        bin: data.bin,
        name: data.name,
        brand: data.brand,
        exp_year: data.expYear,
        card_type: data.cardType,
        exp_month: data.expMonth,
        last_four: data.lastFour,
        card_holder: data.cardHolder,
        is_three_ds: data.isThreeDS,
        unique_code: data.uniqueCode,
        current_step: data.currentStep,
        current_step_status: data.currentStepStatus,
        external_identifier: data.externalIdentifier,
        processor_response_code: data.processorResponseCode,
        token: data.token,
        installments: data.installments,
        status: data.status,
        status_message: data.statusMessage,
        shipping_address: data.shippingAddress,
        payment_source_id: data.paymentSourceId,
        payment_link_id: data.paymentLinkId,
        full_name: data.fullName,
        phone_number: data.phoneNumber,
        legal_id_type: data.legalIdType,
        legal_id: data.legalId,
        sent_at: data.sentAt,
        timestamp: data.timestamp,
        checksum: data.checksum,
        environment: data.environment,
        reference: data.reference
    };
};
exports.mapTransferenciaDataToModel = mapTransferenciaDataToModel;
const CreateTransferenciasDB = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const mappedData = (0, exports.mapTransferenciaDataToModel)(data);
        const transfer = yield transferencias_1.Transferencia.create(mappedData);
        return transfer;
    }
    catch (error) {
        throw error;
    }
});
exports.CreateTransferenciasDB = CreateTransferenciasDB;
