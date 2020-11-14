import {
  OrderCancelledEvent,
  Publisher,
  Subjects,
} from '@lmtesttickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
