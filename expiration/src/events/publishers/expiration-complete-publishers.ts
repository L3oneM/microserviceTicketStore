import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@lmtesttickets/common';

export class ExpirationCompletePublisher extends Publisher<
  ExpirationCompleteEvent
> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
