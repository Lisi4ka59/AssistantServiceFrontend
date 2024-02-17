import { TestBed } from '@angular/core/testing';

import { TelegramSenderService } from './telegram-sender.service';

describe('TelegramSenderService', () => {
  let service: TelegramSenderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TelegramSenderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
