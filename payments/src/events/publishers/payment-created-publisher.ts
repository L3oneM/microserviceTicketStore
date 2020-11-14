import {
  Subjects,
  Publisher,
  PaymentCreatedEvent,
} from '@lmtesttickets/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
